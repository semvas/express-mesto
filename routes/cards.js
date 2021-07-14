const router = require('express').Router();

const {
  getCards,
  createCard,
  removeCard,
  likeCard,
  disLikeCard,
} = require('../controllers/cards');

router.get('/cards', getCards);
router.post('/cards', createCard);
router.delete('/cards/:cardId', removeCard);
router.put('/cards/:cardId/likes', likeCard);
router.delete('/cards/:cardId/likes', disLikeCard);

module.exports = router;
