

export class RandomNumberClass {
  private static _randomNumber: RandomNumberClass;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
  
  /**
   * Método que devuelve una instancia de la clase o la crea en caso de que no exista
   * @returns 
   */
  public static getRandomNumber(): RandomNumberClass {
    if (!RandomNumberClass._randomNumber) {
      RandomNumberClass._randomNumber = new RandomNumberClass();
    }
    return RandomNumberClass._randomNumber;
  }

  /**
   * Método que devuelve un número aleatorio entre 0 y 1
   * @returns 
   */
  public static getRandomNumberBetween0And1(): number {
    return Math.random();
  }

  /**
   * Método que devuelve un número aleatorio entre 0 y 1 con decimales
   * @param n 
   * @param m 
   * @returns 
   */
  public static getRandomNumberBetweenNandMWithDecimal(n: number, m: number): number | undefined{
    if (n > m) { // n no deberia ser mayor que m
      return undefined;
    }
    return Math.random() * (m - n) + n;
  }

  /**
   * Método que devuelve un número entero aleatorio entre n y m
   * @param n 
   * @param m 
   * @returns 
   */
  public static getRandomNumberBetweenNandM(n: number, m: number): number | undefined {
    if (n > m || n % 1 !== 0 || m % 1 !== 0) { // n no deberia ser mayor que m, y n y m deben ser enteros
      return undefined;
    } else if (n === m) {
      return n;
    }
    return Math.floor(Math.random() * (m - n + 1)) + n;
  }
}