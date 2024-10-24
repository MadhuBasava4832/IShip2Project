const express = require('express');
const LFschema = require('../Model/LFschema');
const multer = require('multer');
const path = require('path');

// Multer storage configuration
const mystorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images');  // Change this path if required
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));  // Store file with timestamp to avoid name conflicts
    }
});

// File filter for images
const myfilter = (req, file, cb) => {
    const filetype = /png|jpg|jpeg/;  // Fix the typo: "pnj" should be "png"
    const extname = filetype.test(path.extname(file.originalname).toLowerCase());
    if (extname) {
        cb(null, true);
    } else {
        cb('Only .png, .jpg, and .jpeg formats are allowed!');
    }
};

const upload = multer({
    storage: mystorage,
    fileFilter: myfilter,
    limits: { fileSize: 1000000 }  // File size limit in bytes (1MB)
}).single('anyname');

const LFapi = async (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.status(400).json({ message: err });
        }

        const LFdata = req.body;
        if (req.file) {
            LFdata.photo = req.file.filename;  // Add the file name to the data
        } else {
            LFdata.photo = '';  // If no file uploaded, set it as an empty string
        }

        LFschema.insertMany(LFdata)
            .then(result => {
                res.status(200).json({ message: 'Uploaded successfully', data: result });
            })
            .catch(error => {
                res.status(500).json({ message: 'Error storing data in MongoDB', error });
            });
    });
};

exports.LFapi = LFapi;
