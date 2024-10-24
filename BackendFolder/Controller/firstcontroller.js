const express = require('express');
const FirstModel = require('../Model/firstmodel');

const Testing = async (req, res) => {
    var data1 = req.body
    FirstModel.insertMany(data1)
        .then(result => {
            return res.status(200).json('it is working ' + result);
        })
        .catch(error => {
            return res.status(500).json('error ' + error);
        })
    // return res.status(200).json({'message' : 'yep it is working'})
}
exports.Testing1 = Testing;


