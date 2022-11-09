import {Monster} from '../src/js/monsters.js';

describe('Monster', () => {
  let monster = new Monster("fire dragon", "fire", 4);

  test('should correctly create a monster object', () => {
    expect(monster).toEqual({name: "fire dragon", special: "fire", strength: 4, health: 10});
  });
});