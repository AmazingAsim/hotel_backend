const database = require('../repo/database');
let express = require('express')
let roomsroute = express.Router()
let mysql = require('mysql2')

roomsroute.get('/getrooms', async (req, res) => {

  try {
    let result = await database.query('select * from rooms');
    console.log(result)
    res.send(result);
  }

  catch (error) {
    console.log(error)
    res.send(error)
  }
})




roomsroute.get('/getroom/:room_id', async (req, res) => {
  try {
    let room_id = req.params.room_id;
    let result = await database.query(`select * from rooms where room_id= ${mysql.escape(room_id)}`);
    console.log(result);
    res.send(result);
  } 
  catch (error) {
    console.log(error)
    res.send(error)
  }
})

roomsroute.post('/addnewroom', async (req, res) => {
  let { room_id, availability, stars, capacity, guestId } = req.body;

  try {
    let result = await database.query(`insert into rooms values
    ("${room_id}",${availability},${stars},${capacity},${guestId})`);
    console.log(result)
    res.send(result);
  } 

  catch (error) {
    console.log(error)
    res.send(error)
  }

})

roomsroute.post('/updateroom', async (req, res) => {
  let { roomId, available, stars, capacity, guestId } = req.body;
  console.log(req.body)
  try {
    let result = await database.query(`UPDATE rooms SET available = ${mysql.escape(available)},
    stars = ${mysql.escape(stars)},capacity = ${mysql.escape(capacity)}
    ,guestId = ${mysql.escape(guestId)} WHERE roomId=${mysql.escape(roomId)}`)
    console.log(result)
    res.send(result);
  }

  catch (error) {
    console.log(error)
    res.send(error)
  }

})

module.exports = roomsroute;