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
    return res.status(500).json({
      success: false,
      error: 'Server error'
    });
  }
  res.send('GET transactions');
};

// @desc    Add a transaction
// @route   POST /api/v1/transactions
exports.addTransaction = async (req, res, next) => {
  try {
    const { text, amount } = req.body;

    const transaction = await Transaction.create(req.body);

    return res.status(201).json({
      suscess: true,
      data: transaction
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server error'
      });
    }
  }
};

// @desc    Delete a transaction
// @route   DELETE /api/v1/transactions
exports.deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: 'No transaction found'
      });
    }

    await transaction.remove();
    return res.status(200).json({
      success: true,
      data: {}
    });
  } catch {
    return res.status(500).json({
      success: false,
      error: 'Server error'
    });
  }
};
