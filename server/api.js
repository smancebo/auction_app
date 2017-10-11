const router = require('express').Router();
const loginController = require('./controllers/loginController');

router.use('/login', loginController);
router.get('/',(req,res) => {
  res.send('this is api');
});

module.exports = router;
