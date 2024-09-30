const express = require('express');
const bodyParser = require('body-parser');
const expenseRoutes = require('./routes/expenseRoutes');
const app = express();

// Middleware
app.use(bodyParser.json());

// Use Expense routes
app.use('/api', expenseRoutes);
app.use(express.static('public'));

// Start server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
