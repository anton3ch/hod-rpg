import Character from '../src/js/characters.js';

describe('Character', () => {
  let myCharacter = new Character("Larys", "Strong");

  test('should correctly create a character object using two parameters', () => {
    expect(myCharacter).toEqual({name: "Larys", house: "Strong", level: 1, special: ''});
  });
})