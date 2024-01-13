// 17) STREAMS

// streams are used to read or write sequencially
// to manipulate streaming data, like big files
// there are 4 types of streams:
// - writeable
// - readable
// - duplex: both to write and read
// - transform: data can be modified when reading or writing

// it extends Event Emitter, can use events such as "data" or "end"

// when using  read file we read the entire file, if the file is too big using streams is a much better option as we can read chunks of data at a time

const { createReadStream } = require("fs");

const stream = createReadStream("./content/big_file.txt", {
  highWaterMark: 90000, // default buffer size 64kb - can control using highWaterMark e.g. 90kb
  encoding: "utf8",
});

// streams extend Event Emitter, so we can handle events
stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => {
  console.log(err);
});
