export class Item<T>  {
    value ?: T

    hasValue(): this is { value: T } {
        return this.value !== undefined
    }
}

const potion = new Item<string>()

if(potion.hasValue()) {
    console.info(potion.value)
}