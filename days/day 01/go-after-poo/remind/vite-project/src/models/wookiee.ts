import { Character } from "./character"

export class Wookiee extends Character {
    private lifePoint = 100

    constructor(surname: string, lifePoint: number) 
    constructor(lifePoint: number)
    constructor(first: string | number, second = 0) {
        super(typeof(first) === 'string' ? first : '')
    }
}

