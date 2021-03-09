// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../../node_modules/retry/lib/retry_operation.js":[function(require,module,exports) {
function RetryOperation(timeouts, options) {
  // Compatibility for the old (timeouts, retryForever) signature
  if (typeof options === 'boolean') {
    options = {
      forever: options
    };
  }

  this._originalTimeouts = JSON.parse(JSON.stringify(timeouts));
  this._timeouts = timeouts;
  this._options = options || {};
  this._maxRetryTime = options && options.maxRetryTime || Infinity;
  this._fn = null;
  this._errors = [];
  this._attempts = 1;
  this._operationTimeout = null;
  this._operationTimeoutCb = null;
  this._timeout = null;
  this._operationStart = null;

  if (this._options.forever) {
    this._cachedTimeouts = this._timeouts.slice(0);
  }
}

module.exports = RetryOperation;

RetryOperation.prototype.reset = function () {
  this._attempts = 1;
  this._timeouts = this._originalTimeouts;
};

RetryOperation.prototype.stop = function () {
  if (this._timeout) {
    clearTimeout(this._timeout);
  }

  this._timeouts = [];
  this._cachedTimeouts = null;
};

RetryOperation.prototype.retry = function (err) {
  if (this._timeout) {
    clearTimeout(this._timeout);
  }

  if (!err) {
    return false;
  }

  var currentTime = new Date().getTime();

  if (err && currentTime - this._operationStart >= this._maxRetryTime) {
    this._errors.unshift(new Error('RetryOperation timeout occurred'));

    return false;
  }

  this._errors.push(err);

  var timeout = this._timeouts.shift();

  if (timeout === undefined) {
    if (this._cachedTimeouts) {
      // retry forever, only keep last error
      this._errors.splice(this._errors.length - 1, this._errors.length);

      this._timeouts = this._cachedTimeouts.slice(0);
      timeout = this._timeouts.shift();
    } else {
      return false;
    }
  }

  var self = this;
  var timer = setTimeout(function () {
    self._attempts++;

    if (self._operationTimeoutCb) {
      self._timeout = setTimeout(function () {
        self._operationTimeoutCb(self._attempts);
      }, self._operationTimeout);

      if (self._options.unref) {
        self._timeout.unref();
      }
    }

    self._fn(self._attempts);
  }, timeout);

  if (this._options.unref) {
    timer.unref();
  }

  return true;
};

RetryOperation.prototype.attempt = function (fn, timeoutOps) {
  this._fn = fn;

  if (timeoutOps) {
    if (timeoutOps.timeout) {
      this._operationTimeout = timeoutOps.timeout;
    }

    if (timeoutOps.cb) {
      this._operationTimeoutCb = timeoutOps.cb;
    }
  }

  var self = this;

  if (this._operationTimeoutCb) {
    this._timeout = setTimeout(function () {
      self._operationTimeoutCb();
    }, self._operationTimeout);
  }

  this._operationStart = new Date().getTime();

  this._fn(this._attempts);
};

RetryOperation.prototype.try = function (fn) {
  console.log('Using RetryOperation.try() is deprecated');
  this.attempt(fn);
};

RetryOperation.prototype.start = function (fn) {
  console.log('Using RetryOperation.start() is deprecated');
  this.attempt(fn);
};

RetryOperation.prototype.start = RetryOperation.prototype.try;

RetryOperation.prototype.errors = function () {
  return this._errors;
};

RetryOperation.prototype.attempts = function () {
  return this._attempts;
};

