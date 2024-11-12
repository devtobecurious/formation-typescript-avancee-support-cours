import { Wookiee } from "./wookiee";

const wookiee = new Wookiee('', 2)

class MyClass {
    [s: string]: boolean | ((s: string) => boolean);
   
    check(s: string) {
      return this[s] as boolean;
    }
  }