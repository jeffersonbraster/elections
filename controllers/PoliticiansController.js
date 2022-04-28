const Politicians = require('../models/Politicians')

module.exports = class PoliticiansController {

  static showPoliticians(req, res) {
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

  static showSyncPoliticians(req, res) {
    res.render('politicians/showSync')
  }

}
