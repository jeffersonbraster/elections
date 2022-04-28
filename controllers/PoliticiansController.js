const Politicians = require("../models/Politicians");
const SavePoliticoExecute = require("../services/SavePoliticosService");

module.exports = class PoliticiansController {
  static showPoliticians(req, res) {
    Politicians.findAll({ raw: true })
      .then((data) => {
        let emptyPoliticians = false;

        if (data.length === 0) {
          emptyPoliticians = true;
        }

        res.render("politicians/all", { politicians: data, emptyPoliticians });
      })
      .catch((err) => console.log(err));
  }

  static showSyncPoliticians(req, res) {
    res.render("politicians/showSync");
  }

  static async save(request, response) {
    const { election_type, year } = request.body;

    const files = request.files;

    try {
      const politicos = await SavePoliticoExecute.execute({
        election_type,
        year,
        files,
      });

      return response.json(politicos);
    } catch (error) {
      console.log(error);
    }
  }
};
