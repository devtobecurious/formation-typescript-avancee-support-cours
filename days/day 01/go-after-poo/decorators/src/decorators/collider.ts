export function collideDetection() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function(target: any, propertyKey: string, description: PropertyDescriptor) {
        console.info(target)
        console.info(propertyKey)
        console.info(description)
    }
}

export class PrefabItem {
    @collideDetection()
    update() {

    }
}

const item = new PrefabItem()
item.update()

// export const itemBis = {
//     @collideDetection()
//     update: () => {

//     }
// }