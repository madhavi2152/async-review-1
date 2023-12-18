/*Create a function that reads a file and returns its content using promises.

Create a function that writes to a file based on the content given using promises.*/

const fs = require("fs");
function readf(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}
function writef(data) {
  return new Promise((resolve, reject) => {
    fs.writeFile("hello1.txt", data, "utf-8", (err) => {
      if (err) reject(err);
      else {
        resolve("success");
      }
    });
  });
}

async function main() {
  Promise.all([readf("hello.txt"), writef("hello madhavi")])
    .then((data) => {
      console.log("successfully executed promise 1");
    })
    .catch((err) => {
      console.error(err);
    });
  Promise.all([readf("hello3.txt"), writef("hello madhavi")])
    .then((data) => {
      console.log("successfully executed promise 2");
    })
    .catch((err) => {
      console.log("error at promise2");
      console.error(err);
    });
  //   await readf("hello.txt")
  //     .then((data) => writef(data))
  //     .then((data) => console.log(data))
  //     .catch((err) => console.error(err))
  //     .finally(() => {
  //       console.log("finally");
  //     });
}
main();
