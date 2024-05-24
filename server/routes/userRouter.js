const Router = require('express');
const router = new Router();
const userController = require('../contollers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.post('/reset', userController.reset);

module.exports = router;
