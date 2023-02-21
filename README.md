# Learning JavaScript (TypeScript)

Tommy teaches Tommy (and anyone who wants to actually read this) how to code in JavaScript and TypeScript (also referred to as ECMAScript).

I've been doing various amounts of JavaScript coding since 2004-ish in personal, professional, and academic projects, but you're never too old to learn, and they keep making computers better and worse all the time. Humility is definitely needed if you're gonna be working with JavaScript, so don't get too attached to the ways that you think things should work.

<!-- MarkdownTOC -->

- Setup
- JavaScript
- TypeScript
- License

<!-- /MarkdownTOC -->

## Setup

This repo relies on `nvm` and `direnv` to create directory-local "projects", which establish a fixed version of Node.js to use as the JavaScript interpreter (runtime) for testing the provided examples. Some of these may also use `npm` to install packages (third-party libraries), but instructions will be provided in a README for each project.

In macOS you can setup the tools with `brew` using the following commands:

- `brew install direnv`
- `brew install nvm`

After you've installed `nvm` you'll need to make sure it's configured for your system. Personally, I use `bash` and `macOS`, and so I've created (per this repo: ) a configuration file name `~/.bashrc.d/nvm.sh` which is in the home directory (`~/`) for my user account:

```bash
# Multiple Concurrent NodeJS (and NPM) Installs
# (Node Version Manager)
#
# Reference:
# - https://github.com/nvm-sh/nvm
#
# Install:
# `brew install nvm`
export NVM_DIR="${HOME}/.nvm"

# This loads nvm
[ -s "${NVM_DIR}/nvm.sh" ] && \. "${NVM_DIR}/nvm.sh"

# This loads nvm bash_completion
[ -s "${NVM_DIR}/bash_completion" ] && \. "${NVM_DIR}/bash_completion"
```

In each project directory there will be two files, one to configure `nvm` and one to configure `direnv`. The `direnv` configuration references the above file, to make sure that the `NVM_DIR` directory is within scope of the local environment, and to re-assert that `nvm` is configured. This may not be necessary on all systems, but it doesn't hurt to make sure that the configuration is there.

As such, you'll note that almost all the `.envrc` configuration files for `direnv` look like this:

```bash
# direnv Configuration File
#
# This relies on an `.nvmrc` local file to determine which version of Node.js to
# install with the `nvm use` command.

NVMRC_FILE=~/.bashrc.d/nvm.bash

if [ -e ${NVMRC_FILE} ]; then
  source ${NVMRC_FILE}
  nvm use
else
  echo "Missing ${NVMRC_FILE} for nvm Setup!"
fi
```

This sources the file as mentioned (loads the initial `bash` config), and then calls `nvm use` which will innately reference the local `.nvmrc` file, which should only have 1 line which states the version for `nvm` to use.

As a pre-cursor to calling `direnv allow`, you should make sure that you have the appropriate version of Node.js installed through `nvm` by calling `nvm install` in the same directory as the `.nvmrc` file.

If you want to change/update the version of Node.js, you can run the command `nvm ls-remote` to be shown all the available versions of Node.js which you can install.

## JavaScript

These directories under the `javascript` folder contain different examples of pure JavaScript (ECMAScript) syntax, which can all be run with Node.js, per the local configuration through `nvm` and `direnv`.

## TypeScript

These directories under the `typescript` folder contain different examples of TypeScript syntax, which can all be run with Node.js after being transpiled from TypeScript to JavaScript through the documented process in each README.

## License

Copyright (c) 2023, Tommy P. Keane (https://www.tommypkeane.com)

See the [LICENSE](./LICENSE) file for details.
