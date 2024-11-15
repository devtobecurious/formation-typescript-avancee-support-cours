export class Potion {
    give(): void {}
}

export class Shield {
    protect(): void {}
}

function use(item: Potion | Shield): void {
    if (item instanceof Potion) {
        item.give()
    } else {
        item.protect()
    }
}

function useBis(item: Potion | Shield): void {
    if('give' in item) {
        item.give()
    } else {
        item.protect()
    }
}

function isPotion(item: Potion | Shield): item is Potion {
    return 'give' in item
}

function useTer(item: Potion | Shield): void {
    if(isPotion(item)) {
        item.give()
    } else {
        item.protect()
    }
}