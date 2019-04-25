let Mongo = require("mongodb-curd");
let dbname = 'lemon';

module.exports = {
    getBill(req,res){
        let {time,type,name} = req.body;
        let query = {time:new RegExp('^'+time)};
        if(!time){
            return res.send({code:2,mas:参数不完整})
        }
        if(type){
            query.type=type;
        }
        if(name){
            query.name={$in:name.split(",")}
        }
        Mongo.find(dbname,"bill",query,function(result){
            if(!result){
                res.send({code:0})
            }
            res.send({code:1,data:result})
        })
    },
    removeBill(req,res) {
        let {_id} = req.query
        if(!_id) {
            return res.send({code:2,mes:"参数不完整"})
        }
        Mongo.remove(lemon,'bill',req.query,(result) => {
            if(!result) {
                res.send({code:0,mes:"error"})
            } else {
                res.send({code:1,mes:"success"})
            }
        })
    },
    addBill(req,res) {
        let {time,type,name,userId} = req.body
        if(!time || !type || !name || !userId) {
            return res.send({code:2,mes:"参数不完整"})
        }
        Mongo.insert(lemon,'bill',req.body,(result) => {
            if(!result) {
                res.send({code:0,mes:"error"})
            } else {
                res.send({code:1,mes:"success"})
            }
        })
    }
}