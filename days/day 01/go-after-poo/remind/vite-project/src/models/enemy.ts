export class Enemy {
    name = 'Slim shady'

    constructor() {
        console.log('Hi my name is ', this.name)
    }

    get myName() {
        return this.name;
    }
}

