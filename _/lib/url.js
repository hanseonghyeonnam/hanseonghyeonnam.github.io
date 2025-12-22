// import url_getter, { VirtualDomElement, ClassLoader, CheckJqueryStatus } from "https://okmpl.kro.kr/_/lib/url.js";
export default function url_getter () {};
export function VirtualDomElememt() {
  return {
    UID: "",
  };
};

export function ClassLoadder() {
  return {
    UID: ""
  };
};

export function CheckJqueryStatus() {
  if (this["$"] || window["$"]) {
    return true;
  } else return false;
};
