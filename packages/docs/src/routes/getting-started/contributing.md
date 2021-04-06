---
title: Contributing
description: Here is how you can contribute to Svelte Materialify and make the world a better place.
keywords: contribute, contributing, feature request
---

# Contributing

If you would like to contribute to svelte materialify and improve its functionality and features or just report a bug.

## Reporting Issues

Before reporting an issue, ensure that you:

- searched for similar [issues](https://github.com/TheComputerM/svelte-materialify/issues), it may have been answered already

- have a **minimal**, concise, reproducible example

- have tried providing a [REPL](https://svelte.dev/repl/9982308600f043f3aeb43fb3b17f35b5?version=3.37.0)

## Working on Svelte Materialify
### Setting up your environment

Follow these instructions if you are planning to make a pull request.

### Getting the source

1.  Register to [Github](https://github.com/)
2.  Navigate to [svelte-materialify](https://github.com/TheComputerM/svelte-materialify)
3.  Press the fork button in the top right corner of the screen
4.  Copy the url of your browser, it should now be: `https://github.com/{your_github_user_id}/svelte-materialify`
5.  On your PC, open a command prompt window and type the following commands

```shell
$ git clone https://github.com/{your_github_user_id}/svelte-materialify.git
$ cd svelte-materialify
```

This will get the entire repository on your machine, now we can build the library.

### Building

Building is done with yarn (**not** npm).
From the **root folder**, install the dependencies by typing:

```shell
yarn
```

Then build the main library, svelte materialify, itself:

```shell
yarn build
```

To build and develop the documentation site:

```shell
yarn dev
```

To build the API, which provides the definitions and types for the different props/events/slots of the components:

```shell
yarn api
```

### Submitting your change

After making a change, make sure it works well by running:
```shell
yarn lint
```
and
```shell
yarn test
```
Please commit your changes following [conventional commit syntax](https://github.com/conventional-changelog/commitlint/#what-is-commitlint), for example:
```shell
git commit -m "docs: improve contributing.md"
```

Then, **git push** your changes to your github repository.

Finally, from the github repository web page, you can click the **Pull Request** button and a contributor will review the changes you made.
