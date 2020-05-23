const Transaction = require('../models/transactions');

// @desc    Get all transactins
// @route   GET /api/v1/transactions
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions
    });
  } catch {
    res.send(500).json({
      success: false,
      error: 'Server error'
    });
  }
  res.send('GET transactions');
};

// @desc    Add a transaction
// @route   POST /api/v1/transactions
exports.addTransaction = async (req, res, next) => {
  res.send('POST transaction');
};

// @desc    Delete a transaction
// @route   DELETE /api/v1/transactions
exports.deleteTransaction = async (req, res, next) => {
  res.send('DELETE transactions');
};
