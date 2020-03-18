import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'



// const app = express();

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/statisticOfRequest"
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

const Company = mongoose.model('Company', {
        name: String,
        totaltSum: Number,
        events: [{name: String, value: String}],
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






// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`app running on port ${PORT}`)
// });

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
  })