# JavaScript: Plotly.js

<!-- MarkdownTOC -->

- Setup
- Running the Code
- License

<!-- /MarkdownTOC -->

## Setup

- `nvm install` will make sure that the correct version of Node.js is available
- `direnv allow` will establish a local environment using the correct version of Node.js

You can confirm that the above worked by comparing the output of these two commands:

- `node --version`
- `cat ./.nvmrc`

## Running the Code

Unlike the pure JavaScript examples, the usage of Plotly.js actually requires a Web Browser, due to the way that the Library has been written 😭😭😭 ... so we need to actually run a local webserver and serve-up a local website through HTML, CSS, and JavaScript in order to most easily and directly see the results of the Plotly.js examples that we're providing here.

Technically speaking, there are other ways to do this, including the use of NPM and registering with a Plotly.js API Key, but we'd still need to use something like `browserify` to put it all together and serve-up the code, or go all in on an Application framework like `electron`.

Personally, I don't wanna do all that just for these examples, because that's a whole other thing, and all I'm trying to get at here is actually to look at how Plotly.js, itself, actually works and how we can use it to create different kinds of interactive plots and graphs.

Ok, so with all that out of the way ... how do we run these examples? Basically, if you run these commands, you'll install and then start the local webserver, and then you simply open the provided `localhost` URL in your contemporary Web-Browser application of choice, and you should be greeted with a webpage that allows you to navigate to see each example.

Note that if you change any of the code, you will have to refresh your browser (potentially doing a hard refresh to clear any cached data) to pull in the changed code and see the updated renderings.

1. `nvm install` (optional, first time only)
1. `direnv allow` (first time only)
1. `npm install`
1. `npm run start` (see `package.json`)

## License

See the top-level [LICENSE](../../LICENSE) file for details.
