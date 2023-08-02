// import { 
// 	express,
// 	fastify,
// 	feathers,
// 	nest
// } from './frameworks/aggregator';

import * as readline from 'readline';
import { stdin as input, stdout as output } from 'process'

const frameWorksOptions = [
	'express',
	'nest',
	'fastify',
	'feathers'
]

const rl = readline.createInterface({
	input,
	output
})

// rl.question('Pick a framework \n', (answer) => {
// 	console.info(`Thanks for selecting ${answer}`)
// });

process.stdin.on('keypress', (c, k) => {
	console.log(c, k)
})



// const configKeysLookup = ['framework', 'db']

// console.log(process.argv)
// const bootstrapArgs = process.argv;
// const config = bootstrapArgs.reduce((acc, curr) => {
// 	if (curr.includes('framework')) {
// 		acc = {
// 			...acc,
// 			framework: curr.split('=')[1]
// 		}
// 	}
// 	if (curr.includes('db')) {
// 		acc = {
// 			...acc,
// 			db: curr.split('=')[1]
// 		}
// 	}
// 	return acc;
// }, {})

// console.log(config)