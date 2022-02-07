// import {string} from './a';
// console.log(string);
// import { reverse, isOdd} from './utils/index';

// console.log(reverse('alus'), isOdd(35356));

// import defaultString from './a';

// import test = require('./a'); //to import export='test'

if(Math.random()>= 0.5){
    import('./a').then(a=>console.log('The message is', a.string));
}

import * as config from './config.json';
console.log(config.usersettings);

import {cube} from 'cube';
cube(5);

// declare module 'cube'{
//     export function cube(): string;
// }
//cube();