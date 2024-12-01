import { MainCharacterDisplayer } from "../../infrastructure/displayers/main-character.displayer";
import { InputKeyboard } from "../../infrastructure/ports/input-keyboard";
import { MainCharacter } from "../main-character";
import { Movable } from "../movable";

describe('main character', () => {
    const MovableCharacter = Movable(MainCharacter)

    beforeEach(() => {
    })

    it('should be alive', () => {
        const character = new MovableCharacter(new MainCharacterDisplayer(), new InputKeyboard())
        expect(character).toBeTruthy()
    })

    it('should move to right, with one more x', () => {
        const character = new MovableCharacter(new MainCharacterDisplayer(), new InputKeyboard())
        character.move('Right')

        expect(character.position.x).toBe(1)
        expect(character.position.y).toBe(0)
    })

    it('should move to right with keypress (mocked)', () => {
        console.info('should move to right with keypress (mocked)')
        const character = new MovableCharacter(new MainCharacterDisplayer(), new InputKeyboard())
        character.init()

        console.info(character.position)

        const event = new KeyboardEvent('keydown', { key: 'D' })
        document.dispatchEvent(event)

        console.info('position 2', character.position)

        expect(character.position.x).toBe(1)
        expect(character.position.y).toBe(0)
    })
});