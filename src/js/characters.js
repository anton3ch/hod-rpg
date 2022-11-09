// house 
  // branches off to own attribute for each
// specialty
// intelligence
// strength
// stamina
// charisma
// appearance
  // hair color
  // skin tone
  // eye color
  // etc etc etc

// export class House {
//   constructor(house, character) {

//   }
// }

export class Character {
  constructor(name, house, charSkills) {
    this.name = name;
    this.house = house;
    this.level = 1;
    this.special = '';
    this.skills = charSkills;

  }
}

export class Skills {
  constructor(strength, intelligence, charisma) {
    this.strength = strength;
    this.intelligence = intelligence;
    this.charisma = charisma;
  }
}
  addSkills() {
    //     if house = "house" {
    //       special = "specialAbility"
    //     }
    //     switch 
    //     case: Lannister
    //     character.charisma += 1
  }
//   }
// }
//    this.stats = {strength: 
//         intelligence: 
//         }
// this.inventory = [all their items]
// this.hitpoints = // for battle stuff