RetryOperation.prototype.mainError = function () {
  if (this._errors.length === 0) {
    return null;
  }

  var counts = {};
  var mainError = null;
  var mainErrorCount = 0;

  for (var i = 0; i < this._errors.length; i++) {
    var error = this._errors[i];
    var message = error.message;
    var count = (counts[message] || 0) + 1;
    counts[message] = count;

    if (count >= mainErrorCount) {
      mainError = error;
      mainErrorCount = count;
    }
  }

  return mainError;
};
},{}],"../../../node_modules/retry/lib/retry.js":[function(require,module,exports) {
var RetryOperation = require('./retry_operation');

exports.operation = function (options) {
  var timeouts = exports.timeouts(options);
  return new RetryOperation(timeouts, {
    forever: options && options.forever,
    unref: options && options.unref,
    maxRetryTime: options && options.maxRetryTime
  });
};

exports.timeouts = function (options) {
  if (options instanceof Array) {
    return [].concat(options);
  }

  var opts = {
    retries: 10,
    factor: 2,
    minTimeout: 1 * 1000,
    maxTimeout: Infinity,
    randomize: false
  };

  for (var key in options) {
    opts[key] = options[key];
  }

  if (opts.minTimeout > opts.maxTimeout) {
    throw new Error('minTimeout is greater than maxTimeout');
  }

  var timeouts = [];

  for (var i = 0; i < opts.retries; i++) {
    timeouts.push(this.createTimeout(i, opts));
  }

  if (options && options.forever && !timeouts.length) {
    timeouts.push(this.createTimeout(i, opts));
  } // sort the array numerically ascending


  timeouts.sort(function (a, b) {
    return a - b;
  });
  return timeouts;
};

exports.createTimeout = function (attempt, opts) {
  var random = opts.randomize ? Math.random() + 1 : 1;
  var timeout = Math.round(random * opts.minTimeout * Math.pow(opts.factor, attempt));
  timeout = Math.min(timeout, opts.maxTimeout);
  return timeout;
};

exports.wrap = function (obj, options, methods) {
  if (options instanceof Array) {
    methods = options;
    options = null;
  }

  if (!methods) {
    methods = [];

    for (var key in obj) {
      if (typeof obj[key] === 'function') {
        methods.push(key);
      }
    }
  }

  for (var i = 0; i < methods.length; i++) {
    var method = methods[i];
    var original = obj[method];

    obj[method] = function retryWrapper(original) {
      var op = exports.operation(options);
      var args = Array.prototype.slice.call(arguments, 1);
      var callback = args.pop();
      args.push(function (err) {
        if (op.retry(err)) {
          return;
        }

        if (err) {
          arguments[0] = op.mainError();
        }

        callback.apply(this, arguments);
      });
      op.attempt(function () {
        original.apply(obj, args);
      });
    }.bind(obj, original);

    obj[method].options = options;
  }
};
},{"./retry_operation":"../../../node_modules/retry/lib/retry_operation.js"}],"../../../node_modules/retry/index.js":[function(require,module,exports) {
module.exports = require('./lib/retry');
},{"./lib/retry":"../../../node_modules/retry/lib/retry.js"}],"../../../node_modules/p-retry/index.js":[function(require,module,exports) {
'use strict';

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var retry = require('retry');

var AbortError = /*#__PURE__*/function (_Error) {
  _inherits(AbortError, _Error);

  var _super = _createSuper(AbortError);

  function AbortError(message) {
    var _this;

    _classCallCheck(this, AbortError);

    _this = _super.call(this);

    if (message instanceof Error) {
      _this.originalError = message;
      var _message = message;
      message = _message.message;
    } else {
      _this.originalError = new Error(message);
      _this.originalError.stack = _this.stack;
    }

    _this.name = 'AbortError';
    _this.message = message;
    return _this;
  }

  return AbortError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

var decorateErrorWithCounts = function decorateErrorWithCounts(error, attemptNumber, options) {
  // Minus 1 from attemptNumber because the first attempt does not count as a retry
  var retriesLeft = options.retries - (attemptNumber - 1);
  error.attemptNumber = attemptNumber;
  error.retriesLeft = retriesLeft;
  return error;
};

var pRetry = function pRetry(input, options) {
  return new Promise(function (resolve, reject) {
    options = {
      onFailedAttempt: function onFailedAttempt() {},
      retries: 10,
      ...options
    };
    var operation = retry.operation(options);
    operation.attempt( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(attemptNumber) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.t0 = resolve;
                _context.next = 4;
                return input(attemptNumber);

              case 4:
                _context.t1 = _context.sent;
                (0, _context.t0)(_context.t1);
                _context.next = 34;
                break;

              case 8:
                _context.prev = 8;
                _context.t2 = _context["catch"](0);

                if (_context.t2 instanceof Error) {
                  _context.next = 13;
                  break;
                }

                reject(new TypeError("Non-error was thrown: \"".concat(_context.t2, "\". You should only throw errors.")));
                return _context.abrupt("return");

              case 13:
                if (!(_context.t2 instanceof AbortError)) {
                  _context.next = 18;
                  break;
                }

                operation.stop();
                reject(_context.t2.originalError);
                _context.next = 34;
                break;

              case 18:
                if (!(_context.t2 instanceof TypeError)) {
                  _context.next = 23;
                  break;
                }

                operation.stop();
                reject(_context.t2);
                _context.next = 34;
                break;

              case 23:
                decorateErrorWithCounts(_context.t2, attemptNumber, options);
                _context.prev = 24;
                _context.next = 27;
                return options.onFailedAttempt(_context.t2);

              case 27:
                _context.next = 33;
                break;

              case 29:
                _context.prev = 29;
                _context.t3 = _context["catch"](24);
                reject(_context.t3);
                return _context.abrupt("return");

              case 33:
                if (!operation.retry(_context.t2)) {
                  reject(operation.mainError());
                }

              case 34:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8], [24, 29]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  });
};

module.exports = pRetry; // TODO: remove this in the next major version

module.exports.default = pRetry;
module.exports.AbortError = AbortError;
},{"retry":"../../../node_modules/retry/index.js"}],"utils/common/common.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.log = log;
exports.fetchJsonBase = fetchJsonBase;
exports.fetchJson = fetchJson;

var _pRetry = _interopRequireDefault(require("p-retry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __read = void 0 && (void 0).__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = void 0 && (void 0).__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

function log(str) {
  var args = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }

  console.log.apply(console, __spread(["APP-BOSS::" + str], args));
}

;

function fetchJsonBase() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  return __awaiter(this, void 0, void 0, function () {
    return __generator(this, function (_a) {
      return [2, fetch.apply(void 0, __spread(args)).then(function (response) {
        return response.json();
      })];
    });
  });
}

;

function fetchJson(fetchParams, retryOptions) {
  return __awaiter(this, void 0, void 0, function () {
    var input, init, response;

    var _this = this;

    return __generator(this, function (_a) {
      input = '';

      if (typeof fetchParams === 'string') {
        input = fetchParams;
      } else {
        input = fetchParams.input;
        init = fetchParams.init;
      }

      response = function response() {
        return __awaiter(_this, void 0, void 0, function () {
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4, fetchJsonBase(input, init)];

              case 1:
                return [2, _a.sent()];
            }
          });
        });
      };

      return [2, (0, _pRetry.default)(response, retryOptions)];
    });
  });
}

;
},{"p-retry":"../../../node_modules/p-retry/index.js"}],"../../../libs/utils/async/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sleep = void 0;

var sleep = function sleep(timeout) {
  return new Promise(function (r) {
    return setTimeout(r, timeout);
  });
};

exports.sleep = sleep;
},{}],"common/constants/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.APP_BOSS_NAME = void 0;
var APP_BOSS_NAME = 'APPBOSSAPPS';
exports.APP_BOSS_NAME = APP_BOSS_NAME;
},{}],"utils/common/errors.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PreorderError = void 0;

var _constants = require("~common/constants");

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __read = void 0 && (void 0).__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = void 0 && (void 0).__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

var PreorderError = function (_super) {
  __extends(PreorderError, _super);

  function PreorderError() {
    var params = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      params[_i] = arguments[_i];
    }

    var _this = _super.apply(this, __spread(params)) || this;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(_this, PreorderError);
    }

    _this.name = _constants.APP_BOSS_NAME + " PreorderError";
    return _this;
  }

  return PreorderError;
}(Error);

exports.PreorderError = PreorderError;
},{"~common/constants":"common/constants/index.ts"}],"utils/common/fetch.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchJsonBase = fetchJsonBase;
exports.fetchJson = fetchJson;
exports.loadScript = loadScript;

var _pRetry = _interopRequireDefault(require("p-retry"));

var _common = require("./common");

var _errors = require("./errors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __read = void 0 && (void 0).__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = void 0 && (void 0).__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

function fetchJsonBase() {
  var _this = this;

  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  return fetch.apply(void 0, __spread(args)).then(function (response) {
    return __awaiter(_this, void 0, void 0, function () {
      var _a;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            _a = {
              status: response.status
            };
            return [4, response.json()];

          case 1:
            return [2, (_a.json = _b.sent(), _a)];
        }
      });
    });
  });
}

