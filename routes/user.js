const router = require('express').Router();
const {
  getUsers, createUser, getUser, updatetUser, updatetAvatar,
} = require('../controllers/user');

router.get('/', getUsers);
router.post('/', createUser);
router.get('/:id', getUser);

router.patch('/me', updatetUser);
router.patch('/me/avatar', updatetAvatar);

module.exports = router;
