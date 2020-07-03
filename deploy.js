const ncp = require("ncp").ncp;
const del =require("del");
const simpleGit = require("simple-git");
const git = simpleGit();

git
  .init()
  .then(() => git.checkout("docs"))
<<<<<<< HEAD
  .then(() => del(["*", "!.gitignore", "!dist", "!node_modules", "!site"]))
=======
  .then(() => git.raw(["rm", "-rf", "*"]))
>>>>>>> f1aae4e926ecfe8591f30cc2a6adf9f856dfd7b8
  .then(() =>
    ncp("./site/__sapper__/export/", "./", (err) => {
      if (err) return console.error(err);
      console.log("Done!");
    })
  )
  .then(() => git.add("."))
  .then(() => git.commit(`Deployed at ${new Date().toUTCString()}`))
  .then(() => git.push())
  .then(() => git.checkout("master"))
  .then(() => console.log("Successful"))
  .catch((e) => console.error(e));