;

function fetchJson(fetchParams, retryOptions) {
  return __awaiter(this, void 0, void 0, function () {
    var input, init, logFetch, responseFn;

    var _this = this;

    return __generator(this, function (_a) {
      input = '';
      logFetch = (0, _common.logWithPrefix)('fetchJson:: ');

      if (typeof fetchParams === 'string') {
        input = fetchParams;
      } else {
        input = fetchParams.input;
        init = fetchParams.init;
      }

      responseFn = function responseFn() {
        return __awaiter(_this, void 0, void 0, function () {
          var _a, json, status;

          var _b;

          return __generator(this, function (_c) {
            switch (_c.label) {
              case 0:
                return [4, fetchJsonBase(input, init)];

              case 1:
                _a = _c.sent(), json = _a.json, status = _a.status;
                logFetch('params:: ', input, init, 'response:: ', 'status:', status, ' json: ', json);

                if ([410, 404].includes(status)) {
                  throw new _pRetry.default.AbortError((_b = json) === null || _b === void 0 ? void 0 : _b.message);
                }

                if (status !== 200) {
                  throw new _errors.PreorderError("retries failed on " + fetchParams);
                }

                return [2, json];
            }
          });
        });
      };

      return [2, (0, _pRetry.default)(responseFn, retryOptions)];
    });
  });
}

;

function loadScript(url) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement("script");
    script.onload = resolve;
    script.onerror = reject;
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  });
}
},{"p-retry":"../../../node_modules/p-retry/index.js","./common":"utils/common/common.ts","./errors":"utils/common/errors.ts"}],"product-details/services/ProductPageApiService.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MockProductPageApiService = exports.ProductPageApiService = exports.ProductApiJson = void 0;

var _async = require("~../../../libs/utils/async");

var _fetch = require("~utils/common/fetch");

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var ProductApiJson = function () {
  function ProductApiJson() {
    this.id = '';
    this.variants = [];
  }

  return ProductApiJson;
}();

exports.ProductApiJson = ProductApiJson;
;

var ProductPageApiService = function () {
  function ProductPageApiService(log, preorderApi) {
    this.log = log;
    this.preorderApi = preorderApi;
    this.log = log.bind(null, ProductPageApiService.name, ':: ');
  }

  ProductPageApiService.prototype.loadProduct = function () {
    return __awaiter(this, void 0, void 0, function () {
      var handle, product;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            handle = window.location.pathname.split('/').pop();
            return [4, (0, _fetch.fetchJson)('' + handle + '.js', {
              retries: 3
            })];

          case 1:
            product = _a.sent();
            this.log('loadProduct:: product', product);
            return [2, product];
        }
      });
    });
  };

  ProductPageApiService.prototype.loadSettings = function (shop_id, variant_id) {
    return __awaiter(this, void 0, void 0, function () {
      var options, settings;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            options = {
              onFailedAttempt: function onFailedAttempt(error) {
                return __awaiter(_this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4, Promise.resolve(this.log('AjaxApi:: settings error', error))];

                      case 1:
                        _a.sent();

                        return [2];
                    }
                  });
                });
              },
              retries: 3
            };
            return [4, (0, _fetch.fetchJson)(this.preorderApi.url + "/storefront/products/settings?shop=" + encodeURIComponent(shop_id) + "&variant_id=" + variant_id, options)];

          case 1:
            settings = _a.sent();
            this.log('loadSettings:: settings', settings);
            return [2, settings];
        }
      });
    });
  };

  return ProductPageApiService;
}();

exports.ProductPageApiService = ProductPageApiService;

