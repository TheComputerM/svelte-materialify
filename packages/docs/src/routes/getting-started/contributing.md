---
title: Contributing
---

# Contributing

If you would like to contribute to svelte materialify and improve its functionality and features or just report a bug.

## Reporting Issues

It is important to keep your setup to a **minimum** so if you can it is better to reproduce the bug in the [repl playground](https://svelte.dev/repl/2c55788d8ffd4458bfe9bcb5f58956db). Before reporting an issue, ensure that:

- Search for a similar [issues](https://github.com/TheComputerM/svelte-materialify/issues), it may have been answered.

- Reproduction as to be **minimal** and consise.

- If possible try running the code in the [repl playground](https://svelte.dev/repl/2c55788d8ffd4458bfe9bcb5f58956db).

## Setting up your environment

Follow these instructions if you are planning to make a pull request.

## Get the source

1.  Register to [github](https://github.com/).
2.  Navigate to [svelte-materialify](https://github.com/TheComputerM/svelte-materialify)
3.  Press the fork button in the top right corner of the screen
4.  Copy the url of your browser, it should now be : https://github.com/**your_github_user_id**/svelte-materialify
5.  On your PC open a command prompt window and type the following commands

```
$ git clone https://github.com/{your_github_user_id}/svelte-materialify.git
$ cd svelte-materialify
```

This will get the entire repository on your machine.
Finally we can build the library.

## Build

Building is done with yarn (not npm)
To install the dependencies type:

```
yarn
```

Then to build the main library type

```
yarn build
```

To build and open the documentation type

```
yarn dev
```

Then you can build the "API". I only write the documentation I am not really sure what this is yet.

```
yarn api
```

## Submit your change

First make a change and make sure it works well.
Then commit your changes following [this syntax](https://github.com/conventional-changelog/commitlint/#what-is-commitlint)

For example here

`docs: improve contributing.md document`

Then push your changes to your github repository.
Finally from the github repository web page you can click the Pull Request button to send it to TheComputerM for review.
