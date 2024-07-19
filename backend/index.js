const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/login");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://reemdeeb112:fAmAWqzHSjYftg7o@cluster1.ojbb8ef.mongodb.net/?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true }
);

app.post("/", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Successss");
      } else {
        res.json("incorrect passs");
      }
    } else {
      res.json("record not exist!!");
    }
  });
});

app.post("/signup", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});



const bookModel = require('./models/booking')
 

 
 

 
app.get('/', (req, res) => {
  bookModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})
 
 
app.get('/get/:id', (req, res) => {
    const id = req.params.id
    bookModel.findById({_id: id})
    .then(post => res.json(post))
    .catch(err => console.log(err))
})
 
app.post('/create', (req, res) => {
  bookModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})
 
app.put('/update/:id', (req, res) => {
    const id = req.params.id;
    bookModel.findByIdAndUpdate({_id: id}, {
        fullname: req.body.fullname,
        destination: req.body.destination,
        checkIn: req.body.checkIn,
        checkOut:req.body.checkOut,
        travelClass:req.body.travelClass,
        paxNumber:req.body.paxNumber
    }).then(user => res.json(user))
    .catch(err => res.json(err))
})
 
app.delete('/deleteuser/:id', (req, res) => {
    const id = req.params.id;
    bookModel.findByIdAndDelete({_id: id})
    .then(response => res.json(response))
    .catch(err => res.json(err))
})
 
app.listen(3001, () => {
  console.log("server is runingg!");
});