var MockProductPageApiService = function (_super) {
  __extends(MockProductPageApiService, _super);

  function MockProductPageApiService(log, preorderApi) {
    var _this = _super.call(this, log, preorderApi) || this;

    _this.log = log.bind(null, MockProductPageApiService.name, ':: ');
    return _this;
  }

  MockProductPageApiService.prototype.loadSettings = function (shop_id, variant_id) {
    return __awaiter(this, void 0, void 0, function () {
      var options, data, settings;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            options = {
              onFailedAttempt: function onFailedAttempt(error) {
                return __awaiter(_this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4, Promise.resolve(this.log('AjaxApi:: settings error', error))];

                      case 1:
                        _a.sent();

                        return [2];
                    }
                  });
                });
              },
              retries: 3
            };
            return [4, (0, _async.sleep)(800)];

          case 1:
            _a.sent();

            data = {
              button: {
                "design_settings": {
                  "current": {
                    "preorder": {
                      "button": {
                        "color": "#D3E1F1",
                        "background_color": "#182CD9",
                        "border_color": "#182CD9",
                        "font_family": "inherit",
                        "font_size": "18px",
                        "font_weight": "normal",
                        "text_decoration": "none",
                        "font_style": "normal",
                        "border_radius": "3px",
                        "border_width": "1px",
                        "padding_top": "12px",
                        "padding_bottom": "12px",
                        "padding_right": "30px",
                        "padding_left": "30px"
                      },
                      "hover": {
                        "color": "#D3E1F1",
                        "background_color": "#4FA7EC",
                        "border_color": "#4FA7EC",
                        "font_family": "inherit",
                        "font_size": "18px",
                        "font_weight": "normal",
                        "text_decoration": "none",
                        "font_style": "normal",
                        "border_radius": "3px",
                        "border_width": "1px",
                        "padding_top": "12px",
                        "padding_bottom": "12px",
                        "padding_right": "30px",
                        "padding_left": "30px"
                      },
                      "message": {
                        "color": "#898989",
                        "background_color": "initial",
                        "border_color": "initial",
                        "font_family": "inherit",
                        "font_size": "14px",
                        "font_weight": "normal",
                        "text_decoration": "none",
                        "font_style": "normal",
                        "border_radius": "0",
                        "border_width": "0",
                        "padding_top": "0",
                        "padding_bottom": "0",
                        "padding_right": "0",
                        "padding_left": "0"
                      }
                    },
                    "checkout": {
                      "button": {
                        "color": "#D3E1F1",
                        "background_color": "#182CD9",
                        "border_color": "#182CD9",
                        "font_family": "inherit",
                        "font_size": "18px",
                        "font_weight": "normal",
                        "text_decoration": "none",
                        "font_style": "normal",
                        "border_radius": "3px",
                        "border_width": "1px",
                        "padding_top": "12px",
                        "padding_bottom": "12px",
                        "padding_right": "30px",
                        "padding_left": "30px"
                      },
                      "hover": {
                        "color": "#D3E1F1",
                        "background_color": "#ec754fff",
                        "border_color": "#4FA7EC",
                        "font_family": "inherit",
                        "font_size": "18px",
                        "font_weight": "bold",
                        "text_decoration": "underline",
                        "font_style": "italic",
                        "border_radius": "3px",
                        "border_width": "1px",
                        "padding_top": "12px",
                        "padding_bottom": "12px",
                        "padding_right": "30px",
                        "padding_left": "30px"
                      },
                      "message": {
                        "color": "#898989",
                        "background_color": "initial",
                        "border_color": "initial",
                        "font_family": "inherit",
                        "font_size": "14px",
                        "font_weight": "normal",
                        "text_decoration": "none",
                        "font_style": "normal",
                        "border_radius": "0",
                        "border_width": "0",
                        "padding_top": "0",
                        "padding_bottom": "0",
                        "padding_right": "0",
                        "padding_left": "0"
                      }
                    }
                  },
                  "default": {
                    "preorder": {
                      "button": {
                        "color": "#D3E1F1",
                        "background_color": "#182CD9",
                        "border_color": "#182CD9",
                        "font_family": "inherit",
                        "font_size": "18px",
                        "font_weight": "normal",
                        "text_decoration": "none",
                        "font_style": "normal",
                        "border_radius": "3px",
                        "border_width": "1px",
                        "padding_top": "12px",
                        "padding_bottom": "12px",
                        "padding_right": "30px",
                        "padding_left": "30px"
                      },
                      "hover": {
                        "color": "#D3E1F1",
                        "background_color": "#4FA7EC",
                        "border_color": "#4FA7EC",
                        "font_family": "inherit",
                        "font_size": "18px",
                        "font_weight": "normal",
                        "text_decoration": "none",
                        "font_style": "normal",
                        "border_radius": "3px",
                        "border_width": "1px",
                        "padding_top": "12px",
                        "padding_bottom": "12px",
                        "padding_right": "30px",
                        "padding_left": "30px"
                      },
                      "message": {
                        "color": "#898989",
                        "background_color": "initial",
                        "border_color": "initial",
                        "font_family": "inherit",
                        "font_size": "14px",
                        "font_weight": "normal",
                        "text_decoration": "none",
                        "font_style": "normal",
                        "border_radius": "0",
                        "border_width": "0",
                        "padding_top": "0",
                        "padding_bottom": "0",
                        "padding_right": "0",
                        "padding_left": "0"
                      }
                    },
                    "checkout": {
                      "button": {
                        "color": "#D3E1F1",
                        "background_color": "#182CD9",
                        "border_color": "#182CD9",
                        "font_family": "inherit",
                        "font_size": "18px",
                        "font_weight": "normal",
                        "text_decoration": "none",
                        "font_style": "normal",
                        "border_radius": "3px",
                        "border_width": "1px",
                        "padding_top": "12px",
                        "padding_bottom": "12px",
                        "padding_right": "30px",
                        "padding_left": "30px"
                      },
                      "hover": {
                        "color": "#D3E1F1",
                        "background_color": "#4FA7EC",
                        "border_color": "#4FA7EC",
                        "font_family": "inherit",
                        "font_size": "18px",
                        "font_weight": "normal",
                        "text_decoration": "none",
                        "font_style": "normal",
                        "border_radius": "3px",
                        "border_width": "1px",
                        "padding_top": "12px",
                        "padding_bottom": "12px",
                        "padding_right": "30px",
                        "padding_left": "30px"
                      },
                      "message": {
                        "color": "#898989",
                        "background_color": "initial",
                        "border_color": "initial",
                        "font_family": "inherit",
                        "font_size": "14px",
                        "font_weight": "normal",
                        "text_decoration": "none",
                        "font_style": "normal",
                        "border_radius": "0",
                        "border_width": "0",
                        "padding_top": "0",
                        "padding_bottom": "0",
                        "padding_right": "0",
                        "padding_left": "0"
                      }
                    }
                  }
                },
                "text": "Pre Order It",
                "message": "We will fulfill the order as soon as this item becomes available"
              },
              "variant": {
                "preorder_status": "enabled",
                "availability_date": null
              }
            };
            data.button.message = " variant ID :: " + variant_id;
            return [4, Promise.resolve(data)];

          case 2:
            settings = _a.sent();
            this.log('loadSettings:: params --> ', 'shop_id: ', shop_id, ', variant_id: ', variant_id, ', response --> settings::', settings);
            return [2, settings];
        }
      });
    });
  };

  return MockProductPageApiService;
}(ProductPageApiService);

exports.MockProductPageApiService = MockProductPageApiService;
},{"~../../../libs/utils/async":"../../../libs/utils/async/index.ts","~utils/common/fetch":"utils/common/fetch.ts"}],"common/types.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PreorderStatus = void 0;
var PreorderStatus;
exports.PreorderStatus = PreorderStatus;

(function (PreorderStatus) {
  PreorderStatus["Enabled"] = "enabled";
  PreorderStatus["Activated"] = "activated";
  PreorderStatus["Disabled"] = "disabled";
})(PreorderStatus || (exports.PreorderStatus = PreorderStatus = {}));
},{}],"common/constants/selectors.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectors = void 0;
var selectors = {
  product: {
    button: ["#AddToCart", "form[action=\"/cart/add\"] [type=submit]", "[data-shopify=\"payment-button\"]", "[class*='payment-button']"],
    form: "form[action=\"/cart/add\"]",
    variantsSelect: ".single-option-selector",
    variantsSelectId: "ProductSelect-product-template"
  },
  collection: {
    "selector": "form[action=\"/cart/add\"] [type=submit]"
  },
  index: {
    "selector": "form[action=\"/cart/add\"] [type=submit]"
  },
  quickview: {
    "selector": "form[action=\"/cart/add\"] [type=submit]"
  }
};
exports.selectors = selectors;
},{}],"../../../libs/utils/design-settings/design-settings.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStylesString = exports.validateFont = exports.fontRange = void 0;
var fontRange = {
  min: 10,
  max: 50
};
exports.fontRange = fontRange;

