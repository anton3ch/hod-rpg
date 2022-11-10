import {Character, Skills} from '../src/js/characters.js';

describe('Character', () => {
  let larysCharacter;
  let charSkills;
  beforeEach(() => { 
    charSkills = new Skills();
    larysCharacter = new Character("Larys", "Strong", charSkills);
  });

  test('should correctly create a character object using three parameters', () => {
    larysCharacter.addHouseBonus();
    expect(larysCharacter).toEqual({name: "Larys", house: "Strong", level: 1, special: 'Flee-advantage', skills: {strength: 6, intelligence: 9, charisma: 5}, health: 20});
  });

  test('should assign a "special" skill based on house affiliation', () => {
    let daemonCharacter = new Character("Daemon", "Targaryen", charSkills);
    daemonCharacter.addHouseBonus();
    expect(daemonCharacter.special).toEqual("Fire-resistant");
  });

  test('should assign a "special" skill based on house affiliation', () => {
    let jaimeCharacter = new Character("Jaime", "Lannister", charSkills);
    jaimeCharacter.addHouseBonus();
    expect(jaimeCharacter.special).toEqual("Hit-advantage");
  });

  test('should assign a "special" skill based on house affiliation', () => {
    let nedCharacter = new Character("Ned", "Stark", charSkills);
    nedCharacter.addHouseBonus();
    expect(nedCharacter.special).toEqual("Cold-resistant");
  });

  test('should assign a "special" skill based on house affiliation', () => {
    larysCharacter.addHouseBonus(); 
    expect(larysCharacter.special).toEqual("Flee-advantage");
  });

  test('should "level up" the character by increasing level by 1', () => {
    larysCharacter.levelUp();
    expect(larysCharacter.level).toEqual(2);
  });

});

describe('Skills', () => {
  let charSkills = new Skills();

  test('should correctly create a skills object using three parameters', () => {
    expect(charSkills).toEqual({strength: 0, intelligence: 0, charisma: 0});
  });
});