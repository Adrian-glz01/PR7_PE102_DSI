import { RandomNumberClass } from "../randomNumber/randomNumberClass";


export class RandomNumCollection {
  public randomNumCollection: Set<number>;
  public size: number;

  /**
   * Método constructor de la clase RandomNumCollection
   * @param size 
   */
  constructor(size: number) {
    this.randomNumCollection = new Set<number>();
    this.size = size;
    for (let i = 0; i < size; i++) {
      this.addRandomNumber();
    }
  }

  /**
   * Método que añade un número aleatorio al Set
   */
  public addRandomNumber(): void {
    this.randomNumCollection.add(RandomNumberClass.getRandomNumberBetweenNandM(1, 30) as number);
  };

  /**
   * Método que devuelve un iterador de números
   * @returns 
   */
  [Symbol.iterator](): Iterator<number> {
    return this.randomNumCollection.values();
  }
}