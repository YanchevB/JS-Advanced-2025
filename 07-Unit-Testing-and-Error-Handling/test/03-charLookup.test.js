import { lookupChar } from "./charLookup.js";
import { expect } from "chai";

describe('Char lookup function test suite', () => {
  it('returns undefined when passed a non-string', () => {
    expect(lookupChar(['string'], 4)).to.equal(undefined);
    expect(lookupChar(3, 3)).to.equal(undefined);
  });

  it('returns undefined when passed a non-integer', () => {
    expect(lookupChar('string', [3])).to.equal(undefined);
    expect(lookupChar('string', '3')).to.equal(undefined);
    expect(lookupChar('string', 3.5)).to.equal(undefined);
  });

  it('returns "Incorrect index" when string.length <= index or when passed a negative num', () => {
    expect(lookupChar('hello', 5)).to.equal('Incorrect index');
    expect(lookupChar('hello', 7)).to.equal('Incorrect index');
    expect(lookupChar('hello', -1)).to.equal('Incorrect index');
  });

  it('returns the correct character when all params are correct', () => {
    expect(lookupChar('example', 1)).to.equal('x');
    expect(lookupChar('this', 3)).to.equal('s');
  });
})