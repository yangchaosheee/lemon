let Mongo = require("mongodb-curd");
let dbname = 'lemon';

module.exports = {
    getClassify(req,res){
        let {userId,type} = req.query;
        if(!userId||!type){
            res.send({code:2,mas:"参数不完成"})
        }
        Mongo.find(dbname,"classify",{type,userId:{$in:["*",userId]}},(result)=>{
            if(!result){
                return res.send({code:0})
            }
            res.send({code:1,data:result})
        })
    },
    getCustom(req,res){
        Mongo.find(dbname,"custom",function(result){
            if(!result){
                return res.send({code:0})
            }
            res.send({code:1,data:result})
        })
    },
    addClassify(req,res){
        let {icon,name,type,userId} = req.body
        if(!icon|| !name || !type || !userId) {
            return res.send({code:2,mes:"参数不完整"})
        }
        Mongo.insert(dbname,"classify",req.body,function(result){
            if(!result){
                return res.send({code:0})
            }
            res.send({code:1})
        })
    }
}