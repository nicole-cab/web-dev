// 11) FS BUILT-IN MODULE: FS ASYNC

const { readFile, writeFile } = require("fs");
// or const fs = require("fs"); then fs.readFile...

// when using fs async, we need to provide a callback which is executed when the read/write operation is done
// since in async we can only access the result inside the callback function you have to write your logic there

// this will read first.txt, then read second.txt then write to result-async.txt
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  // if successful
  const first = result;
  console.log(first); // result returns a buffer if encoding not specified
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result); // undefined as we don't expect anything back
      }
    );
  });
});

// when using fs async the read/write operations are executed asynchronously meaning that if they take a long time then node will start executing the next code and the read/write operation may finish later on

// notice that to perform read-read-write you get complex nested functions
// alternatively you can use promises or async/await (in more detail later in the course, recommended to use async/await because it is easier to work with)
