const fs = require("fs");

fs.mkdir("temp", (err) => {
  console.log("created folder");
});

fs.writeFile("./temp/file.txt", "Hello!!", (err) => {
  console.log("Done!!");
});

fs.appendFile("./temp/file.txt", "hemlo,appended this just fineee.", (err) => {
  console.log("Done Appending!!");
});

fs.readFile("./temp/file.txt", "utf-8", (err, data) => {
  console.log(data);
});

fs.rename("./temp/file.txt", "./temp/file_renamed.txt", (err) => {
  console.log("file renamed");
});
