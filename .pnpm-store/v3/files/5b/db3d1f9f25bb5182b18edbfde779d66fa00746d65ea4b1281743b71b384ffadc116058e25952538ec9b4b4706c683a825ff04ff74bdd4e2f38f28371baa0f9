/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/**
 * validate
 *
 * takes an array of arrays of validations and
 * throws if an error occurs
 */
var validate = function (validations) {
    {
        for (var _i = 0, validations_1 = validations; _i < validations_1.length; _i++) {
            var validation = validations_1[_i];
            var condition = validation[0];
            var errorMessage = validation[1];
            if (condition) {
                throw new Error(errorMessage);
            }
        }
    }
};

/**
 * PluginFactory
 *
 * makes Plugin objects extend and inherit from a root PluginFactory
 */
var pluginFactory = (function (config) { return ({
    config: config,
    /**
     * validate
     *
     * bind validate to the store for easy access
     */
    validate: validate,
    /**
     * create plugin
     *
     * binds plugin properties and functions to an instance of PluginFactorys
     * @param plugin
     */
    create: function (plugin) {
        validate([
            [
                plugin.onStoreCreated && typeof plugin.onStoreCreated !== 'function',
                'Plugin onStoreCreated must be a function',
            ],
            [
                plugin.onModel && typeof plugin.onModel !== 'function',
                'Plugin onModel must be a function',
            ],
            [
                plugin.middleware && typeof plugin.middleware !== 'function',
                'Plugin middleware must be a function',
            ],
        ]);
        if (plugin.onInit) {
            plugin.onInit.call(this);
        }
        var result = {};
        if (plugin.exposed) {
            for (var _i = 0, _a = Object.keys(plugin.exposed); _i < _a.length; _i++) {
                var key = _a[_i];
                this[key] =
                    typeof plugin.exposed[key] === 'function'
                        ? plugin.exposed[key].bind(this) // bind functions to plugin class
                        : Object.create(plugin.exposed[key]); // add exposed to plugin class
            }
        }
        for (var _b = 0, _c = ['onModel', 'middleware', 'onStoreCreated']; _b < _c.length; _b++) {
            var method = _c[_b];
            if (plugin[method]) {
                result[method] = plugin[method].bind(this);
            }
        }
        return result;
    },
}); });

/**
 * Dispatch Plugin
 *
 * generates dispatch[modelName][actionName]
 */
