 const express = require('express');

 const router = express.Router();

 router.get('/', (req, res) => {
   res.send('Welcome to our travel blog!')
 })

 module.exports = router;

