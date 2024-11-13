import { Orq } from "./orq";

export class Urukai extends Orq {
    name = 'Uruk';

    beUgly(): void {
        this.lifePoints = 100;
    }
}