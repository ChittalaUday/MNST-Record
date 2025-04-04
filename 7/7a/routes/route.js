const express = require('express');
const router = express.Router();

const allTrails = [
  { id: '1', name: 'Mountain Loop Trail', length: '5 miles', difficulty: 'Hard' },
  { id: '2', name: 'Forest Whisper Path', length: '3 miles', difficulty: 'Easy' },
  { id: '3', name: 'Coastal Breeze Way', length: '7 miles', difficulty: 'Moderate' },
];


const home = (req, res) => {
  res.send('Welcome to AdventureTrails!');
};

const trails = (req, res) => {
  res.json(allTrails);
};


router.get('/', home);
router.get('/trails', trails);
router.get('/trails/:id',(req,res)=>{
  const trailId = req.params.id;
  const trail = allTrails.find(t => t.id === trailId);
  if (trail) {
    res.json(trail);
  } else {
    res.status(404).send('Trail not found');
  }
});

module.exports = router;
