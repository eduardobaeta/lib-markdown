import getFile from './index.js'
import chalk from 'chalk';
import validateUrls from './http-validation.js'

const path = process.argv;

async function processText(filePath) {
    const result = await getFile(filePath[2]);
    if (path[3] === "validate") {
        console.log(chalk.yellow("Validate Links"), await validateUrls(result))
    }
    else {
        console.log(chalk.yellow("Links List"), result)
    }
}

processText(path);

