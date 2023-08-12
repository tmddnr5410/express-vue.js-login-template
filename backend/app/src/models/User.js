"use strict";

const UserStorage = require("./UserStorage");

class User{
    
    constructor(body){
        this.body = body;
    }

    async login(){
    const client = this.body;
        try{
        const {psword,uid,in_date} = await UserStorage.getUsersInfo(client.uid);
           
                if( uid === client.uid && psword === client.password){
                    return {success: true};
                }
                else{
                return {success: false, msg: "회원 정보가 일치하지 않습니다."}
                }
         
        } catch(err){
            return {success:false,msg: "잠시후 다시 시도해주세요."};
        }
    }
       



}

module.exports = User;