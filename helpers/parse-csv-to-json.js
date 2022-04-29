const fs = require("fs")
const csv = require('csvtojson')
const Iconv = require('iconv').Iconv

const ParseCSVToJson = async (file) => {
    const content = fs.readFileSync(`csv_files/${file}`)
    const iconvConverter = new Iconv('ISO-8859-15', 'UTF-8')
    const buffer = iconvConverter.convert(content);
    const convertedFile = buffer.toString('utf8');
    
    return await csv({delimiter: [";"], }).fromString(convertedFile)

}

module.exports = { ParseCSVToJson }