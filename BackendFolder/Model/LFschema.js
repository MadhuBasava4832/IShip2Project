const express = require('express');
const mongoose = require('mongoose');


const LFschema = new mongoose.Schema({
    name : {
        type : String
    },
    rollNo: {
        type : String
    },
    type : {
        type : String
    },
    mobileNo: {
        type : String
    },
    place: {
        type : String
    },
    date: {
        type : String
    },
    selectedOption: {
        type : String
    },
    customOption : {
        type : String
    },
    description: {
        type : String
    },
    photo : {
        type : String
    },

})
module.exports = mongoose.model('LostFound Data',LFschema);