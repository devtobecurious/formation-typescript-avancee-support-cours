type SwitchType<T> = T extends string ? number : Date
type MyType = SwitchType<string>


type Flatten<T> = T extends any[] ? T : never;

type Test = Flatten<string[]>


type MappedType<Input, Output> = {
    [K in keyof Input]: K extends keyof Output ? Output[K] : never
}

const itemToBeMapped = {
    id: 1
}
const itemResult = {
    id: 'coucou'
}

type ResultType = MappedType<typeof itemToBeMapped, typeof itemResult>;
const resultItem: ResultType = {
    id: 'coucou'
}


function mapData<Input extends object, Mapping extends object>(
    data: Input,
    mappings: Mapping
): MappedType<Input, Mapping> {
    const result = {} as MappedType<Input, Mapping>;

    for (const key in data) {
        const res = data[key]

        if (key in mappings) {
            const res = mappings[key as unknown as Extract<keyof Mapping, string>]
            result[key] = res as Extract<keyof Input, string> extends keyof Mapping ? Mapping[keyof Mapping & Extract<keyof Input, string>] : never
        }
    }

    return result;
}

const resultMap = mapData(itemToBeMapped, itemResult)
resultMap.id = 'win'



type WithEmail<T> = T extends { email: string } ? T : T & { email?: string }
function sendEmail<T extends { email: string }>(item: WithEmail<T>) {
    console.log(item.email)
}

type ElementType<T> = T extends (infer U)[] ? U : never
type MyArray = string[]

type MyArrayElement = ElementType<MyArray>
const item: MyArrayElement = 'coucou'
