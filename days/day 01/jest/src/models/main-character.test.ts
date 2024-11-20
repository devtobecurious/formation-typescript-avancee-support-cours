import { MainCharacter } from "./main-character"

describe('main character', () => {
    beforeEach(() => {
        document.body.innerHTML = '<div id="game"></div>'
    })

    it('should first move to right', () => {
        const mainCharacter = new MainCharacter()
        mainCharacter.move('right')

        expect(mainCharacter.currentPosition.x).toBe(1)
        expect(mainCharacter.currentPosition.y).toBe(0)
    })

    it('should move from 2/2 to right', () => {
        const mainCharacter = new MainCharacter()
        mainCharacter.setPosition({ x: 2, y : 2})
        mainCharacter.move('right')

        expect(mainCharacter.currentPosition.x).toBe(3)
        expect(mainCharacter.currentPosition.y).toBe(2)
    })
})