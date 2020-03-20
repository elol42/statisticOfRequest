import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import crypto from 'crypto'
import bcrypt from 'bcrypt-nodejs'



// const app = express();

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/statisticOfRequest"
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

const Company = mongoose.model('Company', {
        name: String,
        totaltSum: Number,
        events: [{name: String, value: Number}],
})

const seedDatabase = async () => {
  await Company.deleteMany()

    const company1 = new Company({ name: 'Company NR1', totalSum: 400, events: [
      { name: 'Agent', value: 100 },
      { name: 'Agent', value: 100 },
      { name: 'Google', value: 25 },
      { name: 'Google', value: 25 },
      { name: 'Google', value: 25 },
      { name: 'Google', value: 25 },
      { name: 'Google', value: 25 },
      { name: 'Wavenet', value: 50 },
      { name: 'Wavenet', value: 50 },
    ] })
    await company1.save()

    const company2 = new Company({ name: 'Company NR2', totalSum: 450, events: [
      { name: 'Agent', value: 100 },
      { name: 'Agent', value: 100 },
      { name: 'Google', value: 25 },
      { name: 'Google', value: 25 },
      { name: 'Google', value: 25 },
      { name: 'Google', value: 25 },
      { name: 'Google', value: 25 },
      { name: 'Wavenet', value: 50 },
      { name: 'Wavenet', value: 50 },
      { name: 'Wavenet', value: 50 },
    ] })
    await company2.save()

    const company3 = new Company({ name: 'Company NR3', totalSum: 550, events: [
      { name: 'Agent', value: 150 },
      { name: 'Agent', value: 150 },
      { name: 'Google', value: 25 },
      { name: 'Google', value: 25 },
      { name: 'Google', value: 25 },
      { name: 'Google', value: 25 },
      { name: 'Google', value: 25 },
      { name: 'Wavenet', value: 50 },
      { name: 'Wavenet', value: 50 },
      { name: 'Wavenet', value: 50 },
    ] })
    await company3.save()

}
seedDatabase()

const User = mongoose.model('User', {
  name: {
   type: String,
   unique: true
  },
  email: {
   type: String,
   unique: true
  },
  password: {
   type: String,
   required: true
  },
  accessToken: {
   type: String,
   default: () => crypto.randomBytes(128).toString('hex')

  }

});

const authenticateUser = async (req, res, next) => {
  if (!req.header('Authorization')){
    res.status(401).json({status: 'No Authorization header received'});
  }
  const user = await User.findOne({accessToken: req.header('Authorization')});
  if(user){
    req.user = user;
    next();
  }else {
    res.status(401).json({loggedOut: true});
  }
}


const port = process.env.PORT || 8080
const app = express()

app.use(cors())
app.use(bodyParser.json());

app.get('/', async (req, res) => {
  const totalSum = await Company.find()
    res.send(totalSum)
  })

  app.get('/company', async (req, res) => {
    const companies = await Company.find()
    res.json(companies)
  })

  app.get('/total', async (req, res) => {
    const tempsum = {}
    const returnvalue = []
    const total = await Company.find()
    for (let index = 0; index < total.length; index++) {
      const company = total[index];
      const events = company.events;
      for (let index2 = 0; index2 < events.length; index2++) {
        const eventname = events[index2].name;
        const eventvalue = events[index2].value;
        if(tempsum[eventname]){
          tempsum[eventname] = tempsum[eventname]+eventvalue;
        }
        else{
          tempsum[eventname] = eventvalue;
        }
      }
    }
    for (const name in tempsum) {
      if (tempsum.hasOwnProperty(name)) {
        const value = tempsum[name];
        returnvalue.push({ "name": name, "value": value }) 
      }
     }
    res.json(returnvalue)
  })

  app.post('/users', async (req, res) => {
    try {
      const {name, email, password} = req.body;
      const user = new User({name, email, password: bcrypt.hashSync(password)});
     
      await user.save()
      res.status(201).json({id: user._id, accessToken: user.accessToken});
    
    } catch (err) {
      res.status(400).json({message: 'Could not create user', errors: err.errors});
    }
    });

    app.get('/secrets/', authenticateUser);
    app.get('/secrets/', (req, res) => {
      console.log('Inside /secrets')
    res.json({secret: 'This is a message only shown if user is logged in and has an accessToken'});
    });

    app.post('/sessions', async (req, res) => {
      const user = await User.findOne({email: req.body.email});
      if(user && bcrypt.compareSync(req.body.password, user.password)){
        res.json({userId: user._id, accessToken: user.accessToken});
      }else {
        res.json({notFound: true});
      }
    });

// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`app running on port ${PORT}`)
// });

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
  })