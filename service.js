const students = require("../../db/db.json");

const findStudent = async (name) => {
  const student = students.students.find((item) => item.name === name);
  return student ? student._id : null;
};

const findNameOfStudent = async (id) => {
  const student = students.students.find((item) => item._id == id);
  return student ? student.name : null;
};

module.exports = {
  findStudent,
  findNameOfStudent,
};
