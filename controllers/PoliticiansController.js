const { ParseCSVToJson } = require('../helpers/parse-csv-to-json')

module.exports = class PoliticiansController {

  static showSyncPoliticians = (req, res) => {
    res.render('politicians/showSync')
  }

  static save = async (request, response) => {
    const { election_type, year } = request.body

    const files = request.files

    try {
      const politicos = await ParseCSVToJson(files[0].filename)

      return response.json(politicos)
    } catch (error) {
      console.log(error)
    }
  }

}
