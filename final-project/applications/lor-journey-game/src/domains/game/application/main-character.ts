import { MainCharacterDisplayer } from "../infrastructure/displayers/main-character.displayer";
import { InputPort } from "./ports/input";

export class MainCharacter {
    constructor(private readonly displayer: MainCharacterDisplayer, private readonly inputPort: InputPort) { }

    init(): void {
        this.inputPort.listen()
        this.displayer.init()
    }
}