var dispatchPlugin = {
    exposed: {
        // required as a placeholder for store.dispatch
        storeDispatch: function (action, state) {
            console.warn('Warning: store not yet loaded');
        },
        storeGetState: function () {
            console.warn('Warning: store not yet loaded');
        },
        /**
         * dispatch
         *
         * both a function (dispatch) and an object (dispatch[modelName][actionName])
         * @param action R.Action
         */
        dispatch: function (action) {
            return this.storeDispatch(action);
        },
        /**
         * createDispatcher
         *
         * genereates an action creator for a given model & reducer
         * @param modelName string
         * @param reducerName string
         */
        createDispatcher: function (modelName, reducerName) {
            var _this = this;
            return function (payload, meta) { return __awaiter(_this, void 0, Promise, function () {
                var action;
                return __generator(this, function (_a) {
                    action = { type: modelName + "/" + reducerName };
                    if (typeof payload !== 'undefined') {
                        action.payload = payload;
                    }
                    if (typeof meta !== 'undefined') {
                        action.meta = meta;
                    }
                    return [2 /*return*/, this.dispatch(action)];
                });
            }); };
        },
    },
    // access store.dispatch after store is created
    onStoreCreated: function (store) {
        this.storeDispatch = store.dispatch;
        this.storeGetState = store.getState;
        return { dispatch: this.dispatch };
    },
    // generate action creators for all model.reducers
    onModel: function (model) {
        this.dispatch[model.name] = {};
        if (!model.reducers) {
            return;
        }
        for (var _i = 0, _a = Object.keys(model.reducers); _i < _a.length; _i++) {
            var reducerName = _a[_i];
            this.validate([
                [
                    !!reducerName.match(/\/.+\//),
                    "Invalid reducer name (" + model.name + "/" + reducerName + ")",
                ],
                [
                    typeof model.reducers[reducerName] !== 'function',
                    "Invalid reducer (" + model.name + "/" + reducerName + "). Must be a function",
                ],
            ]);
            this.dispatch[model.name][reducerName] = this.createDispatcher.apply(this, [model.name, reducerName]);
        }
    },
};

/**
 * Effects Plugin
 *
 * Plugin for handling async actions
 */
var effectsPlugin = {
    exposed: {
        // expose effects for access from dispatch plugin
        effects: {},
    },
    // add effects to dispatch so that dispatch[modelName][effectName] calls an effect
    onModel: function (model) {
        if (!model.effects) {
            return;
        }
        var effects = typeof model.effects === 'function'
            ? model.effects(this.dispatch)
            : model.effects;
        for (var _i = 0, _a = Object.keys(effects); _i < _a.length; _i++) {
            var effectName = _a[_i];
            this.validate([
                [
                    !!effectName.match(/\//),
                    "Invalid effect name (" + model.name + "/" + effectName + ")",
                ],
                [
                    typeof effects[effectName] !== 'function',
                    "Invalid effect (" + model.name + "/" + effectName + "). Must be a function",
                ],
            ]);
            this.effects[model.name + "/" + effectName] = effects[effectName].bind(this.dispatch[model.name]);
            // add effect to dispatch
            // is assuming dispatch is available already... that the dispatch plugin is in there
            this.dispatch[model.name][effectName] = this.createDispatcher.apply(this, [model.name, effectName]);
            // tag effects so they can be differentiated from normal actions
            this.dispatch[model.name][effectName].isEffect = true;
        }
    },
    // process async/await actions
    middleware: function (store) {
        var _this = this;
        return function (next) { return function (action) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(action.type in this.effects)) return [3 /*break*/, 2];
                        return [4 /*yield*/, next(action)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.effects[action.type](action.payload, store.getState(), action.meta)];
                    case 2: return [2 /*return*/, next(action)];
                }
            });
        }); }; };
    },
};

function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
}

/* global window */

var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (typeof module !== 'undefined') {
  root = module;
} else {
  root = Function('return this')();
}

var result = symbolObservablePonyfill(root);

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[result] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[result] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if ( typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}

var Redux = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __DO_NOT_USE__ActionTypes: ActionTypes,
    applyMiddleware: applyMiddleware,
    bindActionCreators: bindActionCreators,
    combineReducers: combineReducers,
    compose: compose,
    createStore: createStore
});

/**
 * isListener
 *
 * determines if an action is a listener on another model
 */
var isListener = (function (reducer) { return reducer.indexOf('/') > -1; });

var composeEnhancersWithDevtools = function (devtoolOptions) {
    if (devtoolOptions === void 0) { devtoolOptions = {}; }
    var disabled = devtoolOptions.disabled, options = __rest(devtoolOptions
    /* istanbul ignore next */
    , ["disabled"]);
    /* istanbul ignore next */
    return !disabled &&
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(options)
        : compose;
};
function createRedux (_a) {
    var _this = this;
    var redux = _a.redux, models = _a.models;
    var combineReducers$1 = redux.combineReducers || combineReducers;
    var createStore$1 = redux.createStore || createStore;
    var initialState = typeof redux.initialState !== 'undefined' ? redux.initialState : {};
    this.reducers = redux.reducers;
    // combine models to generate reducers
    this.mergeReducers = function (nextReducers) {
        if (nextReducers === void 0) { nextReducers = {}; }
        // merge new reducers with existing reducers
        _this.reducers = __assign(__assign({}, _this.reducers), nextReducers);
        if (!Object.keys(_this.reducers).length) {
            // no reducers, just return state
            return function (state) { return state; };
        }
        return combineReducers$1(_this.reducers);
    };
    this.createModelReducer = function (model) {
        var modelBaseReducer = model.baseReducer;
        var modelReducers = {};
        for (var _i = 0, _a = Object.keys(model.reducers || {}); _i < _a.length; _i++) {
            var modelReducer = _a[_i];
            var action = isListener(modelReducer)
                ? modelReducer
                : model.name + "/" + modelReducer;
            modelReducers[action] = model.reducers[modelReducer];
        }
        var combinedReducer = function (state, action) {
            if (state === void 0) { state = model.state; }
            // handle effects
            if (typeof modelReducers[action.type] === 'function') {
                return modelReducers[action.type](state, action.payload, action.meta);
            }
            return state;
        };
        _this.reducers[model.name] = !modelBaseReducer
            ? combinedReducer
            : function (state, action) {
                return combinedReducer(modelBaseReducer(state, action), action);
            };
    };
    // initialize model reducers
    for (var _i = 0, models_1 = models; _i < models_1.length; _i++) {
        var model = models_1[_i];
        this.createModelReducer(model);
    }
    this.createRootReducer = function (rootReducers) {
        if (rootReducers === void 0) { rootReducers = {}; }
        var mergedReducers = _this.mergeReducers();
        if (Object.keys(rootReducers).length) {
            return function (state, action) {
                var rootReducerAction = rootReducers[action.type];
                if (rootReducers[action.type]) {
                    return mergedReducers(rootReducerAction(state, action), action);
                }
                return mergedReducers(state, action);
            };
        }
        return mergedReducers;
    };
    var rootReducer = this.createRootReducer(redux.rootReducers);
    var middlewares = applyMiddleware.apply(Redux, redux.middlewares);
    var enhancers = composeEnhancersWithDevtools(redux.devtoolOptions).apply(void 0, __spreadArrays(redux.enhancers, [middlewares]));
    this.store = createStore$1(rootReducer, initialState, enhancers);
    return this;
}

