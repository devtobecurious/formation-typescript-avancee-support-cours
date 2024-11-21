import { MainCharacter } from "../models/main-character"

type OnlyNumberOrBoolean = {
    [key: string]: boolean | number
}
const item: OnlyNumberOrBoolean = {
    nbOrcs: 1,
    aliveOrcs: true
}

// type ValidProperties<T> = {
//     [key in keyof T]: T[key] extends number ? boolean : never
// }

type OnlyNumber<T> = T extends number ? T : never

type ValidProperties<T> = {
    [key in keyof T as T[key] extends number ? key : never]: boolean
}

type ValidPropertiesMainC = ValidProperties<MainCharacter>
const itemBis: ValidPropertiesMainC = {
    age: true
}