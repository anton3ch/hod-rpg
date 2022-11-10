export class Character {
  constructor(name, house, charSkills) {
    this.name = name;
    this.house = house;
    this.level = 1;
    this.special = '';
    this.skills = charSkills;
    this.health = 20;
    this.inventory = [];
  }
  
  addHouseBonus() {
    switch(this.house) {
    case "Strong":
      this.special = "Flee-advantage";
      this.skills.charisma += 5;
      this.skills.strength += 6;
      this.skills.intelligence += 9;
      break;
    case "Lannister":
      this.special = "Hit-advantage";
      this.skills.charisma += 6;
      this.skills.strength += 8;
      this.skills.intelligence += 6;
      break;
    case "Targaryen":
      this.special = "Fire-resistant";
      this.skills.charisma += 5;
      this.skills.strength += 7;
      this.skills.intelligence += 8;
      break;
    case "Stark":
      this.special = "Cold-resistant";
      this.skills.charisma += 9;
      this.skills.strength += 7;
      this.skills.intelligence += 4;
      break;            
    }
  }

  levelUp() {
    this.level++;
    this.skills.charisma++;
    this.skills.strength++;
    this.skills.intelligence++;
  }

  addItem(item) {
    this.inventory.push(item);
  }
}

export class Skills {
  constructor() {
    this.strength = 0;
    this.intelligence = 0;
    this.charisma = 0;
  }
}

export class Item {
  constructor(name, strength, intelligence, charisma) {
    this.name = name;
    this.strength = strength;
    this.intelligence = intelligence;
    this.charisma = charisma;
  }
}