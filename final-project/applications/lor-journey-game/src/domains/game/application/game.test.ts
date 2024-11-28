import { GameDisplayer } from "../infrastructure/displayers/game.displayer"
import { Game } from "./game"

describe('game', () => {
    beforeEach(() => {
        document.body.innerHTML = '<div id="the-game"></div>'
    })


    it('should load with one main character', () => {
        const game = new Game(new GameDisplayer())
        game.start()
        expect(game.mainCharacter).not.toBeNull()
    })

    it('should display main character on html', () => {
        const game = new Game(new GameDisplayer())
        game.start()
        
        const mainCharacter = document.getElementById('main-character')
        expect(mainCharacter).toBeTruthy()
    })
})