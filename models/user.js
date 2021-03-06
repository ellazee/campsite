var mongoose = require('mongoose');
var bcrypt   = require('bcrypt');

var UserSchema = mongoose.Schema({
	username: {type: String, required: true},
  email: {type: String, unique:true, required: true },
	password: String
});

UserSchema.set('toJSON', {
	transform: function(doc, ret, options) {
		var returnJson = {
			id: ret._id,
			username: ret.username,
			email: ret.email,
			password: ret.password
		};
		return returnJson;
	}
});

UserSchema.methods.authenticated = function(password, callback) {
	bcrypt.compare(password, this.password, function(err,res) {
		if (err) {
			callback(err);
		} else {
			callback(null, res ? this : false);
		}
	});
}

UserSchema.pre('save', function(next) {
	if (!this.isModified('password')) {
		next();
	} else {
		this.password = bcrypt.hashSync(this.password, 10);
		next();
	}
});

module.exports = mongoose.model('User', UserSchema);