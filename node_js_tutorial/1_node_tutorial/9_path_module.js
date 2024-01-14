// 9) BUILT-IN MODULE

const path = require("path");

// path separator of your system, inmacos
console.log(path.sep);

// join method
// any trailing slashes will be removed
const filePath = path.join("/content/", "subfolder", "test.txt");
console.log(filePath);
// get base name (last part of path)
const base = path.basename(filePath);
console.log(base);

// path.resolve - accepts a sequence of path or path segments and resolves it into an absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
