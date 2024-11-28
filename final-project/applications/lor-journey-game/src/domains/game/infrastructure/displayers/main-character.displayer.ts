import { Displayer } from "../../application/displayers/displayer"

export class MainCharacterDisplayer implements Displayer {
    private gameContainer: HTMLDivElement | undefined
    private container: HTMLDivElement | undefined

    constructor() {
        this.gameContainer = document.getElementById('the-game') as HTMLDivElement
    }

    init(): void {
        const div = document.createElement('div') as HTMLDivElement
        div.id = 'main-character'

        this.container = div

        this.gameContainer?.appendChild(this.container)
    }
}