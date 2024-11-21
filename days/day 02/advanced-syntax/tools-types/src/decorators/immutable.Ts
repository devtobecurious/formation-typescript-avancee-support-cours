export function immutable() {
    return function(target: any, key: string, descriptor: PropertyDescriptor) {
        const original = descriptor.set

        descriptor.set = function(value: any) {
            return original?.call(this, {...value})
        }
    }
}