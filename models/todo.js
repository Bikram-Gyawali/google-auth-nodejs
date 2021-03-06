const mongoose = require("mongoose");
const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  done: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model("Todo", TodoSchema);
