const User = require("../models/User");

class UserCtrl {

  static async processLogin(req, res) {
    console.log(req.body);
    const user = new User(req.body);
    const response = await user.login();
    

    //로그인 성공시 세션 생성
    if (response.success) {
      req.session.is_logined = true;
      req.session.userid = req.body.uid;
    }

     return res.json(response);
  }

  

}

module.exports = UserCtrl;
