const os = require('os');
const fs = require('fs');
const path = require('path');
console.log(os.platform());
console.log(__dirname);
console.log(fs.readdirSync('/'));
