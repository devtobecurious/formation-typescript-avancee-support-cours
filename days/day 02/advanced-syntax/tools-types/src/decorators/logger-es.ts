// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function logged(originalMethod: any, context: ClassMethodDecoratorContext) {
    const methodName = String(context.name)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function(this: any, ...args: any[]) {
        console.log(`[LOG] method : ${methodName}`)
        const returnResult = originalMethod.call(this, ...args)
        console.log(`[LOG] method : ${methodName}, result : ${returnResult}`)

        return returnResult
    }
}