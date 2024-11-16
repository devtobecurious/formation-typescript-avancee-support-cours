// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithConstructor<T> = { new(...args: any[]): T }

export function create<T>(item: WithConstructor<T>): T {
    return new item()
}

export function getProperty<T, Key extends keyof T>(item: T, key: Key): T[Key] {
    return item[key]
}

class Sword {
    length = 100
}

class Mithril {
    color: 'White' | 'Black' = 'White'
}

class Character {
    name = ''
}

class Hobbit extends Character {
    nbLunch = 7
    item = new Mithril()
}

class Human extends Character {
    item = new Sword()
}

function createCharacter<T extends Character = Human>(item?: WithConstructor<T>): T {
    const constructor = item || Human
    return new constructor() as T
}

createCharacter(Human).item.length = 100
createCharacter(Hobbit).item.color = 'Black'

createCharacter().item.length = 18

