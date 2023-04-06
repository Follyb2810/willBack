'use strict';
const User = require('../models/user-model');
const bcrypt = require('bcryptjs');
//const jwt = require('jsonwebtoken');
//signUP
 exports.signUp = async (req, res, next)=> {
    console.log(req.body)
    const {companyname, email, password} = await req.body;
    if(!companyname || !email || !password){
      return  res.status(400).json({error: 'enter the correct details'});
        
    }
    //avoiding duplicate user 
    User.findOne({email: email})
    .then((dbUser)=>{
        if(dbUser){
            res.status(500).json({error: 'user already exist'});
        }
        bcrypt.hash(password, 16)
   
        .then((hashedPassword)=>{
            const user = new User({companyname, email, password:hashedPassword});
            user.save()
        .then((u)=> {
         res.status(201).json('user registed successfully');
        })
        .catch((error)=> {
            console.log(error);
        });
    
       });
        
       
    })
    .catch((error)=> {
        console.log(error);
    });
    
   
   }
   //login 
exports.login = async (req, res, next) => {
const {email, password}= await  req.body;
if(!email || !password){
 return  res.status(400).json({error: 'enter the correct details'});
 }
 User.findOne({email: email})
 .then((dbUser)=>{
     if(!dbUser){
         return  res.status(400).json({error: 'user not found'}); 
     }   
     bcrypt.compare(password, dbUser.password)
     .then((didMatch)=>{
         if(didMatch){
             res.status(200).json('user logged in successfully');
            // //creating a token for users
             
            //    const jwtToken = jwt.sign({_id: dbUser._id}, "eujdhdjdmnfmfjmfdnfj");
            //     res.json({jwtToken});
         }else 
         return  res.status(400).json({error: 'invalid credentials'});
     })
      })
  .catch((error)=> {
     console.log(error);
 });
}

// module.exports={
//     signUp,
//     login
// }
//routing for Rigister
//app.post('/register', (req, res)=> {
