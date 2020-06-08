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
})({"src/view/victimTemplate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.victimTemplate = void 0;
var victimTemplate = "\n<div id=\"__ID__\" data-status=\"__STATUS__\" class=\"card-body position-relative victim-box my-2 mx-3\">\n<button class=\"btn btn-outline-success ml-auto btn-sm victim-mission-completed-btn\">Mission\ncompleted <i class=\"fas fa-check ml-1\"></i></button>\n<button class=\"btn btn outline-danger btn-sm ml-auto victim-remove-btn\"><i class=\"far fa-trash-alt\"></i></button>\n           \n<div class=\"d-flex\">\n    <div class=\"victim-img-box mr-auto\">\n        <img src=\"__IMG__\" width=\"100\" height=\"100\" alt=\"\" data-name=\"victim-img\">\n    </div>\n    <div class=\"victim-info-box col ml-3 p-3\">\n        <div class=\"row\">\n            <div class=\"col-12 pb-3\">\n                <strong class=\"mr-2\">\n                    <span data-name=\"victim-name\">__NAME__</span>\n                    <span data-name=\"victim-lastName\">__LASTNAME__</span>\n                </strong>\n                <span class=\"badge badge-info mr-2\" data-name=\"victim-gender\">__GENDER__</span>\n                <span class=\"badge badge-warning\" data-name=\"victim-age\">__AGE__</span>\n            </div>\n            <div class=\"col-12\">\n               __ADDRESS__\n            </div>\n        </div>\n        </div>\n    </div>\n</div>";
exports.victimTemplate = victimTemplate;
},{}],"src/model/customer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Customer = void 0;

var _victimTemplate = require("../view/victimTemplate");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//Musteri sinifi
var Customer = /*#__PURE__*/function () {
  function Customer() {
    _classCallCheck(this, Customer);
  }

  _createClass(Customer, [{
    key: "addNew",
    value: function addNew(customer) {
      //hatml de listelenecek alan
      var customerListContainer = document.querySelector("#customer-list-container"); // Musteri temlate i 

      var customerTemplate = "\n        <div class=\"card\" data-customerId=\"".concat(customer.id, "\">\n            <button class=\"btn btn outline-danger btn-sm ml-auto customer-remove-btn\"><i class=\"far fa-trash-alt\"></i></button>\n            <div class=\"d-flex align-items-center card-header\" data-toggle=\"collapse\" data-target=\"#").concat(customer.id, "\">\n            <i class=\"fas fa-angle-down\"></i>\n            <div class=\"d-flex align-items-center col mr-5\">\n                    <i class=\"fas fa-user-secret client-logo mr-2\"></i>\n                    <span class=\"mr-1\">").concat(customer.name, "</span>\n                    <span>").concat(customer.lastName, "</span>\n                </div>\n                <div class=\"col mr-5\">").concat(customer.phone, "</div>\n            </div>\n            <div id=\"").concat(customer.id, "\" class=\"collapse\" data-parent=\"#customer-list-container\">\n            ").concat(customer.victims.reduce(function (carry, victim) {
        return carry + _victimTemplate.victimTemplate.replace(/__ID__/, victim.id).replace(/__STATUS__/, victim.missionStatus).replace(/__NAME__/, victim.name).replace(/__LASTNAME__/, victim.lastName).replace(/__AGE__/, victim.age).replace(/__GENDER__/, victim.gender).replace(/__IMG__/, victim.img).replace(/__ADDRESS__/, victim.address.map(function (item) {
          return "<div>".concat(item, "</div>");
        }).join(''));
      }, ''), "\n                <div class=\"d-flex mt-2 px-3 mb-4\">\n                    <button class=\"btn btn-danger btn-sm ml-auto add-victim-modal-btn\" data-toggle=\"modal\" data-target=\"#victim-register\">Add victim <i class=\"fas fa-user\"></i></button>\n                </div>\n            </div>\n        </div>");
      customerListContainer.innerHTML += customerTemplate;
    }
  }]);

  return Customer;
}();

