export interface Shot {
    shoot(x: number): void
}

export interface Reload {
    reload: boolean
    reloadQuantity?: number
}

export class Weapon implements Shot, Reload {
    reload = false
    #length = 10

    private _power = 0

    shoot(computeValue: any): void {
        console.log('Pew pew', computeValue)
        this.#length = 20
    }

    equals(other: this): boolean {
        return other.length === this.length
    }

    static compare(a: Weapon, b: Weapon): boolean {
        return a.#length === b.#length
    }

    get length() {
        return this.#length;
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

export class BigWeapon extends Weapon {
    distance = 10
}

const weapon = new Weapon()
const child = new BigWeapon()

// child.equals(weapon)


