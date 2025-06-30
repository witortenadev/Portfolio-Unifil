const express = require('express');
const router = express.Router();
const projects = require('../projects/projects.js');
const resources = require('../public/resources/resources.js');

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

router.get('/resources', (req, res) => {
    res.render('resources', { resources });
});

module.exports = router;