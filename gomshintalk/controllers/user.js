const pool=require('../modules/pool');
const postModel=require('../models/post');
const util=require('../modules/util');
const resMessage=require('../modules/responseMessage');
const statusCode=require('../modules/statusCode');

const controllers={
    showList: async(req, res)=>{
        const result=await postModel.read();
        if(result==false){
            res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.DB_ERROR))
        }
        var temp=[];
        for(var i=1;i<result.length+1;i++){
            temp_2 = result[i-1];
            temp_2["bestNum"] = i;
            temp.push(temp_2)
        }
        res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.READ_POST_SUCCESS,temp))
    }
}

module.exports=controllers;