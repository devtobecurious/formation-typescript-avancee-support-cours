import { MainCharacterDisplayer } from "../../infrastructure/displayers/main-character.displayer";
import { MainCharacter } from "../main-character";
import { Movable } from "../movable";

describe('main character', () => {
    let mainCharacter: MainCharacter | undefined

    beforeEach(() => {
        mainCharacter = new MainCharacter(new MainCharacterDisplayer())
    })

    it('should be alive', () => {
        expect(mainCharacter).toBeTruthy()
    })

    it('should move to right, with one more x', () => {
        const MovableCharacter = Movable(MainCharacter)
        const character = new MovableCharacter(new MainCharacterDisplayer())

        character.move('Right')

        expect(character.position.x).toBe(1)
        expect(character.position.y).toBe(0)
    })
});