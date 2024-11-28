import { GameDisplayer } from "../infrastructure/displayers/game.displayer"
import { MainCharacterDisplayer } from "../infrastructure/displayers/main-character.displayer"
import { MainCharacter } from "./main-character"

export class Game {
    private _mainCharacter: MainCharacter | undefined

    constructor(private readonly displayer: GameDisplayer) {
    }

    start(): void {
        this._mainCharacter = new MainCharacter(new MainCharacterDisplayer())
        this.displayer.init()
        this._mainCharacter.init()
    }

    get mainCharacter() {
        return this._mainCharacter
    }
}