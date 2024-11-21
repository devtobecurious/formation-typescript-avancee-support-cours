
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Constructor<T> = { new(...args: any[]): T }
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DynamicObject = { [key: string]: any }


export function log(isLogging: boolean) {
    return function logger<T extends Constructor<{}>>(constructor: T) {
        return class extends constructor {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            constructor(...args: any[]) {
                super(args)

                Object.getOwnPropertyNames(constructor.prototype).forEach(method => {
                    const originalMethod = (this as DynamicObject)[method]

                    if (typeof (originalMethod) === 'function') {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        (this as DynamicObject)[method] = (...newArgs: any[]) => {
                            if (isLogging) {
                                console.info(`[LOG] : ${method} ${newArgs}`)
                            }
                            const result = originalMethod.apply(this, newArgs)
                            if (isLogging) {
                                console.info(`[LOG] : ${method} ${newArgs}, result : ${result}`)
                            }
                            return result
                        }
                    }
                })
            }
        }
    }
}