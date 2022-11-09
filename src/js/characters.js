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

export default class character {
  constructor(name, house) {
    this.name = name;
    this.house = house;
    this.level = 1;
    this.special = '';
    // this.stats = {strength: 
    //         intelligence: 
    //         }
    // this.inventory = [all their items]
    // this.hitpoints = // for battle stuff
  }
}