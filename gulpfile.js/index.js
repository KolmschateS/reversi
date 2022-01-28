const config = require('./config');
const gulp = require('gulp');

const js = require('./tasks/js').js(config.files.js, config.fileOrder, config.localServerProjectPath)


exports.default = console.log(`Groeten van Sebas!`);

exports.js = js;