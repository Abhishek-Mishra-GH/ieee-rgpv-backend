const Student = require('../models/studentModel');

exports.createStudent = async (req, res) => {
  try {
    const { name, email, mobile, branch, collegeName } = req.body;

    const newStudent = new Student({
      name,
      email,
      mobile,
      branch,
      collegeName
    });

    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
