const express = require('express');
const router = express.Router();
const projects = require('../projects/projects.js');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/reportsList', (req, res) => {
    res.render('reports');
});

router.get('/report', (req, res) => {
    res.render('report');
});

router.get('/aboutMe', (req, res) => {
    res.render('aboutMe', { projects });
});

module.exports = router;