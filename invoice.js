const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema(
  {
    dues: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Dues", // Assuming dues are references to another model
      },
    ],
    status: {
      type: String,
      enum: ["pending", "paid", "cancelled"], // Example validation for status
      default: "pending", // Example default value
    },
    payments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "payments",
      },
    ],
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "student",
    },
    school: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "school",
    },
    fine_days: {
      type: Number,
      default: 0, // Example default value
    },
    fine_amount: {
      type: Number,
      default: 0, // Example default value
    },
    timestamp: {
      type: Date,
      required: true,
    },
    fee_breakup: {
      type: mongoose.Schema.Types.Mixed,
      required: true, // You can make it required if fee_breakup is mandatory
    },
    fee_total: {
      type: Number,
    },
  },
  {
    timestamps: true, // Automatically adds 'createdAt' and 'updatedAt' timestamps
  }
);

const Invoice = mongoose.model("Invoice", invoiceSchema);

module.exports = Invoice;
