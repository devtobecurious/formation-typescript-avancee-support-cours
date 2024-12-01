import { Direction } from "../../../core/custom-types/direction";
import { MainCharacterDisplayer } from "../infrastructure/displayers/main-character.displayer";
import { Point } from "./point";
import { InputPort } from "./ports/input";

export class MainCharacter {
    private direction: Direction = 'Idle'
    private position = new Point(0, 0)

    constructor(private readonly displayer: MainCharacterDisplayer, private readonly inputPort: InputPort) { }

    init(): void {
        this.displayer.init()

        this.inputPort.listen(direction => {
            this.direction = direction
            this.move(direction)
        })
    }

    move(direction: Direction) {
        switch (direction) {
            case 'Down': {
                this.position.y++
            } break

            case 'Up': {
                this.position.y--
            } break

            case 'Left': {
                this.position.x--
            } break

            case 'Right': {
                this.position.x++
            } break
        }
    }
};

}