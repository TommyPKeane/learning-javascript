# How to Use this Repository

Each directory of any runnable/testable collection of code in this repo should have a `README.md` file which should have sections dedicated to how to actually run or use the code.

But if you're looking at this repo for the first time and want to make sure your system is all set on how to work with the code and test or run any of it, this document provides a generic overall set of details on how to confirm that your system is setup, and explains some of the DevOps and design decisions we've made in this repository.

There are numerous ways to run or manage JavaScript and TypeScript code, so if you already are familiar with them, you may be able to use your own preferences. This just explains what I've done here, and why I've chosen this approach. I'm always open to learning about a new way, so if you know of something I should be doing instead and you wanna share/discuss it, feel free to reach out :smile:.

<!-- MarkdownTOC -->

- [Setup](#setup)
- [References](#references)

<!-- /MarkdownTOC -->


<a id="setup"></a>
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

<a id="references"></a>
## References

- https://direnv.net/
- https://github.com/nvm-sh/nvm
- https://nodejs.org/en/
- https://www.npmjs.com/
- https://www.npmjs.com/package/typescript
