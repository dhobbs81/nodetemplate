#!/usr/bin/npm start
// Calls npm to start this script; requires a start target in package.json

/**
 * @module cliapptemplate
 * @fileOverview Default template of a node application
 * @author Marcus Hobbs
 * @requires {@link https://www.npmjs.com/package/babel-cli|babel-cli}
 * @requires {@link https://www.npmjs.com/package/chalk|chalk}
 * @requires {@link https://www.npmjs.com/package/debug|debug}
 * @requires {@link https://www.npmjs.com/package/commander|commander}
 * @requires {@link https://www.npmjs.com/package/jsdoc|jsdoc}
 * @version 0.0.1
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 * @see [Babel]{@link https://babeljs.io/} for more information on ES6 transpiling
 */

/** Import a set of generally useful tools */
import chalk from 'chalk';      // Chalk colorizes console output
import debug from 'debug';      // Debug provides configurable console output
var logger = debug('APPNAME');  // The logger outputs debug information
                                // Replace APPNAME with your APPNAME
import app from 'commander';    // Provides utils for command line apps

/** Decorate the logger with a signature move */
logger.mytag = () => {
    // Define a chalk style to colorize error messages
    let style = chalk.bgRed.bold.yellow;
    let mytag = " ̿ ̿\̵͇̿̿\з=(◕_◕)=ε/̵͇̿̿/'̿'̿ ̿"; // We signs our work for the masses
    logger(style(mytag));
};
/**
 * Decorate the logger to output error information
 * @function
 * @global
 * @param {String} text - The error message to stylize
 * @todo Make the logger decoratable so we can log to multiple sources
 *       dynamically e.g. email, real-time website, database, etc
 * @returns {String} A stylized string containing the error message
 */
var error = (text) => {
    // Define a chalk style to colorize error messages
    let logErrorStyle = chalk.bgRed.bold.white;
    return (logErrorStyle(text));
};

/**
 * Logs an error message to the console
 * @name logError
 * @function
 * @global
 * @param {string} text - The error message to log
 * @example logger.error("A BAD THING HAPPENED!");
 * @returns nothing
 */
logger.error = (text) => {
    logger(error(text));
};

// Let the user know whose work copypasta
logger.mytag();
