module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("./vendor");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(2);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(318);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(313);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Typescript_index__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Components_Colors__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Components_Title__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_dotnetify_dist_dotnetify_react_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_dotnetify_dist_dotnetify_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_dotnetify_dist_dotnetify_react_router__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, App.name + "VM", props) || this;
        _this.handleClick = function (e) {
            e.preventDefault();
            _this.$dispatch({ Submit: "nouveau message" });
        };
        console.log("window.vmStates : " + window.vmStates);
        console.log("server hydratation app link : '" + window.vmStates.AppVM.Links[0].Caption + "'");
        console.log("server hydratation app message : '" + window.vmStates.AppVM.Message + "'");
        _this.vm.onRouteEnter =
            function (path, template) { return template.Target = "CurrentPageDiv"; };
        _this.state = window.vmStates.AppVM;
        console.log("App message : " + _this.state.Message);
        return _this;
    }
    //<RouteLink route="route"></RouteLink>
    //        <RouteTarget id="CurrentPageDiv"/>
    App.prototype.render = function () {
        var _this = this;
        console.log("App message : " + this.state.Message);
        var Menu = (_a = ["\n        color: green;\n        "], _a.raw = ["\n        color: green;\n        "], __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.ul(_a));
        var links = this.state.Links.map(function (link) {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { key: link.Id },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_dotnetify_dist_dotnetify_react_router__["RouteLink"], { vm: _this.vm, route: link.Route }, link.Caption));
        });
        var MessageContainer = (_b = ["\n\t        /* all declarations will be prefixed */\n\t        padding: 2em 1em;\n\t        background: papayawhip;\n\n\t        /* pseudo selectors work as well */\n\t        &:hover {\n\t\t        background: palevioletred;\n\t        }\n\n\t        /* media queries are no problem */\n\t        @media (max-width: 600px) {\n\t\t        background: tomato;\n\n\t\t        /* nested rules work as expected */\n\t\t        &:hover {\n\t\t\t        background: yellow;\n\t\t        }\n\t        }\n\n\t        > p {\n\t\t        /* descendant-selectors work as well, but are more of an escape hatch */\n\t\t        text-decoration: underline;\n\t        }\n\n\t        /* Contextual selectors work as well */\n\t        html.test & {\n\t\t        display: none;\n\t        }\n        "], _b.raw = ["\n\t        /* all declarations will be prefixed */\n\t        padding: 2em 1em;\n\t        background: papayawhip;\n\n\t        /* pseudo selectors work as well */\n\t        &:hover {\n\t\t        background: palevioletred;\n\t        }\n\n\t        /* media queries are no problem */\n\t        @media (max-width: 600px) {\n\t\t        background: tomato;\n\n\t\t        /* nested rules work as expected */\n\t\t        &:hover {\n\t\t\t        background: yellow;\n\t\t        }\n\t        }\n\n\t        > p {\n\t\t        /* descendant-selectors work as well, but are more of an escape hatch */\n\t\t        text-decoration: underline;\n\t        }\n\n\t        /* Contextual selectors work as well */\n\t        html.test & {\n\t\t        display: none;\n\t        }\n        "], __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(_b));
        //{ this.state.Message && <MessageContainer><p>this.state.Message</p></MessageContainer> }
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_styled_components__["ThemeProvider"], { theme: __WEBPACK_IMPORTED_MODULE_3_Components_Colors__["a" /* default */] },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_Components_Title__["a" /* default */], null,
                    "La couleur du titre c'est important ",
                    __WEBPACK_IMPORTED_MODULE_3_Components_Colors__["a" /* default */].main,
                    "...!"),
                this.state.Message && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](MessageContainer, null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, this.state.Message)),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { onClick: this.handleClick }, "Change message"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Menu, null, links),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { id: "CurrentPageDiv" }))));
        var _a, _b;
    };
    return App;
}(__WEBPACK_IMPORTED_MODULE_1__Typescript_index__["a" /* BaseView */]));



/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(312);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(315);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var colors = {
    main: "#393276",
    dark: "#0D083B",
    light: "#837EB1"
};
/* harmony default export */ __webpack_exports__["a"] = (colors);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
var Title = (_a = ["\n  font-size: 1.5em;\n  text-align: center;\n  color: ", ";\n  background-color: ", ";\n"], _a.raw = ["\n  font-size: 1.5em;\n  text-align: center;\n  color: ", ";\n  background-color: ", ";\n"], __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.h1(_a, function (props) { return props.theme.main; }, function (props) { return props.theme.light; }));
/* harmony default export */ __webpack_exports__["a"] = (Title);
var _a;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dotnetify__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dotnetify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_dotnetify__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var BaseView = /** @class */ (function (_super) {
    __extends(BaseView, _super);
    function BaseView(vmName, props) {
        var _this = _super.call(this, props) || this;
        _this.vmName = vmName;
        _this.vm = __WEBPACK_IMPORTED_MODULE_1_dotnetify__["react"].connect(_this.vmName, _this);
        console.log("state hydratation for " + _this.vmName + " = '" + window.vmStates[_this.vmName] + "'");
        _this.state = window.vmStates[_this.vmName] || {};
        return _this;
    }
    BaseView.prototype.componentWillUnmount = function () {
        this.vm.$destroy();
    };
    BaseView.prototype.$dispatch = function (iValue) {
        this.vm.$dispatch(iValue);
    };
    ;
    return BaseView;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aspnet_prerendering__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aspnet_prerendering___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_aspnet_prerendering__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App__ = __webpack_require__(4);




/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_aspnet_prerendering__["createServerRenderer"])(function (params) {
    return new Promise(function (resolve, reject) {
        //const result = ` 
        //    <h1>My awesome headline!</h1> 
        //    <p>Node time is: ${ new Date()}</p> 
        //    <p>Request path: ${ params.location.path}</p> 
        //    <p>Absolute URL: ${ params.absoluteUrl}</p> 
        //    <p>Data: ${params.data.userType}</p>` 
        //jQuery("test").innerHTML = "bonjour";
        //const result = renderToString(<Simple name="zezef"/>);
        var result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__App__["a" /* App */], null));
        resolve({
            html: result
        });
    });
}));


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;﻿/* 
Copyright 2017 Dicky Suryadi

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 */

