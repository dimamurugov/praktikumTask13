const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then(users => res.send({ data: users }))
    .catch(err => res.status(500).send({ message: "На сервере произошла ошибка" }));
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then(user => res.send({ data: user }))
    .catch(err => res.status(400).send({ message: "Тело запроса неправильно сформировано" }));
};

module.exports.getUser = (req, res) => {
  User.findById(req.params.id)
    .then(user => res.send({data: user}))
    .catch(err => res.status(404).send({ message: 'Нет пользователя с таким _id' }));
}

module.exports.updatetUser = (req, res) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(req.user._id, { name, about })
    .then(user => res.send({data: user}))
    .catch(err => res.status(400).send({ message: 'Тело запроса неправильно сформировано' }));
}

module.exports.updatetAvatar = (req, res) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(req.user._id, { avatar })
    .then(user => res.send({data: user}))
    .catch(err => res.status(400).send({ message: 'Тело запроса неправильно сформировано' }));
}