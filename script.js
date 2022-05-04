const mongoose=require ("mongoose")

const User = require("./User");

const uri =
`mongodb+srv://leas:Aa025853523@cluster0.qut1p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(uri);

async function saveToDB() {
  const newUser = new User({ name: "Avi", age: 33 });
  console.log(newUser);
  await newUser.save();
}
async function find() {
  const findUser = { name: "Avi", age: 33 };
  const found = await User.findOne(findUser);
  console.log("Found user ?");
  console.log(`found:${found}`);
}

saveToDB();
find()




// const uri = 
// `mongodb+srv://leas:Aa025853523@cluster0.qut1p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
// mongoose.connect(uri)
// const User=require ("./User")

// async function saveToDB(){
//     const newUser =new User({name:"lea", age:30})
//     await newUser.save();
//     console.log(newUser)
// }

// // async function find(){
// //     const findUser = {name:"lea", "age":30}
    
// // }

// saveToDB()