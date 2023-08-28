import Bowerman from '../bowerman';

const standard = {
  health: 100,
  level: 1,
  name: 'Ivan',
  type: 'Bowerman',
  attack: 25,
  defence: 25,
};

test('Bowerman has the right name', () => {
  const result = new Bowerman('Ivan', 'Bowerman');

  expect(result).toEqual(standard);
});

test('Bowerman has the wrong name', () => {
  expect(() => {
    const result = new Bowerman('I', 'Bowerman');
  }).toThrow(new Error('the name must contain from 2 to 10 characters'));
});

test('Bowerman has the wrong character', () => {
  expect(() => {
    const result = new Bowerman('Ivan', 'Bwerman');
  }).toThrow(new Error('a non-existent game character'));
});

test('testing damage in Character', () => {
  const character = new Bowerman('sdff', 'Bowerman');
  character.damage(20);

  expect(character.health).toBe(85);
});

test('testing levelUp in Character', () => {
  const character = new Bowerman('sdff', 'Bowerman');
  character.levelUp();

  expect(character).toEqual({
    health: 100,
    level: 2,
    name: 'sdff',
    type: 'Bowerman',
    attack: 30,
    defence: 30,
  });
});

test('testing levelUp Error in Character', () => {
  const character = new Bowerman('sdff', 'Bowerman');
  character.health = 0;

  expect(() => {
    character.levelUp();
  }).toThrow('You are dead');
});
