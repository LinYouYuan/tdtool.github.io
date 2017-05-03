'use strict';

var _arguments = arguments; /**
                             * @Author: Zhengfeng.Yao <yzf>
                             * @Date:   2017-04-25 16:46:26
                             * @Last modified by:   yzf
                             * @Last modified time: 2017-04-25 16:47:48
                             */

var _util = require('util');

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var version = require('../../package.json').version;

var prefix = '[tdtool@' + version + ']';
var sep = _chalk2.default.gray('-');
var isTest = process.env.NODE_ENV === 'test';

/**
 * Log a `message` to the console
 *
 * @param {String} message
 */
exports.info = function () {
  var msg = _util.format.apply(_util.format, _arguments);
  console.log(_chalk2.default.cyan(prefix), sep, msg);
};

/**
 * Log an error `message` to the console and not exit
 *
 * @param {String} message
 */
exports.error = function (message) {
  if (message instanceof Error) {
    message = message.message.trim();
  }

  var msg = _util.format.apply(_util.format, _arguments);
  console.error(_chalk2.default.red(prefix), sep, msg);
};

/**
 * Log an error `message` to the console and exit
 *
 * @param {String} message
 */
exports.fatal = function (msg) {
  exports.error(msg);

  if (process.env.NODE_ENV === 'test') {
    throw new ERROR('exit');
  } else {
    process.exit(1);
  }
};

/**
 * Log a warning `message` to the console
 *
 * @param {String} message
 */
exports.warn = function () {
  var msg = _util.format.apply(_util.format, _arguments);
  console.log(_chalk2.default.yellow(prefix), sep, msg);
};

/**
 * Log a success `message` to the console
 *
 * @param {String} message
 */
exports.success = function () {
  var msg = _util.format.apply(_util.format, _arguments);
  console.log(_chalk2.default.green(prefix), sep, msg);
};
//# sourceMappingURL=logger.js.map