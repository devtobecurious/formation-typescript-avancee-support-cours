export abstract class GetAll<T extends {id: number}> {    
    abstract getAll(): T[]


}