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
})({"src/model/customer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Customer = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Customer = /*#__PURE__*/function () {
  function Customer() {
    _classCallCheck(this, Customer);
  }

  _createClass(Customer, [{
    key: "addNew",
    value: function addNew(customer) {
      var customerListContainer = document.querySelector("#customer-list-container");
      var cutomerTemplate = "\n        <div class=\"card\">\n        <div class=\"d-flex align-items-center card-header\" data-toggle=\"collapse\" data-target=\"#".concat(customer.id, "\">\n\n            <div class=\"d-flex align-items-center col mr-5\">\n                <i class=\"fas fa-user-secret client-logo mr-2\"></i>\n                <span class=\"mr-1\">").concat(customer.name, "</span>\n                <span>").concat(customer.lastName, "</span>\n            </div>\n            <div class=\"col mr-5\">").concat(customer.phone, "</div>\n            <button class=\"btn btn-link btn-block text-left w-100px ml-auto text-right pr-0\" type=\"button\">\n                <i class=\"fas fa-angle-down\"></i>\n            </button>\n        </div>\n\n        <div id=\"").concat(customer.id, "\" class=\"collapse\" data-parent=\"#customer-list-container\">\n\n            <div class=\"d-flex mt-2 px-3 mb-4\">\n                <button class=\"btn btn-danger btn-sm ml-auto add-victim-modal-btn\" data-toggle=\"modal\" data-target=\"#victim-register\">Add victim <i class=\"fas fa-user\"></i></button>\n            </div>\n\n        </div>\n        </div>");
      customerListContainer.innerHTML += cutomerTemplate;
    }
  }]);

  return Customer;
}();

exports.Customer = Customer;
},{}],"src/view/customerCreator.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.customerCreator = customerCreator;

var _customer = require("../model/customer");

function customerCreator() {
  var customerName = document.querySelector("#customer-name");
  var customerLastName = document.querySelector("#customer-lastName");
  var customerPhone = document.querySelector("#customer-phone");
  var customerNewBtn = document.querySelector("[data-btn='newCustomerBtn']");
  customerNewBtn.addEventListener("click", function () {
    var customer = {
      id: "c-" + new Date().getTime(),
      name: customerName.value,
      lastName: customerLastName.value,
      phone: customerPhone.value
    };
    var newCustomer = new _customer.Customer();
    newCustomer.addNew(customer);
    customerName.value = "";
    customerLastName.value = "";
    customerPhone.value = "";
  });
}
},{"../model/customer":"src/model/customer.js"}],"src/model/victims.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Victims = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Victims = /*#__PURE__*/function () {
  function Victims() {
    _classCallCheck(this, Victims);
  }

  _createClass(Victims, [{
    key: "addNew",
    value: function addNew(victim, selectedCustomerId) {
      var victimListContainer = document.querySelector("#".concat(selectedCustomerId));
      var victimTemplate = "\n        <div id=\"customer-1-victim_1\" class=\"card-body victim-box my-2 mx-3\">\n        <div class=\"d-flex\">\n            <div class=\"victim-img-box mr-auto\">\n                <img src=\"".concat(victim.img, "\" width=\"100\" height=\"100\" alt=\"\" data-name=\"victim-img\">\n            </div>\n            <div class=\"victim-info-box col ml-3 p-3\">\n                <div class=\"row\">\n                    <div class=\"col-12 pb-3\">\n                        <strong class=\"mr-2\">\n                            <span data-name=\"victim-name\">").concat(victim.name, "</span>\n                            <span data-name=\"victim-lastName\">").concat(victim.lastName, "</span>\n                        </strong>\n                        <span class=\"badge badge-info mr-2\" data-name=\"victim-gender\">").concat(victim.gender, "</span>\n                        <span class=\"badge badge-warning\" data-name=\"victim-age\">").concat(victim.age, "</span>\n                        <button class=\"btn btn-outline-success ml-auto btn-sm victim-mission-completed-btn\">Mission\n                            completed <i class=\"fas fa-check ml-1\"></i></button>\n                    </div>\n                    <div class=\"col-12\">\n                        <div class=\"border-top py-2\" data-name=\"victim-adress\">\n                            <strong>Adres 1:</strong> ").concat(victim.adress, "</div>\n                    </div>\n                </div>\n                </div>\n            </div>\n        </div>");
      victimListContainer.insertAdjacentHTML("afterbegin", victimTemplate);
    }
  }]);

  return Victims;
}();

