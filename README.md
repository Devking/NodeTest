# Notes

Following this guide: https://blog.risingstack.com/node-hero-tutorial-getting-started-with-node-js/

This directory goes over the basics of starting Node.

* Use `npm init` to populate a `package.json`.
    * `package.json` will describe the project, its dependencies, its entry point, etc.
* Edit `package.json` to add a `start` under `scripts` if you want to run the project with `npm start`
    * `"start": "node index.js"` for example
* Call `npm start <package> --save` to add dependencies to the project
* Dependencies are added to the `node_modules` directory; this should be git ignored
* You can manage dependencies (and their versions) within `package.json`
* You can include libraries by doing `require('packagename')`
* You can include other files in the directory by doing `require('./otherfilename')`
* There are also such things as *development dependencies* which are needed *before* the application is run
    * For instance, the test runner Mocha or other libraries to help build your assets are dev dependencies
* To add a dev dependency, do `npm install <package> --save-dev`
* To run tests, edit `package.json` to add a `test` under `scripts`
    * One possibility is to specify Mocha to run tests: `"test": "mocha test"`
    * This will tell Mocha to run tests found in the directory `test`
    * You will need to have JS files that run tests in this directory, or else you'll get errors
    * To run the test, run `npm test`
    * Look at Mocha documentation to see how to write tests
