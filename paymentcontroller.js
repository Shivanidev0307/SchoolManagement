const transactions = require("../model/transaction");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const dues = require("../model/Dues");
const payment = require("../model/payments");
const invoice = require('../model/invoices');

const updatepayment = async (req, res) => {
  const transactionid = req.body.id;
  // Your updatepayment function logic
};

const getfineamount = async (req, res) => {
  try {
    const invoices = await invoice.find();
    const totalAmount = invoices.reduce(
      (totalfine, Invoice) => totalfine + Invoice.fine_amount,
      0
    );

    console.log(totalAmount);

    res.json(totalAmount);
  } catch (error) {
    res.status(500).json({ message: "error while fetching fine amount" });
  }
}

function findDueDate(targetDate, dates) {
  var currentDate = new Date(targetDate);
  //   console.log(currentDate.toDateString()); // added parentheses to call the function

  const matchingDates = dates.filter(date => date.toDateString() === currentDate.toDateString());
  return matchingDates.length > 0 ? matchingDates[0] : null; // return the first matching date or null if none found
}

module.exports = { updatepayment, getfineamount };
