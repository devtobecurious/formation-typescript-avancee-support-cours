export class Enemy {
    name = 'Slim shady'
    protected lifePoints = 100

    constructor() {
        console.log('Hi my name is ', this.name)
    }

    get myName() {
        return this.name;
    }
}

