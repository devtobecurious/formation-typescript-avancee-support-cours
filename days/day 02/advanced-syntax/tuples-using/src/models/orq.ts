import { Enemy } from "./enemy";
// import {immutable} from '../decorators/immutable'

export class Orq extends Enemy {
    private _arc = { name: 'best'}

    constructor() {
        super()

        this._arc.name = ''
    }

    // @immutable()
    set arc(value: {name: string}) {
        this._arc = value
    }
}