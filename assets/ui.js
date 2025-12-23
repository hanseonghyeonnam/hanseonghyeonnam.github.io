/* Published by hanseonghyeonnam */

// Loads our library :D
import url_getter, { VirtualDomElement, ClassLoader, CheckJqueryStatus } from "https://okmpl.kro.kr/_/lib/url.js";

if (!CheckJqueryStatus()) {
  return alert("Sorry, something went wrong. Please reload the site!");
}

const mainElememt = ClassLoader("ui");

export default class ui {
  static alert(msg, {
    tick: "3ms",
  }) {
    const builder = VirtualDomElement(mainElement.UID);
    console.log(builder);
  }
}

















