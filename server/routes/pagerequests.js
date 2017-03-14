const express = require('express');
const router = express.Router();
const db = require('../../db');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/test', (req, res) => {
  res.send('api works');
});


router.get('/city', (req, res) => {
  var collection = db.get().collection('city');

  collection.find().toArray(function(err, docs){
    if (err) throw err ;
    console.log(docs);

    res.send(docs);
  })

});

router.get('/city/:name', (req, res) => {
  var collection = db.get().collection('city');

  // var escapedName = '/' + req.params.name + '/';
  collection.find({name: req.params.name}).toArray(function(err, docs){
    if (err) throw err;

    res.send(docs);
  })
});

router.get('/weekview', (req, res) => {

  res.send('Got the 16 day forecast');
})

router.get('/forecast', (req, res) => {

  res.send('Got the 16 day forecast');
})

module.exports = router;
