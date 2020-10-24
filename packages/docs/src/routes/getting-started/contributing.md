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

```shell
$ git clone https://github.com/{your_github_user_id}/svelte-materialify.git
$ cd svelte-materialify
```

This will get the entire repository on your machine, now we can build the library.

## Build

Building is done with yarn (**not** npm)
To install the dependencies type:

```shell
yarn
```

Then to build the main library, svelte materialify itself.

```shell
yarn build
```

To build and develop the documentation site.

```shell
yarn dev
```

Then you can build the API, which provides the definitions and types for the different props/events/slots for the components.

```shell
yarn api
```

## Submit your change

First make a change and make sure it works well by running `yarn lint` and `yarn test`, then commit your changes following [this syntax](https://github.com/conventional-changelog/commitlint/#what-is-commitlint).

For example here

`docs: improve contributing.md`

Then push your changes to your github repository, finally from the github repository web page you can click the Pull Request button and a contributor will review the changes you made.
