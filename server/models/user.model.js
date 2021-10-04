const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required:[true, "Username is required"]
  },
  email: {
    type: String,
    required:[true, "Email is required"]
  },
  password: {
    type: String,
    required:[true, "Password is required"],
    minlength:[8, "Password requires atleast 8 characters"]
  }
}, {timestamps: true})

UserSchema.virtual("confirmPassword")
.get(()=> this._confirmPassword)
.set((value)=> this._confirmPassword = value)

UserSchema.pre("validate", function(next){
  console.log("in validate");

  if(this.password !== this.confirmPassword){
    this.invalidate("confirmPassword", "Password must match")
  }
    console.log("didn't match");
    next();
})

UserSchema.pre("save", function(next){
  console.log("in pre save");
  bcrypt.hash(this.password, 10)
  .then((hashPassword)=>{
    console.log("in hash");
    this.password = hashPassword;
    next();
  })
});



const User = mongoose.model('User', UserSchema);
module.exports = User;