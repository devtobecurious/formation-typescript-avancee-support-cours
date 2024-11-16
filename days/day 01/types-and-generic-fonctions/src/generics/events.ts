export type Delegate<T> = (e: T) => void


export class EventManager<T>  {
    private listeners: Delegate<T>[] = []

    subscribe(item: Delegate<T>): void {
        this.listeners.push(item)
    }

    unsubscribe(item: Delegate<T>): void {
        this.listeners = this.listeners.filter(list => list !== item)
    }

    execute(e: T): void {
        this.listeners.forEach(item => item(e))
    }
}

const manager = new EventManager<{id: number}>()
manager.subscribe(event => {
    console.info(event)
})

manager.execute({id: 1})