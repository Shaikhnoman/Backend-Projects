import mongoose from "mongoose";
mongoose.connect('mongodb://0.0.0.0:27017/Flipkarcurd');
const db=mongoose.connection
db.on('open',()=>{
    console.log('connected to DB successfully');
})

let userschema=new mongoose.Schema({
"email":String,
"name":String,
"mobile":String,
"passward":String,
"address":String
})
let userModel=mongoose.model('user',userschema)
let product=new mongoose.Schema({
    "name":String,
    "model":String,
    "price":Number,
    "dispri":Number
})
let productModel=mongoose.model('product',product)
// let u1= new userModel({
//     "email":"Sknoman@gmail.com",
//     "name":"Shaikh Noman",
//     "mobile":"9452452323",
//     "passward":"124324",
//     "address":"asc colony",

// })
// u1.save()
// let u2= new userModel({
//     "email":"Skrafe@gmail.com",
//     "name":"Shaikh Rafe",
//     "mobile":"324545634",
//     "passward":"12345",
//     "address":"juyfdgbfng ",

// })
// u2.save()
// let u3= new userModel({
//     "email":"shahid@gmail.com",
//     "name":"Sk Shahid",
//     "mobile":"234567876",
//     "passward":"8334567",
//     "address":"fsdgfv ",

// })
// u3.save()
// let u4= new userModel({
//     "email":"Aslam@gmail.com",
//     "name":"Md Aslam",
//     "mobile":"876543456",
//     "passward":"cfr678jn",
//     "address":"mhy7ygvbh",

// })
// u4.save()
// let u5= new userModel({
//     "email":"Raj245@gmail.com",
//     "name":"Raj Kumar",
//     "mobile":"456993569",
//     "passward":"nbg78uhg",
//     "address":"knbgftyhb",

// })
// u5.save()
// let u6= new userModel({
//     "email":"Syedmunib@gail.com",
//     "name":"Syed Munib",
//     "mobile":"987654567",
//     "passward":"bgt4esdvgh",
//     "address":"mjnhghb",

// })
// u6.save()
// let u7= new userModel({
//     "email":"AltamashKhan@gmail.com",
//     "name":"Altamash Khan",
//     "mobile":"9876545678",
//     "passward":"mjhgtr566ytg",
//     "address":"njhhlbiu",

// })
// u7.save()
// let u8= new userModel({
//     "email":"Azher424@gmail.com",
//     "name":"Azher Ali ",
//     "mobile":"76546789098",
//     "passward":"jbhui89h9h",
//     "address":"ojfwrflihuygt",

// })
// u8.save()
// let u9= new userModel({
//     "email":"faroquiFurqan@gmail.com",
//     "name":"farooqui  Furqan",
//     "mobile":"98765456789",
//     "passward":"jo8yiyhvb",
//     "address":";olhigutjcgvb",

// })
// u9.save()
//  let u10= new userModel({
//     "email":"Sanaullah@gmail.com",
//     "name":"Snaullah Khan",
//     "mobile":"98765456469",
//     "passward":"jo8yiyhvb",
//     "address":";olhigutjghngncgvb",

// })
// u10.save()
// let p1 = new productModel({
//     "name": "Samsung S10",
//     "price": 50000,
//     "dispri": 40000
// });
// p1.save();

// let p2 = new productModel({
//     "name": "iPhone 12",
//     "price": 80000,
//     "dispri": 75000
// });
// p2.save();

// let p3 = new productModel({
//     "name": "OnePlus 8T",
//     "price": 45000,
//     "dispri": 42000
// });
// p3.save();

// let p4 = new productModel({
//     "name": "Google Pixel 5",
//     "price": 70000,
//     "dispri": 65000
// });
// p4.save();

// let p5 = new productModel({
//     "name": "Sony Xperia 1",
//     "price": 60000,
//     "dispri": 55000
// });
// p5.save();

// let p6 = new productModel({
//     "name": "Oppo Reno 6",
//     "price": 35000,
//     "dispri": 32000
// });
// p6.save();

// let p7 = new productModel({
//     "name": "Vivo X60",
//     "price": 40000,
//     "dispri": 38000
// });
// p7.save();

// let p8 = new productModel({
//     "name": "Realme X7",
//     "price": 30000,
//     "dispri": 28000
// });
// p8.save();

// let p9 = new productModel({
//     "name": "Xiaomi Mi 11",
//     "price": 50000,
//     "dispri": 47000
// });
// p9.save();

// let p10 = new productModel({
//     "name": "Motorola Edge",
//     "price": 55000,
//     "dispri": 52000
// });
// p10.save();
// let readData=async()=>{
//     let result=await userModel.find()
//     console.log(result)
// }
// readData()
// let readData1=async()=>{
//     let result1=await productModel.find()
//     console.log(result1)
// }
// readData1()
let updateprice=async()=>{
    let updat=await productModel.updateOne({ "name": "Google Pixel 5"},{"price":20000})
console.log(updat)}
updateprice()
let deleteproduct=async()=>{
    let updat=await productModel.deleteOne({ "name": "Google Pixel 5"},{"price":20000})

}
deleteproduct()
let updateuser=async()=>{
    let updat1=await userModel.updateOne({ "name":"Shaikh Rafe"},{"address":"efgredgbfsvvfbd"})
console.log(updat1)}
updateuser()

    
