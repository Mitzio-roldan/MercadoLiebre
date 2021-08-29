const express = require ('express');
const app = express();
const path = require('path')
const morgan = require('morgan');
app.use(morgan('tiny'));
app.use(express.static(path.resolve(__dirname, './public')))


app.listen(3000, () => {
    console.log('Server running correctly')
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})