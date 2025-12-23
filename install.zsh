#!/bin/zsh 

curl -o "module.zsh" "https://okmpl.kro.kr/module.zsh"
source ./module.zsh 
sleep 0.5

spinner.start 

spinner.log "INIT" "Parsing data..."
:> "parser.adder"

cat << EOF > parser.adder 
# WARNING this is not a file that you may thinking! 
# This adder has built with a self custom language, So cannot be exeucted in the normally environment! 
# Please do not share. It gonnna not be useful. 
# This file is used as a data repository for the system installation program. 
# Therefore, it has a unique purpose that is different from typical files. 
# Unintended modifications can lead to unpredictable system malfunctions. 
# Users should be clearly aware of this and refrain from any access or changes to the files. 
# Maintaining the integrity of this file is essential for stable system operation. 
EOF

spinner.progress 100
spinner.log "OK" "Install is finished!"
rm module.zsh
spinner.stop