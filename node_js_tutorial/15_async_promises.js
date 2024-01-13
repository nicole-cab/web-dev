// 15) MORE ASYNC (PROMISES AND ASYNC/AWAIT)

// in our previous example (11_fs_module_async.js) we call nested async functions which can become hard to read, alternatives can be:
// - ex.1: creating your own promises
// - ex.2: using the util module to convert functions into promises
// - ex.3: using the fs promises module (RECOMMENDED)

// the best way is to use async/await and promises inside the async function, with a try and catch (look at third example)
// it makes the code look cleaner and more readable

// ---------- example1: creating your own promises
const { readFile, writeFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const path = "./content/first.txt";

//you can call the async functions using then
getText(path)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

// or using async/await with promises
const start = async () => {
  try {
    const first = await getText("./content/first.txt"); // only once it is resolved the next task is executed
    const second = await getText("./content/second.txt");
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

// --------- example 2: using the util module to converts a function into a promise
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start2 = async () => {
  try {
    const first = await readFilePromise("./content/first.txt", "utf8");
    const second = await readFilePromise("./content/first.txt", "utf8");
    await writeFilePromise(
      "./content/result-async-promise.txt",
      `Here is the result: ${first} ${second}`
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start2();

// --------- example 3: using the fs promises module
const fsPromises = require("fs").promises;
const readFileFsPromise = fsPromises.readFile;
const writeFileFsPromise = fsPromises.writeFile;

const start3 = async () => {
  try {
    const first = await readFileFsPromise("./content/first.txt", "utf8");
    const second = await readFileFsPromise("./content/first.txt", "utf8");
    await writeFileFsPromise(
      "./content/result-async-fs-promise.txt",
      `Here is the result: ${first} ${second}`
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start3();
