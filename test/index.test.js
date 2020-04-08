const assert = require('assert');
const { assign } = require('..');

const test = (description, example) => {
  const log = (obj) => {
    if (obj) console.log(obj);
    console.log('\u001B[32m✓\u001B[39m');
  };
  console.log(description);
  return {
    equals(expected) {
      assert.deepStrictEqual(example, expected);
      log(expected);
    },
    fails() {
      assert.throws(example);
      log();
    },
  };
};

(() => {
  const target = {
    boolean: true,
    string: 'abc',
    object: { number: 0, any: 0 },
  };
  const array = ['34', 'abc', [14, 2]];
  const expected = {
    boolean: '34',
    string: 'abc',
    object: { number: 14, any: 2 },
  };
  assign(target, array);
  test('Assigns array to object', target).equals(expected);
})();

(() => {
  const target = ['34', 'abc', [14, 2]];
  const source = {
    boolean: true,
    string: 'abc',
    object: { number: 0, any: 0 },
  };
  const expected = [true, 'abc', [0, 0]];
  assign(target, source);
  test('Assigns object to array', target).equals(expected);
})();

(() => {
  const target = {
    boolean: true,
    string: 'abc',
    object: { number: 0, any: 0 },
  };
  const source = {
    boolean: '34',
    string: 4,
    object: { number: 14, any: null },
  };
  const expected = {
    boolean: '34',
    string: 4,
    object: { number: 14, any: null },
  };
  assign(target, source);
  test('Assigns object to object', target).equals(expected);
})();

(() => {
  const target = {};
  const array = ['34', 4, [14, null]];
  const expected = {};
  assign(target, array);
  test('Assign array to empty object results in empty object', target).equals(
    expected
  );
})();

(() => {
  const target = [];
  const source = {
    boolean: true,
    string: 'abc',
    object: { number: 0, any: 0 },
  };
  const expected = [true, 'abc', { number: 0, any: 0 }];
  assign(target, source);
  test('Assigns to empty array', target).equals(expected);
})();

(() => {
  const target = {};
  const source = {
    boolean: true,
    string: 'abc',
    object: { number: 0, any: 0 },
  };
  assign(target, source);
  test('Assigns to empty object', target).equals(source);
})();

(() => {
  const target = {
    boolean: true,
    string: 'abc',
    object: { number: 0, null: null },
  };
  const source = { a: false, b: '1', c: { a: 0, b: 1 } };
  const expected = {
    a: false,
    b: '1',
    c: { a: 0, b: 1 },
    boolean: true,
    string: 'abc',
    object: { number: 0, null: null },
  };
  assign(target, source);
  test('Merge different object with differing property names', target).equals(
    expected
  );
})();

(() => {
  const target = {
    boolean: true,
    string: [],
    object: { number: 0, any: 0 },
  };
  const array = [false, { boolean: true, a: 3 }, [0, 3]];
  const expected = {
    boolean: false,
    string: [true, 3],
    object: { number: 0, any: 3 },
  };
  assign(target, array);
  test('Assigns mixed', target).equals(expected);
})();
