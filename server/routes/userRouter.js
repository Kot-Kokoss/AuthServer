const Router = require('express');
const router = new Router();
const userController = require('../contollers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/change', userController.change);

module.exports = router;
