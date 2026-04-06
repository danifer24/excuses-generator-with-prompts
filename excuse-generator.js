// Excuse Generator

const who = [
  'My dog',
  'My cat',
  'My roommate',
  'My neighbor'
];

const action = [
  'ate',
  'destroyed',
  'lost',
  'stole',
  'broke'
];

const what = [
  'my homework',
  'my laptop',
  'my phone',
  'my keys',
  'my wallet'
];

const when = [
  'this morning',
  'yesterday',
  'last night',
  'today',
  'last week'
];

const randomWho = who[Math.floor(Math.random() * who.length)];
const randomAction = action[Math.floor(Math.random() * action.length)];
const randomWhat = what[Math.floor(Math.random() * what.length)];
const randomWhen = when[Math.floor(Math.random() * when.length)];
