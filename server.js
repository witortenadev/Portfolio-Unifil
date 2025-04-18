const express = require('express');
const reportsRouter = require('./routes/reportsRouter.js');
const viewsRouter = require('./routes/viewsRouter.js');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/reports', reportsRouter);
app.use('/', viewsRouter)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});