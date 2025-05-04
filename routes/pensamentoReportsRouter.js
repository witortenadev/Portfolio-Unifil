const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/', (req, res) => {
    fs.readdir('./reports/pensamento-computacional', (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return res.status(500).send('Internal Server Error');
        }
        const reports = files;
        reports.sort((a, b) => {
            const aDate = fs.statSync(path.join('./reports/pensamento-computacional', a)).mtime;
            const bDate = fs.statSync(path.join('./reports/pensamento-computacional', b)).mtime;
            return bDate - aDate; // Sort by modification date, newest first
        });
        res.json(reports);
    })
});

router.get('/:id', (req, res) => {
    const reportId = req.params.id;
    if (!reportId) {
        return res.status(400).send('Report ID is required');
    }
    const reportPath = path.join(__dirname, '../reports/pensamento-computacional', reportId);
    if (!fs.existsSync(reportPath)) {
        return res.status(404).send('Report not found', reportPath);
    }
    res.sendFile(reportPath + "/report.md");
});

router.get('/image/:id', (req, res) => {
    const reportId = req.params.id;
    if (!reportId) {
        return res.status(400).send('Report ID is required');
    }
    const reportPath = path.join(__dirname, '../reports/pensamento-computacional', reportId);
    if (!fs.existsSync(reportPath)) {
        return res.status(404).send('Report not found', reportPath);
    }
    if (!fs.existsSync(reportPath + "/report.jpg")) {
        if (!fs.existsSync(reportPath + "/report.png")) {
            return res.status(404).send('Image not found', reportPath + "/report.jpg");
        }
        return res.sendFile(reportPath + "/report.png");
    }
    res.sendFile(reportPath + "/report.jpg");
});

module.exports = router;