var configValues = require('./config');

module.exports = {
    getConnectionString:function(){
        return `mongodb+srv://${configValues.uname}:${configValues.pwd}@cluster0-itn08.mongodb.net/bookshelf?retryWrites=true`
    }
}