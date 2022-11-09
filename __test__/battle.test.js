import {Battlefield} from '../src/js/battle.js'
import {Character, Skills} from '../src/js/characters.js'
import {Monster} from '../src/js/monsters.js'

describe('Battlefield', () => {
  let larysCharacter;
  let charSkills;
  let iceDragon;
  let battle;
  beforeEach(() => { 
    charSkills = new Skills();
    larysCharacter = new Character("Larys", "Strong", charSkills);
    larysCharacter.addHouseBonus();
    iceDragon = new Monster("Ice Dragon", "ice", 8);
    battle = new Battlefield(larysCharacter, iceDragon);
  });

  test('should create battlefield object with a character and monster parameter', () => {
    expect(battle.character.name).toEqual("Larys");
    expect(battle.monster.name).toEqual("Ice Dragon");
  });

  test('should create battlefield method that will display character and monster stats', () => {
    expect(battle.showInitialStats()).toEqual(`Larys vs Ice Dragon
Health:
20HP vs 10HP`);
  });

  test('should allow character to hit monster according to strength stat', () => {
    expect(battle.characterHit()).toEqual("Ice Dragon Hit! Remaining Health: 4");
  });

  test('should allow Lannister character to hit monster with additional strength', () => {
    let charSkills2 = new Skills();
    let jamieCharacter = new Character("Jamie", "Lannister", charSkills2);
    jamieCharacter.addHouseBonus();
    let battle2 = new Battlefield(jamieCharacter, iceDragon);
    expect(battle2.characterHit()).toEqual("Ice Dragon Hit! Remaining Health: 1");
  });

  test('should allow monster to hit character according to strength stat', () => {
    expect(battle.monsterHit()).toEqual("Larys Hit! Remaining Health: 12");
  });

  test('character with fire resistance should be hit 1 point less by fire element monsters', () => {
    let charSkills2 = new Skills();
    let raenyraCharacter = new Character("Raenyra", "Targaryen", charSkills2);
    raenyraCharacter.addHouseBonus();
    let fireDragon = new Monster("Fire Dragon", "fire", 8);
    let battle2 = new Battlefield(raenyraCharacter, fireDragon);
    expect(battle2.monsterHit()).toEqual("Raenyra Hit! Remaining Health: 13");
  });

  test('character with ice resistance should be hit 1 point less by ice element monsters', () => {
    let charSkills2 = new Skills();
    let nedCharacter = new Character("Ned", "Stark", charSkills2);
    nedCharacter.addHouseBonus();
    let battle2 = new Battlefield(nedCharacter, iceDragon);
    expect(battle2.monsterHit()).toEqual("Ned Hit! Remaining Health: 13");
  });

  test('should return winning character message if monster health goes to 0', () => {
    battle.monster.health = 0;
    expect(battle.checkWinner()).toEqual("Larys Wins!");
  });

  test('should return winning character message if character health goes to 0', () => {
    battle.character.health = 0;
    expect(battle.checkWinner()).toEqual("Ice Dragon Wins!");
  });

  test('should return health points for each fighter if health is not 0', () => {
    battle.character.health = 2;
    battle.monster.health = 6;
    expect(battle.checkWinner()).toEqual(`Remaining Health:
Larys: 2
Ice Dragon: 6`)});

  test('should return dead message if both character and monster health are 0', () => {
    battle.character.health = 0;
    battle.monster.health = 0;
    expect(battle.checkWinner()).toEqual("Alas! You both died a gruesome death!");
  });
});



