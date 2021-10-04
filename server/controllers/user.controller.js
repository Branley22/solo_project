const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  register:(req,res)=>{
    console.log("in register");
    console.log(req.body);

    const user = new User(req.body);

    user.save()
    .then((newUser)=>{
      console.log(newUser);
      console.log("Successfully registered");
      res.json({
        successMessage: "Thanks for registering",
        user: newUser
      })
    })
    .catch((err)=>{
      console.log("registering not successful");
      console.log(err);
      res.status(400).json(err);
    })
  },
  login:(req,res)=>{
    User.findOne({email: req.body.email})
    .then((userRecord)=>{
      if(userRecord === null){
        res.status(400).json({message: "Invaild login Attempt"})
      }
      else{
        bcrypt.compare(req.body.password, userRecord.password)
        .then((isPasswordValid)=>{
          if(isPasswordValid){
            console.log("Password is valid");

            res.cookie("usertoken",

              jwt.sign({
                user_id: userRecord._id,
                email: userRecord.email
              },
              process.env.JWT_SECRET),

              {
               httpOnly: true,
               expires: new Date(Date.now()+9000000)
             }
            )
            .json({
              message: "Successfully logged in",
              userLoggedIn: userRecord.username
            })
          }
          else{
            res.status(400).json({message: "Login and/or Email invalid"});
          }
        })
        .catch((err)=>{
          console.log(err);
          res.status(400).json({message: "Invalid Attempt"});
        })
      }
    })
    .catch((err)=>{
      console.log("error");
      res.status(400).json({message: "Invalid Attempt"})
    })
  },
  logout:(req,res)=>{
    console.log("logging out");
    res.clearCookie("usertoken");
    res.json({
      message: "You have successfully logged out"
    })
  }
}