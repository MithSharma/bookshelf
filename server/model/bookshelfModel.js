var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var bookshelfModelSchema = new Schema({
        imageURL:String,
        name:String,
        author:String,
        ReadState: String,
        genre:String
});

var bookshelfModel = mongoose.model('bookshelf',bookshelfModelSchema);

module.exports = bookshelfModel;