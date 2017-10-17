const router = require('express').Router();
const loginController = require('./controllers/loginController');
const auctionController = require('./controllers/auctionController');


router.use('/login', loginController);
router.use('/auction', auctionController);
router.get('/',(req,res) => {
  res.send('this is api');
});

module.exports = router;
