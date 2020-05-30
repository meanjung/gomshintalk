const pool=require('../modules/pool');
const table_a='post';
const table_b='user';

const models={
    read: async ()=>{
        const query=`select * from ${table_a} join ${table_b} on ${table_a}.userIdx = ${table_b}.userIdx order by likeNum desc`;
        try{
            const result=await pool.queryParam(query);
            if(result.length===0){
                return false;
            }else{
                return result
            }
        }catch(err){
                throw err;
        }
    }
}

module.exports=models;
