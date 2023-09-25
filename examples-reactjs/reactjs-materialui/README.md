# Example: `reactjs-materialui`

## Development Setup

1. `nvm install` (optional)
1. `direnv allow`
1. `npm install`


## Build and Run `dev` Site

1. `npm run dev` (from `package.json` file's `"scripts"`)

This should have a URL show-up in your terminal and you can open that link in your browser and this will be the test/dev site running locally with "hot reloading" meaning that as soon as you save any modified file, the development server will refresh the webpage without you having to re-run the `npm run dev` command.

If you modify a file that configuers the `dev` server, though, like the `webpack.config.js`, then you may need to cancel (`CTRL`+`C`) the `dev` server in your terminal, and then re-run the command to start it up again.

## References

- https://mui.com/material-ui/getting-started/usage/
- https://stackoverflow.com/questions/51277900/refusing-to-apply-styles-because-mime-type
- https://stackoverflow.com/questions/45578665/push-assets-folder-to-public-directory-with-webpack
- https://medium.com/@tharinduit16/react-18-with-webpack-5-project-setup-steps-a93b4e1aaa3b
