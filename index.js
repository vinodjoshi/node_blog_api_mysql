const express = require('express')
const exphbs  = require('express-handlebars');
const path = require('path')

const app =  express();
app.use(express.json());

const port = 3000;

app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts')
  }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));


app.get('/test',(req, resp) => {
    resp.sendFile(path.join(__dirname,'public/index.html'));
});

app.use('/', require(path.join(__dirname,'routes/blog.js')));

app.listen(port, () => {
    console.log(`Blog app listening at http://localhost:${port}`)
});