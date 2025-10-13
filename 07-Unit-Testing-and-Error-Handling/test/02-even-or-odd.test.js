import { isOddOrEven } from './02-even-or-odd.js';
import { expect } from "chai";

describe('Even or odd function test suite', () => {
  it('returns undefined when passed a non-string', () => {
    expect(isOddOrEven(['string'])).to.equal(undefined)
  });
  it('returns undefined when passed a number', () => {
    expect(isOddOrEven(4)).to.equal(undefined);
  });
  it('returns even when passed a string with even length', () => {
    expect(isOddOrEven('hell')).to.equal('even');
  });
  it('returns odd when passed a string with odd length', () => {
    expect(isOddOrEven('hello')).to.equal('odd');
  });
})