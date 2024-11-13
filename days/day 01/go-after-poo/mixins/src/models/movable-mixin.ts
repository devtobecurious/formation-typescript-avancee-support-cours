import { Enemy } from "./enemy";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type, @typescript-eslint/no-explicit-any
type Constructor = new (...args: any[]) => {};

export function Movable<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
        position = { x: 0, y: 0 };

        move(x: number, y: number) {
            this.position.x += x;
            this.position.y += y;
        }
    }
}

export const MovableEnemy = Movable(Enemy);