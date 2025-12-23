#!/bin/zsh

# =========================================================
# Spinner Library for Zsh
# 사용법: source ./spinner.zsh
# =========================================================

# --- 내부 변수 (사용자가 건드릴 필요 없음) ---
_SP_LOG="/tmp/sp_log_$$"
_SP_PROG="/tmp/sp_prog_$$"
_SP_PID=""

# 컬러 및 커서 정의
_C_RESET="\033[0m"
_C_BOLD="\033[1m"
_C_GREEN="\033[32m"
_C_BLUE="\033[34m"
_C_CYAN="\033[36m"
_C_HIDE="\033[?25l"
_C_SHOW="\033[?25h"
_C_CLEAR="\033[K"

# --- [API 1] 시작: spinner.start ---
spinner.start() {
    # 초기화
    : > "$_SP_LOG"
    echo "0" > "$_SP_PROG"

    # 커서 숨김
    printf "${_C_HIDE}"

    # UI 그리기 루프를 백그라운드(&)로 실행
    (
        local last_line=0
        local spinner_chars="◜◠◝◞◡◟"
        local idx=1

        while true; do
            # 1. 진행률 읽기
            local pct=$(cat "$_SP_PROG" 2>/dev/null || echo 0)

            # 2. 로그 출력 처리
            local current_lines=$(wc -l < "$_SP_LOG")
            if [[ $current_lines -gt $last_line ]]; then
                # 로딩바 지우기
                printf "\r${_C_CLEAR}"

                # 새 로그 출력
                sed -n "$((last_line + 1)),${current_lines}p" "$_SP_LOG" | while read line; do
                    echo "${_C_BLUE}==>${_C_RESET} $line"
                done

                last_line=$current_lines
            fi

            # 3. 로딩바 그리기
            local bar_len=30
            local filled=$(( bar_len * pct / 100 ))
            local empty=$(( bar_len - filled ))
            local bar_fill=$(printf "%0.s#" {1..$filled})
            local bar_empty=$(printf "%0.s." {1..$empty})
            local spin=${spinner_chars:((idx++ % 6)):1}

            # 상태 메시지
            local msg="Processing..."
            [[ $pct -eq 100 ]] && msg="Complete!"

            # 맨 아랫줄 출력 (줄바꿈 없음)
            printf "\r${_C_CYAN}[${spin}]${_C_RESET} [${_C_GREEN}${bar_fill}${_C_RESET}${bar_empty}] ${_C_BOLD}${pct}%%${_C_RESET} - ${msg}"

            sleep 0.1
        done
    ) &

    # 백그라운드 UI 프로세스 ID 저장
    _SP_PID=$!
}

# --- [API 2] 로그 기록: spinner.log TAG MESSAGE ---
spinner.log() {
    echo "[$1] $2" >> "$_SP_LOG"
}

# --- [API 3] 진행률 업데이트: spinner.progress 숫자 ---
spinner.progress() {
    echo "$1" > "$_SP_PROG"
}

# --- [API 4] 종료: spinner.stop ---
spinner.stop() {
    # 1. 진행률 100% 강제
    spinner.progress 100
    sleep 0.5

    # 2. 백그라운드 UI 종료
    if [[ -n "$_SP_PID" ]]; then
        kill "$_SP_PID" 2>/dev/null
        wait "$_SP_PID" 2>/dev/null
    fi

    # 3. 정리
    printf "\r${_C_CLEAR}"
    printf "${_C_SHOW}"
    rm -f "$_SP_LOG" "$_SP_PROG"
}

# 스크립트 강제 종료(Ctrl+C) 시 정리
trap spinner.stop EXIT INT TERM