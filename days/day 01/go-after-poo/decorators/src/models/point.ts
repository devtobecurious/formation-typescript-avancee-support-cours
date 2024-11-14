export class Point {
    x: number = 0;
    y: number = 0;
   
    // Constructor overloads
    constructor(x: number, y: number)
    constructor(x: string)
    constructor(x: string | number, y: number = 0) {
      this.x = typeof(x) === 'number' ? x : 0
      this.y = typeof(y) === 'number' ? y : 0
    }
    
  }