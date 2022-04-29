const Politicians = require('../models/Politicians')

module.exports = class PoliticiansController {

  static showPoliticians = (req, res) => {
    Politicians.findAll({ raw: true })
      .then((data) => {
        let emptyPoliticians = false

        if (data.length === 0) {
          emptyPoliticians = true
        }

        res.render('politicians/all', { politicians: data, emptyPoliticians })
      })
      .catch((err) => console.log(err))
  }

  static showSyncPoliticians = (req, res) => {
    res.render('politicians/showSync')
  }

  static save = async (request, response) => {
    const { election_type, year } = request.body;

    const files = request.files;

    try {
      const politicos = await ParseCSV(files.originalName);

      return response.json(politicos);
    } catch (error) {
      console.log(error);
    }
  }

  ParseCSV = (file) => {
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

}
