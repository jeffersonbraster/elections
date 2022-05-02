import { ParseCSVToJson } from "#helpers/parse-csv-to-json";

export default class PoliticiansController {
  static showSyncPoliticians = (req, res) => {
    res.render("politicians/showSync");
  };

  static save = async (req, res) => {
    const { election_type, year } = req.body;

    const files = req.files;

    try {
      const politicians = await ParseCSVToJson(files[0].filename);

      res.render("politicians/listPoliticians", { politicians });
    } catch (error) {
      console.log(error);
    }
  };

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
}
