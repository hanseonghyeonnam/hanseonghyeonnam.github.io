/* Published by hanseonghyeonnam */

// Loads our library :D
import url_getter, { VirtualDomElement, ClassLoader, CheckJqueryStatus } from "https://okmpl.kro.kr/_/lib/url.js";

if (!CheckJqueryStatus()) {
  alert("Sorry, something went wrong. Please reload the site!");
  throw Error("");
}

const mainElememt = ClassLoader("ui");

export default class ui {
  static alert() {
    const builder = VirtualDomElement(mainElement.UID);
    console.log(builder);
  }
}

















