export class Point {
    x: number = 0;
    y: number = 0;
   
    // Constructor overloads
    constructor(x: number, y: number)
    constructor(x: string)
    constructor(x: string | number, y: number = 0) {
    }
    
  }