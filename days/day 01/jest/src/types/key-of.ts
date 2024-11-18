import { Orq } from "../models/orq";

export type OrqKeys = keyof Orq
const item: OrqKeys = 'arc'
console.info(item)

function getProperty<T, K extends keyof T>(item: T, key: K): T[K] {
    return item[key]
}

const result = getProperty({id: 1, label: 'sauron'}, 'label')
console.info(result)