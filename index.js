import chalk from 'chalk';
import fs from 'fs';

async function getFile(filePath) {
    const encoding = "utf-8";
    try {
        const data = await fs.promises.readFile(filePath, encoding);
        return extractLink(data);
    }
    catch (err) {
        throw new Error(chalk.red(err.code, "Invalid path."));
    }
}


function extractLink(text) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;
    while ((temp = regex.exec(text)) !== null) {
        arrayResultados.push({
            [temp[1]]: temp[2]
        })
    }

    return arrayResultados.length === 0 ? { status: 404, result: "No links." } : arrayResultados;
}

export default getFile;