var validateFont = function validateFont(size) {
  var value = Number(size);

  if (isNaN(value)) {
    value = fontRange.min;
  } else if (value < fontRange.min) {
    value = fontRange.min;
  } else if (value > fontRange.max) {
    value = fontRange.max;
  }

  return value.toString();
};

exports.validateFont = validateFont;

var getStylesString = function getStylesString(settings) {
  if (!settings) {
    return '';
  }

  var color = settings.color,
      background_color = settings.background_color,
      border_color = settings.border_color,
      font_family = settings.font_family,
      font_size = settings.font_size,
      font_weight = settings.font_weight,
      text_decoration = settings.text_decoration,
      font_style = settings.font_style,
      border_radius = settings.border_radius,
      border_width = settings.border_width;
  var result = '';
  Object.keys(settings).forEach(function (keyFromState) {
    var key = keyFromState.replace('_', '-');
    var value = settings[keyFromState];

    if (key === 'font-size') {
      value = validateFont(settings.font_size.slice(0, -2)) + 'px';
    }

    result += key + ": " + value + "; ";
  }); // result += `padding: 12px 30px;`;

  result += "border-color: " + background_color; // result += `background-color: ${background_color}; `;
  // result += `border-radius: ${background_color}; `;

  return result; // ` border-radius: 1px; border-color: rgba(4, 120, 205, 0.5); border-width: 1px; color: rgb(255, 255, 255); font-size: 18px; font-family: inherit; font-style: normal; font-weight: bold; text-decoration: underline;`;
  // `background-color: rgba(122, 125, 158, 0.5); padding: 23px 30px; border-radius: 1px; border-color: rgba(4, 120, 205, 0.5); border-width: 1px; color: rgb(255, 255, 255); font-size: 18px; font-family: inherit; font-style: normal; font-weight: bold; text-decoration: underline;`;
};

exports.getStylesString = getStylesString;
},{}],"../../../libs/utils/design-settings/types.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fonts = exports.fontsValues = void 0;
var fontsValues = [{
  label: 'Theme Default',
  value: 'inherit'
}, {
  label: 'Arial',
  value: 'Arial, sans-serif'
}, {
  label: 'Geneva',
  value: 'Geneva, Tahoma, sans-serif'
}, {
  label: 'Georgia',
  value: 'Georgia, serif'
}, {
  label: 'Times',
  value: 'Times, Times New Roman, serif'
}, {
  label: 'Verdana',
  value: 'Verdana, sans-serif'
}];
exports.fontsValues = fontsValues;
var fonts = fontsValues;
exports.fonts = fonts;
var area = ['preorder', 'checkout'];
var buttonParts = ['button', 'hover', 'message'];
var designStates = ['current', 'default'];
},{}],"../../../libs/utils/design-settings/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _designSettings = require("./design-settings");

Object.keys(_designSettings).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _designSettings[key];
    }
  });
});

var _types = require("./types");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});
},{"./design-settings":"../../../libs/utils/design-settings/design-settings.ts","./types":"../../../libs/utils/design-settings/types.ts"}],"../../../libs/utils/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _designSettings = require("./design-settings");

Object.keys(_designSettings).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _designSettings[key];
    }
  });
});
},{"./design-settings":"../../../libs/utils/design-settings/index.ts"}],"product-details/preorderStyle.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var style = "\n        .pre-order-button-box button {\n          cursor: pointer; }\n\n        .pre-order-button-box {\n          display: inline-block;\n          align-self: inherit;\n          text-align: center;\n          margin: 1rem 0;\n        }\n        .pre-order-button-box button {\n            width: 100%;\n            padding: 0;\n            border: none;\n            color: inherit;\n            background-color: transparent; }\n            .pre-order-button-box button .pre-order-button__self,\n            .pre-order-button-box button .pre-order-button__hover {\n              border-style: outset; }\n            .pre-order-button-box button:hover .pre-order-button__self {\n              display: none; }\n            .pre-order-button-box button:hover .pre-order-button__hover {\n              display: block; }\n            .pre-order-button-box button:hover + .pre-order-button__message {\n              display: inline-block;\n              margin-right: -100%;\n              opacity: 1;\n              height: auto;\n              padding: 7px;\n              border-width: 1px; }\n          .pre-order-button-box__hover {\n            position: relative; }\n          .pre-order-button-box .pre-order-button__message {\n            position: absolute;\n            background-color: khaki;\n            text-align: center;\n            padding: 7px;\n            border-style: solid;\n            box-sizing: content-box;\n            z-index: 999;\n            line-height: 1.6;\n            display: block;\n            overflow: hidden;\n            background-color: #f4f4f4;\n            border-radius: 10px;\n            border-color: #d7d7d7;\n            border-width: 1px;\n            opacity: 0;\n            transition: opacity 0.5s;\n            height: 0;\n            padding: 0;\n            border-width: 0; }\n          .pre-order-button-box .pre-order-button__self {\n            display: block; }\n          .pre-order-button-box .pre-order-button__hover {\n            display: none; }\n          .pre-order-button-box__top {\n            flex-direction: column-reverse;\n            align-items: center; }\n            .pre-order-button-box__top .pre-order-button__message {\n              bottom: 120%;\n              left: 50%;\n              transform: translateX(-50%); }\n              \n    .pre-order-button__spinner {\n        display: flex;\n        align-content: center;\n        justify-content: center;\n    }\n              \n    .Polaris-Spinner--colorTeal svg {\n        animation: Polaris-Spinner--loading .5s linear infinite;\n        fill: var(--p-border-highlight,#47c1bf);\n    }\n    \n    .Polaris-Spinner--sizeLarge svg {\n        height: 2.4rem;\n        width: 2.4rem;\n    }\n    \n    .pre-order-button__spinner {\n        width: 100%;\n        text-align: inherit;\n    }\n    \n    @keyframes Polaris-Spinner--loading{to{transform:rotate(1turn)}}\n  ";
var _default = style;
exports.default = _default;
},{}],"product-details/PreorderButton.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PreorderButton = void 0;

