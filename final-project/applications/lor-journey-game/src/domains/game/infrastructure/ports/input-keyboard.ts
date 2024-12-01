import { Direction } from "../../../../core/custom-types/direction";
import { DirectionCallback } from "../../../../core/custom-types/methods";
import { InputPort } from "../../application/ports/input";

export class InputKeyboard implements InputPort {
    private readonly mapping: Record<string, Direction> = {
        'D': 'Right', 'Q': 'Left', 'Z': 'Up', 'S': 'Down'
    }

    listen(callback: DirectionCallback): void {
        document.addEventListener('keydown', (event) => {
            let direction: Direction = 'Right'
            const key = (event as KeyboardEvent).key

            if (this.mapping[key]) {
                direction = this.mapping[key]
            }
            callback(direction);
        });
    }
}