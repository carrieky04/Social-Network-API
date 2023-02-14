const User = require("../models/User");

module.exports = {
  // GET all users
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // GET a single user by its _id and populated thought and friend data
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // POST a new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  // PUT to update a user by its _id
  updateUser(req, res) {
    User.findByIdAndUpdate({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user found with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
//   DELETE to remove user by its _id
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user found with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Remove thought from a student
//   removeThought(req, res) {
//     User.findOneAndUpdate(
//       { _id: req.params.userId },
//       { $pull: { thought: { thoughtId: req.params.thoughtId } } },
//       { runValidators: true, new: true }
//     )
//       .then((user) =>
//         !user
//           ? res
//               .status(404)
//               .json({ message: "No user found with that ID :(" })
//           : res.json(user)
//       )
//       .catch((err) => res.status(500).json(err));
//   },


//   POST to add a new friend to a user's friend list


// DELETE to remove a friend from a user's friend list
};
