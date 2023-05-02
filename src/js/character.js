export default class Character {
  constructor(name, type, attack, defence, health = 100, level = 1) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      const error = new Error('Incorrect name. The name must not be a number and must contain from 2 to 10 symbols');
      throw error;
    }
    const types = [
      'Bowerman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];

    if (!types.includes(type)) {
      const error = new Error('Such character type does not exist');
      throw error;
    }

    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }
}