var _utils = require("~../../../libs/utils");

var _common = require("~utils/common/common");

var _preorderStyle = _interopRequireDefault(require("./preorderStyle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PreorderButton = function () {
  function PreorderButton(settings, text, message) {
    var _this = this;

    if (text === void 0) {
      text = '{{PreOrderText}}';
    }

    if (message === void 0) {
      message = '{{PreOrderMessage}}';
    }

    this.settings = settings;
    this.text = text;
    this.message = message;
    this.mainCssClass = 'pre-order-button-box';
    this.mainDisplayStyle = 'inline-block';

    this.getPreorderButtonHtml = function (buttonText, buttonMessage, buttonStyle, hoverStyle, availabilityDateStyle, availabilityDate) {
      return "<div class=\"" + _this.mainCssClass + " " + _this.mainCssClass + "__hover " + _this.mainCssClass + "__top\">\n                <button\n                    type=\"submit\"\n                >\n                    <span\n                        class=\"pre-order-button__self\"\n                        style=\"" + buttonStyle + "\"\n                    >\n                        " + buttonText + "\n                    </span>\n                    <span\n                        class=\"pre-order-button__hover\"\n                        style=\"" + hoverStyle + "\"\n                    >\n                        " + buttonText + "\n                    </span>\n                </button>\n                <span class=\"pre-order-button__message\">\n                    " + buttonMessage + "\n                </span>\n                <div\n                 class=\"pre-order-button__availability-date\"\n                 style=\"" + availabilityDateStyle + "\"\n                 ></div>\n            </div>";
    };

    (0, _common.addStyleElement)(_preorderStyle.default);
    this.render();
    this.hide();
  }

  PreorderButton.prototype.render = function () {
    var placeholder = document.createElement('div');

    var _a = this.getStyles(),
        buttonStyle = _a.buttonStyle,
        hoverStyle = _a.hoverStyle,
        availabilityDateStyle = _a.availabilityDateStyle;

    placeholder.insertAdjacentHTML('beforeend', this.getPreorderButtonHtml(this.text, this.message, buttonStyle, hoverStyle, availabilityDateStyle, this.availabilityDate));
    this.element = placeholder.firstElementChild;
    this.buttonElement = this.element.querySelector('.pre-order-button__self');
    this.hoverElement = this.element.querySelector('.pre-order-button__hover');
    this.messageElement = this.element.querySelector('.pre-order-button__message');
    this.availabilityDateElement = this.element.querySelector('.pre-order-button__availability-date');
  };

  PreorderButton.prototype.setSettings = function (settings) {
    this.settings = settings;

    var _a = this.getStyles(),
        buttonStyle = _a.buttonStyle,
        hoverStyle = _a.hoverStyle;

    this.buttonElement.setAttribute('style', buttonStyle);
    this.hoverElement.setAttribute('style', hoverStyle);
  };

  PreorderButton.prototype.setText = function (text) {
    this.text = text;
    this.buttonElement.innerText = text;
    this.hoverElement.innerText = text;
  };

  PreorderButton.prototype.setMessage = function (message) {
    this.message = message;
    this.messageElement.innerText = message;
  };

  PreorderButton.prototype.getStyles = function () {
    var _a, _b;

    var buttonStyle = (0, _utils.getStylesString)((_a = this.settings) === null || _a === void 0 ? void 0 : _a.button);
    var hoverStyle = (0, _utils.getStylesString)((_b = this.settings) === null || _b === void 0 ? void 0 : _b.hover);
    var availabilityDateStyle = 'margin-top: 1rem; font-size: 0.8em; text-align: inherit;';
    return {
      buttonStyle: buttonStyle,
      hoverStyle: hoverStyle,
      availabilityDateStyle: availabilityDateStyle
    };
  };

  PreorderButton.prototype.hide = function () {
    this.element.style.display = "none";
  };

  PreorderButton.prototype.display = function () {
    this.element.style.display = this.mainDisplayStyle;
  };

  PreorderButton.prototype.setAavailabilityDate = function (input) {
    var value = '';

    if (input) {
      var dateValue = new Date(input);
      var year = dateValue.getFullYear();
      var month = dateValue.getMonth() + 1;
      var date = dateValue.getDate();

      if (date < 10) {
        date = '0' + date;
      }

      if (month < 10) {
        month = '0' + month;
      }

      this.availabilityDate = month + "/" + date + "/" + year;
      value = !this.availabilityDate ? '' : "Availability date: " + this.availabilityDate;
    }

    this.availabilityDateElement.innerText = value;
  };

  return PreorderButton;
}();

exports.PreorderButton = PreorderButton;
},{"~../../../libs/utils":"../../../libs/utils/index.ts","~utils/common/common":"utils/common/common.ts","./preorderStyle":"product-details/preorderStyle.ts"}],"product-details/PreorderSpinner.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PreorderSpinner = void 0;

var PreorderSpinner = function () {
  function PreorderSpinner(settings, text, message) {
    if (text === void 0) {
      text = '{{PreOrderText}}';
    }

    if (message === void 0) {
      message = '{{PreOrderMessage}}';
    }

    this.settings = settings;
    this.text = text;
    this.message = message;
    this.visible = false;

    this.getSpinnerHtml = function () {
      return "<span class=\"pre-order-button__spinner Polaris-Spinner Polaris-Spinner--colorTeal Polaris-Spinner--sizeLarge\">\n            <svg viewBox=\"0 0 44 44\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M15.542 1.487A21.507 21.507 0 00.5 22c0 11.874 9.626 21.5 21.5 21.5 9.847 0 18.364-6.675 20.809-16.072a1.5 1.5 0 00-2.904-.756C37.803 34.755 30.473 40.5 22 40.5 11.783 40.5 3.5 32.217 3.5 22c0-8.137 5.3-15.247 12.942-17.65a1.5 1.5 0 10-.9-2.863z\">\n                </path>\n            </svg>\n        </span>";
    };

    this.render();
    this.hide();
  }

  PreorderSpinner.prototype.render = function () {
    var placeholder = document.createElement('div');
    placeholder.insertAdjacentHTML('beforeend', this.getSpinnerHtml());
    this.element = placeholder.firstElementChild;
  };

  PreorderSpinner.prototype.hide = function () {
    this.element.style.display = "none";
    this.visible = false;
  };

  PreorderSpinner.prototype.display = function (width) {
    this.element.style.display = "flex";

    if (width) {
      this.element.style.width = width;
    }

    this.visible = true;
  };

  return PreorderSpinner;
}();

