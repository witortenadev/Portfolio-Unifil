const express = require('express');
// Routers
const pensamentoReportsRouter = require('./routes/pensamentoReportsRouter.js');
const NPIReportsRouter = require('./routes/NPIReportsRouter.js');
const viewsRouter = require('./routes/viewsRouter.js');

const app = express();
const port = 3000;
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/pensamento-computacional-reports', pensamentoReportsRouter);
app.use('/NPI-reports', NPIReportsRouter);
app.use('/', viewsRouter)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});