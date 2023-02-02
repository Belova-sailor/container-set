import Character from '../character';

describe('should create an object Character or throw the error', () => {
  test('should create an object Character with the type Daemon', () => {
    const result = new Character('Nemo', 'Daemon');
    const expected = {
      name: 'Nemo',
      type: 'Daemon',
      health: 100,
      level: 1,
    };
    expect(result).toEqual(expected);
  });

  test('throw ecrror if the name of the object is not a string', () => {
    const expected = 'Name of character must be > 2 and < 10 symbol of string!';
    expect(() => new Character(566, 'Zombie')).toThrowError(expected);
  });

  test('throw error if the name of the object is longer than 10 simbols', () => {
    const expected = 'Name of character must be > 2 and < 10 symbol of string!';
    expect(() => new Character('transformer', 'Zombie')).toThrowError(expected);
  });

  test('throw error if the name of the object is less than 2 simbols', () => {
    const expected = 'Name of character must be > 2 and < 10 symbol of string!';
    expect(() => new Character('y', 'Zombie')).toThrowError(expected);
  });

  test('throw error if there is no such hero', () => {
    const expected = 'There is no such hero';
    expect(() => new Character('Bob', 'Sendmen')).toThrowError(expected);
  });
});
