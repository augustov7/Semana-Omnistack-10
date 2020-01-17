const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchemas');

const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatat_url: String,
    techs: [String],
    location: {
        type: PointSchema,
        indice: '2dphere'
    }
});

module.exports = mongoose.model('Dev', DevSchema);