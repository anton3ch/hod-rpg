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
  
  addHouseBonus() {
    switch(this.house) {
    case "Strong":
      this.special = "Flee-advantage";
      break;
    case "Lannister":
      this.special = "Hit-advantage";
      break;
    case "Targaryen":
      this.special = "Fire-resistant";
      break;
    case "Stark":
      this.special = "Cold-resistant";
      break;            
    }
  }
}


export class Skills {
  constructor(strength, intelligence, charisma) {
    this.strength = strength;
    this.intelligence = intelligence;
    this.charisma = charisma;
  }
}
//   }
// }
//    this.stats = {strength: 
//         intelligence: 
//         }
// this.inventory = [all their items]
// this.hitpoints = // for battle stuff

