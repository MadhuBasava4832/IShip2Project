// const express = require('express');
// const LFschema = require('../Model/LFschema');

// const togetLFapi = async (req, res) => {
//   try {
//     const users = await LFschema.find();

//     const usersWithImagePaths = users.map(user => ({...user._doc,photo: user.photo ? `/public/images/${user.photo}` : null, }));

//     res.json(usersWithImagePaths);
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// };

// exports.togetLFapi = togetLFapi;





const express = require('express');
const LFschema = require('../Model/LFschema');
const path = require('path');

const togetLFapi = async (req, res) => {
  try {
    const { type } = req.query; // Get query parameter for filtering
    let users;

    if (type) {
      // Filter users by type (lost or found)
      users = await LFschema.find({ type: type });
    } else {
      // Fetch all users if no type filter is applied
      users = await LFschema.find();
    }

    // Modify the users' photo path if necessary to include the /public/images directory
    const usersWithImagePaths = users.map(user => ({
      ...user._doc, // Use _doc to access the raw document from Mongoose
      photo: user.photo ? `/public/images/${user.photo}` : null // Adjust the path to correctly serve the image
    }));

    res.json(usersWithImagePaths); // Send the updated users array
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { togetLFapi };

