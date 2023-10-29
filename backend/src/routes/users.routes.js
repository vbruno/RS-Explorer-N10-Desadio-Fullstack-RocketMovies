const { Router } = require('express');

const ensureAuthenticated = require('../middleware/ensureAuthenticated');
const usersController = require('../controllers/UsersController');

const usersRouter = Router();

usersRouter.post('/create', usersController.create);
usersRouter.get('/showAll', ensureAuthenticated, usersController.showAll);
usersRouter.get('/:id', ensureAuthenticated, usersController.show);
usersRouter.delete('/:id', ensureAuthenticated, usersController.delete);
usersRouter.put('/', ensureAuthenticated, usersController.update);

module.exports = { usersRouter };
