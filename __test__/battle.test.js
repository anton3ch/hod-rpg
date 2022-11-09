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

  // battle(larysCharacter, iceDragon) {
  //   this.hero = 
  //   this.monster =
  // }

  // test('should have the character "hit" the monster and reduce its health', () => {
  //   initiateBattle(larysCharacter, iceDragon);
  //   expect(iceDragon.health).toEqual(4);
  // })
});



