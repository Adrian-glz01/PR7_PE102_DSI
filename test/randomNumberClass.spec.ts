import 'mocha';
import { expect } from 'chai';
import { RandomNumberClass } from '../src/randomNumber/randomNumberClass';


describe ('randomNumberClass', () => {

  it ('getRandomNumber', () => {
    const result = RandomNumberClass.getRandomNumber();
    expect(result).to.be.an.instanceOf(RandomNumberClass);
  });

  it ('getRandomNumberBetween0And1', () => {
    const result = RandomNumberClass.getRandomNumberBetween0And1();
    expect(result).to.be.greaterThanOrEqual(0);
    expect(result).to.be.lessThanOrEqual(1);
  });

  it ('getRandomNumberBetweenNandMWithDecimal', () => {
    const result = RandomNumberClass.getRandomNumberBetweenNandMWithDecimal(1, 20);
    expect(result).to.be.greaterThanOrEqual(1);
    expect(result).to.be.lessThanOrEqual(20);
  });

  it ('getRandomNumberBetweenNandMWithDecimal', () => {
    const result = RandomNumberClass.getRandomNumberBetweenNandMWithDecimal(1, 10.5555);
    expect(result).to.be.greaterThanOrEqual(1);
    expect(result).to.be.lessThanOrEqual(10.5555);
  });

  it ('getRandomNumberBetweenNandMWithDecimal', () => {
    const result = RandomNumberClass.getRandomNumberBetweenNandMWithDecimal(10.5555, 1);
    expect(result).to.be.undefined;
  });

  it ('getRandomNumberBetweenNandM', () => {
    const result = RandomNumberClass.getRandomNumberBetweenNandM(1, 10);
    expect(result).to.be.greaterThanOrEqual(1);
    expect(result).to.be.lessThanOrEqual(10);
  });

  it ('getRandomNumberBetweenNandM', () => {
    const result = RandomNumberClass.getRandomNumberBetweenNandM(10000, 100000000);
    expect(result).to.be.greaterThanOrEqual(10000);
    expect(result).to.be.lessThanOrEqual(100000000);
  });

  it ('getRandomNumberBetweenNandM', () => {
    const result = RandomNumberClass.getRandomNumberBetweenNandM(3, 3);
    expect(result).to.be.equal(3);
  });

  it('getRandomNumberBetweenNandM', () => {
    const result = RandomNumberClass.getRandomNumberBetweenNandM(1.5, 10);
    expect(result).to.be.undefined;
  });
});