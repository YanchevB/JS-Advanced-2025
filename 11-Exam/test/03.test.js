import { motorcycleRider } from "./MotorcycleRider.js";
import { assert } from "chai";

describe("motorcycleRider test suite", () => {
  describe("licenseRegistration method", () => {
    it('returns correct when AM is passed',() => {
      const result = motorcycleRider.licenseRestriction('AM');
      assert.strictEqual(result, 'Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.');
    });

    it('returns correct when A1 is passed', () => {
      const result = motorcycleRider.licenseRestriction('A1');
      assert.strictEqual(result, 'Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.');
    });

    it('returns correct when A2 is passed', () => {
      const result = motorcycleRider.licenseRestriction('A2');
      assert.strictEqual(result, "Motorcycles with maximum power of 35KW. and the minimum age is 18.");
    });

    it('returns correct when A is passed', () => {
      const result = motorcycleRider.licenseRestriction('A');
      assert.strictEqual(result, "No motorcycle restrictions, and the minimum age is 24.");
    });

    it('throws an error when category is incorrect', () => {
      assert.throw(() => motorcycleRider.licenseRestriction('1'), "Invalid Information!");
      assert.throw(() => motorcycleRider.licenseRestriction(['AM']), "Invalid Information!");
      assert.throw(() => motorcycleRider.licenseRestriction(), "Invalid Information!");
    })
  });

  describe('motorcycleShowroom method', () => {
    it('throws an error when engineVolume is not an array', () => {
      assert.throw(() => motorcycleRider.motorcycleShowroom('125', 50), 'Invalid Information!');
    })

    it('throws an error when engineVolume.length is < 1', () => {
      assert.throw(() => motorcycleRider.motorcycleShowroom([], 50), 'Invalid Information!');
    })

    it('throws an error when maximumEngineVolume is not a num', () => {
      assert.throw(() => motorcycleRider.motorcycleShowroom(['125', ['250']], '50'), 'Invalid Information!');
      assert.throw(() => motorcycleRider.motorcycleShowroom(['125', ['250']], [50]), 'Invalid Information!');
    })

    it('throws an error when maximumEngineVolume is < 50', () => {
      assert.throw(() => motorcycleRider.motorcycleShowroom(['125', ['250']], -50), 'Invalid Information!');
      assert.throw(() => motorcycleRider.motorcycleShowroom(['125', ['250']], 0), 'Invalid Information!');
    })

    it('returns correctly when params are correct', () => {
      assert.strictEqual(motorcycleRider.motorcycleShowroom([125, 250, 600], 300), "There are 2 available motorcycles matching your criteria!"
      );

      assert.strictEqual(motorcycleRider.motorcycleShowroom([50, 75, 100], 100), "There are 3 available motorcycles matching your criteria!"
      );


      assert.strictEqual(motorcycleRider.motorcycleShowroom([49, 50, 51], 50), "There are 1 available motorcycles matching your criteria!"
      );

      
    })

    it('add an element (engineVolume) if maximumEngineVolume is less or equal to engineVolume', () => {
      const engineVolumes = [125, 250, 600, 50, 49];
      const maxEngineVolume = 250;
      const result = motorcycleRider.motorcycleShowroom(engineVolumes, maxEngineVolume);
      assert.strictEqual(result, `There are 3 available motorcycles matching your criteria!`)
    })
  })

  describe('otherSpendings method', () => {
    it('throws an error when equipment is not an array', () => {
      assert.throw(() => motorcycleRider.otherSpendings('helmet', ['engine oil', 'oil filter'], true), 'Invalid Information!');

      assert.throw(() => motorcycleRider.otherSpendings(1, ['engine oil', 'oil filter'], false), 'Invalid Information!');
    })

    it('throws an error when consumables is not an array', () => {
      assert.throw(() => motorcycleRider.otherSpendings(['helmet', 'jacket'], 'engine oil', true), 'Invalid Information!');
      assert.throw(() => motorcycleRider.otherSpendings(['helmet', 'jacket'], 1, false), 'Invalid Information!');
    })

    it('throws an error when discount is not boolean', () => {
      assert.throw(() => motorcycleRider.otherSpendings(['helmet', 'jacket'], ['engine oil'], 'true'), 'Invalid Information!');
      assert.throw(() => motorcycleRider.otherSpendings(['helmet', 'jacket'], ['engine oil'], 1), 'Invalid Information!');
    })

    it('returns correct when discount is true', () => {
      assert.strictEqual(motorcycleRider.otherSpendings(['helmet', 'jacket'], ['engine oil'], true), 'You spend $513.00 for equipment and consumables with 10% discount!');

      assert.strictEqual(motorcycleRider.otherSpendings(['helmet'], ['engine oil'], true), 'You spend $243.00 for equipment and consumables with 10% discount!');

      assert.strictEqual(motorcycleRider.otherSpendings(['jacket'], ['oil filter'], true), 'You spend $297.00 for equipment and consumables with 10% discount!');

      assert.strictEqual(motorcycleRider.otherSpendings(['jacket'], ['oil filter', 'engine oil'], true), 'You spend $360.00 for equipment and consumables with 10% discount!');

      assert.strictEqual(motorcycleRider.otherSpendings(['jacket', 'helmet'], ['oil filter', 'engine oil'], true), 'You spend $540.00 for equipment and consumables with 10% discount!');
    })

    it('returns correct when discount is false', () => {
      assert.strictEqual(motorcycleRider.otherSpendings(['helmet', 'jacket'], ['engine oil'], false), 'You spend $570.00 for equipment and consumables!');

      assert.strictEqual(motorcycleRider.otherSpendings(['helmet'], ['engine oil'], false), 'You spend $270.00 for equipment and consumables!');

      assert.strictEqual(motorcycleRider.otherSpendings(['jacket'], ['oil filter'], false), 'You spend $330.00 for equipment and consumables!');

      assert.strictEqual(motorcycleRider.otherSpendings(['jacket'], ['oil filter', 'engine oil'], false), 'You spend $400.00 for equipment and consumables!');

      assert.strictEqual(motorcycleRider.otherSpendings(['jacket', 'helmet'], ['oil filter', 'engine oil'], false), 'You spend $600.00 for equipment and consumables!');
    })
  })
});