exports.PreorderSpinner = PreorderSpinner;
},{}],"product-details/ProductForm.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductForm = void 0;

var _async = require("~../../../libs/utils/async");

var _selectors = require("~common/constants/selectors");

var _PreorderButton = require("./PreorderButton");

var _PreorderSpinner = require("./PreorderSpinner");

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var ProductForm = function () {
  function ProductForm() {
    var _a, _b, _c;

    this.variantsSelectElement = null;
    this.displayOriginValue = 'block';
    this.themesButtons = {
      items: new Map(),
      visible: false,
      styleElement: null
    };
    this.themesButtonsWidth = null;
    this.settings = null;
    this.element = document.querySelector(_selectors.selectors.product.form);
    this.addListners();
    this.variantsSelectElement = (_b = (_a = this.element) === null || _a === void 0 ? void 0 : _a.querySelector(_selectors.selectors.product.variantsSelect), _b !== null && _b !== void 0 ? _b : null);

    if (this.element) {
      this.displayOriginValue = window.getComputedStyle(this.element).display;
    }

    this.preorderButton = new _PreorderButton.PreorderButton();
    this.spinner = new _PreorderSpinner.PreorderSpinner();
    (_c = this.element) === null || _c === void 0 ? void 0 : _c.append(this.spinner.element);
  }

  ProductForm.prototype.addListners = function (product) {
    var _this = this;

    this.onClick(function () {
      if (!_this.themesButtons.visible) {
        _this.hideThemesButtons();
      }
    });
    {}
  };

  ProductForm.prototype.onClick = function (cb) {
    var _a;

    (_a = this.element) === null || _a === void 0 ? void 0 : _a.addEventListener('click', cb);
  };

  ProductForm.prototype.onVariantChange = function (cb) {
    var _a;

    (_a = this.element) === null || _a === void 0 ? void 0 : _a.addEventListener('change', function (e) {
      return cb(e);
    });
  };

  ProductForm.prototype.setThemesButtons = function () {
    var _this = this;

    if (this.element !== null) {
      _selectors.selectors.product.button.forEach(function (selector) {
        var _a;

        var element = (_a = _this.element) === null || _a === void 0 ? void 0 : _a.querySelector(selector);
        selector = (_selectors.selectors.product.form && '') + " " + selector;

        if (!_this.themesButtons.items.has(selector)) {
          _this.themesButtons.items.set(selector, {
            ref: element !== null && element !== void 0 ? element : null,
            style: element ? window.getComputedStyle(element).display : null,
            selector: (_selectors.selectors.product.form && '') + " " + selector
          });
        }
      });
    }
  };

  Object.defineProperty(ProductForm.prototype, "isExist", {
    get: function get() {
      return Boolean(this.element);
    },
    enumerable: true,
    configurable: true
  });

  ProductForm.prototype.appendPreorderButton = function () {
    var _a;

    (_a = this.element) === null || _a === void 0 ? void 0 : _a.append(this.preorderButton.element);
  };

  ProductForm.prototype.displayPreorderButton = function () {
    this.preorderButton.display();
  };

  ProductForm.prototype.showThemesButtons = function () {
    this.themesButtons.items.forEach(function (element) {
      var _a;

      if (((_a = element) === null || _a === void 0 ? void 0 : _a.ref) && element.style) {
        element.ref.style.display = element.style;
      }
    });
    this.themesButtons.visible = true;
  };

  ProductForm.prototype.hideThemesButtons = function () {
    var _this = this;

    this.setThemesButtons();
    this.themesButtons.items.forEach(function (elementToHide) {
      var _a;

      if ((_a = elementToHide) === null || _a === void 0 ? void 0 : _a.ref) {
        elementToHide.ref.style.display = 'none';

        if (_this.themesButtonsWidth === null) {
          _this.themesButtonsWidth = window.getComputedStyle(elementToHide.ref).width;
        }
      }
    });

    if (this.themesButtonsWidth) {
      this.preorderButton.element.style.width = this.themesButtonsWidth;
    }

    this.themesButtons.visible = false;
  };

  ProductForm.prototype.showSpinner = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, (0, _async.sleep)()];

          case 1:
            _a.sent();

            this.hideThemesButtons();
            this.preorderButton.hide();
            this.spinner.display(this.themesButtonsWidth);
            return [2];
        }
      });
    });
  };

  ProductForm.prototype.hideSpinner = function () {
    this.hideThemesButtons();
    this.spinner.hide();
  };

  ProductForm.prototype.setPreorderButtonSettings = function (settings) {
    this.settings = settings;
    this.preorderButton.setSettings(settings.design_settings);
    this.preorderButton.setText(settings.text);
    this.preorderButton.setMessage(settings.message);
  };

  ProductForm.prototype.triggerVariantChangeSync = function () {
    var _a, _b;

    (_b = (_a = this.element) === null || _a === void 0 ? void 0 : _a.querySelector('select')) === null || _b === void 0 ? void 0 : _b.dispatchEvent(new Event('change', {
      'bubbles': true
    }));
  };

  return ProductForm;
}();

exports.ProductForm = ProductForm;
},{"~../../../libs/utils/async":"../../../libs/utils/async/index.ts","~common/constants/selectors":"common/constants/selectors.ts","./PreorderButton":"product-details/PreorderButton.ts","./PreorderSpinner":"product-details/PreorderSpinner.ts"}],"product-details/ProductPageController.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductPageController = void 0;

var _types = require("~common/types");

var _common = require("~utils/common/common");

var _errors = require("~utils/common/errors");

