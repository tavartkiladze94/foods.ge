(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Delivers/Gd_Warehouse.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Delivers/Gd_Warehouse.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_simple_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-simple-alert */ "./node_modules/vue-simple-alert/lib/index.js");
/* harmony import */ var vuejs_datepicker_dist_vuejs_datepicker_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuejs-datepicker/dist/vuejs-datepicker.esm.js */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


Vue.use(vue_simple_alert__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Datepicker: vuejs_datepicker_dist_vuejs_datepicker_esm_js__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      orders: {},
      delivers: {},
      SelectDeliver: false,
      post: {},
      notifications: {},
      admin: false,
      nextpage: false,
      checkedNames: [],
      dateFrom: 'All',
      dateTo: 'All',
      Cancle: false,
      showFW: false,
      prevpage: false,
      status: 'pending',
      miniload: false,
      receiver: false,
      date: false
    };
  },
  created: function created() {
    //console.log(this.$route.params.status);
    if (this.$router.resolve('status').resolved.name !== '404') {
      this.status = this.$route.params.status;
    }

    this.fetchArticles(this.status, 1, this.dateFrom, this.dateTo);
    this.MyDelivers();

    if ($cookies.get('table_type') == "admins") {
      this.admin = true;
    }

    if ($cookies.get('table_type') == "receivers") {
      this.receiver = true;
    }
  },
  methods: {
    fetchArticles: function fetchArticles(Status, Page, dateFrom, dateto) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get("/api/Deliver/Warehouse").then(function (res) {
                  _this.isLoaded = true;
                  _this.orders = res.data;
                  _this.current_page = res.data.current_page;
                  _this.nextpage = res.data.next_page_url;
                  _this.prevpage = res.data.prev_page_url;
                })["catch"](function (res) {
                  var toast = _this.$toasted.show("Error 500", {
                    type: 'error',
                    theme: "bubble",
                    position: "bottom-right",
                    duration: 2000
                  });
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    MyDelivers: function MyDelivers() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get("/api/GetCarsInfo").then(function (res) {
                  _this2.delivers = res.data;
                })["catch"](function (res) {
                  var toast = _this2.$toasted.show("Error 500 Couldnt get delivers", {
                    type: 'error',
                    theme: "bubble",
                    position: "bottom-right",
                    duration: 2000
                  });
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    //Next() { this.fetchArticles(this.status,this.current_page+1, this.dateFrom,  this.dateTo); },
    //Previous() { this.fetchArticles(this.status,this.current_page-1, this.dateFrom,  this.dateTo); },
    PutInStore: function PutInStore(Cart_id) {
      var _this3 = this;

      this.miniload = true;
      var formData = new FormData();
      formData.append('cart_id', Cart_id);
      axios.post("/api/Deliver/Put_In_Warehouse", formData).then(function (res) {
        if (res.status == 200) {
          var toast = _this3.$toasted.show("تم وضع السلة في المخزن", {
            type: 'success',
            theme: "bubble",
            position: "bottom-right",
            duration: 2000
          });

          _this3.fetchArticles(_this3.status, 1, _this3.dateFrom, _this3.dateTo);
        }

        _this3.miniload = false;
      })["catch"](function (res) {
        _this3.miniload = false;

        var toast = _this3.$toasted.show("Error 500", {
          type: 'error',
          theme: "bubble",
          position: "bottom-right",
          duration: 2000
        });
      });
    },
    onChangeDeliver: function onChangeDeliver() {
      if (parseInt(this.checkedNames.length) != 0 && this.SelectDeliver !== false) {
        this.showFW = true;
      } else {
        this.showFW = false;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Delivers/Gd_Warehouse.vue?vue&type=template&id=9fc7588a&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Delivers/Gd_Warehouse.vue?vue&type=template&id=9fc7588a& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "uk-margin", staticStyle: { "margin-bottom": "0px" } },
    [
      _c(
        "table",
        {
          staticClass: "table cust-table uk-card uk-card-default",
          attrs: { border: "0" }
        },
        [
          _vm._m(0),
          _vm._v(" "),
          !_vm.isLoaded
            ? _c("tbody", { staticClass: "tbdy" }, [_vm._m(1)])
            : _vm._e(),
          _vm._v(" "),
          _vm._l(_vm.orders.data, function(order, index) {
            return _vm.isLoaded
              ? _c("tbody", { key: order.id }, [
                  _c("tr", [
                    _c("th", { staticStyle: { width: "80px" } }, [
                      _vm._v(_vm._s(order.id))
                    ]),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticClass: "text-center",
                        staticStyle: { width: "200px" }
                      },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              to: "/ViewCartBeforeForwarding/" + order.id
                            }
                          },
                          [
                            _c(
                              "button",
                              { staticClass: "btn btn-outline-info" },
                              [
                                _c("span", {
                                  staticClass: "fas fa-shopping-cart"
                                })
                              ]
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("td", { staticStyle: { width: "200px" } }, [
                      _vm._v(_vm._s(order.sender_full_name))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticStyle: { width: "200px" } }, [
                      _vm._v(_vm._s(order.sender_phone_number))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticStyle: { width: "200px" } }, [
                      _vm._v(_vm._s(order.location_from_state))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticStyle: { width: "100px" } }, [
                      _vm._v(_vm._s(order.Total_Orders))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticStyle: { width: "200px" } }, [
                      _vm._v(_vm._s(order.Total_Deliver_Fee))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticStyle: { width: "200px" } }, [
                      _vm._v(_vm._s(order.Total_App_Fee))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticStyle: { width: "150px" } }, [
                      _vm._v(_vm._s(order.Total_Credit_Invoice))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticStyle: { width: "150px" } }, [
                      _vm._v(
                        _vm._s(order.first_name) + " " + _vm._s(order.last_name)
                      )
                    ])
                  ])
                ])
              : _vm._e()
          })
        ],
        2
      ),
      _vm._v(" "),
      _c("br"),
      _c("br"),
      _vm._v(" "),
      !_vm.orders.data.length && _vm.isLoaded
        ? _c("div", { attrs: { align: "center" } }, [
            _c("i", {
              staticClass: "fas fa-box-open",
              staticStyle: { "font-size": "32vmin", color: "#e0e0e0" }
            })
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("br")
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", {}, [
        _c("th", { staticStyle: { width: "80px" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-center", staticStyle: { width: "200px" } },
          [_c("li", { staticClass: "fa fa-gear" })]
        ),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "200px" } }, [_vm._v("اسم المرسل")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "200px" } }, [_vm._v("رقم المرسل")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "200px" } }, [_vm._v("عنوان المرسل")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "100px" } }, [_vm._v("عدد البريد")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "200px" } }, [
          _vm._v("عمولة المندوب")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "200px" } }, [
          _vm._v("عمولة التطبيق")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "150px" } }, [
          _vm._v("اجمالي التكلفة")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "150px" } }, [
          _vm._v("تم التحويل الى")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { staticStyle: { width: "80px" } }, [
        _c("i", { staticClass: "fa fa-refresh fa-spin" })
      ]),
      _vm._v(" "),
      _c("td", { staticStyle: { width: "200px" } }, [
        _c("i", { staticClass: "fa fa-refresh fa-spin" })
      ]),
      _vm._v(" "),
      _c("td", { staticStyle: { width: "200px" } }, [
        _c("i", { staticClass: "fa fa-refresh fa-spin" })
      ]),
      _vm._v(" "),
      _c("td", { staticStyle: { width: "200px" } }, [
        _c("i", { staticClass: "fa fa-refresh fa-spin" })
      ]),
      _vm._v(" "),
      _c("td", { staticStyle: { width: "200px" } }, [
        _c("i", { staticClass: "fa fa-refresh fa-spin" })
      ]),
      _vm._v(" "),
      _c("td", { staticStyle: { width: "100px" } }, [
        _c("i", { staticClass: "fa fa-refresh fa-spin" })
      ]),
      _vm._v(" "),
      _c("td", { staticStyle: { width: "200px" } }, [
        _c("i", { staticClass: "fa fa-refresh fa-spin" })
      ]),
      _vm._v(" "),
      _c("td", { staticStyle: { width: "200px" } }, [
        _c("i", { staticClass: "fa fa-refresh fa-spin" })
      ]),
      _vm._v(" "),
      _c("td", { staticStyle: { width: "150px" } }, [
        _c("i", { staticClass: "fa fa-refresh fa-spin" })
      ]),
      _vm._v(" "),
      _c("td", { staticStyle: { width: "150px" } }, [
        _c("i", { staticClass: "fa fa-refresh fa-spin" })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/Delivers/Gd_Warehouse.vue":
/*!******************************************************************!*\
  !*** ./resources/assets/js/components/Delivers/Gd_Warehouse.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Gd_Warehouse_vue_vue_type_template_id_9fc7588a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gd_Warehouse.vue?vue&type=template&id=9fc7588a& */ "./resources/assets/js/components/Delivers/Gd_Warehouse.vue?vue&type=template&id=9fc7588a&");
/* harmony import */ var _Gd_Warehouse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gd_Warehouse.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/Delivers/Gd_Warehouse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Gd_Warehouse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Gd_Warehouse_vue_vue_type_template_id_9fc7588a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Gd_Warehouse_vue_vue_type_template_id_9fc7588a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/Delivers/Gd_Warehouse.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Delivers/Gd_Warehouse.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/js/components/Delivers/Gd_Warehouse.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gd_Warehouse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Gd_Warehouse.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Delivers/Gd_Warehouse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gd_Warehouse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Delivers/Gd_Warehouse.vue?vue&type=template&id=9fc7588a&":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/components/Delivers/Gd_Warehouse.vue?vue&type=template&id=9fc7588a& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gd_Warehouse_vue_vue_type_template_id_9fc7588a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Gd_Warehouse.vue?vue&type=template&id=9fc7588a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Delivers/Gd_Warehouse.vue?vue&type=template&id=9fc7588a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gd_Warehouse_vue_vue_type_template_id_9fc7588a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gd_Warehouse_vue_vue_type_template_id_9fc7588a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);