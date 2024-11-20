export class Enemy {
    name = 'Slim shady'
    protected lifePoints = 100

    constructor() {
        console.log('Hi my name is ', this.name)
    }

    receive(point: number): void {
        this.name = point.toString()
    }

    get myName() {
        return this.name;
    }
}

