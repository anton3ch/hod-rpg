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

  showInitialStats() {
    return `${this.character.name} vs ${this.monster.name}\nHealth:\n${this.character.health}HP vs ${this.monster.health}HP`
  }
//   displayStats(monster, character) {
//     return `${character.name} : ${this.character.health}, ${monster.name} ${monster.health}`
//   }
}