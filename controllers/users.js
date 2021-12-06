const User = require('../models/user');

const ERROR_CODE400 = 400;

// returns all users
module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch((err) => res.status(500).send({ message: 'Error', err }));
};

// returns a user by _id
module.exports.getUserById = (req, res) => {
  User.findById(req.params.id)
    // Error handling by custom function
    .orFail(() => {
      const error = new Error('Error No user found with that id');
      error.statusCode = 404;
      throw error;
    })
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(err.statusCode).send(err.message));
};

// creates a new user
module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res
          .status(ERROR_CODE400)
          .send({ message: 'Error: invalid data passed to create user ' });
        return;
      }
      res.status(500).send({ message: 'Error', err });
    });
};

// update profile
module.exports.updateUserProfile = (req, res) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    {
      new: true,
      runValidators: true,
      upsert: true,
    },
  )
    .then((user) => res.send({ data: user }))
    .catch((err) => res
      .status(err.statusCode)
      .send({ message: 'Data validation failed or another error occured' }));
};

// update avatar
module.exports.updateUserAvatar = (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    {
      new: true,
      runValidators: true,
      upsert: true,
    },
  )
    .then((user) => res.send({ data: user }))
    .catch((err) => res
      .status(err.statusCode)
      .send({ message: 'Data validation failed or another error occured' }));
};
