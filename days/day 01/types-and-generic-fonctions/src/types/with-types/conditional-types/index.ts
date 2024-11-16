type ElementType<T> = T extends (infer U)[] ? U : never
type MyArray = string[]

type MyArrayElement = ElementType<MyArray>
const item: MyArrayElement = 'coucou'
