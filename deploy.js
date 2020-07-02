const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
const base = "./site/__sapper__/export";

let output = (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(stdout);
};

exec("git checkout docs", output)

function getFiles(dir, files_) {
  files_ = files_ || [];
  var files = fs.readdirSync(dir);
  for (var i in files) {
    var name = dir + "/" + files[i];
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files_);
    } else {
      files_.push(path.relative(base, name));
    }
  }
  return files_;
}

let files = getFiles("./site/__sapper__/export");

for (let file of files) {
  fs.copyFile(`${base}/${file}`, file, (err) => {
    if (err) throw err;
    console.log(`${file} was written`);
  })
}

exec("git add --all");
exec(`git commit -m 'Deployed at ${new Date().toUTCString()}'`);
exec("git push");
exec("git checkout master");
