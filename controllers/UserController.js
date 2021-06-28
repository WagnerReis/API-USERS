class UserController{

  async index(req, res) {}

  async create(req, res) {
    var {email, name, password} = req.body;

    if(email == undefined){
      res.status(400);
      res.json("O e-mail é inválido!");
    }

    res.status(200);
    res.send("Tudo OK!");
  }
}

module.exports = new UserController();