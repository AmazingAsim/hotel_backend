let express = require('express')
let app = express();
let cors = require('cors')
let port = process.env.port || 9091
let roomsroute = require('./routes/rooms_routes')


// cross origin resource sharing
app.use(cors({
    origin:'*',
    methods:['GET','POST','UPDATE','DELETE','PUT']
}))

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.send('hello and welcome to hotel management backend app')
})

app.use('/rooms',roomsroute);
app.listen(port);