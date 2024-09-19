const database = require('../repo/database');
let express = require('express')
let roomsroute = express.Router()


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
    let result = await database.query(`select * from rooms where room_id= ?`,[room_id]);
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
  // "${room_id}",${availability},${stars},${capacity},${guestId}
  try {
    let result = await database.query(`insert into rooms values(?,?,?,?,?)`,[room_id,availability,stars,capacity,guestId]);
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
  try {

    let result = await database.query(`UPDATE rooms SET available = ? , stars = ? , capacity = ? , guestId = ? WHERE roomId = ?`,
    [available,stars,capacity,guestId,roomId])

    res.status(201).send(result);
  }

  catch (error) {
    console.log(error)
    res.send(error)
  }

})

module.exports = roomsroute;


