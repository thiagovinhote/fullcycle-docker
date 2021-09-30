const Express = require('express');
const Faker = require('faker')
const Path = require('path')
const ExpressLayouts = require('express-ejs-layouts')
const Database = require('./database')

const { PORT = 3000 } = process.env

const app = Express()

app.set('view engine', 'ejs')     // Setamos que nossa engine será o ejs
app.use(ExpressLayouts)
app.use(Express.static(__dirname + '/public'))

Database.connect()

app.get('/', async (_, response) => {
    await Database.query(`INSERT INTO people(name) VALUES ("${Faker.name.findName()}");`)
    const data = await Database.query('SELECT * FROM people;')

    response.render('pages/index', { people: data })
})

app.listen(PORT, () => {
    console.log(`Running: http://0.0.0.0:${PORT}`)
})

process.end