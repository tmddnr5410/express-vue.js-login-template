"use strict";

const db = require('../config/db');


//class명은 파일이름과 동일한게 좋음
class UserStorage{
    
     static getUsersInfo(id){
        return new Promise((resolve,reject) => {
            const query = "SELECT * FROM users where uid = ?;";
            db.query(query,[id],(err,data)=>{
                if(err) throw reject(`${err}`);
                resolve(data[0]);
            });
        });
    }





}
module.exports = UserStorage;
