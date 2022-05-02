import { ParseCSVToJson } from '#helpers/parse-csv-to-json'

export default class PoliticiansController {

  static showSyncPoliticians = (req, res) => {
    res.render('politicians/showSync')
  }

  static save = async (req, res) => {
    const { election_type, year } = req.body

    const files = req.files

    try {
      const politicians = await ParseCSVToJson(files[0].filename)

      res.render('politicians/listPoliticians', { politicians })
    } catch (error) {
      console.log(error)
    }
  }

}
