// var generateName = require('sillyname');

import generateName from 'sillyName';
import superheroes from 'superheroes';

var sillyName = generateName();

console.log(`My name is ${sillyName}.`);

var superHeroName = superheroes.random()

// console.log(superheroes.all);

console.log(`But My Super Hero Name is ${superHeroName}!`);