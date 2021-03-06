const express = require('express')
const app = express()
const port = process.env.PORT || 5000
app.set('view engine', 'ejs')
app.use(express.static(require('path').join(__dirname, './public')))

app.get('/',function (req,res) {
    res.render('index')
})

app.listen(port, console.log(`http://localhost:${port}`))