var _ProductForm = require("./ProductForm");

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var ProductPageController = function () {
  function ProductPageController(log, productApiService) {
    var _this = this;

    this.log = log;
    this.productApiService = productApiService;
    this.product = null;
    this.settings = null;
    this.selectedVariant = null;

    this.fallbackForCatchError = function (error) {
      _this.productForm.hideSpinner();

      console.error('LOAD ERROR', error);

      _this.productForm.showThemesButtons();
    }.bind(this);

    debugger;
    this.log = log.bind(null, ProductPageController.name, ':: ');
    this.init().catch(function (error) {
      return _this.log('Init Error:: ', error);
    });
  }

  ProductPageController.prototype.init = function () {
    return __awaiter(this, void 0, void 0, function () {
      var error_1, error;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            this.productForm = new _ProductForm.ProductForm();
            if (!this.productForm.isExist) return [3, 6];
            this.log('product form is on the page');
            this.productForm.triggerVariantChangeSync();
            this.productForm.onVariantChange(function (e) {
              var _a, _b;

              _this.setSelectedVariant((_b = (_a = e) === null || _a === void 0 ? void 0 : _a.target) === null || _b === void 0 ? void 0 : _b.value);

              _this.loadSettings().catch(_this.fallbackForCatchError);
            });
            this.productForm.showSpinner();
            _a.label = 1;

          case 1:
            _a.trys.push([1, 4,, 5]);

            return [4, this.loadProduct()];

          case 2:
            _a.sent();

            return [4, this.loadSettings()];

          case 3:
            _a.sent();

            return [3, 5];

          case 4:
            error_1 = _a.sent();
            this.fallbackForCatchError(error_1);
            return [3, 5];

          case 5:
            return [3, 7];

          case 6:
            error = 'product form is not on the page';
            this.log(error);
            throw new _errors.PreorderError(error);

          case 7:
            return [2];
        }
      });
    });
  };

  ProductPageController.prototype.loadProduct = function () {
    return __awaiter(this, void 0, void 0, function () {
      var product;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, this.productApiService.loadProduct()];

          case 1:
            product = _a.sent();
            this.product = product;
            this.setSelectedVariant();
            return [2];
        }
      });
    });
  };

  ProductPageController.prototype.setSelectedVariant = function (selectValue) {
    var _a, _b, _c, _d, _e, _f, _g;

    var selectedVariant = (_b = (_a = this.product) === null || _a === void 0 ? void 0 : _a.variants) === null || _b === void 0 ? void 0 : _b.find(function (variant) {
      return variant.option1 === selectValue;
    });
    var variantId = _common.LocationApi.urlParam('variant') || ((_e = (_d = (_c = this.product) === null || _c === void 0 ? void 0 : _c.variants) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.id);
    this.selectedVariant = (_g = selectedVariant || ((_f = this.product) === null || _f === void 0 ? void 0 : _f.variants.find(function (v) {
      return String(v.id) === String(variantId);
    })), _g !== null && _g !== void 0 ? _g : null);
  };

  ProductPageController.prototype.loadSettings = function (selectedVariant) {
    var _a, _b;

    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            this.productForm.showSpinner();

            if (selectedVariant) {
              this.selectedVariant = selectedVariant;
            }

            return [4, this.getSettings((_a = this.selectedVariant) === null || _a === void 0 ? void 0 : _a.id)];

          case 1:
            _c.sent();

            this.productForm.hideSpinner();

            if (((_b = this.settings) === null || _b === void 0 ? void 0 : _b.variant.preorder_status) === _types.PreorderStatus.Activated) {
              this.productForm.appendPreorderButton();
              this.productForm.displayPreorderButton();
            } else {
              this.productForm.showThemesButtons();
            }

            return [2];
        }
      });
    });
  };

  ProductPageController.prototype.getSettings = function (variant_id) {
    var _a, _b, _c, _d, _e, _f, _g;

    return __awaiter(this, void 0, void 0, function () {
      var settings;
      return __generator(this, function (_h) {
        switch (_h.label) {
          case 0:
            if (!(this.product === null && !variant_id)) return [3, 2];
            return [4, Promise.resolve(null)];

          case 1:
            return [2, _h.sent()];

          case 2:
            return [4, this.productApiService.loadSettings(window.Shopify.shop, String(variant_id))];

          case 3:
            settings = _h.sent();
            this.productForm.setPreorderButtonSettings({
              text: (_b = (_a = settings) === null || _a === void 0 ? void 0 : _a.button.text, _b !== null && _b !== void 0 ? _b : ''),
              message: (_d = (_c = settings) === null || _c === void 0 ? void 0 : _c.button.message, _d !== null && _d !== void 0 ? _d : ''),
              design_settings: (_e = settings) === null || _e === void 0 ? void 0 : _e.button.design_settings.current.preorder
            });
            this.productForm.preorderButton.setAavailabilityDate((_f = settings) === null || _f === void 0 ? void 0 : _f.variant.availability_date);
            this.settings = __assign(__assign({}, this.settings), {
              variant: (_g = settings) === null || _g === void 0 ? void 0 : _g.variant
            });
            return [2];
        }
      });
    });
  };

  return ProductPageController;
}();

exports.ProductPageController = ProductPageController;
},{"~common/types":"common/types.ts","~utils/common/common":"utils/common/common.ts","~utils/common/errors":"utils/common/errors.ts","./ProductForm":"product-details/ProductForm.ts"}],"product-details/product.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;

var _common = require("../utils/common/common");

var _ProductPageApiService = require("./services/ProductPageApiService");

var _ProductPageController = require("./ProductPageController");

var _index = require("~index");

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

function init(preorderApi) {
  return __awaiter(this, void 0, void 0, function () {
    var logInit, ProductPageApiServiceClass, productApiService, controller;
    return __generator(this, function (_a) {
      logInit = (0, _common.logWithPrefix)('product.init():: ');
      logInit('Shopify object', Shopify);
      ProductPageApiServiceClass = !_index.IS_MOCK ? _ProductPageApiService.ProductPageApiService : _ProductPageApiService.MockProductPageApiService;
      productApiService = new ProductPageApiServiceClass((0, _common.logWithPrefix)(), preorderApi);
      controller = new _ProductPageController.ProductPageController((0, _common.logWithPrefix)(), productApiService);
      return [2];
    });
  });
}
},{"../utils/common/common":"utils/common/common.ts","./services/ProductPageApiService":"product-details/services/ProductPageApiService.ts","./ProductPageController":"product-details/ProductPageController.ts","~index":"index.ts"}],"../../../node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "33631" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../node_modules/parcel/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=product.8add6614.js.map