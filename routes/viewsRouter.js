const express = require('express');
const router = express.Router();
const projects = require('../projects/projects.js');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/pensamento-computacional', (req, res) => {
    res.render('pensamento-computacional');
});

router.get('/report', (req, res) => {
    res.render('report');
});

router.get('/NPI', (req, res) => {
    res.render('NPI');
});

router.get('/aboutMe', (req, res) => {
    res.render('aboutMe', { projects });
});

module.exports = router;