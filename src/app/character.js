import characters from './app';

export default class Character {
  constructor(name, type) {
    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('the name must contain from 2 to 10 characters');
    }

    if (characters.some((item) => item === type.toLowerCase())) {
      this.type = type;
    } else {
      throw new Error('a non-existent game character');
    }

    this.health = 100;
    this.level = 1;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
  }

  levelUp() {
    if (this.health > 0) {
      this.health = 100;
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
    } else {
      throw new Error('You are dead');
    }
  }
}
