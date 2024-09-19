require('dotenv').config();

let express = require('express')
let app = express();

let port = process.env.port || 9091
let roomsroute = require('./routes/rooms_routes')


app.use(express.static('./hotel_frontend/build'))

app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use('/rooms',roomsroute);
app.listen(port);  