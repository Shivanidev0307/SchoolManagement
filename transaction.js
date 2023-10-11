const { response } = require("../app");
const transaction = require("../model/transaction");

// Import other required modules...

const getPercentage = async (req, res) => {
  try {
    const transactions = await transaction.find();
    const totalTransactions = transactions.length;

    const onlinePayments = transactions.filter(
      (t) => t.payment_mode === "ONLINE"
    ).length;

    const cashPayments = transactions.filter(
      (t) => t.payment_mode === "CASH"
    ).length;

    const chequePayments = transactions.filter(
      (t) => t.payment_mode === "CHEQUE"
    ).length;

    const onlinePercentage = Math.floor((onlinePayments / totalTransactions) * 100);
    const cashPercentage = Math.floor((cashPayments / totalTransactions) * 100);
    const chequePercentage = Math.floor((chequePayments / totalTransactions) * 100);

    const data = [
      {
        label: "Online",
        value: onlinePercentage,
      },
      {
        label: "Cash",
        value: cashPercentage,
      },
      {
        label: "Cheque",
        value: chequePercentage,
      },
    ];

    res.json(data);
  } catch (err) {
    res.status(400).json({ message: "Error getting transaction data" });
  }
};

const getTotalCollection = async (req, res) => {
  try {
    // Your total collection logic here...

    res.json(/* Your result data */);
  } catch (error) {
    console.error("Error calculating total collection:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getMonthlyCollection = async (req, res) => {
  try {
    // Your monthly collection logic here...

    res.json(/* Your result data */);
  } catch (error) {
    console.error("Error calculating monthly totals:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getTransactions = async (req, res) => {
  try {
    // Your transaction data retrieval and formatting logic here...

    res.json(/* Your formatted data */);
  } catch (error) {
    console.error("Error fetching transaction data:", error);
    res.status(500).json({ message: "Error while fetching data" });
  }
};

module.exports = {
  getPercentage,
  getTotalCollection,
  getMonthlyCollection,
  getTransactions,
};
