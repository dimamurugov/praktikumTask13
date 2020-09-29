const Card = require('../models/card');

module.exports.getCards = (req, res) => {
  Card.find({})
    .then(cards => res.send({ data: cards }))
    .catch(err => res.status(500).send({ message: "На сервере произошла ошибка" }));
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
    .then(card => res.send({ data: card }))
    .catch(err => res.status(400).send({ message: "Тело запроса неправильно сформировано" }));
};

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.id)
    .then(card => res.send({data: card}))
    .catch(err => res.status(404).send({ message: 'Нет карты с таким _id' }));
}

module.exports.addLike = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
    )
    .then(card => res.send({data: card}))
    .catch(err => res.status(500).send({ message: 'На сервере произошла ошибка' }));
}

module.exports.deleteLike = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
    )
    .then(card => res.send({data: card}))
    .catch(err => res.status(500).send({ message: 'На сервере произошла ошибка' }));
}