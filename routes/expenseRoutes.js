const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

// Route to get all expenses
router.get('/expenses', expenseController.getExpenses);

// Route to create a new expense
router.post('/expenses', expenseController.createExpense);

// Route to delete an expense
router.delete('/expenses/:id', expenseController.deleteExpense);

// Route to update an expense
router.put('/expenses/:id', expenseController.updateExpense);

module.exports = router;
