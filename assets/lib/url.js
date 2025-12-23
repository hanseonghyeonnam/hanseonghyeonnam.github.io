

function call() {

}

function verify(VDE_Instance) {
  const instance = VDE_Instance["__UI__"] ?? [];
  if (!instance) {
    return false;
  }

  const uid = VDE_Instance["__UI__"]["uid"];
  const uid_auth = VDE_Instance["__UI__"]["uid_auth"];

  const md5_uid = VDE_Instance["__UI__"]["auth"]["hash"];
  const md5_uid_auth = VDE_Instance["__UI__"]["auth"]["hash_auth"];

  // md5 make

  const [
    uid_md5,
    uid_auth_md5
  ] = [
    md5(uid, null, true),
    md5(uid_auth, null, true)
  ];

  if (
    uid_md5 !== md5_uid ||
    uid_auth_md5 !== md5_uid_auth
  ) {
    return false;
  }

  return true;
}

export default function url_getter () {};

export function VirtualDomElememt(uid) {

  if (!this["md5"]) {
    throw Error("md5 load failed.");
  }

  const parent = $("#" + uid);
  const uid_auth = crypto.randomUUID() + "{}" + uid;

  const child = `<div UI_ATTR="${uid}has(UI)-auth${uid_auth}" id="${uid}"></div>`;
  parent.append(child);

  return {
    call: call,
    verify: verify,
    __UI__: {
      uid: uid,
      uid_auth: uid_auth,
      provider: "url.js",
      auth: {
        provider: "url.js",
        hash: md5(uid, null, true),
        hash_auth: md5(uid_auth, null, true),
        hash_type: "md5",
      }
    }
  }
};

export function ClassLoadder() {
  const uid = crypto.randomUUID();

  $(`<div id=${uid}></div>`).append("body");

  return {
    UID: uid,
  };
};

export function CheckJqueryStatus() {
  if (this["$"] || window["$"]) {
    return true;
  } else return false;
};
