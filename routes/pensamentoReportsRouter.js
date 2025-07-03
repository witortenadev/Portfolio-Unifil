const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/', (req, res) => {
    fs.readdir('./public/reports/pensamento-computacional', (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return res.status(500).send('Internal Server Error');
        }
        const reports = files;
        res.json(reports);
    })
});

router.get('/:id', (req, res) => {
    const reportId = req.params.id;
    if (!reportId) {
        return res.status(400).send('Report ID is required');
    }
    const reportPath = path.join(__dirname, '../public/reports/pensamento-computacional', reportId);
    if (!fs.existsSync(reportPath)) {
        return res.status(404).send('Report not found', reportPath);
    }
    res.sendFile(reportPath + "/report.md");
});

router.get('/resources/:id', (req,res) => {
    const reportId = req.params.id;
    if (!reportId) {
        return res.status(400).send('Report ID is required');
    }
    const reportPath = path.join(__dirname, '../public/reports/pensamento-computacional', reportId);
    if (!fs.existsSync(reportPath)) {
        return res.status(404).send('Report not found', reportPath);
    }
    // return the resources json data
    const resourcesPath = path.join(reportPath, 'resources.json');
    if (!fs.existsSync(resourcesPath)) {
        return res.status(404).json({ resources: [] });
    }
    fs.readFile(resourcesPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading resources file:', err);
            return res.status(500).send('Internal Server Error');
        }
        try {
            const resources = JSON.parse(data);
            res.json(resources);
            console.log("Resources for report " + reportId + " sent successfully.");
        } catch (parseError) {
            console.error('Error parsing resources JSON:', parseError);
            res.status(500).send('Internal Server Error');
        }
    });
});

router.get('/image/:id', (req, res) => {
    // Get the report ID from the request parameters
    const reportId = req.params.id;

    // Check if the report ID is provided
    if (!reportId) {
        return res.status(400).send('Report ID is required');
    }

    // Get all images if any from the report folder
    const reportPath = path.join(__dirname, '../public/reports/pensamento-computacional', reportId);
    if (!fs.existsSync(reportPath)) {
        return res.status(404).send('Report not found', reportPath);
    }
    const images = fs.readdirSync(reportPath).filter(file => /\.(jpg|jpeg|png)$/i.test(file));
    if (images.length === 0) {
        return res.status(404).send('Image not found', reportPath + "/report.jpg");
    }
    // Send all images if any
    // make object with all images and send it as json
    const imagesObject = images.map(image => {
        return { name: image, path: path.join("./reports/pensamento-computacional/" + reportId + "/", image) };
    });
    res.status(200).json(imagesObject.reverse());
});

module.exports = router;