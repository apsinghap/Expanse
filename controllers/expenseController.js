const db = require('../models/db');

// Controller to get all expenses
exports.getExpenses = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM Expense');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch expenses' });
    }
};

// Controller to add a new expense
exports.createExpense = async (req, res) => {
    const { title, amount, description } = req.body;
    try {
        await db.query('INSERT INTO Expense (title, amount, description) VALUES (?, ?, ?)', [title, amount, description]);
        res.status(201).json({ message: 'Expense added successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add expense' });
    }
};

// Controller to delete an expense
exports.deleteExpense = async (req, res) => {
    const { id } = req.params;
    try {
        await db.query('DELETE FROM Expense WHERE id = ?', [id]);
        res.json({ message: 'Expense deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete expense' });
    }
};

// Controller to edit an expense
exports.updateExpense = async (req, res) => {
    const { id } = req.params;
    const { title, amount, description } = req.body;
    try {
        await db.query('UPDATE Expense SET title = ?, amount = ?, description = ? WHERE id = ?', [title, amount, description, id]);
        res.json({ message: 'Expense updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update expense' });
    }
};
