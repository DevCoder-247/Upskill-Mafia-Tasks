const { body, validationResult } = require("express-validator");

exports.validateTodo = [
  body("title").isLength({ min: 3 }).withMessage("Title must be at least 3 characters"),
  body("description").isLength({ max: 300 }).optional(),
  body("dueDate").isISO8601().withMessage("Invalid date format"),
  body("status").isIn(["pending", "in-progress", "completed"]),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  },
];
