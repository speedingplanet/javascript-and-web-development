// @ts-check

import { fileURLToPath } from 'node:url';
import process from 'node:process';
import path from 'node:path';
import fs from 'fs-extra';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let beginFolderName = 'begin';
let finishedFolderName = 'finished';
let labsParentPrefix = '../../labs';
let labsLocalPrefix = '../labs';
let backupPrefix = `../tmp/backup-${Date.now()}`;

/**
 * @param {string} directory
 * @param {boolean} [relative=false]
 */
async function clean(directory, relative = false) {
	try {
		let target = directory;
		if (relative) target = path.resolve(__dirname, directory);
		let result = await fs.emptyDir(target);
		console.log(`Successfully cleaned ${target}`);
		return result;
	} catch (err) {
		console.error(`clean(${directory}): ${err.message}`);
		throw err;
	}
}

async function backup() {
	let src = path.resolve(__dirname, labsLocalPrefix);
	let dest = path.resolve(__dirname, backupPrefix);
	try {
		let srcExists = await fs.exists(src);
		if (!srcExists) {
			console.warn('Nothing to back up!');
			return;
		}
		await fs.copy(src, dest, {
			filter: (src) => !src.includes(finishedFolderName),
		});
		await clean(src);
		console.log(`Successfully backed up the labs folder to ${dest}`);
	} catch (err) {
		console.error(`backup(): ${err.message}`);
	}
}

/**
 *
 * @param {string} labNumber
 */
async function begin(labNumber) {
	let labDir = `lab-${labNumber}`;
	let labsFrom = path.resolve(__dirname, labsParentPrefix, beginFolderName, labDir);
	try {
		let labsFromExists = await fs.exists(labsFrom);
		if (!labsFromExists) throw new Error(`Could not find lab ${labNumber}`);
		await backup();
		let labsTo = path.resolve(__dirname, labsLocalPrefix);
		await fs.copy(labsFrom, labsTo);
		console.log(`Successfully set up the labs folder for ${labsLocalPrefix}`);
	} catch (err) {
		console.error(`begin(): ${err.message}`);
	}
}

/**
 *
 * @param {string} labNumber
 */
async function finish(labNumber) {
	let labDir = `lab-${labNumber}`;
	let labsFrom = path.resolve(__dirname, labsParentPrefix, finishedFolderName, labDir);
	try {
		let labsFromExists = await fs.exists(labsFrom);
		if (!labsFromExists) throw new Error(`Could not find lab ${labNumber}`);
		let labsTo = path.resolve(__dirname, labsLocalPrefix, finishedFolderName, labDir);
		await clean(labsTo);
		await fs.copy(labsFrom, labsTo);
		console.log(`Successfully copied the solution for ${labDir}`);
	} catch (err) {
		console.error(`finish(): ${err.message}`);
	}
}

async function save(labNumber, beginFinish) {
	let labDir = `lab-${labNumber}`;
	let labsTo = path.resolve(
		__dirname,
		labsParentPrefix,
		beginFinish === 'begin' ? beginFolderName : finishedFolderName,
		labDir
	);
	let labsFrom = path.resolve(__dirname, labsLocalPrefix);
	try {
		await clean(labsTo);
		await fs.copy(labsFrom, labsTo, {
			filter: (src) => !(src.includes('.gitkeep') || src.includes('finished')),
		});
		console.log(`Successfully saved files to ${labsTo}`);
	} catch (err) {
		console.error(`save(): ${err.message}`);
	}
}

/**
 *
 * @param {string} labNumber
 */
async function defaultOperation(labNumber) {
	try {
		await begin(labNumber);
	} catch (err) {
		console.error(`finish(): ${err.message}`);
	}
}

const operations = {
	backup,
	begin,
	clean,
	finish,
	save,
	default: defaultOperation,
};

let [operation, labNumber] = process.argv.slice(2);
if (labNumber?.length === 1) labNumber = '0' + labNumber;

// If the first argument is a number, do the default action
if (Object.keys(operations).includes(operation)) {
	operations[operation](labNumber);
} else if (!isNaN(Number(operation))) {
	// Operation is actually a lab number
	labNumber = operation;
	operations.default(labNumber);
} else {
	// Bad arguments
	console.log(`
	Usage:
		$ npm run setup <lab-number>
		OR
		$ npm run setup <operation> <lab-number>
	
	Default: Backs up the labs/ folder. Deletes contends of labs/ Copies starter
			code for labs-<lab-number> to the labs/ folder.
	
	Operations:
		backup: backs up labs/ to ./tmp/backup-\${Date.now()}
		begin: copies starter code for <lab-number> into labs. Wipes out previous
				version of only this lab number. 
		finish: copies completed code for <lab-number> into labs. Wipes out previous
				version of only this lab-number
	`);
	process.exit(1);
}
