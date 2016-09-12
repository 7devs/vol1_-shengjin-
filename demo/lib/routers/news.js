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
            }


        }

    )
module.exports = router;
