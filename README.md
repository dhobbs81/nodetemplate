<h1 align="center">
    <img src="assets/images/code.png"  alt="You keep what you code">
</h1>

# Node Command-Line Application Template [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

This is a node command-line application incorporating several generally useful npm packages. The application is written entirely in ES6 and transpiled using babel.

## Packages
- https://www.npmjs.com/package/babel-cli
- https://www.npmjs.com/package/chalk
- https://www.npmjs.com/package/commander
- https://www.npmjs.com/package/debug

## Examples
> A curated list of awesome READMEs
```javascript
#!/usr/bin/npm start
// Calls npm to start this script; requires a start target in package.json

/**
 * @file Default template of a node application
 * @author Marcus Hobbs
 * @requires babel-cli
 * @requires chalk
 * @requires debug
 * @requires commander
 * Note, depends on npm to execute and babel to transpile from ES6 to
 * something suitable
 */

/**
 * Import a set of generally useful tools
 */
import chalk from 'chalk';      // Chalk colorizes console output
import debug from 'debug';      // Debug provides configurable console output
var logger = debug('APPNAME');  // The logger outputs debug information
                                // Replace APPNAME with your APPNAME
import app from 'commander';    // Provides utils for command line apps

/**
 * Decorate the logger with a signature move
 */
logger.mytag = () => {
    // Define a chalk style to colorize error messages
    let style = chalk.bgRed.bold.yellow;
    let mytag = "̿' ̿'\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿"; // We signs our work for the masses
    logger(style(mytag));
};
/**
 * Logs an error message to the console
 *
 * TODO: Make the logger decoratable so we can log to multiple sources
 *       dynamically e.g. email, real-time website, database, etc
 */
var error = (text) => {
    // Define a chalk style to colorize error messages
    let logErrorStyle = chalk.bgRed.bold.white;
    return (logErrorStyle(text));
};

/**
 * Decorate the logger to output error information
 *
 * @example > logger.error("A BAD THING HAPPENED!");
 */
logger.error = (text) => {
    logger(error(text));
};

// Let the user know whose work copypasta
logger.mytag();
```

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [Marcus Hobbs](https://github.com/dhobbs81) has waived all copyright and related or neighboring rights to this work.
