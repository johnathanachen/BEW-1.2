var mongoose = require('mongoose'),
    bcrypt = require("bcrypt-nodejs"),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    createdAt       : { type: Date }
  , updatedAt       : { type: Date }

  , name           : { type: String, unique: true, required: false }
  , password        : { type: String, required: true }
  , first           : { type: String, required: false }
  , last            : { type: String, required: false }
  , admin           : { type: Boolean }

});

// UserSchema.pre('save', function(next){
//   // SET createdAt AND updatedAt
//   var now = new Date();
//   this.updatedAt = now;
//   if ( !this.createdAt ) {
//     this.createdAt = now;
//   };
//
//   // ENCRYPT PASSWORD
//   var user = this;
//   if (!user.isModified('password')) {
//     return next();
//   };
//   bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash(user.password, salt, null, function(err, hash) {
//       user.password = hash;
//       next();
//     });
//   });
// });
//
// UserSchema.methods.comparePassword = function(password, done) {
//   bcrypt.compare(password, this.password, function(err, isMatch) {
//     done(err, isMatch);
//   });
// };

module.exports = mongoose.model('User', UserSchema);
