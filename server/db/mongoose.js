var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://dbEsq:pswd136@ds227322.mlab.com:27322/nodejs');

module.exports  = {
  mongoose
};
