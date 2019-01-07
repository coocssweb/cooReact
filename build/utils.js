const path = require('path');

exports.resolve = function resolve (...args) {
    return path.join(__dirname, '..', ...args);
};
