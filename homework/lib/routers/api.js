var router = require('express').Router(),
    users = require("/lib/models/users.js");

router.route('/user'),
        .get(function(req,res,next){
            res.status(200).send(users)
        })
router.route('/user/:id')
        .get(function(req,res,next){
            var id = req.params.id;
            if(id>=0&&id<users.length){
                res.status(200).send(users[id].firstName,users[id].lastName]);
            }else{
                res.status(404).send('Not Found')
            }
        });
router.route('/user/:id')
        .put
module.exports=router;
