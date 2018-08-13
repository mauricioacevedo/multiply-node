const fs = require('fs');
const colors = require('colors');

let createFile = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`Base(${base}) is not a number!!!`);
            return;
        }

        if (!Number(limite)) {
            reject(`Limite (${limite}) is not a number!!!`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tables/table-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`File table-${base}.txt`);
        });
    });
}

let listarBase = (base, limite = 10) => {

    console.log("===============================".green + "holi".yellow.bold);
    console.log(`===MULTIPLY TABLE OF ${base}=========`.green);
    console.log("===============================".green);


    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`Base(${base}) is not a number!!!`);
            return;
        }
        if (!Number(limite)) {
            reject(`Limite (${limite}) is not a number!!!`);
            return;
        }


        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        console.log(data);
    });
}

module.exports = {
    createFile,
    listarBase
}