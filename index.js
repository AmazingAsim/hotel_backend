let express = require('express')
let cors = require('cors')
let port = process.env.port || 9091
let app = express()
let room_routes = require('./routes/rooms_route')
app.use(cors({
    origin:'*',
    methods:['GET','POST','UPDATE','DELETE','PUT']
}))
app.use(express.static('./views'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api',room_routes)


app.listen(port,function(){console.log(`server is running on port ${port}`)})