#!/usr/bin/env node


/**
 * @file Default template of a node application
 * @author Marcus Hobbs
 */

/**
 * Import a set of generally useful tools
 */
import chalk from 'chalk'; // Chalk colorizes console output
import debug from 'debug'; // Debug provides configurable console output
var logger = debug('APPNAME'); // The logger outputs debug information
// Replace APPNAME with your APPNAME
//import app from 'commander';    // Provides utils for command line apps

/**
 * Decorate the logger with a signature move
 */
logger.mytag = () => {
  // Define a chalk style to colorize error messages
  let style = chalk.bgRed.bold.yellow;
  let mytag = "┌∩┐(◣_◢)┌∩┐"; // We signs our work for the masses
  logger(style(mytag));
};
/**
 * Logs an error message to the console
 *
 * TODO: Make the logger decoratable so we can log to multiple sources
 *       dynamically e.g. email, real-time website, database, etc
 */
var error = text => {
  // Define a chalk style to colorize error messages
  let logErrorStyle = chalk.bgRed.bold.white;
  return logErrorStyle(text);
};

/**
 * Decorate the logger to output error information
 *
 * @example > logger.error("A BAD THING HAPPENED!");
 */
logger.error = text => {
  logger(error(text));
};

// Let the user know whose work copypasta
logger.mytag();