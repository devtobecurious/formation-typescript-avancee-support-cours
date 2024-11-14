import { log } from "./logger";

export function first() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.info('first', target, propertyKey, descriptor);
    }
}

export function second() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.info('second', target, propertyKey, descriptor);
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-empty-object-type
export type Constructor<T> = { new(...args: any[]): T }

export type WithTest = {
    test: string
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export function classDecorator<T extends Constructor<{}>>(constructor: T): T & Constructor<WithTest> {
    return class extends constructor {
        test = ''
    } 
}


@classDecorator
@log(true)
export class Example {
    @first()
    @second()
    public method() {
        console.info('method');
    }
}

const ex = new Example()
ex.method()

