const fs = require("fs")
const fastcsv = require("fast-csv")
const iconv = require('iconv-lite')

const ParseCSVToJson = (file) => {
    const stream = fs.createReadStream(`csv_files/${file}`)
        .pipe(iconv.decodeStream('ISO-8859-15'))
        .pipe(iconv.encodeStream('utf8'))
    let csvData = [];
    let csvStream = fastcsv
        .parse({ delimiter: ";", quote: '"', headers: true, encoding: '' })
        .on("data", function (data) {
            csvData.push(data)
        })
        .on("end", function () {
            console.log('data', csvData)
            // Politicians.create(csvData)
            //   .then(console.log("Dados importados com sucesso!"))
            //   .catch((error) => console.log(error));
        })
    stream.pipe(csvStream)
}

module.exports = { ParseCSVToJson }