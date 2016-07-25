var configValues = require('./config');

module.exports = {

  getDbConnectionString: function(){
    return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds029725.mlab.com:29725/nodetodo'
  }

}
