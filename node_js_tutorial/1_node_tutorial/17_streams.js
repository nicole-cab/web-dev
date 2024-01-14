// 17) STREAMS

// intro to streams

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

// const stream = createReadStream("./content/big_file.txt", {
//   highWaterMark: 90000, // default buffer/chunk size 64kb - can control using highWaterMark e.g. 90kb
//   encoding: "utf8",
// });

// stream.on("open", () => {
//   console.log("open");
// });

// // streams extend Event Emitter, so we can handle events
// stream.on("data", (result) => {
//   console.log(result);
// });

// stream.on("error", (err) => {
//   console.log(err);
// });

// --------- http example

const http = require("http");

http
  .createServer(function (req, res) {
    const fileStream = createReadStream("./content/big_file.txt", "utf8");
    // when file opens
    fileStream.on("open", () => {
      // The readable.pipe() method in a Readable Stream is used to attach a Writable stream to the readable stream so that it consequently switches into flowing mode and then pushes all the data that it has to the attached Writable.
      // in this case the writeable stream is the res
      fileStream.pipe(res); // on open we connect the readble stream to the writeable stream so that for every chunk read, the same chunk is sent
    });

    fileStream.on("error", (err) => {
      console.log(err);
    });
  })
  .listen(5000);
