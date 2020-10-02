const router = require('express').Router();
const {
  getCards, createCard, deleteCard, addLike, deleteLike, getCard,
} = require('../controllers/card');

router.get('/', getCards);
router.get('/:id', getCard);
router.post('/', createCard);
router.delete('/:id', deleteCard);

router.put('/:cardId/likes', addLike);
router.delete('/:cardId/likes', deleteLike);

module.exports = router;
