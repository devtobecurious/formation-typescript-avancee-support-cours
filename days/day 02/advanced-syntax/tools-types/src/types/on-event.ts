/* eslint-disable @typescript-eslint/no-unused-vars */
type EventMap = {
    collision: {target: string},
    click: {x: number, y: number}
}

function onEvent<T extends keyof EventMap>(
    type: T,
    callback: (e: EventMap[T]) =>  void
): void {
    console.info(type)
}

onEvent('click', e => console.info(e))