exports.Victims = Victims;
},{}],"src/view/victimCreator.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.victimCreator = victimCreator;

var _victims = require("../model/victims");

function victimCreator() {
  var victimName = document.querySelector("#victim-name");
  var victimLastName = document.querySelector("#victim-lastName");
  var victimAge = document.querySelector("#victim-age");
  var victimGender = document.querySelector("#victim-gender");
  var victimImg = document.querySelector("#victim-img");
  var victimAdress = document.querySelector("#victim-adress");
  var newVictimBtn = document.querySelector("[data-btn='newVictimBtn']");
  var customerListContainer = document.querySelector("#customer-list-container");
  var selectedCustomerId;
  newVictimBtn.addEventListener("click", function () {
    var victim = {
      id: "v-" + new Date().getTime(),
      name: victimName.value,
      lastName: victimLastName.value,
      age: victimAge.value,
      gender: victimGender.value,
      img: victimImg.value,
      adress: victimAdress.value
    };
    var newVictim = new _victims.Victims();
    newVictim.addNew(victim, selectedCustomerId);
  });
  customerListContainer.addEventListener("click", function (e) {
    var targetElement = e.target;

    if (targetElement.classList.contains("add-victim-modal-btn")) {
      selectedCustomerId = targetElement.parentElement.parentElement.getAttribute("id");
      console.log(selectedCustomerId);
    }
  });
}
},{"../model/victims":"src/model/victims.js"}],"app.js":[function(require,module,exports) {
"use strict";

var _customerCreator = require("./src/view/customerCreator");

var _victimCreator = require("./src/view/victimCreator");

/**
 * app HOLLYWOOD "Kiralik Katil Ismet"
 * 
 *  Akis:
 *  - katil ismet musterilerini ve kurbanlarini kayit edecek
 *  - Kurbanlarini daha iyi ve hizli takip edebilmesi icin her kisini  birden fazla olan adreslerini de girebilmeli
 *  - 
 * 
 *  ANALIZ:
 * 
 *   html
 *      - sisteme gir                                                                       FORM | LOGIN
 *      - müsterilerinin listesini gör                                                      LISTE
 *      - bu listede bir buton ile form acilmali ve yeni musteri girbilmeli                 + FORM/Client+(button add-victim)
 *      - ayni anda kurban listesi de olusturabilmeli musteriyi ekledikten sonra            + FORM/Victim +(button add-adresse)
 *      - Musteri bilgileri : Data 
 *      - her musteriye tikladiginda kurban edileecek kisileri görür                        html1 (kurbanlar listesi)
 *      - sansli kurbana tikladiginda ise Adreslerini görür                                 html2 (sansli kurban ve bilgilerinin listesi)
 *      - isi bitirmisse veya kisi kazara ölmüs ise bir butona tikla ve solgun gözüksün     is bitti BOUTON
 *          
 *   css + (bootstrap)==> Form ==>data ya bak
 * 
 *   js 
 *    -Model
 *      - login.js (OPS)
 *      - client
 *      - Victims.js
 *      - storage.js
 *      - data 
 *          - musteriler:   ISIM SOYISIM   TELEFON                    class Client
 *          - Kurbanlar:    FOTOGRAF(URL) ISIM SOYISIM YAS CINSIYET   class Victims (extend super kullanilabilirmi ?)
 *              - Adresler: adres1  SOKAK NUMARA SEHIR ULKE,
 *                          adres2  SOKAK NUMARA SEHIR ULKE,
 *                          adres3  SOKAK NUMARA SEHIR ULKE,
 * 
 *      - localStorage                                  class Storage 
 *          - set(){}
 *          - get(){}
 *          - üstünücizen(){} ==>is bitince soluk hale gelecek fonksiyon
 * 
 *      -view
 *          -
 * 
 */
(0, _customerCreator.customerCreator)();
(0, _victimCreator.victimCreator)(); // let data = [];
// data = [{
//     customerId: "",
//     customerName: "",
//     customerLastName: "",
//     customerPhone: "",
//     customerVictims: [{
//         victimId: "",
//         victimImg: "",
//         victimName: "",
//         victimLastname: "",
//         victimAge: "",
//         victimGender: "",
//         victimAdresses: [],
//         victimStatus: false
//     }]
// }]
},{"./src/view/customerCreator":"src/view/customerCreator.js","./src/view/victimCreator":"src/view/victimCreator.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64252" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map