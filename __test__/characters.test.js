import {Character, Skills} from '../src/js/characters.js';

describe('Character', () => {
  let larysCharacter;
  let larysSkills;

  beforeEach(() => { 
    larysSkills = new Skills(1,8,1);
    larysCharacter = new Character("Larys", "Strong", larysSkills);
  });

  test('should correctly create a character object using three parameters', () => {
    expect(larysCharacter).toEqual({name: "Larys", house: "Strong", level: 1, special: '', skills: {strength: 1, intelligence: 8, charisma: 1}});
  });

  test('should assign a "special" skill based on house affiliation', () => {
    let daemonCharacter = new Character("Daemon", "Targaryen", larysSkills);
    daemonCharacter.addHouseBonus();
    expect(daemonCharacter.special).toEqual("Fire-resistant");
  });

  test('should assign a "special" skill based on house affiliation', () => {
    let jaimeCharacter = new Character("Jaime", "Lannister", larysSkills);
    jaimeCharacter.addHouseBonus();
    expect(jaimeCharacter.special).toEqual("Hit-advantage");
  });

  test('should assign a "special" skill based on house affiliation', () => {
    let nedCharacter = new Character("Ned", "Stark", larysSkills);
    nedCharacter.addHouseBonus();
    expect(nedCharacter.special).toEqual("Cold-resistant");
  });

  test('should assign a "special" skill based on house affiliation', () => {
    larysCharacter.addHouseBonus();
    expect(larysCharacter.special).toEqual("Flee-advantage");
  });

});

describe('Skills', () => {
  let larysSkills = new Skills(1,8,1);

  test('should correctly create a skills object using three parameters', () => {
    expect(larysSkills).toEqual({strength: 1, intelligence: 8, charisma: 1});
  });
});