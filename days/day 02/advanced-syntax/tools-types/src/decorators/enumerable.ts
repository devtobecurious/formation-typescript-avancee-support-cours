export function enumerable(value: boolean) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function(target: any, key: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value
    }
}


