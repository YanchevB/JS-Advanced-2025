import { mathEnforcer } from "./mathEnforcer.js";
import { assert } from "chai";

describe('Math enforcer test suite', () => {
  describe('addFive method', () => {
    it('should return undefined when param is not a number', () => {
      assert.isUndefined(mathEnforcer.addFive('string'), 'result must be a number');
      assert.isUndefined(mathEnforcer.addFive([5]), 'result must be a number');
      assert.isUndefined(mathEnforcer.addFive(), 'result must be a number');
    })

    it('should return correct when param is a number', () => {
      assert.deepEqual(mathEnforcer.addFive(5), 10, 'result is correct (10)');
      assert.deepEqual(mathEnforcer.addFive(0), 5, 'result is correct (5)');
      assert.deepEqual(mathEnforcer.addFive(-5), 0, 'result is correct (0)');
      assert.deepEqual(mathEnforcer.addFive(5.5), 10.5, 'result is correct (10.5)');
    })
  })

  describe('subtractTen method', () => {
    it('should return undefined when param is not a number', () => {
      assert.isUndefined(mathEnforcer.subtractTen('string'), 'result must be a number');
      assert.isUndefined(mathEnforcer.subtractTen([5]), 'result must be a number');
      assert.isUndefined(mathEnforcer.subtractTen(), 'result must be a number');
    })

    it('should return correct when param is a number', () => {
      assert.deepEqual(mathEnforcer.subtractTen(5), -5, 'result is correct (-5)');
      assert.deepEqual(mathEnforcer.subtractTen(0), -10, 'result is correct (-10)');
      assert.deepEqual(mathEnforcer.subtractTen(-5), -15, 'result is correct (-15)');
      assert.deepEqual(mathEnforcer.subtractTen(10.5), 0.5, 'result is correct (0.5)');
    })
  })

  describe('sum method', () => {
    it('should return undefined when param1 is not a number', () => {
      assert.isUndefined(mathEnforcer.sum('0', 5), 'param must be a number');
      assert.isUndefined(mathEnforcer.sum([5], 5), 'param must be a number');
      assert.isUndefined(mathEnforcer.sum(5), 'param must be a number');
    })

    it('should return undefined when param2 is not a number', () => {
      assert.isUndefined(mathEnforcer.sum(5, '0'), 'param must be a number');
      assert.isUndefined(mathEnforcer.sum(5, [5]), 'param must be a number');
    })

    it('should return correct when params are correct', () => {
      assert.deepEqual(mathEnforcer.sum(5, 5), 10, 'result is correct (10)');
      assert.deepEqual(mathEnforcer.sum(0, 10), 10, 'result is correct (10)');
      assert.deepEqual(mathEnforcer.sum(-5, 5), 0, 'result is correct (0)');
      assert.deepEqual(mathEnforcer.sum(5.5, 5.5), 11, 'result is correct (11)');
    })
  })
})