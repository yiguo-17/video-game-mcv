
const express = require('express')
const router = express.Router()
let videoGames = require('../models/Games')



const 
{getAllGames, getSingleGame, createNewGame, updateGame, deleteGame}= require ('../controllers/GameController') 


// get all
router.get('/all-games', getAllGames )



//get one
router.get('/single-game/:id', getSingleGame) ;


//post
router.post('/create-game', createNewGame)


//update



router.put('/update-game/:id',updateGame )


// delete

router.delete('/delete-game/:id',deleteGame )


module.exports = router