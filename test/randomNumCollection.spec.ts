import 'mocha';
import { expect } from 'chai';
import { RandomNumCollection } from '../src/randomNumCollection/randomNumCollection';

describe('RandomNumCollection', () => {
  const randomNumCollection = new RandomNumCollection(10);
  it('should have a size of 10', () => {
    expect(randomNumCollection.size).to.equal(10);
  });
  it('should be iterable', () => {
    const iterator = randomNumCollection[Symbol.iterator]();
    expect(iterator.next().value).to.be.a('number');
  });
});