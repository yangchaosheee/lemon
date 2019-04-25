let Mongo = require("mongodb-curd");
let dbname = 'lemon';

module.exports = {
    getUser(req,res){
        let {_id} = req.query;
        if(!_id){
            res.send({code:2,mas:"参数不完成"})
        }
        Mongo.find(dbname,"user",req.query,(result)=>{
            if(!result){
                return res.send({code:0})
            }
            res.send({code:1,data:result})
        })
    }
}