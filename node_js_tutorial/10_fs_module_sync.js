// 10) FS BUILT-IN MODULE: FS SYNC

// two flavours:
// async (non-blocking) or sync (blocking)

const { readFileSync, writeFileSync } = require("fs");
// or const fs = require("fs"); then fs.readFile...

// readFileSync(filePath, encoding), default encoding is utf8
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
console.log(first, second);

// writeFileSync(filePath or fileName, fileContents)
// if the file name is not there node will create the file
// if there are already some contents, node will overwrite the existing contents
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`
);

// append a file by adding a flag
writeFileSync("./content/result-sync.txt", `This is some appended content`, {
  flag: "a",
});

// when using fs sync code will run after the other
// therefore if the read/write operation takes a long time, node has to wait for it to finish before running the next code
