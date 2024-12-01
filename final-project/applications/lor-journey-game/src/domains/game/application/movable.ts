import { BetterConstructor } from '../../../core/custom-types/constructors/index.ts';
import { Direction } from '../../../core/custom-types/direction.ts';
import { MainCharacter } from './main-character.ts';
import { Point } from './point.ts';

type MainCharacterConstructor = BetterConstructor<MainCharacter>

export function Movable<T extends MainCharacterConstructor>(Base: T) {
    return class extends Base {
        position = new Point(0, 0)

        move(direction: Direction) {
            switch (direction) {
                case 'Down': {
                    this.position.y++
                } break

                case 'Up': {
                    this.position.y--
                } break

                case 'Left': {
                    this.position.x--
                } break

                case 'Right': {
                    this.position.x++
                } break
            }
        }
    };

}