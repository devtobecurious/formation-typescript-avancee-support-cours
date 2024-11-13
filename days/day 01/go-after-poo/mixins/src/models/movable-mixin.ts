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


// eslint-disable-next-line @typescript-eslint/no-empty-object-type, @typescript-eslint/no-explicit-any
type BetterConstructor<T = {}> = new (...args: any[]) => T;

type EnemyConstructor = BetterConstructor<Enemy>;

function EnemyMovable<TBase extends EnemyConstructor>(Base: TBase) {
    return class extends Base {
        position = { x: 0, y: 0 };

        move(x: number, y: number) {
            this.position.x += x;
            this.position.y += y;

            this.name = "Movable " + this.name;
        }
    }
}

export const MovableEnemy2 = EnemyMovable(Enemy);