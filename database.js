// 'use strict';
// const mongoose = require('mongoose');
// require('dotenv').config();

// module.exports = () => {
//   try {
//     mongoose.connect(proccess.env.Mongo_URL, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,
//         useFindAndModify: true,
//     }).then(() => console.log('Connected to Mongodb......'));
    
//   } catch (error) {
//     console.log(`error occuring in the db${error}`)
//   }  
// }
// const connectDB = async ()=>{
//     try {
//            mongoose.connect(proccess.env.Mongo_URL, {
//                 useNewUrlParser: true,
//                 useUnifiedTopology: true,
//                useCreateIndex: true,
//                useFindAndModify: true,
//             }).then(() => console.log('Connected to Mongodb......'));
            
//        } catch (error) {
//             console.log(`error occuring in the db${error}`)
//           }  

// }

// module.exports = connectDB