var corePlugins = [dispatchPlugin, effectsPlugin];
/**
 * Rematch class
 *
 * an instance of Rematch generated by "init"
 */
var Rematch = /** @class */ (function () {
    function Rematch(config) {
        var _this = this;
        this.plugins = [];
        this.config = config;
        this.pluginFactory = pluginFactory(config);
        for (var _i = 0, _a = corePlugins.concat(this.config.plugins); _i < _a.length; _i++) {
            var plugin = _a[_i];
            this.plugins.push(this.pluginFactory.create(plugin));
        }
        // preStore: middleware, model hooks
        this.forEachPlugin('middleware', function (middleware) {
            _this.config.redux.middlewares.push(middleware);
        });
    }
    Rematch.prototype.forEachPlugin = function (method, fn) {
        for (var _i = 0, _a = this.plugins; _i < _a.length; _i++) {
            var plugin = _a[_i];
            if (plugin[method]) {
                fn(plugin[method]);
            }
        }
    };
    Rematch.prototype.getModels = function (models) {
        return Object.keys(models).map(function (name) { return (__assign(__assign({ name: name }, models[name]), { reducers: models[name].reducers || {} })); });
    };
    Rematch.prototype.addModel = function (model) {
        validate([
            [!model, 'model config is required'],
            [typeof model.name !== 'string', 'model "name" [string] is required'],
            [
                model.state === undefined && model.baseReducer === undefined,
                'model "state" is required',
            ],
            [
                model.baseReducer !== undefined &&
                    typeof model.baseReducer !== 'function',
                'model "baseReducer" must be a function',
            ],
        ]);
        // run plugin model subscriptions
        this.forEachPlugin('onModel', function (onModel) { return onModel(model); });
    };
    Rematch.prototype.init = function () {
        var _this = this;
        // collect all models
        this.models = this.getModels(this.config.models);
        for (var _i = 0, _a = this.models; _i < _a.length; _i++) {
            var model = _a[_i];
            this.addModel(model);
        }
        // create a redux store with initialState
        // merge in additional extra reducers
        var redux = createRedux.call(this, {
            redux: this.config.redux,
            models: this.models,
        });
        var rematchStore = __assign(__assign({ name: this.config.name }, redux.store), { 
            // dynamic loading of models with `replaceReducer`
            model: function (model) {
                _this.addModel(model);
                redux.mergeReducers(redux.createModelReducer(model));
                redux.store.replaceReducer(redux.createRootReducer(_this.config.redux.rootReducers));
                redux.store.dispatch({ type: '@@redux/REPLACE ' });
            } });
        this.forEachPlugin('onStoreCreated', function (onStoreCreated) {
            var returned = onStoreCreated(rematchStore);
            // if onStoreCreated returns an object value
            // merge its returned value onto the store
            if (returned) {
                Object.keys(returned || {}).forEach(function (key) {
                    rematchStore[key] = returned[key];
                });
            }
        });
        return rematchStore;
    };
    return Rematch;
}());

