export interface Shot {
    shoot(x: number): void
}

export interface Reload {
    reload: boolean
    reloadQuantity?: number
}

export class Weapon implements Shot, Reload {
    reload = false

    private _power = 0

    shoot(computeValue: any): void {
        console.log('Pew pew')
    }

    get power() {
        return this._power
    }
    set power(power: number | string | boolean) {
        if(typeof power === 'number') {
            this._power = power
        }
    }
}

const w = new Weapon()