exports.Customer = Customer;
},{"../view/victimTemplate":"src/view/victimTemplate.js"}],"src/model/storage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DbManager = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DbManager = /*#__PURE__*/function () {
  function DbManager() {
    _classCallCheck(this, DbManager);

    this.dbName = "katil";
  }

  _createClass(DbManager, [{
    key: "getDb",
    value: function getDb() {
      var people;

      if (localStorage.getItem(this.dbName) === null) {
        people = [];
        return people;
      } //people degiskenine localstorage da ki data dbName


      people = JSON.parse(localStorage.getItem(this.dbName));
      return people;
    } //localstorage setDb islemi metodu 1 parametre olarak aliyor ve ne gonderecekse 
    //onu belirtimis oluyoruz

  }, {
    key: "setDb",
    value: function setDb(person) {
      //local storage datalarini cekmek icin  people degiskene getDb metodu ataniyor
      var people = this.getDb(); //localstorage dan cektigimiz tum datalara parametre ile gelen data push ediliyor

      people.push(person); // localstorage a setItem ile metodu ile guncel data yeniden gönderiliyor
      // localStorage setItem islemi iki parametre aliyor (key, value) people i 
      //json.sringFy formatinda dbName("Katil") key in karsiligina set ediyor

      this.updateItem(people);
    }
  }, {
    key: "addVictim",
    value: function addVictim(victim, selectedCustomerId) {
      var people = this.getDb();
      var cIndex = people.findIndex(function (item) {
        return item.id === selectedCustomerId;
      });
      people[cIndex].victims.push(victim);
      this.updateItem(people);
    }
  }, {
    key: "updateItem",
    value: function updateItem(data) {
      localStorage.setItem(this.dbName, JSON.stringify(data));
    }
  }, {
    key: "changeVictimStatus",
    value: function changeVictimStatus(selectedCustomerId, selectedVictimId) {
      var people = this.getDb();
      var cIndex = people.findIndex(function (item) {
        return item.id === selectedCustomerId;
      });
      var vIndex = people[cIndex].victims.findIndex(function (item) {
        return item.id === selectedVictimId;
      });
      people[cIndex].victims[vIndex].missionStatus = true;
      this.updateItem(people);
      return people[cIndex].victims[vIndex].missionStatus;
    }
  }, {
    key: "removeCustomer",
    value: function removeCustomer(selectedCustomerId) {
      var people = this.getDb();
      var cIndex = people.findIndex(function (item) {
        return item.id === selectedCustomerId;
      });
      people.splice(people[cIndex], 1);
      this.updateItem(people);
    }
  }, {
    key: "removeVictim",
    value: function removeVictim(selectedCustomerId, selectedVictimId) {
      var people = this.getDb();
      var cIndex = people.findIndex(function (item) {
        return item.id === selectedCustomerId;
      });
      var vIndex = people[cIndex].victims.findIndex(function (item) {
        return item.id === selectedVictimId;
      });
      people[cIndex].victims.splice([vIndex], 1);
      this.updateItem(people);
    }
  }]);

  return DbManager;
}();

exports.DbManager = DbManager;
},{}],"src/model/resetValue.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResetValue = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ResetValue = /*#__PURE__*/function () {
  function ResetValue() {
    _classCallCheck(this, ResetValue);
  }

  _createClass(ResetValue, [{
    key: "reset",
    value: function reset() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      args.forEach(function (item) {
        item.value = "";
      });
    }
  }]);

  return ResetValue;
}();

exports.ResetValue = ResetValue;
},{}],"src/view/eventsCustomer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eventsCustomer = eventsCustomer;

var _customer = require("../model/customer");

var _storage = require("../model/storage");

var _resetValue = require("../model/resetValue");

function eventsCustomer() {
  var customerName = document.querySelector("#customer-name");
  var customerLastName = document.querySelector("#customer-lastName");
  var customerPhone = document.querySelector("#customer-phone");
  var customerNewBtn = document.querySelector("[data-btn='newCustomerBtn']");
  var customerListContainer = document.querySelector("#customer-list-container");
  customerNewBtn.addEventListener("click", function () {
    if (customerName.value === "" || customerLastName.value === "" || customerPhone.value === "") {
      alert("Lütfen bos alan birakma");
      return;
    }

    var customer = {
      id: "c-" + new Date().getTime(),
      name: customerName.value,
      lastName: customerLastName.value,
      phone: customerPhone.value,
      victims: []
    };
    var db = new _storage.DbManager();
    db.setDb(customer);
    var newCustomer = new _customer.Customer();
    newCustomer.addNew(customer);
    var rest = new _resetValue.ResetValue();
    rest.reset(customerName, customerLastName, customerPhone);
  });
  customerListContainer.addEventListener("click", function (e) {
    var targetElement = e.target;

    if (targetElement.classList.contains("customer-remove-btn")) {
      var selectedCustomerId = targetElement.parentElement.getAttribute("data-customerId"); //storage clasini kullaniyoruz

      var db = new _storage.DbManager(); //db degiskeni id sine ulasip db de musteri silme islemi 

      db.removeCustomer(selectedCustomerId); //üzerine tiklanan elementin kapsayici div(elementine yada parent elementine) ulasip silme islemei

      targetElement.parentElement.remove();
    }
  });
}
},{"../model/customer":"src/model/customer.js","../model/storage":"src/model/storage.js","../model/resetValue":"src/model/resetValue.js"}],"src/model/victims.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Victims = void 0;

var _victimTemplate = require("../view/victimTemplate");

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

      var victimTemp = _victimTemplate.victimTemplate.replace(/__ID__/, victim.id).replace(/__NAME__/, victim.name).replace(/__LASTNAME__/, victim.lastName).replace(/__AGE__/, victim.age).replace(/__GENDER__/, victim.gender).replace(/__IMG__/, victim.img).replace(/__ADDRESS__/, victim.address.map(function (item) {
        return "<div>".concat(item, "</div>");
      }).join(''));

      victimListContainer.insertAdjacentHTML("afterbegin", victimTemp);
    }
  }]);

  return Victims;
}();