/**
 * deprecate
 *
 * handles deprecation warnings in development
 */
var deprecate = (function (warning) {
    console.warn(warning);
});

var merge = function (original, next) {
    return next ? __assign(__assign({}, next), (original || {})) : original || {};
};
var isObject = function (obj) {
    return Array.isArray(obj) || typeof obj !== 'object';
};
/**
 * mergeConfig
 *
 * merge init configs together
 */
var mergeConfig = (function (initConfig) {
    var config = __assign(__assign({ name: initConfig.name, models: {}, plugins: [] }, initConfig), { redux: __assign(__assign({ reducers: {}, rootReducers: {}, enhancers: [], middlewares: [] }, initConfig.redux), { devtoolOptions: __assign({ name: initConfig.name }, (initConfig.redux && initConfig.redux.devtoolOptions
                ? initConfig.redux.devtoolOptions
                : {})) }) });
    {
        validate([
            [!Array.isArray(config.plugins), 'init config.plugins must be an array'],
            [isObject(config.models), 'init config.models must be an object'],
            [
                isObject(config.redux.reducers),
                'init config.redux.reducers must be an object',
            ],
            [
                !Array.isArray(config.redux.middlewares),
                'init config.redux.middlewares must be an array',
            ],
            [
                !Array.isArray(config.redux.enhancers),
                'init config.redux.enhancers must be an array of functions',
            ],
            [
                config.redux.combineReducers &&
                    typeof config.redux.combineReducers !== 'function',
                'init config.redux.combineReducers must be a function',
            ],
            [
                config.redux.createStore &&
                    typeof config.redux.createStore !== 'function',
                'init config.redux.createStore must be a function',
            ],
        ]);
    }
    // defaults
    for (var _i = 0, _a = config.plugins; _i < _a.length; _i++) {
        var plugin = _a[_i];
        if (plugin.config) {
            // models
            var models = merge(config.models, plugin.config.models);
            config.models = models;
            // plugins
            config.plugins = __spreadArrays(config.plugins, (plugin.config.plugins || []));
            // redux
            if (plugin.config.redux) {
                config.redux.initialState = merge(config.redux.initialState, plugin.config.redux.initialState);
                config.redux.reducers = merge(config.redux.reducers, plugin.config.redux.reducers);
                config.redux.rootReducers = merge(config.redux.rootReducers, plugin.config.redux.reducers);
                config.redux.enhancers = __spreadArrays(config.redux.enhancers, (plugin.config.redux.enhancers || []));
                config.redux.middlewares = __spreadArrays(config.redux.middlewares, (plugin.config.redux.middlewares || []));
                config.redux.combineReducers =
                    config.redux.combineReducers || plugin.config.redux.combineReducers;
                config.redux.createStore =
                    config.redux.createStore || plugin.config.redux.createStore;
            }
        }
    }
    return config;
});

var getState = function () {
    deprecate("global getState has been removed in @rematch/core 1.0.0-beta.3.\n\tSee https://github.com/rematch/rematch/blob/master/CHANGELOG.md#100-beta3---2018-06-23 for details.\n\tFor a quick fix, import and use store.getState.");
};
var dispatch = function () {
    deprecate("global dispatch has been removed in @rematch/core 1.0.0-beta.3.\n\tSee https://github.com/rematch/rematch/blob/master/CHANGELOG.md#100-beta3---2018-06-23 for details.\n\tFor a quick fix, import and use store.dispatch.");
};
/**
 * global createModel
 *
 * creates a model for the given object
 * this is for autocomplete purposes only
 * returns the same object that was received as argument
 */
function createModel(model) {
    return model;
}
// incrementer used to provide a store name if none exists
var count = 0;
/**
 * init
 *
 * generates a Rematch store
 * with a set configuration
 * @param config
 */
var init = function (initConfig) {
    if (initConfig === void 0) { initConfig = {}; }
    var name = initConfig.name || count.toString();
    count += 1;
    var config = mergeConfig(__assign(__assign({}, initConfig), { name: name }));
    return new Rematch(config).init();
};
var index = {
    init: init,
};

export default index;
export { createModel, dispatch, getState, init };
//# sourceMappingURL=rematch.js.map
