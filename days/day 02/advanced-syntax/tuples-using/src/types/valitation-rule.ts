import { Orq } from "../models/orq"

export type ValidationRule<T> = {
    [K in keyof T]?: (value: T[K]) => boolean
}

const rule: ValidationRule<Orq> = {
    arc: item => item.name !== '',
}

function validate<T>(obj: T, rules: ValidationRule<T>): boolean {
    return (Object.keys(rules) as Array<keyof T>).every(key => {
        const rule = rules[key]
        return rule ? rule(obj[key]) : true
    })
}

const orq = new Orq()
validate(orq, rule)