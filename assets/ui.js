/* Published by hanseonghyeonnam */

// Loads our library :D
import url_getter, { VirtualDomElement, ClassLoader, CheckJqueryStatus } from "https://okmpl.kro.kr/assets/lib/url.js";

if (!CheckJqueryStatus()) {
  alert("Sorry, something went wrong. Please reload the site!");
  throw Error("");
}

export default class ui {
  static alert() {
    const mainElement = ClassLoader("ui");

    const builder = VirtualDomElement(mainElement.UID);
    console.log(builder);
  }
}

















