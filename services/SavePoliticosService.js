const fs = require("fs");
const fastcsv = require("fast-csv");
const Politicians = require("../models/Politicians");

function ParseCSV(file) {
  let stream = fs.createReadStream(__dirname, "..", `./politicos/${file}`);
  let csvData = [];
  let csvStream = fastcsv
    .parse({ delimiter: ";", quote: '"', headers: true })
    .on("data", function (data) {
      csvData.push(data);
    })
    .on("end", function () {
      Politicians.create(csvData)
        .then(console.log("Dados importados com sucesso!"))
        .catch((error) => console.log(error));
    });
  stream.pipe(csvStream);
}

module.exports = {
  async execute({ election_type, year, files }) {
    const data = { election_type, year, files };
    const politicos = data;
    console.log(files.originalName);
    ParseCSV(files.originalName);
    return politicos;
  },
};
