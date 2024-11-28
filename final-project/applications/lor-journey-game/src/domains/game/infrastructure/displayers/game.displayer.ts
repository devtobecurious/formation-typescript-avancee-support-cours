import { Displayer } from "../../application/displayers/displayer"

export class GameDisplayer implements Displayer{
    private container: HTMLDivElement | undefined

    constructor() {
        this.container = document.getElementById('the-game') as HTMLDivElement
    }

    init(): void {
        if(this.container) {
            this.container.innerHTML = '<i>Loading ....</i>'
        }
    }
}