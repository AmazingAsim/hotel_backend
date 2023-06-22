let express = require('express')
let fs = require('fs')
let room_routes = express.Router()

room_routes.get('/getrooms',(req,res)=>{
 
    let rooms = fs.readFileSync('./rooms.json');
    console.log(rooms.toString());
    res.send(rooms.toString());
   
})

room_routes.get('/food',(req,res)=>{
    res.send('this is get food route')
})

room_routes.post('/addfood',(req,res)=>{
    res.send(req.body)
})
room_routes.post('/addrooms',(req,res)=>{
    let rooms = fs.readFileSync('./rooms.json');
    rooms =JSON.parse( rooms.toString())
    console.log(rooms.roomId)
    rooms.push(req.body)
    fs.writeFile('./rooms.json',rooms);
})

room_routes.get('/delete',(req,res)=>{
    fs.rmSync('./rooms.json')
    res.send('deleted')
})


module.exports = room_routes