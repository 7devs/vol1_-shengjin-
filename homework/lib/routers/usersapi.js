var router = require('express').Router(),
    users = require("/lib/models/users.js");

router.route('/'),
        .get(function(req,res,next){
            res.status(200).send(users)
        });

router.route('/:id')
        .get(function(req,res,next){
            var id = req.params.id;  //把用户输入的（地址）数据取回本地

            if(id>=0&&id<users.length){
                res.status(200).send(users[id].firstName,users[id].lastName]);
            }else{
                res.status(404).send('Not Found')
            }
        });
router.route('/:id')
        .put(function(req,res,next){
            var id = req.params.id;
            var user = users[id];
            var age = parseInt(req.body.id);//parseInt 是将对象转换成数字的方法

            if(user){
                if(isNaN(age)){    //这里isNaN用来判断age有没有错误，即=号后面的执行有没有错误，也就是判断用户有没有输入数字
                    res.status(404).send('错误')
                }else{
                    user.age = age;
                    res.status(200).send(user)
                }
            }else{
                res.status(404).send('No Found')
            }
});

router.route('/count/:sex')
        .get(function(req,res,next){
            var sex = req.params.sex;
        })






        });



module.exports=router;
