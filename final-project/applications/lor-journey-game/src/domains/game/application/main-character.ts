import { MainCharacterDisplayer } from "../infrastructure/displayers/main-character.displayer";

export class MainCharacter {
    constructor(private readonly displayer: MainCharacterDisplayer) { }

    init(): void {
        this.displayer.init()
    }
}