exports.Victims = Victims;
;
},{"../view/victimTemplate":"src/view/victimTemplate.js"}],"src/view/eventsVictim.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eventsVictim = eventsVictim;

var _victims = require("../model/victims");

var _storage = require("../model/storage");

var _resetValue = require("../model/resetValue");

function eventsVictim() {
  var victimName = document.querySelector("#victim-name");
  var victimLastName = document.querySelector("#victim-lastName");
  var victimAge = document.querySelector("#victim-age");
  var victimGender = document.querySelector("#victim-gender");
  var victimImg = document.querySelector("#victim-img");
  var newVictimBtn = document.querySelector("[data-btn='newVictimBtn']");
  var customerListContainer = document.querySelector("#customer-list-container");
  var btnAddAddress = document.querySelector(".btn-add-address");
  var selectedCustomerId;
  customerListContainer.addEventListener("click", function (e) {
    var targetElement = e.target;

    if (targetElement.classList.contains("add-victim-modal-btn")) {
      selectedCustomerId = targetElement.parentElement.parentElement.getAttribute("id");
    }

    if (targetElement.classList.contains("victim-mission-completed-btn")) {
      var selectedVictimId = targetElement.parentElement.getAttribute("id");

      var _selectedCustomerId = targetElement.parentElement.parentElement.getAttribute("id");

      var db = new _storage.DbManager();
      db.changeVictimStatus(_selectedCustomerId, selectedVictimId);
      targetElement.parentElement.dataset.status = "true";
    }

    if (targetElement.classList.contains("victim-remove-btn")) {
      var _selectedVictimId = targetElement.parentElement.getAttribute("id");

      var _selectedCustomerId2 = targetElement.parentElement.parentElement.getAttribute("id");

      var _db = new _storage.DbManager();

      _db.removeVictim(_selectedCustomerId2, _selectedVictimId);

      targetElement.parentElement.remove();
    }
  });
  newVictimBtn.addEventListener("click", function () {
    var addAddress = [];
    var victimAddressInput = document.querySelectorAll(".victim-address");
    victimAddressInput.forEach(function (item) {
      addAddress.push(item.value);
    });

    if (victimName.value === "" || victimLastName.value === "" || victimAge.value === "" || victimGender.value === "" || victimImg.value === "" || addAddress[0].length === 0) {
      alert("Bos alan birakma");
      return;
    }

    var victim = {
      id: "v-" + new Date().getTime(),
      name: victimName.value,
      lastName: victimLastName.value,
      age: victimAge.value,
      gender: victimGender.value,
      img: victimImg.value,
      address: addAddress,
      missionStatus: false
    };
    var newVictim = new _victims.Victims();
    newVictim.addNew(victim, selectedCustomerId);
    var db = new _storage.DbManager();
    db.addVictim(victim, selectedCustomerId);
    var rest = new _resetValue.ResetValue();
    rest.reset(victimName, victimLastName, victimAge, victimGender, victimImg);
    victimAddressInput.forEach(function (item) {
      item.value = "";
    });
  });
  btnAddAddress.addEventListener("click", function (e) {
    var addressInputTemplate = "<input  type=\"text\" class=\"form-control mb-2 victim-address\" placeholder=\"Address..\">";
    e.target.parentElement.insertAdjacentHTML("beforeend", addressInputTemplate);
    e.preventDefault();
  });
}
},{"../model/victims":"src/model/victims.js","../model/storage":"src/model/storage.js","../model/resetValue":"src/model/resetValue.js"}],"src/model/initialize.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Initialize = void 0;

var _storage = require("./storage");

var _customer = require("./customer");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Initialize = /*#__PURE__*/function () {
  function Initialize() {
    _classCallCheck(this, Initialize);
  }

  _createClass(Initialize, [{
    key: "init",
    value: function init() {
      var customer = new _customer.Customer();
      var db = new _storage.DbManager();
      var people = db.getDb();
      people.forEach(function (person) {
        customer.addNew(person);
      });
    }
  }]);

  return Initialize;
}();

exports.Initialize = Initialize;
},{"./storage":"src/model/storage.js","./customer":"src/model/customer.js"}],"app.js":[function(require,module,exports) {
"use strict";

var _eventsCustomer = require("./src/view/eventsCustomer");

var _eventsVictim = require("./src/view/eventsVictim");

var _initialize = require("./src/model/initialize");

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
 *      - ayni anda kurban listesi de olusturabilmeli musteriyi ekledikten sonra            + FORM/Victim +(button add-addresse)
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
 *          - eventsCustomer.js
 *          - eventsVictim.js
 *          - victimTemplate.js
 */
(0, _eventsCustomer.eventsCustomer)();
(0, _eventsVictim.eventsVictim)();
var start = new _initialize.Initialize();
start.init();
},{"./src/view/eventsCustomer":"src/view/eventsCustomer.js","./src/view/eventsVictim":"src/view/eventsVictim.js","./src/model/initialize":"src/model/initialize.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62460" + '/');

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