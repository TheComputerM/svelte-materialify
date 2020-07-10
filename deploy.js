const ncp = require("ncp").ncp;
const del =require("del");
const simpleGit = require("simple-git");
const git = simpleGit();

git
  .init()
  .then(() => git.checkout("docs"))
  .then(() => del(["*", "!.gitignore", "!dist", "!node_modules", "!site"]))
  .then(() =>
    ncp("./site/__sapper__/export/", "./", (err) => {
      if (err) return console.error(err);
      console.log("Completed Site Export");
    })
  )
  .then(() => git.add("."))
  .then(() => git.commit(`Deployed at ${new Date().toUTCString()}`))
  .then(() => console.log("Commited files"))
  .then(() => git.push())
  .then(() => git.checkout("master"))
  .then(() => console.log("Finished Deployment"))
  .catch((e) => console.error(e));
