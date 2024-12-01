import { DirectionCallback } from "../../../../core/custom-types/methods";

export interface InputPort {
    listen(callback: DirectionCallback): void;
}