// Support using AMD or CommonJS that loads our app.js, or being placed in <script> tag.
(function (factory) {
   if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(12), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
   }
   else if (typeof exports === "object" && typeof module === "object") {
      module.exports = factory(require('react'), require('jquery'), require('dotnetify'));
   }
   else {
      factory(React, jQuery, dotnetify);
   }
}
   (function (_React, $, dotnetify) {

      // PathJS. Need this specific version, because latest version is causing issue.
      var Path = {
         'version': "0.8.5",
         'map': function (path) {
            if (Path.routes.defined.hasOwnProperty(path)) {
               return Path.routes.defined[path];
            } else {
               return new Path.core.route(path);
            }
         },
         'root': function (path) {
            Path.routes.root = path;
         },
         'rescue': function (fn) {
            Path.routes.rescue = fn;
         },
         'history': {
            'initial': {}, // Empty container for "Initial Popstate" checking variables.
            'pushState': function (state, title, path) {
               if (Path.history.supported) {
                  if (Path.dispatch(path)) {
                     history.pushState(state, title, path);
                  }
               } else {
                  if (Path.history.fallback) {
                     window.location.hash = "#" + path;
                  }
               }
            },
            'popState': function (event) {
               var initialPop = !Path.history.initial.popped && location.href == Path.history.initial.URL;
               Path.history.initial.popped = true;
               if (initialPop) return;
               Path.dispatch(document.location.pathname);
            },
            'listen': function (fallback) {
               Path.history.supported = !!(window.history && window.history.pushState);
               Path.history.fallback = fallback;

               if (Path.history.supported) {
                  Path.history.initial.popped = ('state' in window.history), Path.history.initial.URL = location.href;
                  window.onpopstate = Path.history.popState;
               } else {
                  if (Path.history.fallback) {
                     for (route in Path.routes.defined) {
                        if (route.charAt(0) != "#") {
                           Path.routes.defined["#" + route] = Path.routes.defined[route];
                           Path.routes.defined["#" + route].path = "#" + route;
                        }
                     }
                     Path.listen();
                  }
               }
            }
         },
         'match': function (path, parameterize) {
            var params = {}, route = null, possible_routes, slice, i, j, compare, result;
            for (route in Path.routes.defined) {
               if (route !== null && route !== undefined) {
                  route = Path.routes.defined[route];
                  possible_routes = route.partition();
                  for (j = 0; j < possible_routes.length; j++) {
                     slice = possible_routes[j];
                     compare = path;
                     if (slice.search(/:/) > 0) {
                        for (i = 0; i < slice.split("/").length; i++) {
                           if ((i < compare.split("/").length) && (slice.split("/")[i].charAt(0) === ":")) {
                              params[slice.split('/')[i].replace(/:/, '')] = compare.split("/")[i];
                              result = compare.split("/");
                              result[i] = slice.split("/")[i];
                              compare = result.join("/");
                           }
                        }
                     }
                     if (slice === compare) {
                        if (parameterize) {
                           route.params = params;
                        }
                        return route;
                     }
                  }
               }
            }
            return null;
         },
         'dispatch': function (passed_route) {
            var previous_route, matched_route;
            if (Path.routes.current !== passed_route) {
               Path.routes.previous = Path.routes.current;
               Path.routes.current = passed_route;
               matched_route = Path.match(passed_route, true);

               if (Path.routes.previous) {
                  previous_route = Path.match(Path.routes.previous);
                  if (previous_route !== null && previous_route.do_exit !== null) {
                     previous_route.do_exit();
                  }
               }

               if (matched_route !== null) {
                  matched_route.run();
                  return true;
               } else {
                  if (Path.routes.rescue !== null) {
                     Path.routes.rescue();
                  }
               }
            }
         },
         'listen': function () {
            var fn = function () { Path.dispatch(location.hash); }

            if (location.hash === "") {
               if (Path.routes.root !== null) {
                  location.hash = Path.routes.root;
               }
            }

            // The 'document.documentMode' checks below ensure that PathJS fires the right events
            // even in IE "Quirks Mode".
            if ("onhashchange" in window && (!document.documentMode || document.documentMode >= 8)) {
               window.onhashchange = fn;
            } else {
               setInterval(fn, 50);
            }

            if (location.hash !== "") {
               Path.dispatch(location.hash);
            }
         },
         'core': {
            'route': function (path) {
               this.path = path;
               this.action = null;
               this.do_enter = [];
               this.do_exit = null;
               this.params = {};
               Path.routes.defined[path] = this;
            }
         },
         'routes': {
            'current': null,
            'root': null,
            'rescue': null,
            'previous': null,
            'defined': {}
         }
      };
      Path.core.route.prototype = {
         'to': function (fn) {
            this.action = fn;
            return this;
         },
         'enter': function (fns) {
            if (fns instanceof Array) {
               this.do_enter = this.do_enter.concat(fns);
            } else {
               this.do_enter.push(fns);
            }
            return this;
         },
         'exit': function (fn) {
            this.do_exit = fn;
            return this;
         },
         'partition': function () {
            var parts = [], options = [], re = /\(([^}]+?)\)/g, text, i;
            while (text = re.exec(this.path)) {
               parts.push(text[1]);
            }
            options.push(this.path.split("(")[0]);
            for (i = 0; i < parts.length; i++) {
               options.push(options[options.length - 1] + parts[i]);
            }
            return options;
         },
         'run': function () {
            var halt_execution = false, i, result, previous;

            if (Path.routes.defined[this.path].hasOwnProperty("do_enter")) {
               if (Path.routes.defined[this.path].do_enter.length > 0) {
                  for (i = 0; i < Path.routes.defined[this.path].do_enter.length; i++) {
                     result = Path.routes.defined[this.path].do_enter[i].apply(this, null);
                     if (result === false) {
                        halt_execution = true;
                        break;
                     }
                  }
               }
            }
            if (!halt_execution) {
               Path.routes.defined[this.path].action();
            }
         }
      };

      // Add plugin functions.
      dotnetify.react.router = {
         version: "1.0.3-beta",

         // URL path that will be parsed when performing routing.
         urlPath: document.location.pathname,

         // Initialize routing using PathJS.
         init: function () {
            if (typeof Path !== "undefined") {
               Path.history.listen(true);
               Path.routes.rescue = function () {
                  //window.location.replace(document.location.pathname);
               };
            }
            else
               throw new Error("Pathjs library is required for routing.");
         },

         // Map a route to an action.
         mapTo: function (iPath, iFn) {
            if (typeof Path !== "undefined")
               Path.map(iPath).to(function () { iFn(this.params) });
         },

         // Match a URL path to a route and run the action.
         match: function (iUrlPath) {
            if (typeof Path !== "undefined") {
               var matched = Path.match(iUrlPath, true);
               if (matched != null) {
                  matched.run();
                  return true;
               }
            }
            return false;
         },

         // Optional callback to override a URL before performing routing.
         overrideUrl: function (iUrl, iTargetSelector) { return iUrl },

         // Push state to HTML history.
         pushState: function (iState, iTitle, iPath) {
            dotnetify.react.router.urlPath = "";
            if (typeof Path !== "undefined")
               Path.history.pushState(iState, iTitle, iPath);
         },

         // Redirect to the a URL.
         redirect: function (iUrl) {
            // Check first whether existing views can handle routing this URL.
            // Otherwise, do a hard browser redirect.
            dotnetify.react.router.urlPath = iUrl;
            for (var vmId in dotnetify.react.viewModels) {
               var vm = dotnetify.react.viewModels[vmId];
               if (vm != null && vm.$router.routeUrl()) {
                  if (dotnetify.debug)
                     console.log("router> redirected");
                  return;
               }
            }
            window.location.replace(iUrl);
         },

         // Used by client-side React component to get server-side rendered initial state.
         ssrState: function (iVMId) {
            if (window.ssr && window.ssr[iVMId] && !window.ssr[iVMId].fetched) {
               window.ssr[iVMId].fetched = true;
               return window.ssr[iVMId];
            }
         },

         // Called from server to configure server-side rendering.
         // iPath - initial URL path.
         // iInitialStates - serialized object literal '{ "vmName": {initialState}, ...}'.
         // iOverrideRouteFn - function to override routing URLs before the router loads them.
         // iCallbackFn - callback after the path is fully routed.
         // iTimeout - timeout in milliseconds.
         ssr: function (iPath, iInitialStates, iOverrideRouteFn, iCallbackFn, iTimeout) {
            dotnetify.ssr = true;
            dotnetify.react.router.urlPath = iPath;
            dotnetify.react.router.overrideUrl = iOverrideRouteFn;

            // Insert initial states in the head tag.
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.text = "window.ssr=" + iInitialStates + ";";
            var head = document.getElementsByTagName("head")[0];
            if (head)
               head.insertBefore(script, head.firstChild);
            else
               console.error("router> document head tag is required for server-side render.");

            var routed = false;
            var fallback = iTimeout ? setTimeout(function () { if (!routed) iCallbackFn(); }, iTimeout) : 0;
            window.addEventListener('dotnetify.routed', function () {
               routed = true;
               if (fallback != 0)
                  clearTimeout(fallback);
               iCallbackFn();
            });

            // Add initial states into the window scope for the server-renderd components.
            window.ssr = JSON.parse(iInitialStates);
         },

         // Called by dotNetify when a view model is ready.
         $ready: function () {
            this.$router.initRouting();
         }
      }

      // Inject a view model with functions.
      dotnetify.react.router.$inject = function (iVM) {

         // Put functions inside $router namespace.
         iVM["$router"] = (function (iScope) {

            var utils = (function () {
               return {
                  // Trim slashes from start and end of string.
                  trim: function (iStr) {
                     if (typeof iStr !== "string")
                        return "";

                     while (iStr.indexOf("/", iStr.length - 1) >= 0)
                        iStr = iStr.substr(0, iStr.length - 1);
                     while (iStr.indexOf("/") == 0)
                        iStr = iStr.substr(1, iStr.length - 1);
                     return iStr;
                  },
                  // Match two strings case-insensitive.
                  equal: function (iStr1, iStr2) { return iStr1 != null && iStr2 != null && iStr1.toLowerCase() == iStr2.toLowerCase() },
                  // Whether the string starts or ends with a value.
                  startsWith: function (iStr, iValue) { return iStr.toLowerCase().slice(0, iValue.length) == iValue.toLowerCase() },
                  endsWith: function (iStr, iValue) { return iValue == '' || iStr.toLowerCase().slice(-iValue.length) == iValue.toLowerCase(); },
                  // Dispatch event with IE polyfill.
                  dispatchEvent: function (iEvent) {
                     if (typeof Event === "function")
                        window.dispatchEvent(new Event(iEvent));
                     else {
                        var event = document.createEvent("CustomEvent");
                        event.initEvent(iEvent, true, true);
                        window.dispatchEvent(event);
                     }
                  }
               }
            })();

            return {
               routes: [],

               // Build the absolute root path from the "vmRoot" property on React component.
               initRoot: function () {
                  var vm = this;
                  var state = vm.State();
                  if (!state.hasOwnProperty("RoutingState") || state.RoutingState === null || state.RoutingState.Root === null)
                     return;

                  if (vm.$router._absRoot != state.RoutingState.Root) {
                     var vmRoot = vm.$component.props["vmRoot"];
                     var absRoot = utils.trim(vmRoot);
                     if (absRoot != "")
                        absRoot = "/" + absRoot;
                     var root = utils.trim(state.RoutingState.Root);
                     vm.$router._absRoot = root != "" ? absRoot + "/" + root : absRoot;
                     state.RoutingState.Root = vm.$router._absRoot;
                  }
               }.bind(iScope),

               // Initialize routing templates if the view model implements IRoutable.
               initRouting: function () {
                  var vm = this;
                  var state = vm.State();
                  if (state == null || !state.hasOwnProperty("RoutingState"))
                     return;

                  if (state.RoutingState === null) {
                     console.error("router> the RoutingState prop of '" + vm.$vmId + "' was not initialized.");
                     return;
                  }

                  var templates = state.RoutingState.Templates;
                  if (templates == null || templates.length == 0)
                     return;

                  // Initialize the router.
                  if (!dotnetify.react.router.$init) {
                     dotnetify.react.router.init();
                     dotnetify.react.router.$init = true;
                  }

                  // Build the absolute root path.
                  vm.$router.initRoot();

                  $.each(templates, function (idx, template) {
                     // If url pattern isn't given, consider Id as the pattern.
                     var urlPattern = template.UrlPattern != null ? template.UrlPattern : template.Id;
                     urlPattern = urlPattern != "" ? urlPattern : "/";
                     var mapUrl = vm.$router.toUrl(urlPattern);

                     if (dotnetify.debug)
                        console.log("router> map " + mapUrl + " to template id=" + template.Id);

                     dotnetify.react.router.mapTo(mapUrl, function (iParams) {
                        dotnetify.react.router.urlPath = "";

                        // Construct the path from the template pattern and the params passed by PathJS.
                        var path = urlPattern;
                        for (var param in iParams)
                           path = path.replace(":" + param, iParams[param]);
                        path = path.replace(/\(\/:([^)]+)\)/g, "").replace(/\(|\)/g, "");

                        vm.$router.routeTo(path, template);
                     });
                  });

                  // Route initial URL.
                  var activeUrl = vm.$router.toUrl(state.RoutingState.Active);
                  if (dotnetify.react.router.urlPath == "")
                     dotnetify.react.router.urlPath = activeUrl;
                  if (!vm.$router.routeUrl())
                     // If routing ends incomplete, raise routed event anyway.
                     vm.$router.raiseRoutedEvent(true);
               }.bind(iScope),

               // Whether a route is active.
               isActive: function (iRoute) {
                  var state = this.State();
                  if (iRoute != null && iRoute.hasOwnProperty("Path"))
                     return utils.equal(iRoute.Path, state.RoutingState.Active);
                  return false;
               }.bind(iScope),

               // Loads a view into a target element.
               loadView: function (iTargetSelector, iViewUrl, iJsModuleUrl, iVmArg, iCallbackFn) {
                  var vm = this;
                  var state = vm.State();
                  var reactProps;

                  // If the view model supports routing, add the root path to the view, to be used
                  // to build the absolute route path, and view model argument if provided.
                  if (state.hasOwnProperty("RoutingState")) {

                     if (state.RoutingState === null) {
                        console.error("router> the RoutingState prop of '" + vm.$vmId + "' was not initialized.");
                        return;
                     }

                     var root = vm.$component.props.vmRoot;
                     root = root != null ? "/" + utils.trim(state.RoutingState.Root) + "/" + utils.trim(root) : state.RoutingState.Root;
                     reactProps = { vmRoot: root, vmArg: iVmArg };
                  }

                  // Provide the opportunity to override the URL.
                  iViewUrl = dotnetify.react.router.overrideUrl(iViewUrl, iTargetSelector);
                  iJsModuleUrl = dotnetify.react.router.overrideUrl(iJsModuleUrl, iTargetSelector);

                  if (utils.endsWith(iViewUrl, "html"))
                     vm.$loadHtmlView(iTargetSelector, iViewUrl, iJsModuleUrl, iVmArg, iCallbackFn);
                  else
                     vm.$loadReactView(iTargetSelector, iViewUrl, iJsModuleUrl, iVmArg, reactProps, iCallbackFn);

               }.bind(iScope),

               // Routes to a path.
               manualRouteTo: function (iPath, iTarget, iViewUrl, iJSModuleUrl) {
                  var template = { Id: "manual", Target: iTarget, ViewUrl: iViewUrl, JSModuleUrl: iJSModuleUrl };
                  this.$router.routeTo(iPath, template, true);
               }.bind(iScope),

               // Raise event indicating the routing process has ended.
               raiseRoutedEvent: function (force) {
                  if (dotnetify.react.router.urlPath == "" || force == true) {
                     if (dotnetify.debug)
                        console.log("router> routed");
                     utils.dispatchEvent("dotnetify.routed");
                  }
               }.bind(iScope),

               // Routes to a path.
               routeTo: function (iPath, iTemplate, iDisableEvent, iCallbackFn) {
                  var vm = this;
                  var state = vm.State();

                  if (dotnetify.debug)
                     console.log("router> route '" + iPath + "' to template id=" + iTemplate.Id);

                  // We can determine whether the view has already been loaded by matching the 'RoutingState.Origin' argument
                  // on the existing view model inside that target selector with the path.
                  for (var vmId in dotnetify.react.viewModels) {
                     var vmOther = dotnetify.react.viewModels[vmId];
                     var vmArg = vmOther.$component.props["vmArg"];
                     if (vmArg != null) {
                        if (typeof vmArg["RoutingState.Origin"] === "string" && utils.equal(vmArg["RoutingState.Origin"], iPath))
                           return;
                     }
                  }

                  // Support enter interception.
                  if (iDisableEvent != true && vm.hasOwnProperty("onRouteEnter"))
                     if (vm.onRouteEnter(iPath, iTemplate) == false)
                        return;

                  // Check if the route has valid target.
                  if (iTemplate.Target === null) {
                     console.error("router> the Target for template '" + iTemplate.Id + "' was not set.  Use vm.onRouteEnter() to set the target.");
                     return;
                  }

                  // If target DOM element isn't found, redirect URL to the path.
                  if (document.getElementById(iTemplate.Target) == null) {
                     if (dotnetify.debug)
                        console.log("router> target '" + iTemplate.Target + "' not found in DOM, use redirect instead");

                     return dotnetify.react.router.redirect(vm.$router.toUrl(iPath));
                  }

                  // Load the view associated with the route asynchronously.
                  var view = iTemplate.ViewUrl ? iTemplate.ViewUrl : iTemplate.Id;
                  vm.$router.loadView("#" + iTemplate.Target, view, iTemplate.JSModuleUrl, { "RoutingState.Origin": iPath }, function () {
                     // If load is successful, update the active route.
                     state.RoutingState.Active = iPath;
                     vm.$dispatch({ "RoutingState.Active": iPath });
                     vm.State({ "RoutingState.Active": iPath });

                     // Support exit interception.
                     if (iDisableEvent != true && vm.hasOwnProperty("onRouteExit"))
                        vm.onRouteExit(iPath, iTemplate);

                     if (typeof iCallbackFn === "function")
                        iCallbackFn.call(vm);
                  }.bind(vm));
               }.bind(iScope),

               // Routes the URL if the view model implements IRoutable.
               // Returns true if the view model handles the routing.
               routeUrl: function () {
                  var vm = this;
                  var state = vm.State();
                  if (!state.hasOwnProperty("RoutingState"))
                     return false;

                  var root = state.RoutingState.Root;
                  if (root == null)
                     return false;

                  // Get the URL path to route.
                  var urlPath = dotnetify.react.router.urlPath;

                  if (dotnetify.debug)
                     console.log("router> routing " + urlPath);

                  // If the URL path matches the root path of this view, use the template with a blank URL pattern if provided.
                  if (utils.equal(urlPath, root) || utils.equal(urlPath, root + "/") || urlPath === "/") {
                     var match = $.grep(state.RoutingState.Templates, function (iTemplate) { return iTemplate.UrlPattern === "" });
                     if (match.length > 0) {
                        vm.$router.routeTo("", match[0]);
                        dotnetify.react.router.urlPath = "";
                        vm.$router.raiseRoutedEvent();
                        return true;
                     }
                     return false;
                  }

                  // If the URL path starts with the root path of this view, look at the next path and try to match it with the
                  // anchor tags in this view that are bound with the vmRoute binding type.  If there is match, route to that path.
                  root = root + "/";
                  if (utils.startsWith(urlPath, root)) {

                     var routeElem = null;
                     var match = $.grep(vm.$router.routes, function (elem) {
                        return utils.startsWith(urlPath + "/", elem.Url + "/")
                     });
                     if (match.length > 0) {
                        // If more than one match, find the best match.
                        for (var i = 0; i < match.length; i++)
                           if (routeElem == null || routeElem.Url.length < $(match[i]).get(0).Url.length)
                              routeElem = match[i];
                     }

                     if (routeElem != null) {
                        var path = routeElem.Path;
                        var template = vm.$router.hasOwnProperty("pathToRoute") && vm.$router.pathToRoute.hasOwnProperty(path) ? vm.$router.pathToRoute[path].$template : null;
                        if (template != null) {
                           // If the URL path is completely routed, clear it.
                           if (utils.equal(dotnetify.react.router.urlPath, vm.$router.toUrl(path)))
                              dotnetify.react.router.urlPath = "";

                           // If route's not already active, route to it.
                           if (!utils.equal(state.RoutingState.Active, path))
                              vm.$router.routeTo(path, template, false, function () { vm.$router.raiseRoutedEvent(); });
                           else
                              vm.$router.raiseRoutedEvent();
                           return true;
                        }
                     }
                     else if (dotnetify.react.router.match(urlPath)) {
                        // If no vmRoute binding matches, try to match with any template's URL pattern.
                        dotnetify.react.router.urlPath = "";
                        vm.$router.raiseRoutedEvent();
                        return true;
                     }
                  }
                  return false;
               }.bind(iScope),

               // Builds an absolute URL from a path.
               toUrl: function (iPath) {
                  var state = this.State();
                  var path = utils.trim(iPath);
                  if (path.charAt(0) != '(' && path != "")
                     path = "/" + path;
                  return state.hasOwnProperty("RoutingState") ? state.RoutingState.Root + path : iPath;
               }.bind(iScope),


            }
         })(iVM);

         iVM.$route = function (iRoute, iTarget) {
            var vm = this;
            var state = vm.State();

            // No route to process. Return silently.
            if (iRoute == null)
               return;

            if (!iRoute.hasOwnProperty("Path") || !iRoute.hasOwnProperty("TemplateId"))
               throw new Error("Not a valid route");

            // Build the absolute root path.
            vm.$router.initRoot();

            // If the route path is not defined, use the URL pattern from the associated template.
            // This is so that we don't send the same data twice if both are equal.
            var path = iRoute.Path;
            var template = null;
            if (state.hasOwnProperty("RoutingState") && state.RoutingState.Templates != null) {
               var match = $.grep(state.RoutingState.Templates, function (iTemplate) { return iTemplate.Id == iRoute.TemplateId });
               if (match.length > 0) {
                  template = match[0];

                  if (typeof iTarget === "string")
                     template.Target = iTarget;

                  if (path == null) {
                     path = template.UrlPattern != null ? template.UrlPattern : template.Id;
                     iRoute.Path = path;
                  }
               }
               else if (iRoute.RedirectRoot == null)
                  throw new Error("vmRoute cannot find route template '" + iRoute.TemplateId);
            }

            // If the path has a redirect root, the path doesn't belong to the current root and needs to be
            // redirected to a different one.  Set the absolute path to the HREF attribute, and prevent the
            // default behavior of the anchor click event and instead do push to HTML5 history state, which 
            // would attempt to resolve the path first before resorting to hard browser redirect.
            if (iRoute.RedirectRoot != null) {

               // Combine the redirect root with the view model's root.
               var redirectRoot = iRoute.RedirectRoot;
               if (redirectRoot.charAt(0) == '/')
                  redirectRoot = redirectRoot.substr(0, redirectRoot.length - 1);
               var redirectRootPath = iRoute.RedirectRoot.split("/");

               var urlRedirect = "";
               var absRoot = vm.$component.props["vmRoot"];
               if (absRoot != null) {
                  var absRootPath = absRoot.split("/");
                  for (var i = 0; i < absRootPath.length; i++) {
                     if (absRootPath[i] != "" && absRootPath[i] == redirectRootPath[0])
                        break;
                     urlRedirect += absRootPath[i] + "/";
                  }
               }
               urlRedirect += redirectRoot + "/" + path;
               vm.$router.routes.push({ Path: path, Url: urlRedirect });
               return urlRedirect;
            }

            // For quick lookup, save the mapping between the path to the route inside the view model.
            if (template == null)
               throw new Error("vmRoute cannot find any route template");

            iRoute.$template = template;
            vm.$router.pathToRoute = vm.$router.pathToRoute || {};
            vm.$router.pathToRoute[path] = iRoute;

            // Set the absolute path to the HREF attribute, and prevent the default behavior of 
            // the anchor click event and instead do push to HTML5 history state.
            var url = vm.$router.toUrl(path);
            vm.$router.routes.push({ Path: path, Url: url });
            return url;

         }.bind(iVM);

         iVM.$handleRoute = function (iEvent) {
            iEvent.preventDefault();
            var path = iEvent.currentTarget.pathname;
            if (path == null || path == "")
               throw new Error("The event passed to $handleRoute has no path name.");

            dotnetify.react.router.pushState({}, "", path);
         }.bind(iVM);
      }

      // <RouteLink> is a helper component to set anchor tags for routes.
      dotnetify.react.router.RouteLink = function (props) {
         if (props.vm == null)
            console.error("RouteLink requires 'vm' property.");

         return _React.createElement(
            "a", {
               style: props.style,
               className: props.className,
               href: props.route != null ? props.vm.$route(props.route) : "",
               onClick: function (event) {
                  event.preventDefault();
                  if (props.route == null) {
                     console.error("RouteLink requires 'route' property.");
                     return;
                  }
                  if (typeof props.onClick === "function")
                     props.onClick();
                  return props.vm.$handleRoute(event);
               }
            },
            props.children
         );
      }

      // <RouteTarget> is a helper component to provide DOM target for routes, and is essential for server-side rendering.
      dotnetify.react.router.RouteTarget = _React.createClass({
         displayName: "RouteTarget",
         componentWillMount: function componentWillMount() {
            var elem = document.getElementById(this.props.id);
            if (elem != null && window.ssr && !window.ssr[this.props.id]) {
               window.ssr[this.props.id] = true;
               this.initialHtml = { __html: elem.innerHTML };
            } else this.initialHtml = { __html: '' };
         },
         getDOMNode: function getDOMNode() { return this.elem; },
         render: function render() {
            var _this = this;
            return React.createElement(
               "div",
               $.extend({ id: this.props.id, ref: function (el) { return _this.elem = el; } }, this.props, { dangerouslySetInnerHTML: this.initialHtml }),
               this.props.children
            );
         }
      });

      // Register the plugin to dotNetify.
      dotnetify.react.plugins["router"] = dotnetify.react.router;

      return dotnetify.react.router;
   }))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(121);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTQ2NDRlODMwYjk0OWE0NzNkM2IiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiLi92ZW5kb3JcIiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L3JlYWN0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3N0eWxlZC1jb21wb25lbnRzL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9kb3RuZXRpZnkvZGlzdC9kb3RuZXRpZnktcmVhY3QuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL0FwcC50c3giLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9hc3BuZXQtcHJlcmVuZGVyaW5nL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9zZXJ2ZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvQ29sb3JzLnRzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvVGl0bGUudHN4Iiwid2VicGFjazovLy8uL19UeXBlc2NyaXB0L2luZGV4LnRzIiwid2VicGFjazovLy8uL2Jvb3Qtc2VydmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9+L2RvdG5ldGlmeS9kaXN0L2RvdG5ldGlmeS1yZWFjdC5yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9qcXVlcnkvZGlzdC9qcXVlcnkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNoRUEscUM7Ozs7OztBQ0FBLDZDOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ErQjtBQUNjO0FBRUs7QUFDWDtBQUNBO0FBRUY7QUFHNkI7QUFlbEU7SUFBeUIsdUJBQXVCO0lBRTVDLGFBQVksS0FBVTtRQUF0QixZQUNJLGtCQUFTLEdBQUcsQ0FBQyxJQUFJLE9BQUksRUFBRSxLQUFLLENBQUMsU0FXaEM7UUFFRCxpQkFBVyxHQUFHLFVBQUMsQ0FBcUM7WUFDaEQsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ25CLEtBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELENBQUM7UUFkRyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUFxQixNQUFNLENBQUMsUUFBVSxDQUFDLENBQUM7UUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBa0MsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sTUFBRyxDQUFDLENBQUM7UUFDekYsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBcUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxNQUFHLENBQUMsQ0FBQztRQUVuRixLQUFJLENBQUMsRUFBRSxDQUFDLFlBQVk7WUFDaEIsVUFBQyxJQUFZLEVBQUUsUUFBNkIsSUFBSyxlQUFRLENBQUMsTUFBTSxHQUFHLGdCQUFnQixFQUFsQyxDQUFrQyxDQUFDO1FBRXhGLEtBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBaUIsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFTLENBQUMsQ0FBQzs7SUFDdkQsQ0FBQztJQU1ELHVDQUF1QztJQUN2Qyw0Q0FBNEM7SUFFNUMsb0JBQU0sR0FBTjtRQUFBLGlCQWdFQztRQS9ERyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFpQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQVMsQ0FBQyxDQUFDO1FBRW5ELElBQU0sSUFBSSwwREFBWSxtQ0FFckIsR0FGWSx5REFBTSxDQUFDLEVBQUUsS0FFckIsQ0FBQztRQUVGLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUk7WUFDcEMsb0VBQUksR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFO2dCQUFFLHFEQUFDLGdGQUFTLElBQUMsRUFBRSxFQUFFLEtBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLElBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBYSxDQUFLO1FBQTVGLENBQTRGLENBQy9GLENBQUM7UUFHRixJQUFNLGdCQUFnQix3eUJBQWEsaXhCQTZCbEMsR0E3QndCLHlEQUFNLENBQUMsR0FBRyxLQTZCbEMsQ0FBQztRQUVGLDBGQUEwRjtRQUUxRixNQUFNLENBQUMsQ0FDSCxxREFBQyxnRUFBYSxJQUFDLEtBQUssRUFBRSxrRUFBTTtZQUN4QjtnQkFDSSxxREFBQyxpRUFBSzs7b0JBQXNDLGtFQUFNLENBQUMsSUFBSTsyQkFBYTtnQkFFbkUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUkscURBQUMsZ0JBQWdCO29CQUFDLGdFQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFLLENBQW1CO2dCQUN2RixpRUFDSSxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcscUJBRXBCO2dCQUNULGdFQUFNO2dCQUNOLHFEQUFDLElBQUksUUFDQSxLQUFLLENBQ0g7Z0JBRVAsOERBQUssRUFBRSxFQUFDLGdCQUFnQixHQUFHLENBQ3pCLENBQ00sQ0FDbkIsQ0FBQzs7SUFDTixDQUFDO0lBQ0wsVUFBQztBQUFELENBQUMsQ0F4RndCLG1FQUFRLEdBd0ZoQzs7Ozs7Ozs7QUNqSEQsK0M7Ozs7OztBQ0FBLCtDOzs7Ozs7O0FDS0EsSUFBTSxNQUFNLEdBQVc7SUFDbkIsSUFBSSxFQUFFLFNBQVM7SUFDZixJQUFJLEVBQUUsU0FBUztJQUNmLEtBQUssRUFBRSxTQUFTO0NBQ25CLENBQUM7QUFFRix5REFBZSxNQUFNOzs7Ozs7Ozs7O0FDWGtCO0FBRXZDLGlFQUFpRTtBQUNqRSw2Q0FBNkM7QUFDN0MsSUFBTSxLQUFLLGtIQUFZLHlEQUdaLEVBQXlCLHlCQUNkLEVBQTBCLEtBQy9DLEdBTGEseURBQU0sQ0FBQyxFQUFFLEtBR1osZUFBSyxJQUFJLFlBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFoQixDQUFnQixFQUNkLGVBQUssSUFBSSxZQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBakIsQ0FBaUIsRUFDL0MsQ0FBQztBQUVGLHlEQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWFU7QUFDUTtBQUV2QztJQUErQyw0QkFBdUI7SUFJbEUsa0JBQStCLE1BQWMsRUFBRSxLQUFVO1FBQXpELFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBS2Y7UUFOOEIsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUd6QyxLQUFJLENBQUMsRUFBRSxHQUFHLGdEQUFlLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSSxDQUFDLENBQUM7UUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBeUIsS0FBSSxDQUFDLE1BQU0sWUFBTyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBRyxDQUFDLENBQUM7UUFDeEYsS0FBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7O0lBQ3BELENBQUM7SUFFRCx1Q0FBb0IsR0FBcEI7UUFDSSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCw0QkFBUyxHQUFULFVBQVUsTUFBVztRQUNqQixJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQUEsQ0FBQztJQUVOLGVBQUM7QUFBRCxDQUFDLENBcEI4QyxnREFBZSxHQW9CN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJ3RTtBQUN0QjtBQUNwQjtBQUNMOytEQUVYLGdHQUFvQixDQUFFLGdCQUFNO0lBQ3ZDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBZSxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQzdDLG1CQUFtQjtRQUNuQixvQ0FBb0M7UUFDcEMsMENBQTBDO1FBQzFDLG9EQUFvRDtRQUNwRCxrREFBa0Q7UUFDbEQsNENBQTRDO1FBQzVDLHVDQUF1QztRQUN2Qyx3REFBd0Q7UUFDeEQsSUFBTSxNQUFNLEdBQUcsdUZBQWMsQ0FBQyxxREFBQyxpREFBRyxPQUFFLENBQUMsQ0FBQztRQUN0QyxPQUFPLENBQUM7WUFDSixJQUFJLEVBQUUsTUFBTTtTQUNmLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLEVBQUM7Ozs7Ozs7QUNwQkg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDRCQUE0QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsNkJBQTZCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0Esa0NBQWtDLDhCQUE4Qjs7QUFFaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCLG9EQUFvRDtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7O0FBRVY7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLG1CQUFtQjtBQUNsRSxVQUFVOztBQUVWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBLHdEQUF3RCxjQUFjOztBQUV0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0E7QUFDQSx5REFBeUQsWUFBWSxhQUFhLE1BQU07QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBOEQsNEJBQTRCLEVBQUU7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBLFVBQVU7O0FBRVY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSxrREFBa0Qsc0ZBQXNGO0FBQ3hJO0FBQ0EsdURBQXVELDRFQUE0RTtBQUNuSSxxREFBcUQseUZBQXlGLEVBQUU7QUFDaEo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCLG1CQUFtQjs7QUFFbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQztBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRGQUE0RiwrQkFBK0I7QUFDM0g7QUFDQTtBQUNBLG1DQUFtQywrQkFBK0I7QUFDbEUsK0JBQStCLCtCQUErQjs7QUFFOUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0RkFBNEYscUNBQXFDO0FBQ2pJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQSx1Q0FBdUMsa0JBQWtCO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUZBQXFGLCtCQUErQixFQUFFO0FBQ3RIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7O0FBR2hCO0FBQ0EsVUFBVTs7QUFFVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0ZBQXNGLDJDQUEyQztBQUNqSTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsd0JBQXdCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QywrQkFBK0I7QUFDdEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyx1QkFBdUI7QUFDM0Q7O0FBRUEsVUFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtDQUErQztBQUMvQyxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQyxhQUFhLDBCQUEwQjtBQUN2QyxVQUFVO0FBQ1YsNENBQTRDLGtCQUFrQixFQUFFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHdDQUF3Qyx3QkFBd0IsRUFBRSxFQUFFLGVBQWUsNENBQTRDO0FBQ3hKO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBLElBQUksRTs7Ozs7O0FDL3dCSiwrQyIsImZpbGUiOiJtYWluLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMTQ2NDRlODMwYjk0OWE0NzNkM2IiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3ZlbmRvclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIi4vdmVuZG9yXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L3JlYWN0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgzMTgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9zdHlsZWQtY29tcG9uZW50cy9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDMxMyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2RvdG5ldGlmeS9kaXN0L2RvdG5ldGlmeS1yZWFjdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJhc2VWaWV3IH0gZnJvbSBcIl9UeXBlc2NyaXB0L2luZGV4XCI7XHJcblxyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBDb2xvcnMgZnJvbSBcIkNvbXBvbmVudHMvQ29sb3JzXCI7XHJcblxyXG5pbXBvcnQgVGl0bGUgZnJvbSBcIkNvbXBvbmVudHMvVGl0bGVcIjtcclxuXHJcbmltcG9ydCAqIGFzIERvdG5ldGlmeSBmcm9tIFwiZG90bmV0aWZ5XCI7XHJcbmltcG9ydCB7IFJvdXRlTGluayB9IGZyb20gXCJkb3RuZXRpZnkvZGlzdC9kb3RuZXRpZnktcmVhY3Qucm91dGVyXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTGlua3tcclxuICAgIElkOiBzdHJpbmc7XHJcbiAgICBSb3V0ZTogc3RyaW5nO1xyXG4gICAgQ2FwdGlvbjogc3RyaW5nO1xyXG4gICAgRGVzY3JpcHRpb246IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQXBwU3RhdGV7XHJcbiAgICBMaW5rczogQXJyYXk8SUxpbms+O1xyXG4gICAgTWVzc2FnZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwIGV4dGVuZHMgQmFzZVZpZXc8e30sIElBcHBTdGF0ZT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcclxuICAgICAgICBzdXBlcihgJHtBcHAubmFtZX1WTWAsIHByb3BzKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhgd2luZG93LnZtU3RhdGVzIDogJHt3aW5kb3cudm1TdGF0ZXN9YCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHNlcnZlciBoeWRyYXRhdGlvbiBhcHAgbGluayA6ICcke3dpbmRvdy52bVN0YXRlcy5BcHBWTS5MaW5rc1swXS5DYXB0aW9ufSdgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgc2VydmVyIGh5ZHJhdGF0aW9uIGFwcCBtZXNzYWdlIDogJyR7d2luZG93LnZtU3RhdGVzLkFwcFZNLk1lc3NhZ2V9J2ApO1xyXG5cclxuICAgICAgICB0aGlzLnZtLm9uUm91dGVFbnRlciA9XHJcbiAgICAgICAgICAgIChwYXRoOiBzdHJpbmcsIHRlbXBsYXRlOiBEb3RuZXRpZnkuSVRlbXBsYXRlKSA9PiB0ZW1wbGF0ZS5UYXJnZXQgPSBcIkN1cnJlbnRQYWdlRGl2XCI7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB3aW5kb3cudm1TdGF0ZXMuQXBwVk07XHJcbiAgICAgICAgY29uc29sZS5sb2coYEFwcCBtZXNzYWdlIDogJHt0aGlzLnN0YXRlLk1lc3NhZ2V9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xpY2sgPSAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgOiB2b2lkID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy4kZGlzcGF0Y2goeyBTdWJtaXQ6IFwibm91dmVhdSBtZXNzYWdlXCIgfSk7XHJcbiAgICB9XHJcbiAgICAvLzxSb3V0ZUxpbmsgcm91dGU9XCJyb3V0ZVwiPjwvUm91dGVMaW5rPlxyXG4gICAgLy8gICAgICAgIDxSb3V0ZVRhcmdldCBpZD1cIkN1cnJlbnRQYWdlRGl2XCIvPlxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgQXBwIG1lc3NhZ2UgOiAke3RoaXMuc3RhdGUuTWVzc2FnZX1gKTtcclxuXHJcbiAgICAgICAgY29uc3QgTWVudSA9IHN0eWxlZC51bGBcclxuICAgICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICAgICAgYDtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBsaW5rcyA9IHRoaXMuc3RhdGUuTGlua3MubWFwKChsaW5rKSA9PlxyXG4gICAgICAgICAgICA8bGkga2V5PXtsaW5rLklkfT48Um91dGVMaW5rIHZtPXt0aGlzLnZtfSByb3V0ZT17bGluay5Sb3V0ZX0+e2xpbmsuQ2FwdGlvbn08L1JvdXRlTGluaz48L2xpPlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGNvbnN0IE1lc3NhZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG5cdCAgICAgICAgLyogYWxsIGRlY2xhcmF0aW9ucyB3aWxsIGJlIHByZWZpeGVkICovXHJcblx0ICAgICAgICBwYWRkaW5nOiAyZW0gMWVtO1xyXG5cdCAgICAgICAgYmFja2dyb3VuZDogcGFwYXlhd2hpcDtcclxuXHJcblx0ICAgICAgICAvKiBwc2V1ZG8gc2VsZWN0b3JzIHdvcmsgYXMgd2VsbCAqL1xyXG5cdCAgICAgICAgJjpob3ZlciB7XHJcblx0XHQgICAgICAgIGJhY2tncm91bmQ6IHBhbGV2aW9sZXRyZWQ7XHJcblx0ICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgLyogbWVkaWEgcXVlcmllcyBhcmUgbm8gcHJvYmxlbSAqL1xyXG5cdCAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcblx0XHQgICAgICAgIGJhY2tncm91bmQ6IHRvbWF0bztcclxuXHJcblx0XHQgICAgICAgIC8qIG5lc3RlZCBydWxlcyB3b3JrIGFzIGV4cGVjdGVkICovXHJcblx0XHQgICAgICAgICY6aG92ZXIge1xyXG5cdFx0XHQgICAgICAgIGJhY2tncm91bmQ6IHllbGxvdztcclxuXHRcdCAgICAgICAgfVxyXG5cdCAgICAgICAgfVxyXG5cclxuXHQgICAgICAgID4gcCB7XHJcblx0XHQgICAgICAgIC8qIGRlc2NlbmRhbnQtc2VsZWN0b3JzIHdvcmsgYXMgd2VsbCwgYnV0IGFyZSBtb3JlIG9mIGFuIGVzY2FwZSBoYXRjaCAqL1xyXG5cdFx0ICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuXHQgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAvKiBDb250ZXh0dWFsIHNlbGVjdG9ycyB3b3JrIGFzIHdlbGwgKi9cclxuXHQgICAgICAgIGh0bWwudGVzdCAmIHtcclxuXHRcdCAgICAgICAgZGlzcGxheTogbm9uZTtcclxuXHQgICAgICAgIH1cclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICAvL3sgdGhpcy5zdGF0ZS5NZXNzYWdlICYmIDxNZXNzYWdlQ29udGFpbmVyPjxwPnRoaXMuc3RhdGUuTWVzc2FnZTwvcD48L01lc3NhZ2VDb250YWluZXI+IH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e0NvbG9yc30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZT5MYSBjb3VsZXVyIGR1IHRpdHJlIGMnZXN0IGltcG9ydGFudCB7Q29sb3JzLm1haW59Li4uITwvVGl0bGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLk1lc3NhZ2UgJiYgPE1lc3NhZ2VDb250YWluZXI+PHA+e3RoaXMuc3RhdGUuTWVzc2FnZX08L3A+PC9NZXNzYWdlQ29udGFpbmVyPiB9ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDaGFuZ2UgbWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGlua3N9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIkN1cnJlbnRQYWdlRGl2XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAudHN4IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMzEyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYXNwbmV0LXByZXJlbmRlcmluZy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMzE1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL3NlcnZlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW50ZXJmYWNlIElDb2xvcnMge1xyXG4gICAgbWFpbjpTdHJpbmc7XHJcbiAgICBkYXJrOlN0cmluZztcclxuICAgIGxpZ2h0OlN0cmluZztcclxufVxyXG5jb25zdCBjb2xvcnM6SUNvbG9ycyA9IHtcclxuICAgIG1haW46IFwiIzM5MzI3NlwiLFxyXG4gICAgZGFyazogXCIjMEQwODNCXCIsXHJcbiAgICBsaWdodDogXCIjODM3RUIxXCJcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbG9yc1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL0NvbG9ycy50cyIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG4vLyBDcmVhdGUgYSA8VGl0bGU+IHJlYWN0IGNvbXBvbmVudCB0aGF0IHJlbmRlcnMgYW4gPGgxPiB3aGljaCBpc1xyXG4vLyBjZW50ZXJlZCwgcGFsZXZpb2xldHJlZCBhbmQgc2l6ZWQgYXQgMS41ZW1cclxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubWFpbn07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5saWdodH07XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaXRsZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL1RpdGxlLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBEb3RuZXRpZnkgZnJvbSBcImRvdG5ldGlmeVwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VWaWV3PFRQLCBUUz4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8VFAsIFRTPntcclxuXHJcbiAgICByZWFkb25seSB2bTogRG90bmV0aWZ5LmRvdG5ldGlmeVZNO1xyXG5cclxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihyZWFkb25seSB2bU5hbWU6IHN0cmluZywgcHJvcHM6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy52bSA9IERvdG5ldGlmeS5yZWFjdC5jb25uZWN0KHRoaXMudm1OYW1lLCB0aGlzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgc3RhdGUgaHlkcmF0YXRpb24gZm9yICR7dGhpcy52bU5hbWV9ID0gJyR7d2luZG93LnZtU3RhdGVzW3RoaXMudm1OYW1lXX0nYCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHdpbmRvdy52bVN0YXRlc1t0aGlzLnZtTmFtZV0gfHwge307XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy52bS4kZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgICRkaXNwYXRjaChpVmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudm0uJGRpc3BhdGNoKGlWYWx1ZSk7XHJcbiAgICB9O1xyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL19UeXBlc2NyaXB0L2luZGV4LnRzIiwiaW1wb3J0IHsgY3JlYXRlU2VydmVyUmVuZGVyZXIsIFJlbmRlclJlc3VsdCB9IGZyb20gXCJhc3BuZXQtcHJlcmVuZGVyaW5nXCI7XHJcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gIGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0FwcH0gZnJvbSBcIi4vQXBwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTZXJ2ZXJSZW5kZXJlciggcGFyYW1zID0+IHsgXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8UmVuZGVyUmVzdWx0PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgLy9jb25zdCByZXN1bHQgPSBgIFxyXG4gICAgICAgIC8vICAgIDxoMT5NeSBhd2Vzb21lIGhlYWRsaW5lITwvaDE+IFxyXG4gICAgICAgIC8vICAgIDxwPk5vZGUgdGltZSBpczogJHsgbmV3IERhdGUoKX08L3A+IFxyXG4gICAgICAgIC8vICAgIDxwPlJlcXVlc3QgcGF0aDogJHsgcGFyYW1zLmxvY2F0aW9uLnBhdGh9PC9wPiBcclxuICAgICAgICAvLyAgICA8cD5BYnNvbHV0ZSBVUkw6ICR7IHBhcmFtcy5hYnNvbHV0ZVVybH08L3A+IFxyXG4gICAgICAgIC8vICAgIDxwPkRhdGE6ICR7cGFyYW1zLmRhdGEudXNlclR5cGV9PC9wPmAgXHJcbiAgICAgICAgLy9qUXVlcnkoXCJ0ZXN0XCIpLmlubmVySFRNTCA9IFwiYm9uam91clwiO1xyXG4gICAgICAgIC8vY29uc3QgcmVzdWx0ID0gcmVuZGVyVG9TdHJpbmcoPFNpbXBsZSBuYW1lPVwiemV6ZWZcIi8+KTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSByZW5kZXJUb1N0cmluZyg8QXBwLz4pO1xyXG4gICAgICAgIHJlc29sdmUoeyBcclxuICAgICAgICAgICAgaHRtbDogcmVzdWx0XHJcbiAgICAgICAgfSk7IFxyXG4gICAgfSk7IFxyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm9vdC1zZXJ2ZXIudHN4Iiwi77u/LyogXG5Db3B5cmlnaHQgMjAxNyBEaWNreSBTdXJ5YWRpXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8vIFN1cHBvcnQgdXNpbmcgQU1EIG9yIENvbW1vbkpTIHRoYXQgbG9hZHMgb3VyIGFwcC5qcywgb3IgYmVpbmcgcGxhY2VkIGluIDxzY3JpcHQ+IHRhZy5cbihmdW5jdGlvbiAoZmFjdG9yeSkge1xuICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmVbXCJhbWRcIl0pIHtcbiAgICAgIGRlZmluZShbJ3JlYWN0JywgJ2pxdWVyeScsICdkb3RuZXRpZnknXSwgZmFjdG9yeSk7XG4gICB9XG4gICBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgncmVhY3QnKSwgcmVxdWlyZSgnanF1ZXJ5JyksIHJlcXVpcmUoJ2RvdG5ldGlmeScpKTtcbiAgIH1cbiAgIGVsc2Uge1xuICAgICAgZmFjdG9yeShSZWFjdCwgalF1ZXJ5LCBkb3RuZXRpZnkpO1xuICAgfVxufVxuICAgKGZ1bmN0aW9uIChfUmVhY3QsICQsIGRvdG5ldGlmeSkge1xuXG4gICAgICAvLyBQYXRoSlMuIE5lZWQgdGhpcyBzcGVjaWZpYyB2ZXJzaW9uLCBiZWNhdXNlIGxhdGVzdCB2ZXJzaW9uIGlzIGNhdXNpbmcgaXNzdWUuXG4gICAgICB2YXIgUGF0aCA9IHtcclxuICAgICAgICAgJ3ZlcnNpb24nOiBcIjAuOC41XCIsXHJcbiAgICAgICAgICdtYXAnOiBmdW5jdGlvbiAocGF0aCkge1xyXG4gICAgICAgICAgICBpZiAoUGF0aC5yb3V0ZXMuZGVmaW5lZC5oYXNPd25Qcm9wZXJ0eShwYXRoKSkge1xyXG4gICAgICAgICAgICAgICByZXR1cm4gUGF0aC5yb3V0ZXMuZGVmaW5lZFtwYXRoXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQYXRoLmNvcmUucm91dGUocGF0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfSxcclxuICAgICAgICAgJ3Jvb3QnOiBmdW5jdGlvbiAocGF0aCkge1xyXG4gICAgICAgICAgICBQYXRoLnJvdXRlcy5yb290ID0gcGF0aDtcclxuICAgICAgICAgfSxcclxuICAgICAgICAgJ3Jlc2N1ZSc6IGZ1bmN0aW9uIChmbikge1xyXG4gICAgICAgICAgICBQYXRoLnJvdXRlcy5yZXNjdWUgPSBmbjtcclxuICAgICAgICAgfSxcclxuICAgICAgICAgJ2hpc3RvcnknOiB7XHJcbiAgICAgICAgICAgICdpbml0aWFsJzoge30sIC8vIEVtcHR5IGNvbnRhaW5lciBmb3IgXCJJbml0aWFsIFBvcHN0YXRlXCIgY2hlY2tpbmcgdmFyaWFibGVzLlxyXG4gICAgICAgICAgICAncHVzaFN0YXRlJzogZnVuY3Rpb24gKHN0YXRlLCB0aXRsZSwgcGF0aCkge1xyXG4gICAgICAgICAgICAgICBpZiAoUGF0aC5oaXN0b3J5LnN1cHBvcnRlZCkge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoUGF0aC5kaXNwYXRjaChwYXRoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZShzdGF0ZSwgdGl0bGUsIHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChQYXRoLmhpc3RvcnkuZmFsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBcIiNcIiArIHBhdGg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAncG9wU3RhdGUnOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgdmFyIGluaXRpYWxQb3AgPSAhUGF0aC5oaXN0b3J5LmluaXRpYWwucG9wcGVkICYmIGxvY2F0aW9uLmhyZWYgPT0gUGF0aC5oaXN0b3J5LmluaXRpYWwuVVJMO1xyXG4gICAgICAgICAgICAgICBQYXRoLmhpc3RvcnkuaW5pdGlhbC5wb3BwZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICBpZiAoaW5pdGlhbFBvcCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICBQYXRoLmRpc3BhdGNoKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ2xpc3Rlbic6IGZ1bmN0aW9uIChmYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICBQYXRoLmhpc3Rvcnkuc3VwcG9ydGVkID0gISEod2luZG93Lmhpc3RvcnkgJiYgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKTtcclxuICAgICAgICAgICAgICAgUGF0aC5oaXN0b3J5LmZhbGxiYWNrID0gZmFsbGJhY2s7XHJcblxyXG4gICAgICAgICAgICAgICBpZiAoUGF0aC5oaXN0b3J5LnN1cHBvcnRlZCkge1xyXG4gICAgICAgICAgICAgICAgICBQYXRoLmhpc3RvcnkuaW5pdGlhbC5wb3BwZWQgPSAoJ3N0YXRlJyBpbiB3aW5kb3cuaGlzdG9yeSksIFBhdGguaGlzdG9yeS5pbml0aWFsLlVSTCA9IGxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5vbnBvcHN0YXRlID0gUGF0aC5oaXN0b3J5LnBvcFN0YXRlO1xyXG4gICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoUGF0aC5oaXN0b3J5LmZhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGZvciAocm91dGUgaW4gUGF0aC5yb3V0ZXMuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm91dGUuY2hhckF0KDApICE9IFwiI1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhdGgucm91dGVzLmRlZmluZWRbXCIjXCIgKyByb3V0ZV0gPSBQYXRoLnJvdXRlcy5kZWZpbmVkW3JvdXRlXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgUGF0aC5yb3V0ZXMuZGVmaW5lZFtcIiNcIiArIHJvdXRlXS5wYXRoID0gXCIjXCIgKyByb3V0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgIFBhdGgubGlzdGVuKCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICdtYXRjaCc6IGZ1bmN0aW9uIChwYXRoLCBwYXJhbWV0ZXJpemUpIHtcclxuICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHt9LCByb3V0ZSA9IG51bGwsIHBvc3NpYmxlX3JvdXRlcywgc2xpY2UsIGksIGosIGNvbXBhcmUsIHJlc3VsdDtcclxuICAgICAgICAgICAgZm9yIChyb3V0ZSBpbiBQYXRoLnJvdXRlcy5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgIGlmIChyb3V0ZSAhPT0gbnVsbCAmJiByb3V0ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJvdXRlID0gUGF0aC5yb3V0ZXMuZGVmaW5lZFtyb3V0ZV07XHJcbiAgICAgICAgICAgICAgICAgIHBvc3NpYmxlX3JvdXRlcyA9IHJvdXRlLnBhcnRpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgcG9zc2libGVfcm91dGVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHNsaWNlID0gcG9zc2libGVfcm91dGVzW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgICBjb21wYXJlID0gcGF0aDtcclxuICAgICAgICAgICAgICAgICAgICAgaWYgKHNsaWNlLnNlYXJjaCgvOi8pID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2xpY2Uuc3BsaXQoXCIvXCIpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoaSA8IGNvbXBhcmUuc3BsaXQoXCIvXCIpLmxlbmd0aCkgJiYgKHNsaWNlLnNwbGl0KFwiL1wiKVtpXS5jaGFyQXQoMCkgPT09IFwiOlwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXNbc2xpY2Uuc3BsaXQoJy8nKVtpXS5yZXBsYWNlKC86LywgJycpXSA9IGNvbXBhcmUuc3BsaXQoXCIvXCIpW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBjb21wYXJlLnNwbGl0KFwiL1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2ldID0gc2xpY2Uuc3BsaXQoXCIvXCIpW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYXJlID0gcmVzdWx0LmpvaW4oXCIvXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICBpZiAoc2xpY2UgPT09IGNvbXBhcmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtZXRlcml6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZS5wYXJhbXMgPSBwYXJhbXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAnZGlzcGF0Y2gnOiBmdW5jdGlvbiAocGFzc2VkX3JvdXRlKSB7XHJcbiAgICAgICAgICAgIHZhciBwcmV2aW91c19yb3V0ZSwgbWF0Y2hlZF9yb3V0ZTtcclxuICAgICAgICAgICAgaWYgKFBhdGgucm91dGVzLmN1cnJlbnQgIT09IHBhc3NlZF9yb3V0ZSkge1xyXG4gICAgICAgICAgICAgICBQYXRoLnJvdXRlcy5wcmV2aW91cyA9IFBhdGgucm91dGVzLmN1cnJlbnQ7XHJcbiAgICAgICAgICAgICAgIFBhdGgucm91dGVzLmN1cnJlbnQgPSBwYXNzZWRfcm91dGU7XHJcbiAgICAgICAgICAgICAgIG1hdGNoZWRfcm91dGUgPSBQYXRoLm1hdGNoKHBhc3NlZF9yb3V0ZSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICBpZiAoUGF0aC5yb3V0ZXMucHJldmlvdXMpIHtcclxuICAgICAgICAgICAgICAgICAgcHJldmlvdXNfcm91dGUgPSBQYXRoLm1hdGNoKFBhdGgucm91dGVzLnByZXZpb3VzKTtcclxuICAgICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzX3JvdXRlICE9PSBudWxsICYmIHByZXZpb3VzX3JvdXRlLmRvX2V4aXQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNfcm91dGUuZG9fZXhpdCgpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgIGlmIChtYXRjaGVkX3JvdXRlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgIG1hdGNoZWRfcm91dGUucnVuKCk7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoUGF0aC5yb3V0ZXMucmVzY3VlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIFBhdGgucm91dGVzLnJlc2N1ZSgpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAnbGlzdGVuJzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZm4gPSBmdW5jdGlvbiAoKSB7IFBhdGguZGlzcGF0Y2gobG9jYXRpb24uaGFzaCk7IH1cclxuXHJcbiAgICAgICAgICAgIGlmIChsb2NhdGlvbi5oYXNoID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgIGlmIChQYXRoLnJvdXRlcy5yb290ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhhc2ggPSBQYXRoLnJvdXRlcy5yb290O1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFRoZSAnZG9jdW1lbnQuZG9jdW1lbnRNb2RlJyBjaGVja3MgYmVsb3cgZW5zdXJlIHRoYXQgUGF0aEpTIGZpcmVzIHRoZSByaWdodCBldmVudHNcclxuICAgICAgICAgICAgLy8gZXZlbiBpbiBJRSBcIlF1aXJrcyBNb2RlXCIuXHJcbiAgICAgICAgICAgIGlmIChcIm9uaGFzaGNoYW5nZVwiIGluIHdpbmRvdyAmJiAoIWRvY3VtZW50LmRvY3VtZW50TW9kZSB8fCBkb2N1bWVudC5kb2N1bWVudE1vZGUgPj0gOCkpIHtcclxuICAgICAgICAgICAgICAgd2luZG93Lm9uaGFzaGNoYW5nZSA9IGZuO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICBzZXRJbnRlcnZhbChmbiwgNTApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAobG9jYXRpb24uaGFzaCAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICBQYXRoLmRpc3BhdGNoKGxvY2F0aW9uLmhhc2gpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICdjb3JlJzoge1xyXG4gICAgICAgICAgICAncm91dGUnOiBmdW5jdGlvbiAocGF0aCkge1xyXG4gICAgICAgICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xyXG4gICAgICAgICAgICAgICB0aGlzLmFjdGlvbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgIHRoaXMuZG9fZW50ZXIgPSBbXTtcclxuICAgICAgICAgICAgICAgdGhpcy5kb19leGl0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMgPSB7fTtcclxuICAgICAgICAgICAgICAgUGF0aC5yb3V0ZXMuZGVmaW5lZFtwYXRoXSA9IHRoaXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfSxcclxuICAgICAgICAgJ3JvdXRlcyc6IHtcclxuICAgICAgICAgICAgJ2N1cnJlbnQnOiBudWxsLFxyXG4gICAgICAgICAgICAncm9vdCc6IG51bGwsXHJcbiAgICAgICAgICAgICdyZXNjdWUnOiBudWxsLFxyXG4gICAgICAgICAgICAncHJldmlvdXMnOiBudWxsLFxyXG4gICAgICAgICAgICAnZGVmaW5lZCc6IHt9XHJcbiAgICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgUGF0aC5jb3JlLnJvdXRlLnByb3RvdHlwZSA9IHtcclxuICAgICAgICAgJ3RvJzogZnVuY3Rpb24gKGZuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uID0gZm47XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAnZW50ZXInOiBmdW5jdGlvbiAoZm5zKSB7XHJcbiAgICAgICAgICAgIGlmIChmbnMgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICAgICB0aGlzLmRvX2VudGVyID0gdGhpcy5kb19lbnRlci5jb25jYXQoZm5zKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgdGhpcy5kb19lbnRlci5wdXNoKGZucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICdleGl0JzogZnVuY3Rpb24gKGZuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9fZXhpdCA9IGZuO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICAgfSxcclxuICAgICAgICAgJ3BhcnRpdGlvbic6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHBhcnRzID0gW10sIG9wdGlvbnMgPSBbXSwgcmUgPSAvXFwoKFtefV0rPylcXCkvZywgdGV4dCwgaTtcclxuICAgICAgICAgICAgd2hpbGUgKHRleHQgPSByZS5leGVjKHRoaXMucGF0aCkpIHtcclxuICAgICAgICAgICAgICAgcGFydHMucHVzaCh0ZXh0WzFdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcHRpb25zLnB1c2godGhpcy5wYXRoLnNwbGl0KFwiKFwiKVswXSk7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICBvcHRpb25zLnB1c2gob3B0aW9uc1tvcHRpb25zLmxlbmd0aCAtIDFdICsgcGFydHNbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zO1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAncnVuJzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgaGFsdF9leGVjdXRpb24gPSBmYWxzZSwgaSwgcmVzdWx0LCBwcmV2aW91cztcclxuXHJcbiAgICAgICAgICAgIGlmIChQYXRoLnJvdXRlcy5kZWZpbmVkW3RoaXMucGF0aF0uaGFzT3duUHJvcGVydHkoXCJkb19lbnRlclwiKSkge1xyXG4gICAgICAgICAgICAgICBpZiAoUGF0aC5yb3V0ZXMuZGVmaW5lZFt0aGlzLnBhdGhdLmRvX2VudGVyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IFBhdGgucm91dGVzLmRlZmluZWRbdGhpcy5wYXRoXS5kb19lbnRlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBQYXRoLnJvdXRlcy5kZWZpbmVkW3RoaXMucGF0aF0uZG9fZW50ZXJbaV0uYXBwbHkodGhpcywgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbHRfZXhlY3V0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFoYWx0X2V4ZWN1dGlvbikge1xyXG4gICAgICAgICAgICAgICBQYXRoLnJvdXRlcy5kZWZpbmVkW3RoaXMucGF0aF0uYWN0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICB9O1xuXG4gICAgICAvLyBBZGQgcGx1Z2luIGZ1bmN0aW9ucy5cbiAgICAgIGRvdG5ldGlmeS5yZWFjdC5yb3V0ZXIgPSB7XG4gICAgICAgICB2ZXJzaW9uOiBcIjEuMC4zLWJldGFcIixcblxuICAgICAgICAgLy8gVVJMIHBhdGggdGhhdCB3aWxsIGJlIHBhcnNlZCB3aGVuIHBlcmZvcm1pbmcgcm91dGluZy5cbiAgICAgICAgIHVybFBhdGg6IGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLFxuXG4gICAgICAgICAvLyBJbml0aWFsaXplIHJvdXRpbmcgdXNpbmcgUGF0aEpTLlxuICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBQYXRoICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICBQYXRoLmhpc3RvcnkubGlzdGVuKHRydWUpO1xuICAgICAgICAgICAgICAgUGF0aC5yb3V0ZXMucmVzY3VlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgLy93aW5kb3cubG9jYXRpb24ucmVwbGFjZShkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGF0aGpzIGxpYnJhcnkgaXMgcmVxdWlyZWQgZm9yIHJvdXRpbmcuXCIpO1xuICAgICAgICAgfSxcblxuICAgICAgICAgLy8gTWFwIGEgcm91dGUgdG8gYW4gYWN0aW9uLlxuICAgICAgICAgbWFwVG86IGZ1bmN0aW9uIChpUGF0aCwgaUZuKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIFBhdGggIT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgICAgICBQYXRoLm1hcChpUGF0aCkudG8oZnVuY3Rpb24gKCkgeyBpRm4odGhpcy5wYXJhbXMpIH0pO1xuICAgICAgICAgfSxcblxuICAgICAgICAgLy8gTWF0Y2ggYSBVUkwgcGF0aCB0byBhIHJvdXRlIGFuZCBydW4gdGhlIGFjdGlvbi5cbiAgICAgICAgIG1hdGNoOiBmdW5jdGlvbiAoaVVybFBhdGgpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgUGF0aCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgdmFyIG1hdGNoZWQgPSBQYXRoLm1hdGNoKGlVcmxQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgICAgIGlmIChtYXRjaGVkICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgIG1hdGNoZWQucnVuKCk7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgIH0sXG5cbiAgICAgICAgIC8vIE9wdGlvbmFsIGNhbGxiYWNrIHRvIG92ZXJyaWRlIGEgVVJMIGJlZm9yZSBwZXJmb3JtaW5nIHJvdXRpbmcuXG4gICAgICAgICBvdmVycmlkZVVybDogZnVuY3Rpb24gKGlVcmwsIGlUYXJnZXRTZWxlY3RvcikgeyByZXR1cm4gaVVybCB9LFxuXG4gICAgICAgICAvLyBQdXNoIHN0YXRlIHRvIEhUTUwgaGlzdG9yeS5cbiAgICAgICAgIHB1c2hTdGF0ZTogZnVuY3Rpb24gKGlTdGF0ZSwgaVRpdGxlLCBpUGF0aCkge1xuICAgICAgICAgICAgZG90bmV0aWZ5LnJlYWN0LnJvdXRlci51cmxQYXRoID0gXCJcIjtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgUGF0aCAhPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgICAgICAgIFBhdGguaGlzdG9yeS5wdXNoU3RhdGUoaVN0YXRlLCBpVGl0bGUsIGlQYXRoKTtcbiAgICAgICAgIH0sXG5cbiAgICAgICAgIC8vIFJlZGlyZWN0IHRvIHRoZSBhIFVSTC5cbiAgICAgICAgIHJlZGlyZWN0OiBmdW5jdGlvbiAoaVVybCkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgZmlyc3Qgd2hldGhlciBleGlzdGluZyB2aWV3cyBjYW4gaGFuZGxlIHJvdXRpbmcgdGhpcyBVUkwuXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UsIGRvIGEgaGFyZCBicm93c2VyIHJlZGlyZWN0LlxuICAgICAgICAgICAgZG90bmV0aWZ5LnJlYWN0LnJvdXRlci51cmxQYXRoID0gaVVybDtcbiAgICAgICAgICAgIGZvciAodmFyIHZtSWQgaW4gZG90bmV0aWZ5LnJlYWN0LnZpZXdNb2RlbHMpIHtcbiAgICAgICAgICAgICAgIHZhciB2bSA9IGRvdG5ldGlmeS5yZWFjdC52aWV3TW9kZWxzW3ZtSWRdO1xuICAgICAgICAgICAgICAgaWYgKHZtICE9IG51bGwgJiYgdm0uJHJvdXRlci5yb3V0ZVVybCgpKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoZG90bmV0aWZ5LmRlYnVnKVxuICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyb3V0ZXI+IHJlZGlyZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoaVVybCk7XG4gICAgICAgICB9LFxuXG4gICAgICAgICAvLyBVc2VkIGJ5IGNsaWVudC1zaWRlIFJlYWN0IGNvbXBvbmVudCB0byBnZXQgc2VydmVyLXNpZGUgcmVuZGVyZWQgaW5pdGlhbCBzdGF0ZS5cclxuICAgICAgICAgc3NyU3RhdGU6IGZ1bmN0aW9uIChpVk1JZCkge1xyXG4gICAgICAgICAgICBpZiAod2luZG93LnNzciAmJiB3aW5kb3cuc3NyW2lWTUlkXSAmJiAhd2luZG93LnNzcltpVk1JZF0uZmV0Y2hlZCkge1xyXG4gICAgICAgICAgICAgICB3aW5kb3cuc3NyW2lWTUlkXS5mZXRjaGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5zc3JbaVZNSWRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH0sXHJcblxuICAgICAgICAgLy8gQ2FsbGVkIGZyb20gc2VydmVyIHRvIGNvbmZpZ3VyZSBzZXJ2ZXItc2lkZSByZW5kZXJpbmcuXG4gICAgICAgICAvLyBpUGF0aCAtIGluaXRpYWwgVVJMIHBhdGguXG4gICAgICAgICAvLyBpSW5pdGlhbFN0YXRlcyAtIHNlcmlhbGl6ZWQgb2JqZWN0IGxpdGVyYWwgJ3sgXCJ2bU5hbWVcIjoge2luaXRpYWxTdGF0ZX0sIC4uLn0nLlxuICAgICAgICAgLy8gaU92ZXJyaWRlUm91dGVGbiAtIGZ1bmN0aW9uIHRvIG92ZXJyaWRlIHJvdXRpbmcgVVJMcyBiZWZvcmUgdGhlIHJvdXRlciBsb2FkcyB0aGVtLlxuICAgICAgICAgLy8gaUNhbGxiYWNrRm4gLSBjYWxsYmFjayBhZnRlciB0aGUgcGF0aCBpcyBmdWxseSByb3V0ZWQuXG4gICAgICAgICAvLyBpVGltZW91dCAtIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzLlxuICAgICAgICAgc3NyOiBmdW5jdGlvbiAoaVBhdGgsIGlJbml0aWFsU3RhdGVzLCBpT3ZlcnJpZGVSb3V0ZUZuLCBpQ2FsbGJhY2tGbiwgaVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgZG90bmV0aWZ5LnNzciA9IHRydWU7XHJcbiAgICAgICAgICAgIGRvdG5ldGlmeS5yZWFjdC5yb3V0ZXIudXJsUGF0aCA9IGlQYXRoO1xyXG4gICAgICAgICAgICBkb3RuZXRpZnkucmVhY3Qucm91dGVyLm92ZXJyaWRlVXJsID0gaU92ZXJyaWRlUm91dGVGbjtcclxuXHJcbiAgICAgICAgICAgIC8vIEluc2VydCBpbml0aWFsIHN0YXRlcyBpbiB0aGUgaGVhZCB0YWcuXHJcbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gICAgICAgICAgICBzY3JpcHQudHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XHJcbiAgICAgICAgICAgIHNjcmlwdC50ZXh0ID0gXCJ3aW5kb3cuc3NyPVwiICsgaUluaXRpYWxTdGF0ZXMgKyBcIjtcIjtcclxuICAgICAgICAgICAgdmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XHJcbiAgICAgICAgICAgIGlmIChoZWFkKVxyXG4gICAgICAgICAgICAgICBoZWFkLmluc2VydEJlZm9yZShzY3JpcHQsIGhlYWQuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcInJvdXRlcj4gZG9jdW1lbnQgaGVhZCB0YWcgaXMgcmVxdWlyZWQgZm9yIHNlcnZlci1zaWRlIHJlbmRlci5cIik7XHJcblxyXG4gICAgICAgICAgICB2YXIgcm91dGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciBmYWxsYmFjayA9IGlUaW1lb3V0ID8gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IGlmICghcm91dGVkKSBpQ2FsbGJhY2tGbigpOyB9LCBpVGltZW91dCkgOiAwO1xyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZG90bmV0aWZ5LnJvdXRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgcm91dGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgaWYgKGZhbGxiYWNrICE9IDApXHJcbiAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChmYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgIGlDYWxsYmFja0ZuKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gQWRkIGluaXRpYWwgc3RhdGVzIGludG8gdGhlIHdpbmRvdyBzY29wZSBmb3IgdGhlIHNlcnZlci1yZW5kZXJkIGNvbXBvbmVudHMuXHJcbiAgICAgICAgICAgIHdpbmRvdy5zc3IgPSBKU09OLnBhcnNlKGlJbml0aWFsU3RhdGVzKTtcclxuICAgICAgICAgfSxcblxuICAgICAgICAgLy8gQ2FsbGVkIGJ5IGRvdE5ldGlmeSB3aGVuIGEgdmlldyBtb2RlbCBpcyByZWFkeS5cbiAgICAgICAgICRyZWFkeTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy4kcm91dGVyLmluaXRSb3V0aW5nKCk7XG4gICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEluamVjdCBhIHZpZXcgbW9kZWwgd2l0aCBmdW5jdGlvbnMuXG4gICAgICBkb3RuZXRpZnkucmVhY3Qucm91dGVyLiRpbmplY3QgPSBmdW5jdGlvbiAoaVZNKSB7XG5cbiAgICAgICAgIC8vIFB1dCBmdW5jdGlvbnMgaW5zaWRlICRyb3V0ZXIgbmFtZXNwYWNlLlxuICAgICAgICAgaVZNW1wiJHJvdXRlclwiXSA9IChmdW5jdGlvbiAoaVNjb3BlKSB7XG5cbiAgICAgICAgICAgIHZhciB1dGlscyA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgLy8gVHJpbSBzbGFzaGVzIGZyb20gc3RhcnQgYW5kIGVuZCBvZiBzdHJpbmcuXG4gICAgICAgICAgICAgICAgICB0cmltOiBmdW5jdGlvbiAoaVN0cikge1xuICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpU3RyICE9PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChpU3RyLmluZGV4T2YoXCIvXCIsIGlTdHIubGVuZ3RoIC0gMSkgPj0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgIGlTdHIgPSBpU3RyLnN1YnN0cigwLCBpU3RyLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGlTdHIuaW5kZXhPZihcIi9cIikgPT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgIGlTdHIgPSBpU3RyLnN1YnN0cigxLCBpU3RyLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlTdHI7XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgLy8gTWF0Y2ggdHdvIHN0cmluZ3MgY2FzZS1pbnNlbnNpdGl2ZS5cbiAgICAgICAgICAgICAgICAgIGVxdWFsOiBmdW5jdGlvbiAoaVN0cjEsIGlTdHIyKSB7IHJldHVybiBpU3RyMSAhPSBudWxsICYmIGlTdHIyICE9IG51bGwgJiYgaVN0cjEudG9Mb3dlckNhc2UoKSA9PSBpU3RyMi50b0xvd2VyQ2FzZSgpIH0sXG4gICAgICAgICAgICAgICAgICAvLyBXaGV0aGVyIHRoZSBzdHJpbmcgc3RhcnRzIG9yIGVuZHMgd2l0aCBhIHZhbHVlLlxuICAgICAgICAgICAgICAgICAgc3RhcnRzV2l0aDogZnVuY3Rpb24gKGlTdHIsIGlWYWx1ZSkgeyByZXR1cm4gaVN0ci50b0xvd2VyQ2FzZSgpLnNsaWNlKDAsIGlWYWx1ZS5sZW5ndGgpID09IGlWYWx1ZS50b0xvd2VyQ2FzZSgpIH0sXG4gICAgICAgICAgICAgICAgICBlbmRzV2l0aDogZnVuY3Rpb24gKGlTdHIsIGlWYWx1ZSkgeyByZXR1cm4gaVZhbHVlID09ICcnIHx8IGlTdHIudG9Mb3dlckNhc2UoKS5zbGljZSgtaVZhbHVlLmxlbmd0aCkgPT0gaVZhbHVlLnRvTG93ZXJDYXNlKCk7IH0sXG4gICAgICAgICAgICAgICAgICAvLyBEaXNwYXRjaCBldmVudCB3aXRoIElFIHBvbHlmaWxsLlxuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2hFdmVudDogZnVuY3Rpb24gKGlFdmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBFdmVudCA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KGlFdmVudCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuaW5pdEV2ZW50KGlFdmVudCwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSgpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgcm91dGVzOiBbXSxcblxuICAgICAgICAgICAgICAgLy8gQnVpbGQgdGhlIGFic29sdXRlIHJvb3QgcGF0aCBmcm9tIHRoZSBcInZtUm9vdFwiIHByb3BlcnR5IG9uIFJlYWN0IGNvbXBvbmVudC5cbiAgICAgICAgICAgICAgIGluaXRSb290OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgdmFyIHN0YXRlID0gdm0uU3RhdGUoKTtcbiAgICAgICAgICAgICAgICAgIGlmICghc3RhdGUuaGFzT3duUHJvcGVydHkoXCJSb3V0aW5nU3RhdGVcIikgfHwgc3RhdGUuUm91dGluZ1N0YXRlID09PSBudWxsIHx8IHN0YXRlLlJvdXRpbmdTdGF0ZS5Sb290ID09PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICBpZiAodm0uJHJvdXRlci5fYWJzUm9vdCAhPSBzdGF0ZS5Sb3V0aW5nU3RhdGUuUm9vdCkge1xuICAgICAgICAgICAgICAgICAgICAgdmFyIHZtUm9vdCA9IHZtLiRjb21wb25lbnQucHJvcHNbXCJ2bVJvb3RcIl07XG4gICAgICAgICAgICAgICAgICAgICB2YXIgYWJzUm9vdCA9IHV0aWxzLnRyaW0odm1Sb290KTtcbiAgICAgICAgICAgICAgICAgICAgIGlmIChhYnNSb290ICE9IFwiXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBhYnNSb290ID0gXCIvXCIgKyBhYnNSb290O1xuICAgICAgICAgICAgICAgICAgICAgdmFyIHJvb3QgPSB1dGlscy50cmltKHN0YXRlLlJvdXRpbmdTdGF0ZS5Sb290KTtcbiAgICAgICAgICAgICAgICAgICAgIHZtLiRyb3V0ZXIuX2Fic1Jvb3QgPSByb290ICE9IFwiXCIgPyBhYnNSb290ICsgXCIvXCIgKyByb290IDogYWJzUm9vdDtcbiAgICAgICAgICAgICAgICAgICAgIHN0YXRlLlJvdXRpbmdTdGF0ZS5Sb290ID0gdm0uJHJvdXRlci5fYWJzUm9vdDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIH0uYmluZChpU2NvcGUpLFxuXG4gICAgICAgICAgICAgICAvLyBJbml0aWFsaXplIHJvdXRpbmcgdGVtcGxhdGVzIGlmIHRoZSB2aWV3IG1vZGVsIGltcGxlbWVudHMgSVJvdXRhYmxlLlxuICAgICAgICAgICAgICAgaW5pdFJvdXRpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHZhciB2bSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSB2bS5TdGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlID09IG51bGwgfHwgIXN0YXRlLmhhc093blByb3BlcnR5KFwiUm91dGluZ1N0YXRlXCIpKVxuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoc3RhdGUuUm91dGluZ1N0YXRlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwicm91dGVyPiB0aGUgUm91dGluZ1N0YXRlIHByb3Agb2YgJ1wiICsgdm0uJHZtSWQgKyBcIicgd2FzIG5vdCBpbml0aWFsaXplZC5cIik7XG4gICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHZhciB0ZW1wbGF0ZXMgPSBzdGF0ZS5Sb3V0aW5nU3RhdGUuVGVtcGxhdGVzO1xuICAgICAgICAgICAgICAgICAgaWYgKHRlbXBsYXRlcyA9PSBudWxsIHx8IHRlbXBsYXRlcy5sZW5ndGggPT0gMClcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZSB0aGUgcm91dGVyLlxuICAgICAgICAgICAgICAgICAgaWYgKCFkb3RuZXRpZnkucmVhY3Qucm91dGVyLiRpbml0KSB7XG4gICAgICAgICAgICAgICAgICAgICBkb3RuZXRpZnkucmVhY3Qucm91dGVyLmluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgIGRvdG5ldGlmeS5yZWFjdC5yb3V0ZXIuJGluaXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAvLyBCdWlsZCB0aGUgYWJzb2x1dGUgcm9vdCBwYXRoLlxuICAgICAgICAgICAgICAgICAgdm0uJHJvdXRlci5pbml0Um9vdCgpO1xuXG4gICAgICAgICAgICAgICAgICAkLmVhY2godGVtcGxhdGVzLCBmdW5jdGlvbiAoaWR4LCB0ZW1wbGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdXJsIHBhdHRlcm4gaXNuJ3QgZ2l2ZW4sIGNvbnNpZGVyIElkIGFzIHRoZSBwYXR0ZXJuLlxuICAgICAgICAgICAgICAgICAgICAgdmFyIHVybFBhdHRlcm4gPSB0ZW1wbGF0ZS5VcmxQYXR0ZXJuICE9IG51bGwgPyB0ZW1wbGF0ZS5VcmxQYXR0ZXJuIDogdGVtcGxhdGUuSWQ7XG4gICAgICAgICAgICAgICAgICAgICB1cmxQYXR0ZXJuID0gdXJsUGF0dGVybiAhPSBcIlwiID8gdXJsUGF0dGVybiA6IFwiL1wiO1xuICAgICAgICAgICAgICAgICAgICAgdmFyIG1hcFVybCA9IHZtLiRyb3V0ZXIudG9VcmwodXJsUGF0dGVybik7XG5cbiAgICAgICAgICAgICAgICAgICAgIGlmIChkb3RuZXRpZnkuZGVidWcpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJvdXRlcj4gbWFwIFwiICsgbWFwVXJsICsgXCIgdG8gdGVtcGxhdGUgaWQ9XCIgKyB0ZW1wbGF0ZS5JZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgIGRvdG5ldGlmeS5yZWFjdC5yb3V0ZXIubWFwVG8obWFwVXJsLCBmdW5jdGlvbiAoaVBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG90bmV0aWZ5LnJlYWN0LnJvdXRlci51cmxQYXRoID0gXCJcIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29uc3RydWN0IHRoZSBwYXRoIGZyb20gdGhlIHRlbXBsYXRlIHBhdHRlcm4gYW5kIHRoZSBwYXJhbXMgcGFzc2VkIGJ5IFBhdGhKUy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXRoID0gdXJsUGF0dGVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHBhcmFtIGluIGlQYXJhbXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoID0gcGF0aC5yZXBsYWNlKFwiOlwiICsgcGFyYW0sIGlQYXJhbXNbcGFyYW1dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcKFxcLzooW14pXSspXFwpL2csIFwiXCIpLnJlcGxhY2UoL1xcKHxcXCkvZywgXCJcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLiRyb3V0ZXIucm91dGVUbyhwYXRoLCB0ZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAvLyBSb3V0ZSBpbml0aWFsIFVSTC5cbiAgICAgICAgICAgICAgICAgIHZhciBhY3RpdmVVcmwgPSB2bS4kcm91dGVyLnRvVXJsKHN0YXRlLlJvdXRpbmdTdGF0ZS5BY3RpdmUpO1xuICAgICAgICAgICAgICAgICAgaWYgKGRvdG5ldGlmeS5yZWFjdC5yb3V0ZXIudXJsUGF0aCA9PSBcIlwiKVxuICAgICAgICAgICAgICAgICAgICAgZG90bmV0aWZ5LnJlYWN0LnJvdXRlci51cmxQYXRoID0gYWN0aXZlVXJsO1xuICAgICAgICAgICAgICAgICAgaWYgKCF2bS4kcm91dGVyLnJvdXRlVXJsKCkpXG4gICAgICAgICAgICAgICAgICAgICAvLyBJZiByb3V0aW5nIGVuZHMgaW5jb21wbGV0ZSwgcmFpc2Ugcm91dGVkIGV2ZW50IGFueXdheS5cbiAgICAgICAgICAgICAgICAgICAgIHZtLiRyb3V0ZXIucmFpc2VSb3V0ZWRFdmVudCh0cnVlKTtcbiAgICAgICAgICAgICAgIH0uYmluZChpU2NvcGUpLFxuXG4gICAgICAgICAgICAgICAvLyBXaGV0aGVyIGEgcm91dGUgaXMgYWN0aXZlLlxuICAgICAgICAgICAgICAgaXNBY3RpdmU6IGZ1bmN0aW9uIChpUm91dGUpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuU3RhdGUoKTtcbiAgICAgICAgICAgICAgICAgIGlmIChpUm91dGUgIT0gbnVsbCAmJiBpUm91dGUuaGFzT3duUHJvcGVydHkoXCJQYXRoXCIpKVxuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHV0aWxzLmVxdWFsKGlSb3V0ZS5QYXRoLCBzdGF0ZS5Sb3V0aW5nU3RhdGUuQWN0aXZlKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgIH0uYmluZChpU2NvcGUpLFxuXG4gICAgICAgICAgICAgICAvLyBMb2FkcyBhIHZpZXcgaW50byBhIHRhcmdldCBlbGVtZW50LlxuICAgICAgICAgICAgICAgbG9hZFZpZXc6IGZ1bmN0aW9uIChpVGFyZ2V0U2VsZWN0b3IsIGlWaWV3VXJsLCBpSnNNb2R1bGVVcmwsIGlWbUFyZywgaUNhbGxiYWNrRm4pIHtcbiAgICAgICAgICAgICAgICAgIHZhciB2bSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSB2bS5TdGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgdmFyIHJlYWN0UHJvcHM7XG5cbiAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSB2aWV3IG1vZGVsIHN1cHBvcnRzIHJvdXRpbmcsIGFkZCB0aGUgcm9vdCBwYXRoIHRvIHRoZSB2aWV3LCB0byBiZSB1c2VkXG4gICAgICAgICAgICAgICAgICAvLyB0byBidWlsZCB0aGUgYWJzb2x1dGUgcm91dGUgcGF0aCwgYW5kIHZpZXcgbW9kZWwgYXJndW1lbnQgaWYgcHJvdmlkZWQuXG4gICAgICAgICAgICAgICAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoXCJSb3V0aW5nU3RhdGVcIikpIHtcblxuICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlLlJvdXRpbmdTdGF0ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcInJvdXRlcj4gdGhlIFJvdXRpbmdTdGF0ZSBwcm9wIG9mICdcIiArIHZtLiR2bUlkICsgXCInIHdhcyBub3QgaW5pdGlhbGl6ZWQuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICB2YXIgcm9vdCA9IHZtLiRjb21wb25lbnQucHJvcHMudm1Sb290O1xuICAgICAgICAgICAgICAgICAgICAgcm9vdCA9IHJvb3QgIT0gbnVsbCA/IFwiL1wiICsgdXRpbHMudHJpbShzdGF0ZS5Sb3V0aW5nU3RhdGUuUm9vdCkgKyBcIi9cIiArIHV0aWxzLnRyaW0ocm9vdCkgOiBzdGF0ZS5Sb3V0aW5nU3RhdGUuUm9vdDtcbiAgICAgICAgICAgICAgICAgICAgIHJlYWN0UHJvcHMgPSB7IHZtUm9vdDogcm9vdCwgdm1Bcmc6IGlWbUFyZyB9O1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAvLyBQcm92aWRlIHRoZSBvcHBvcnR1bml0eSB0byBvdmVycmlkZSB0aGUgVVJMLlxuICAgICAgICAgICAgICAgICAgaVZpZXdVcmwgPSBkb3RuZXRpZnkucmVhY3Qucm91dGVyLm92ZXJyaWRlVXJsKGlWaWV3VXJsLCBpVGFyZ2V0U2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgICAgaUpzTW9kdWxlVXJsID0gZG90bmV0aWZ5LnJlYWN0LnJvdXRlci5vdmVycmlkZVVybChpSnNNb2R1bGVVcmwsIGlUYXJnZXRTZWxlY3Rvcik7XG5cbiAgICAgICAgICAgICAgICAgIGlmICh1dGlscy5lbmRzV2l0aChpVmlld1VybCwgXCJodG1sXCIpKVxuICAgICAgICAgICAgICAgICAgICAgdm0uJGxvYWRIdG1sVmlldyhpVGFyZ2V0U2VsZWN0b3IsIGlWaWV3VXJsLCBpSnNNb2R1bGVVcmwsIGlWbUFyZywgaUNhbGxiYWNrRm4pO1xuICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgdm0uJGxvYWRSZWFjdFZpZXcoaVRhcmdldFNlbGVjdG9yLCBpVmlld1VybCwgaUpzTW9kdWxlVXJsLCBpVm1BcmcsIHJlYWN0UHJvcHMsIGlDYWxsYmFja0ZuKTtcblxuICAgICAgICAgICAgICAgfS5iaW5kKGlTY29wZSksXG5cbiAgICAgICAgICAgICAgIC8vIFJvdXRlcyB0byBhIHBhdGguXG4gICAgICAgICAgICAgICBtYW51YWxSb3V0ZVRvOiBmdW5jdGlvbiAoaVBhdGgsIGlUYXJnZXQsIGlWaWV3VXJsLCBpSlNNb2R1bGVVcmwpIHtcbiAgICAgICAgICAgICAgICAgIHZhciB0ZW1wbGF0ZSA9IHsgSWQ6IFwibWFudWFsXCIsIFRhcmdldDogaVRhcmdldCwgVmlld1VybDogaVZpZXdVcmwsIEpTTW9kdWxlVXJsOiBpSlNNb2R1bGVVcmwgfTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5yb3V0ZVRvKGlQYXRoLCB0ZW1wbGF0ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICB9LmJpbmQoaVNjb3BlKSxcblxuICAgICAgICAgICAgICAgLy8gUmFpc2UgZXZlbnQgaW5kaWNhdGluZyB0aGUgcm91dGluZyBwcm9jZXNzIGhhcyBlbmRlZC5cbiAgICAgICAgICAgICAgIHJhaXNlUm91dGVkRXZlbnQ6IGZ1bmN0aW9uIChmb3JjZSkge1xuICAgICAgICAgICAgICAgICAgaWYgKGRvdG5ldGlmeS5yZWFjdC5yb3V0ZXIudXJsUGF0aCA9PSBcIlwiIHx8IGZvcmNlID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgIGlmIChkb3RuZXRpZnkuZGVidWcpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJvdXRlcj4gcm91dGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgdXRpbHMuZGlzcGF0Y2hFdmVudChcImRvdG5ldGlmeS5yb3V0ZWRcIik7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICB9LmJpbmQoaVNjb3BlKSxcblxuICAgICAgICAgICAgICAgLy8gUm91dGVzIHRvIGEgcGF0aC5cbiAgICAgICAgICAgICAgIHJvdXRlVG86IGZ1bmN0aW9uIChpUGF0aCwgaVRlbXBsYXRlLCBpRGlzYWJsZUV2ZW50LCBpQ2FsbGJhY2tGbikge1xuICAgICAgICAgICAgICAgICAgdmFyIHZtID0gdGhpcztcbiAgICAgICAgICAgICAgICAgIHZhciBzdGF0ZSA9IHZtLlN0YXRlKCk7XG5cbiAgICAgICAgICAgICAgICAgIGlmIChkb3RuZXRpZnkuZGVidWcpXG4gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJvdXRlcj4gcm91dGUgJ1wiICsgaVBhdGggKyBcIicgdG8gdGVtcGxhdGUgaWQ9XCIgKyBpVGVtcGxhdGUuSWQpO1xuXG4gICAgICAgICAgICAgICAgICAvLyBXZSBjYW4gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHZpZXcgaGFzIGFscmVhZHkgYmVlbiBsb2FkZWQgYnkgbWF0Y2hpbmcgdGhlICdSb3V0aW5nU3RhdGUuT3JpZ2luJyBhcmd1bWVudFxuICAgICAgICAgICAgICAgICAgLy8gb24gdGhlIGV4aXN0aW5nIHZpZXcgbW9kZWwgaW5zaWRlIHRoYXQgdGFyZ2V0IHNlbGVjdG9yIHdpdGggdGhlIHBhdGguXG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciB2bUlkIGluIGRvdG5ldGlmeS5yZWFjdC52aWV3TW9kZWxzKSB7XG4gICAgICAgICAgICAgICAgICAgICB2YXIgdm1PdGhlciA9IGRvdG5ldGlmeS5yZWFjdC52aWV3TW9kZWxzW3ZtSWRdO1xuICAgICAgICAgICAgICAgICAgICAgdmFyIHZtQXJnID0gdm1PdGhlci4kY29tcG9uZW50LnByb3BzW1widm1BcmdcIl07XG4gICAgICAgICAgICAgICAgICAgICBpZiAodm1BcmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2bUFyZ1tcIlJvdXRpbmdTdGF0ZS5PcmlnaW5cIl0gPT09IFwic3RyaW5nXCIgJiYgdXRpbHMuZXF1YWwodm1BcmdbXCJSb3V0aW5nU3RhdGUuT3JpZ2luXCJdLCBpUGF0aCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQgZW50ZXIgaW50ZXJjZXB0aW9uLlxuICAgICAgICAgICAgICAgICAgaWYgKGlEaXNhYmxlRXZlbnQgIT0gdHJ1ZSAmJiB2bS5oYXNPd25Qcm9wZXJ0eShcIm9uUm91dGVFbnRlclwiKSlcbiAgICAgICAgICAgICAgICAgICAgIGlmICh2bS5vblJvdXRlRW50ZXIoaVBhdGgsIGlUZW1wbGF0ZSkgPT0gZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSByb3V0ZSBoYXMgdmFsaWQgdGFyZ2V0LlxuICAgICAgICAgICAgICAgICAgaWYgKGlUZW1wbGF0ZS5UYXJnZXQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJyb3V0ZXI+IHRoZSBUYXJnZXQgZm9yIHRlbXBsYXRlICdcIiArIGlUZW1wbGF0ZS5JZCArIFwiJyB3YXMgbm90IHNldC4gIFVzZSB2bS5vblJvdXRlRW50ZXIoKSB0byBzZXQgdGhlIHRhcmdldC5cIik7XG4gICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIC8vIElmIHRhcmdldCBET00gZWxlbWVudCBpc24ndCBmb3VuZCwgcmVkaXJlY3QgVVJMIHRvIHRoZSBwYXRoLlxuICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlUZW1wbGF0ZS5UYXJnZXQpID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgIGlmIChkb3RuZXRpZnkuZGVidWcpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJvdXRlcj4gdGFyZ2V0ICdcIiArIGlUZW1wbGF0ZS5UYXJnZXQgKyBcIicgbm90IGZvdW5kIGluIERPTSwgdXNlIHJlZGlyZWN0IGluc3RlYWRcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkb3RuZXRpZnkucmVhY3Qucm91dGVyLnJlZGlyZWN0KHZtLiRyb3V0ZXIudG9VcmwoaVBhdGgpKTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgLy8gTG9hZCB0aGUgdmlldyBhc3NvY2lhdGVkIHdpdGggdGhlIHJvdXRlIGFzeW5jaHJvbm91c2x5LlxuICAgICAgICAgICAgICAgICAgdmFyIHZpZXcgPSBpVGVtcGxhdGUuVmlld1VybCA/IGlUZW1wbGF0ZS5WaWV3VXJsIDogaVRlbXBsYXRlLklkO1xuICAgICAgICAgICAgICAgICAgdm0uJHJvdXRlci5sb2FkVmlldyhcIiNcIiArIGlUZW1wbGF0ZS5UYXJnZXQsIHZpZXcsIGlUZW1wbGF0ZS5KU01vZHVsZVVybCwgeyBcIlJvdXRpbmdTdGF0ZS5PcmlnaW5cIjogaVBhdGggfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgLy8gSWYgbG9hZCBpcyBzdWNjZXNzZnVsLCB1cGRhdGUgdGhlIGFjdGl2ZSByb3V0ZS5cbiAgICAgICAgICAgICAgICAgICAgIHN0YXRlLlJvdXRpbmdTdGF0ZS5BY3RpdmUgPSBpUGF0aDtcbiAgICAgICAgICAgICAgICAgICAgIHZtLiRkaXNwYXRjaCh7IFwiUm91dGluZ1N0YXRlLkFjdGl2ZVwiOiBpUGF0aCB9KTtcbiAgICAgICAgICAgICAgICAgICAgIHZtLlN0YXRlKHsgXCJSb3V0aW5nU3RhdGUuQWN0aXZlXCI6IGlQYXRoIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAvLyBTdXBwb3J0IGV4aXQgaW50ZXJjZXB0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgaWYgKGlEaXNhYmxlRXZlbnQgIT0gdHJ1ZSAmJiB2bS5oYXNPd25Qcm9wZXJ0eShcIm9uUm91dGVFeGl0XCIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgdm0ub25Sb3V0ZUV4aXQoaVBhdGgsIGlUZW1wbGF0ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaUNhbGxiYWNrRm4gPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGlDYWxsYmFja0ZuLmNhbGwodm0pO1xuICAgICAgICAgICAgICAgICAgfS5iaW5kKHZtKSk7XG4gICAgICAgICAgICAgICB9LmJpbmQoaVNjb3BlKSxcblxuICAgICAgICAgICAgICAgLy8gUm91dGVzIHRoZSBVUkwgaWYgdGhlIHZpZXcgbW9kZWwgaW1wbGVtZW50cyBJUm91dGFibGUuXG4gICAgICAgICAgICAgICAvLyBSZXR1cm5zIHRydWUgaWYgdGhlIHZpZXcgbW9kZWwgaGFuZGxlcyB0aGUgcm91dGluZy5cbiAgICAgICAgICAgICAgIHJvdXRlVXJsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgdmFyIHN0YXRlID0gdm0uU3RhdGUoKTtcbiAgICAgICAgICAgICAgICAgIGlmICghc3RhdGUuaGFzT3duUHJvcGVydHkoXCJSb3V0aW5nU3RhdGVcIikpXG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgIHZhciByb290ID0gc3RhdGUuUm91dGluZ1N0YXRlLlJvb3Q7XG4gICAgICAgICAgICAgICAgICBpZiAocm9vdCA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIFVSTCBwYXRoIHRvIHJvdXRlLlxuICAgICAgICAgICAgICAgICAgdmFyIHVybFBhdGggPSBkb3RuZXRpZnkucmVhY3Qucm91dGVyLnVybFBhdGg7XG5cbiAgICAgICAgICAgICAgICAgIGlmIChkb3RuZXRpZnkuZGVidWcpXG4gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJvdXRlcj4gcm91dGluZyBcIiArIHVybFBhdGgpO1xuXG4gICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgVVJMIHBhdGggbWF0Y2hlcyB0aGUgcm9vdCBwYXRoIG9mIHRoaXMgdmlldywgdXNlIHRoZSB0ZW1wbGF0ZSB3aXRoIGEgYmxhbmsgVVJMIHBhdHRlcm4gaWYgcHJvdmlkZWQuXG4gICAgICAgICAgICAgICAgICBpZiAodXRpbHMuZXF1YWwodXJsUGF0aCwgcm9vdCkgfHwgdXRpbHMuZXF1YWwodXJsUGF0aCwgcm9vdCArIFwiL1wiKSB8fCB1cmxQYXRoID09PSBcIi9cIikge1xuICAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gJC5ncmVwKHN0YXRlLlJvdXRpbmdTdGF0ZS5UZW1wbGF0ZXMsIGZ1bmN0aW9uIChpVGVtcGxhdGUpIHsgcmV0dXJuIGlUZW1wbGF0ZS5VcmxQYXR0ZXJuID09PSBcIlwiIH0pO1xuICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLiRyb3V0ZXIucm91dGVUbyhcIlwiLCBtYXRjaFswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RuZXRpZnkucmVhY3Qucm91dGVyLnVybFBhdGggPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgdm0uJHJvdXRlci5yYWlzZVJvdXRlZEV2ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIFVSTCBwYXRoIHN0YXJ0cyB3aXRoIHRoZSByb290IHBhdGggb2YgdGhpcyB2aWV3LCBsb29rIGF0IHRoZSBuZXh0IHBhdGggYW5kIHRyeSB0byBtYXRjaCBpdCB3aXRoIHRoZVxuICAgICAgICAgICAgICAgICAgLy8gYW5jaG9yIHRhZ3MgaW4gdGhpcyB2aWV3IHRoYXQgYXJlIGJvdW5kIHdpdGggdGhlIHZtUm91dGUgYmluZGluZyB0eXBlLiAgSWYgdGhlcmUgaXMgbWF0Y2gsIHJvdXRlIHRvIHRoYXQgcGF0aC5cbiAgICAgICAgICAgICAgICAgIHJvb3QgPSByb290ICsgXCIvXCI7XG4gICAgICAgICAgICAgICAgICBpZiAodXRpbHMuc3RhcnRzV2l0aCh1cmxQYXRoLCByb290KSkge1xuXG4gICAgICAgICAgICAgICAgICAgICB2YXIgcm91dGVFbGVtID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaCA9ICQuZ3JlcCh2bS4kcm91dGVyLnJvdXRlcywgZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1dGlscy5zdGFydHNXaXRoKHVybFBhdGggKyBcIi9cIiwgZWxlbS5VcmwgKyBcIi9cIilcbiAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIG1vcmUgdGhhbiBvbmUgbWF0Y2gsIGZpbmQgdGhlIGJlc3QgbWF0Y2guXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdGNoLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdXRlRWxlbSA9PSBudWxsIHx8IHJvdXRlRWxlbS5VcmwubGVuZ3RoIDwgJChtYXRjaFtpXSkuZ2V0KDApLlVybC5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUVsZW0gPSBtYXRjaFtpXTtcbiAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdXRlRWxlbSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGF0aCA9IHJvdXRlRWxlbS5QYXRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBsYXRlID0gdm0uJHJvdXRlci5oYXNPd25Qcm9wZXJ0eShcInBhdGhUb1JvdXRlXCIpICYmIHZtLiRyb3V0ZXIucGF0aFRvUm91dGUuaGFzT3duUHJvcGVydHkocGF0aCkgPyB2bS4kcm91dGVyLnBhdGhUb1JvdXRlW3BhdGhdLiR0ZW1wbGF0ZSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGVtcGxhdGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIFVSTCBwYXRoIGlzIGNvbXBsZXRlbHkgcm91dGVkLCBjbGVhciBpdC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1dGlscy5lcXVhbChkb3RuZXRpZnkucmVhY3Qucm91dGVyLnVybFBhdGgsIHZtLiRyb3V0ZXIudG9VcmwocGF0aCkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG90bmV0aWZ5LnJlYWN0LnJvdXRlci51cmxQYXRoID0gXCJcIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgcm91dGUncyBub3QgYWxyZWFkeSBhY3RpdmUsIHJvdXRlIHRvIGl0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF1dGlscy5lcXVhbChzdGF0ZS5Sb3V0aW5nU3RhdGUuQWN0aXZlLCBwYXRoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLiRyb3V0ZXIucm91dGVUbyhwYXRoLCB0ZW1wbGF0ZSwgZmFsc2UsIGZ1bmN0aW9uICgpIHsgdm0uJHJvdXRlci5yYWlzZVJvdXRlZEV2ZW50KCk7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uJHJvdXRlci5yYWlzZVJvdXRlZEV2ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRvdG5ldGlmeS5yZWFjdC5yb3V0ZXIubWF0Y2godXJsUGF0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIG5vIHZtUm91dGUgYmluZGluZyBtYXRjaGVzLCB0cnkgdG8gbWF0Y2ggd2l0aCBhbnkgdGVtcGxhdGUncyBVUkwgcGF0dGVybi5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdG5ldGlmeS5yZWFjdC5yb3V0ZXIudXJsUGF0aCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB2bS4kcm91dGVyLnJhaXNlUm91dGVkRXZlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgfS5iaW5kKGlTY29wZSksXG5cbiAgICAgICAgICAgICAgIC8vIEJ1aWxkcyBhbiBhYnNvbHV0ZSBVUkwgZnJvbSBhIHBhdGguXG4gICAgICAgICAgICAgICB0b1VybDogZnVuY3Rpb24gKGlQYXRoKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLlN0YXRlKCk7XG4gICAgICAgICAgICAgICAgICB2YXIgcGF0aCA9IHV0aWxzLnRyaW0oaVBhdGgpO1xuICAgICAgICAgICAgICAgICAgaWYgKHBhdGguY2hhckF0KDApICE9ICcoJyAmJiBwYXRoICE9IFwiXCIpXG4gICAgICAgICAgICAgICAgICAgICBwYXRoID0gXCIvXCIgKyBwYXRoO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlLmhhc093blByb3BlcnR5KFwiUm91dGluZ1N0YXRlXCIpID8gc3RhdGUuUm91dGluZ1N0YXRlLlJvb3QgKyBwYXRoIDogaVBhdGg7XG4gICAgICAgICAgICAgICB9LmJpbmQoaVNjb3BlKSxcblxuXG4gICAgICAgICAgICB9XG4gICAgICAgICB9KShpVk0pO1xuXG4gICAgICAgICBpVk0uJHJvdXRlID0gZnVuY3Rpb24gKGlSb3V0ZSwgaVRhcmdldCkge1xuICAgICAgICAgICAgdmFyIHZtID0gdGhpcztcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IHZtLlN0YXRlKCk7XG5cbiAgICAgICAgICAgIC8vIE5vIHJvdXRlIHRvIHByb2Nlc3MuIFJldHVybiBzaWxlbnRseS5cbiAgICAgICAgICAgIGlmIChpUm91dGUgPT0gbnVsbClcbiAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgaWYgKCFpUm91dGUuaGFzT3duUHJvcGVydHkoXCJQYXRoXCIpIHx8ICFpUm91dGUuaGFzT3duUHJvcGVydHkoXCJUZW1wbGF0ZUlkXCIpKVxuICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGEgdmFsaWQgcm91dGVcIik7XG5cbiAgICAgICAgICAgIC8vIEJ1aWxkIHRoZSBhYnNvbHV0ZSByb290IHBhdGguXG4gICAgICAgICAgICB2bS4kcm91dGVyLmluaXRSb290KCk7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSByb3V0ZSBwYXRoIGlzIG5vdCBkZWZpbmVkLCB1c2UgdGhlIFVSTCBwYXR0ZXJuIGZyb20gdGhlIGFzc29jaWF0ZWQgdGVtcGxhdGUuXG4gICAgICAgICAgICAvLyBUaGlzIGlzIHNvIHRoYXQgd2UgZG9uJ3Qgc2VuZCB0aGUgc2FtZSBkYXRhIHR3aWNlIGlmIGJvdGggYXJlIGVxdWFsLlxuICAgICAgICAgICAgdmFyIHBhdGggPSBpUm91dGUuUGF0aDtcbiAgICAgICAgICAgIHZhciB0ZW1wbGF0ZSA9IG51bGw7XG4gICAgICAgICAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoXCJSb3V0aW5nU3RhdGVcIikgJiYgc3RhdGUuUm91dGluZ1N0YXRlLlRlbXBsYXRlcyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSAkLmdyZXAoc3RhdGUuUm91dGluZ1N0YXRlLlRlbXBsYXRlcywgZnVuY3Rpb24gKGlUZW1wbGF0ZSkgeyByZXR1cm4gaVRlbXBsYXRlLklkID09IGlSb3V0ZS5UZW1wbGF0ZUlkIH0pO1xuICAgICAgICAgICAgICAgaWYgKG1hdGNoLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgIHRlbXBsYXRlID0gbWF0Y2hbMF07XG5cbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaVRhcmdldCA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlLlRhcmdldCA9IGlUYXJnZXQ7XG5cbiAgICAgICAgICAgICAgICAgIGlmIChwYXRoID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgIHBhdGggPSB0ZW1wbGF0ZS5VcmxQYXR0ZXJuICE9IG51bGwgPyB0ZW1wbGF0ZS5VcmxQYXR0ZXJuIDogdGVtcGxhdGUuSWQ7XG4gICAgICAgICAgICAgICAgICAgICBpUm91dGUuUGF0aCA9IHBhdGg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBlbHNlIGlmIChpUm91dGUuUmVkaXJlY3RSb290ID09IG51bGwpXG4gICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ2bVJvdXRlIGNhbm5vdCBmaW5kIHJvdXRlIHRlbXBsYXRlICdcIiArIGlSb3V0ZS5UZW1wbGF0ZUlkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgdGhlIHBhdGggaGFzIGEgcmVkaXJlY3Qgcm9vdCwgdGhlIHBhdGggZG9lc24ndCBiZWxvbmcgdG8gdGhlIGN1cnJlbnQgcm9vdCBhbmQgbmVlZHMgdG8gYmVcbiAgICAgICAgICAgIC8vIHJlZGlyZWN0ZWQgdG8gYSBkaWZmZXJlbnQgb25lLiAgU2V0IHRoZSBhYnNvbHV0ZSBwYXRoIHRvIHRoZSBIUkVGIGF0dHJpYnV0ZSwgYW5kIHByZXZlbnQgdGhlXG4gICAgICAgICAgICAvLyBkZWZhdWx0IGJlaGF2aW9yIG9mIHRoZSBhbmNob3IgY2xpY2sgZXZlbnQgYW5kIGluc3RlYWQgZG8gcHVzaCB0byBIVE1MNSBoaXN0b3J5IHN0YXRlLCB3aGljaCBcbiAgICAgICAgICAgIC8vIHdvdWxkIGF0dGVtcHQgdG8gcmVzb2x2ZSB0aGUgcGF0aCBmaXJzdCBiZWZvcmUgcmVzb3J0aW5nIHRvIGhhcmQgYnJvd3NlciByZWRpcmVjdC5cbiAgICAgICAgICAgIGlmIChpUm91dGUuUmVkaXJlY3RSb290ICE9IG51bGwpIHtcblxuICAgICAgICAgICAgICAgLy8gQ29tYmluZSB0aGUgcmVkaXJlY3Qgcm9vdCB3aXRoIHRoZSB2aWV3IG1vZGVsJ3Mgcm9vdC5cbiAgICAgICAgICAgICAgIHZhciByZWRpcmVjdFJvb3QgPSBpUm91dGUuUmVkaXJlY3RSb290O1xuICAgICAgICAgICAgICAgaWYgKHJlZGlyZWN0Um9vdC5jaGFyQXQoMCkgPT0gJy8nKVxuICAgICAgICAgICAgICAgICAgcmVkaXJlY3RSb290ID0gcmVkaXJlY3RSb290LnN1YnN0cigwLCByZWRpcmVjdFJvb3QubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICB2YXIgcmVkaXJlY3RSb290UGF0aCA9IGlSb3V0ZS5SZWRpcmVjdFJvb3Quc3BsaXQoXCIvXCIpO1xuXG4gICAgICAgICAgICAgICB2YXIgdXJsUmVkaXJlY3QgPSBcIlwiO1xuICAgICAgICAgICAgICAgdmFyIGFic1Jvb3QgPSB2bS4kY29tcG9uZW50LnByb3BzW1widm1Sb290XCJdO1xuICAgICAgICAgICAgICAgaWYgKGFic1Jvb3QgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgdmFyIGFic1Jvb3RQYXRoID0gYWJzUm9vdC5zcGxpdChcIi9cIik7XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFic1Jvb3RQYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICBpZiAoYWJzUm9vdFBhdGhbaV0gIT0gXCJcIiAmJiBhYnNSb290UGF0aFtpXSA9PSByZWRpcmVjdFJvb3RQYXRoWzBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICB1cmxSZWRpcmVjdCArPSBhYnNSb290UGF0aFtpXSArIFwiL1wiO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgdXJsUmVkaXJlY3QgKz0gcmVkaXJlY3RSb290ICsgXCIvXCIgKyBwYXRoO1xuICAgICAgICAgICAgICAgdm0uJHJvdXRlci5yb3V0ZXMucHVzaCh7IFBhdGg6IHBhdGgsIFVybDogdXJsUmVkaXJlY3QgfSk7XG4gICAgICAgICAgICAgICByZXR1cm4gdXJsUmVkaXJlY3Q7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEZvciBxdWljayBsb29rdXAsIHNhdmUgdGhlIG1hcHBpbmcgYmV0d2VlbiB0aGUgcGF0aCB0byB0aGUgcm91dGUgaW5zaWRlIHRoZSB2aWV3IG1vZGVsLlxuICAgICAgICAgICAgaWYgKHRlbXBsYXRlID09IG51bGwpXG4gICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ2bVJvdXRlIGNhbm5vdCBmaW5kIGFueSByb3V0ZSB0ZW1wbGF0ZVwiKTtcblxuICAgICAgICAgICAgaVJvdXRlLiR0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgICAgICAgdm0uJHJvdXRlci5wYXRoVG9Sb3V0ZSA9IHZtLiRyb3V0ZXIucGF0aFRvUm91dGUgfHwge307XG4gICAgICAgICAgICB2bS4kcm91dGVyLnBhdGhUb1JvdXRlW3BhdGhdID0gaVJvdXRlO1xuXG4gICAgICAgICAgICAvLyBTZXQgdGhlIGFic29sdXRlIHBhdGggdG8gdGhlIEhSRUYgYXR0cmlidXRlLCBhbmQgcHJldmVudCB0aGUgZGVmYXVsdCBiZWhhdmlvciBvZiBcbiAgICAgICAgICAgIC8vIHRoZSBhbmNob3IgY2xpY2sgZXZlbnQgYW5kIGluc3RlYWQgZG8gcHVzaCB0byBIVE1MNSBoaXN0b3J5IHN0YXRlLlxuICAgICAgICAgICAgdmFyIHVybCA9IHZtLiRyb3V0ZXIudG9VcmwocGF0aCk7XG4gICAgICAgICAgICB2bS4kcm91dGVyLnJvdXRlcy5wdXNoKHsgUGF0aDogcGF0aCwgVXJsOiB1cmwgfSk7XG4gICAgICAgICAgICByZXR1cm4gdXJsO1xuXG4gICAgICAgICB9LmJpbmQoaVZNKTtcblxuICAgICAgICAgaVZNLiRoYW5kbGVSb3V0ZSA9IGZ1bmN0aW9uIChpRXZlbnQpIHtcbiAgICAgICAgICAgIGlFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIHBhdGggPSBpRXZlbnQuY3VycmVudFRhcmdldC5wYXRobmFtZTtcbiAgICAgICAgICAgIGlmIChwYXRoID09IG51bGwgfHwgcGF0aCA9PSBcIlwiKVxuICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGV2ZW50IHBhc3NlZCB0byAkaGFuZGxlUm91dGUgaGFzIG5vIHBhdGggbmFtZS5cIik7XG5cbiAgICAgICAgICAgIGRvdG5ldGlmeS5yZWFjdC5yb3V0ZXIucHVzaFN0YXRlKHt9LCBcIlwiLCBwYXRoKTtcbiAgICAgICAgIH0uYmluZChpVk0pO1xuICAgICAgfVxuXG4gICAgICAvLyA8Um91dGVMaW5rPiBpcyBhIGhlbHBlciBjb21wb25lbnQgdG8gc2V0IGFuY2hvciB0YWdzIGZvciByb3V0ZXMuXG4gICAgICBkb3RuZXRpZnkucmVhY3Qucm91dGVyLlJvdXRlTGluayA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICAgaWYgKHByb3BzLnZtID09IG51bGwpXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUm91dGVMaW5rIHJlcXVpcmVzICd2bScgcHJvcGVydHkuXCIpO1xuXG4gICAgICAgICByZXR1cm4gX1JlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBcImFcIiwge1xuICAgICAgICAgICAgICAgc3R5bGU6IHByb3BzLnN0eWxlLFxuICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICBocmVmOiBwcm9wcy5yb3V0ZSAhPSBudWxsID8gcHJvcHMudm0uJHJvdXRlKHByb3BzLnJvdXRlKSA6IFwiXCIsXG4gICAgICAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICBpZiAocHJvcHMucm91dGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJvdXRlTGluayByZXF1aXJlcyAncm91dGUnIHByb3BlcnR5LlwiKTtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcHJvcHMub25DbGljayA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICAgcHJvcHMub25DbGljaygpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzLnZtLiRoYW5kbGVSb3V0ZShldmVudCk7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJvcHMuY2hpbGRyZW5cbiAgICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIDxSb3V0ZVRhcmdldD4gaXMgYSBoZWxwZXIgY29tcG9uZW50IHRvIHByb3ZpZGUgRE9NIHRhcmdldCBmb3Igcm91dGVzLCBhbmQgaXMgZXNzZW50aWFsIGZvciBzZXJ2ZXItc2lkZSByZW5kZXJpbmcuXG4gICAgICBkb3RuZXRpZnkucmVhY3Qucm91dGVyLlJvdXRlVGFyZ2V0ID0gX1JlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICAgICAgIGRpc3BsYXlOYW1lOiBcIlJvdXRlVGFyZ2V0XCIsXG4gICAgICAgICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgICAgIHZhciBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wcm9wcy5pZCk7XG4gICAgICAgICAgICBpZiAoZWxlbSAhPSBudWxsICYmIHdpbmRvdy5zc3IgJiYgIXdpbmRvdy5zc3JbdGhpcy5wcm9wcy5pZF0pIHtcbiAgICAgICAgICAgICAgIHdpbmRvdy5zc3JbdGhpcy5wcm9wcy5pZF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsSHRtbCA9IHsgX19odG1sOiBlbGVtLmlubmVySFRNTCB9O1xuICAgICAgICAgICAgfSBlbHNlIHRoaXMuaW5pdGlhbEh0bWwgPSB7IF9faHRtbDogJycgfTtcbiAgICAgICAgIH0sXG4gICAgICAgICBnZXRET01Ob2RlOiBmdW5jdGlvbiBnZXRET01Ob2RlKCkgeyByZXR1cm4gdGhpcy5lbGVtOyB9LFxuICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgJC5leHRlbmQoeyBpZDogdGhpcy5wcm9wcy5pZCwgcmVmOiBmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIF90aGlzLmVsZW0gPSBlbDsgfSB9LCB0aGlzLnByb3BzLCB7IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB0aGlzLmluaXRpYWxIdG1sIH0pLFxuICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgICAgICAgKTtcbiAgICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBSZWdpc3RlciB0aGUgcGx1Z2luIHRvIGRvdE5ldGlmeS5cbiAgICAgIGRvdG5ldGlmeS5yZWFjdC5wbHVnaW5zW1wicm91dGVyXCJdID0gZG90bmV0aWZ5LnJlYWN0LnJvdXRlcjtcblxuICAgICAgcmV0dXJuIGRvdG5ldGlmeS5yZWFjdC5yb3V0ZXI7XG4gICB9KSlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZG90bmV0aWZ5L2Rpc3QvZG90bmV0aWZ5LXJlYWN0LnJvdXRlci5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMTIxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvanF1ZXJ5L2Rpc3QvanF1ZXJ5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==