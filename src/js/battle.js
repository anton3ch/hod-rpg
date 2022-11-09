import {Character, Skills} from './characters.js'
import {Monster} from './monsters.js'

let charSkills = new Skills;


export class Battlefield {
 constructor(character, monster){
    this.character = character;
    this.monster = monster;
  }

  showInitialStats() {
    return `${this.character.name} vs ${this.monster.name}\nHealth:\n${this.character.health}HP vs ${this.monster.health}HP`
  }

  characterHit() {
    if(this.character.special === 'Hit-advantage') {
      this.monster.health -= (this.character.skills.strength + 1);
      return `${this.monster.name} Hit! Remaining Health: ${this.monster.health}`;
    } else {
      this.monster.health -= this.character.skills.strength;
      return `${this.monster.name} Hit! Remaining Health: ${this.monster.health}`;
    }
  }

  monsterHit() {
    if(this.character.special === 'Fire-resistant' && this.monster.special === "fire") {
      this.character.health -= (this.monster.strength -1);
      return `${this.character.name} Hit! Remaining Health: ${this.character.health}`;
    } else if (this.character.special === 'Cold-resistant' && this.monster.special === "ice") {
      this.character.health -= (this.monster.strength -1);
      return `${this.character.name} Hit! Remaining Health: ${this.character.health}`;
    } else {
      this.character.health -= this.monster.strength;
      return `${this.character.name} Hit! Remaining Health: ${this.character.health}`;
    }
  }

  checkWinner() {
    if (this.monster.health === 0 && this.character.health === 0) {
      return `Alas! You both died a gruesome death!`
    } else if (this.character.health === 0) {
      return `${this.monster.name} Wins!`
    } else if (this.monster.health === 0) {
      return `${this.character.name} Wins!`
    } else {
      return `Remaining Health:\n${this.character.name}: ${this.character.health}\n${this.monster.name}: ${this.monster.health}`
    }
  }
//   displayStats(monster, character) {
//     return `${character.name} : ${this.character.health}, ${monster.name} ${monster.health}`
//   }
}
