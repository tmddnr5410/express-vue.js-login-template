class HomeCtrl {
  static home(req, res) {
    //console.log(req.session);
    res.render("home/index");
  }

  static main(req, res) {
    //console.log(req.session);
    res.render("home/main");
  }

  static login(req, res) {
    res.render("home/login");
  }



}

module.exports = HomeCtrl;
