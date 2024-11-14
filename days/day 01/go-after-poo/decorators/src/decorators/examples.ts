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

export class Example {
    @first()
    @second()
    public method() {
        console.info('method');
    }
}