const express = require('express')
const app = express()
const path = require('path')
const ejsMate = require('ejs-mate')

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/projects', (req, res) => {
    res.render('projects')
})

app.get('/about', (req, res) => {
    res.render('about')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('serving on port 3000')
})