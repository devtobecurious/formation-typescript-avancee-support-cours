import { jest } from '@jest/globals';
import { MainCharacter } from "./main-character";

const mockReceive = jest.fn((item: number) => console.info('mockkiinnn', item))
    jest.mock('./orq', () => {
        return {
            Orq: jest.fn().mockImplementation(() => ({
                receive: mockReceive
            }))
        }
    })

import { Orq } from "./orq";

describe('main character', () => {

    beforeEach(() => {
        jest.clearAllMocks();
      });

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

    it('should kill enemy', () => {
        // const mainCharacter = new MainCharacter()
        // const orq = new Orq()

        // const spy = jest.spyOn(orq, 'receive').mockImplementation(number => console.info('spy', number))

        // mainCharacter.kill(orq)

        // expect(spy).toHaveBeenCalledTimes(1)
    })

    it('should kill enemy with mock enemy (full)', () => {
        const mainCharacter = new MainCharacter()
        
        

        const OrqFoo = jest.mocked(Orq)

        const orq = new OrqFoo()
        mainCharacter.kill(orq)
    })
})