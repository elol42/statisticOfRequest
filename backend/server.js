import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'



// const app = express();

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/statisticOfRequest"
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

const Company = mongoose.model('Company', {
        name: String
})

const seedDatabase = async () => {
    const company1 = new Company({ name: 'Company NR1' })
    await company1.save()

    const company2 = new Company({ name: 'Company NR2' })
    await company2.save()
}
seedDatabase()

const port = process.env.PORT || 8080
const app = express()

app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Statistics')
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