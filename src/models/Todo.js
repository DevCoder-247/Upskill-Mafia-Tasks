const mongoose = require("mongoose");

// const TodoSchema = new mongoose.Schema(
//   {
//     title: { type: String, required: true, minlength: 3 },
//     description: { type: String, maxlength: 300 },
//     dueDate: { type: Date, required: true },
//     status: {
//       type: String,
//       enum: ["pending", "in-progress", "completed"],
//       default: "pending",
//     },
//   },
//   { timestamps: true }
// );

const TodoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  dueDate: Date,
  status: { type: String, default: "pending" },
});

module.exports = mongoose.model("Todo", TodoSchema);
