import { streamingServiceSelector } from "./streamingServiceSelector.js";
import { assert } from 'chai';

describe("streamingServiceSelector test suite", () => {
  describe("selectingContent method", () => {
    it("throws an error when value of genre is not in the list of supported genres ", () => {
      assert.throws(() => streamingServiceSelector.selectingContent('Movie', 'Netflix', 'genre'), "We currently support these genres: Action, Comedy, Drama, Thriller, Horror, Romance, Sci-Fi");
      assert.throws(() => streamingServiceSelector.selectingContent('Movie', 'Netflix', 1), "We currently support these genres: Action, Comedy, Drama, Thriller, Horror, Romance, Sci-Fi");
      assert.throws(() => streamingServiceSelector.selectingContent('Movie', 'Netflix', []), "We currently support these genres: Action, Comedy, Drama, Thriller, Horror, Romance, Sci-Fi");
    });

    it("throws an error when value of type is not in the list of supported genres ", () => {
      assert.throws(() => streamingServiceSelector.selectingContent('News', 'Netflix', 'Action'), "We currently only support 'Movie' or 'TV Show' types.");
      assert.throws(() => streamingServiceSelector.selectingContent(1, 'Netflix', 'Action'), "We currently only support 'Movie' or 'TV Show' types.");
      assert.throws(() => streamingServiceSelector.selectingContent([], 'Netflix', 'Action'), "We currently only support 'Movie' or 'TV Show' types.");
    });

    it("returns correct when all params are correct", () => {
      const result = streamingServiceSelector.selectingContent('Movie', 'Netflix', 'Action');
      assert.strictEqual(result, `You can watch this Action Movie on Netflix. Enjoy your Action-filled experience!`)
    });
  });

  describe('availablePlatforms method', () => {
    it('throws an error when platform is not an array', () => {
      assert.throws(() => streamingServiceSelector.availablePlatforms(1, 5), "Invalid platform selection.");
      assert.throws(() => streamingServiceSelector.availablePlatforms('string', 5), "Invalid platform selection.");
      assert.throws(() => streamingServiceSelector.availablePlatforms({}, 5), "Invalid platform selection.");
    });

    it('throws an error when passed a non-integer', () => {
      assert.throws(() => streamingServiceSelector.availablePlatforms((["Netflix", "HBO", "Disney+"]), '5'), "Invalid platform selection.");
      assert.throws(() => streamingServiceSelector.availablePlatforms((["Netflix", "HBO", "Disney+"]), []), "Invalid platform selection.");
    });

    it('throws an error when index is < 0', () => {
      assert.throws(() => streamingServiceSelector.availablePlatforms((["Netflix", "HBO", "Disney+"]), -1), "Invalid platform selection.");
    });

    it('throws an error when index is >= array.length', () => {
      assert.throws(() => streamingServiceSelector.availablePlatforms((["Netflix", "HBO", "Disney+"]), 3), "Invalid platform selection.");
      assert.throws(() => streamingServiceSelector.availablePlatforms((["Netflix", "HBO", "Disney+"]), 4), "Invalid platform selection.");
    });

    it('returns correct when all params are correct', () => {
      const result = streamingServiceSelector.availablePlatforms((["Netflix", "HBO", "Disney+"]), 2)
      assert.strictEqual(result, "Other available platforms are: Netflix, HBO.")
    })
  })

  describe('contentRating method', () => {
    it('throws an error when runtime is not a number', () => {
      assert.throws(() => streamingServiceSelector.contentRating('10', 10), "Invalid runtime or rating.");
      assert.throws(() => streamingServiceSelector.contentRating([], 10), "Invalid runtime or rating.");
    })

    it('throws an error when runtime is a negative or 0', () => {
      assert.throws(() => streamingServiceSelector.contentRating(-19, 10), "Invalid runtime or rating.");
      assert.throws(() => streamingServiceSelector.contentRating(0, 10), "Invalid runtime or rating.");
    })

    it('throws an error when rating is not a number', () => {
      assert.throws(() => streamingServiceSelector.contentRating(50, '10'), "Invalid runtime or rating.");
      assert.throws(() => streamingServiceSelector.contentRating(140, [10]), "Invalid runtime or rating.");
    })

    it('throws an error when rating is < 0 and > 10', () => {
      assert.throws(() => streamingServiceSelector.contentRating(50, 11), "Invalid runtime or rating.");
      assert.throws(() => streamingServiceSelector.contentRating(140, -1), "Invalid runtime or rating.");
    })

    it('returns correct when rating is = 7', () => {
      const result = streamingServiceSelector.contentRating(60, 7);
      assert.strictEqual(result, 'This content is highly rated (7/10) and has a runtime of 1.00 hours. Enjoy your watch!')
    })

    it('returns correct when rating is > 7', () => {
      const result = streamingServiceSelector.contentRating(60, 10);
      assert.strictEqual(result, 'This content is highly rated (10/10) and has a runtime of 1.00 hours. Enjoy your watch!')
    })

    it('returns correct when rating is < 7', () => {
      const result = streamingServiceSelector.contentRating(60, 1);
      assert.strictEqual(result, 'This content has a lower rating (1/10) and runs for 1.00 hours. You might want to check reviews first.')
    })

    it("returns runtime formatted to two decimal places", () => {
      const result = streamingServiceSelector.contentRating(95, 7);
      assert.include(result, "1.58 hours");
    });
  })
});
