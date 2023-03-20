const mongoose = require("mongoose");
const env = require("dotenv").config();
const User = require("./User");

//db connection local
// mongoose.connect('mongodb://localhost/appdb')
// const db = mongoose.connection
// db.on('error', console.error.bind(console, 'connection error:'))
// db.once('open', function() {
//   console.log('db connected')
// })

//db connection online
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("db connected");
});

//creating user


//promise based approach
// user.save().then(() => console.log("user saved"));

//async function
run()
// async function run() {
//   const user = new User({
//     name: "marufP",
//     age: 25,
//     hobbies: ['gardening', 'cycling'],
//     address: {
//       street: "1",
//       city: "Dhaka",
//       houseNo: 18
//     }
//   });
//   await user.save();
//   console.log(user)
// }

async function run() {
  try {
    const user = new User({
      name: "marufP",
      age: 25,
      hobbies: ["gardening", "cycling"],
      address: {
        street: "1",
        city: "Dhaka",
        houseNo: 18
      },
      bestFriend: "6418a420ebc6837b689d6ad0"
    })
    console.log(user)
  } catch (error) {
    console.log(error)
  }
}

const showBestFriend = async () => {
  try {
    const user = await User.findById("6418a420ebc6837b689d6ad0")
    console.log(user.bestFriend)
  } catch (error) {
    console.log(error)
  }
}

showBestFriend()

