var knex = require("../database/connection");
var bcrypt = require("bcrypt");

class User{
  static async new(email, password, name){
    try{
      password = password.toString();
      var hash = await bcrypt.hash(password, 10);
      await knex.insert({email, password: hash, name, role: 0}).table("users");
    }catch(err){
      console.log(err);
    }
  }

  static async findEmail(email){
    try{
      var result = await knex.select("*").table("users").where({email: email});
      
      if(result.length > 0){
        return true;
      }else{
        return false;
      }

    }catch(err){
      console.log(err);
      return false;
    }
  }
}
 
module.exports = User;