var router = require('express').Router()
    newsModel = require('../models/news.js');

router.route('/')
        .get(function(req,res,next){
            res.status(200).send(newsModel)
        });
router.route('/:id')
        .get(function(req,res,next){

            var id = req.params.id-1;
            if(id>=0&&id<newsModel.length){
                res.send(newsModel[id])
            }
            else {
                res.send('no fuond.')
            }});
router.route('/:id')
        .delete(function(req,res,next){
    var news;
    var index = parseInt(req.params.id)-1;

    if(index >= 0&&index<newsModel.length){
        news = newsModel.splice(index, 1);
        res.send(news);

    }else{
        res.send('wwwww');
    }

    }
    );



module.exports = router;
