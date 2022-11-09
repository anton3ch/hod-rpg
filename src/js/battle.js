import {Character, Skills} from './characters.js'
import {Monster} from './monsters.js'

let charSkills = new Skills;
let larysCharacter = new Character("Larys", "House", charSkills);
let iceDragon = new Monster("ice", 8);


export class Battlefield {
 constructor(character, monster){
    this.character = character;
    this.monster = monster;
  }
//   displayStats(monster, character) {
//     return `${character.name} : ${character.health}, ${monster.name} ${monster.health}`
//   }
}