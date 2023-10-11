const studentData = require("../../db/db.json");
const admins = require('../../db/admins.json');
const dues = require("../model/Dues");
const payment = require("../model/payments");

const getstudent = async (req, res) => {
  res.send(studentData);
};

const getaAdmins = async (req, res) => {
  res.send(admins);
};

const getdefaultstudent = async (req, res) => {
  const count = 0;
  const currentDate = new Date();
  // Your getdefaultstudent function logic
};

module.exports = { getstudent, getaAdmins, getdefaultstudent };
