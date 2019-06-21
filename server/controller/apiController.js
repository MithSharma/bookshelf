var bookshelfModel = require('../model/bookshelfModel');
var bodyParser = require('body-parser');

module.exports = function(app){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/bookshelf',function(req,res){
            bookshelfModel.find().then(books => {
                res.send(books);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving books."
                });
            });
    });
    
    app.post('/api/bookshelf',function(req,res){
        if(req.body.id){
            bookshelfModel.findByIdAndUpdate(req.body.id,{
                "ReadState":req.body.ReadState
            },function(err,result){
                if(err) throw err;
                res.send(result);
            })
        }
    });

    app.get('/api/bookshelf/:genre', function(req,res){
        bookshelfModel.find({genre:req.params.genre},function(err,result){
            if (err) throw err;

            res.send(result);
        })

    });
}