(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[68],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Delivers/ViewCartBeforeForwarding.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Delivers/ViewCartBeforeForwarding.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_simple_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-simple-alert */ "./node_modules/vue-simple-alert/lib/index.js");


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
  data: function data() {
    return {
      orders: {},
      post: {},
      delivers: {},
      SelectDeliver: 'select',
      checkedNames: [],
      admin: false,
      receiver: false
    };
  },
  created: function created() {
    this.fetchArticles();
    this.MyDelivers();

    if ($cookies.get('table_type') == "admins") {
      this.admin = true;
    }

    if ($cookies.get('table_type') == "receivers") {
      this.receiver = true;
    }
  },
  methods: {
    fetchArticles: function fetchArticles() {
      var _this = this;

      axios.get("/api/Admin/Account_Cart/".concat(this.$route.params.Cart_id)).then(function (res) {
        _this.isLoaded = true;
        _this.orders = res.data; //console.log(res.data);
        //this.current_page = res.data.current_page;
        //if (res.data.next_page_url !== null) { this.next = true; }
        //if (res.data.prev_page_url !== null) { this.prev = true; }
      })["catch"](function (res) {
        var toast = _this.$toasted.show("Error 500", {
          type: 'error',
          theme: "bubble",
          position: "bottom-right",
          duration: 2000
        });
      });
    },
    MyDelivers: function MyDelivers() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
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
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    ForwardOrders: function ForwardOrders(forward_to_id) {
      var _this3 = this;

      this.$confirm("سيتم تحويل الاوردرات الى المندوب الذي اخترته, هل انت متأكد ؟").then(function () {
        _this3.miniload = true;
        var formData = new FormData();
        formData.append('cart_id', _this3.$route.params.Cart_id);
        formData.append('order_id', _this3.checkedNames);
        formData.append('forward_to_id', forward_to_id);
        axios.post("/api/Deliver/Forward_Orders", formData).then(function (res) {
          _this3.isLoaded = true;
          _this3.orders = res.data;

          if (res.status == 200) {
            var toast = _this3.$toasted.show("تم تحويل السلة", {
              type: 'success',
              theme: "bubble",
              position: "bottom-right",
              duration: 2000
            });

            _this3.fetchArticles(_this3.status, 1, _this3.dateFrom, _this3.dateTo);

            _this3.checkedNames = [];
            _this3.showFW = false;
          }

          _this3.miniload = false;
        })["catch"](function (res) {
          var toast = _this3.$toasted.show("Error 500", {
            type: 'error',
            theme: "bubble",
            position: "bottom-right",
            duration: 2000
          });

          _this3.miniload = false;
        });
      });
    },
    onChangeDeliver: function onChangeDeliver(event) {
      if (parseInt(this.checkedNames.length) != 0 && this.SelectDeliver !== 'select') {
        this.showFW = true;
      } else {
        this.showFW = false;
      }
    } //Next() { this.$router.push({path: `/Cart///${this.current_page+1}` }); },
    //Previous() { this.$router.push({path: `/Cart///${this.current_page-1}` }); },

  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Delivers/ViewCartBeforeForwarding.vue?vue&type=template&id=f6b0d74a&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Delivers/ViewCartBeforeForwarding.vue?vue&type=template&id=f6b0d74a& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
        "nav",
        {
          staticClass: "uk-navbar-container",
          staticStyle: { margin: "20px 0px" },
          attrs: { "uk-navbar": "" }
        },
        [
          _c("div", { staticClass: "uk-navbar-left" }, [
            _c("ul", { staticClass: "uk-navbar-nav datepickerCs" }, [
              _vm.showFW
                ? _c("li", [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-outline-success",
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.ForwardOrders(_vm.SelectDeliver)
                          }
                        }
                      },
                      [_c("span", { staticClass: "fas fa-paper-plane" })]
                    )
                  ])
                : _vm._e()
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "uk-navbar-right" }, [
            _c("ul", { staticClass: "uk-navbar-nav" }, [
              _c("li", { staticStyle: { padding: "0px 9px" } }, [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.SelectDeliver,
                        expression: "SelectDeliver"
                      }
                    ],
                    staticStyle: { padding: "0px" },
                    on: {
                      change: [
                        function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.SelectDeliver = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        },
                        function($event) {
                          return _vm.onChangeDeliver($event)
                        }
                      ]
                    }
                  },
                  [
                    _c("option", { attrs: { value: "select", disabled: "" } }, [
                      _vm._v("اختر مندوب")
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.delivers.data, function(deliver) {
                      return _c(
                        "option",
                        { key: deliver.id, domProps: { value: deliver.id } },
                        [
                          _vm._v(
                            _vm._s(deliver.first_name) +
                              " " +
                              _vm._s(deliver.last_name)
                          )
                        ]
                      )
                    })
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c("li", { staticStyle: { padding: "0px 9px" } }, [
                _vm._v("تحويل الى مندوب التوصيل ")
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
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
          _vm._l(_vm.orders.data, function(order) {
            return _c("tbody", { key: order.id }, [
              _c("tr", [
                _c("th", { staticStyle: { width: "80px" } }, [
                  _vm._v(_vm._s(order.id))
                ]),
                _vm._v(" "),
                _c(
                  "td",
                  {
                    staticClass: "text-center",
                    staticStyle: { width: "80px" }
                  },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.checkedNames,
                          expression: "checkedNames"
                        }
                      ],
                      staticClass: "uk-checkbox",
                      attrs: { type: "checkbox" },
                      domProps: {
                        value: "" + order.id,
                        checked: Array.isArray(_vm.checkedNames)
                          ? _vm._i(_vm.checkedNames, "" + order.id) > -1
                          : _vm.checkedNames
                      },
                      on: {
                        change: [
                          function($event) {
                            var $$a = _vm.checkedNames,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = "" + order.id,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  (_vm.checkedNames = $$a.concat([$$v]))
                              } else {
                                $$i > -1 &&
                                  (_vm.checkedNames = $$a
                                    .slice(0, $$i)
                                    .concat($$a.slice($$i + 1)))
                              }
                            } else {
                              _vm.checkedNames = $$c
                            }
                          },
                          function($event) {
                            return _vm.onChangeDeliver($event)
                          }
                        ]
                      }
                    })
                  ]
                ),
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
                      { attrs: { to: "/order_details/" + order.id } },
                      [
                        _c("button", { staticClass: "btn btn-outline-info" }, [
                          _c("span", { staticClass: "fa fa-eye" })
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("td", { staticStyle: { width: "200px" } }, [
                  _vm._v(_vm._s(order.product_name))
                ]),
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
                  _vm._v(_vm._s(order.location_from_region))
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { width: "200px" } }, [
                  _vm._v(_vm._s(order.receiver_full_name))
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { width: "200px" } }, [
                  _vm._v(_vm._s(order.reciever_phone_number))
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { width: "200px" } }, [
                  _vm._v(_vm._s(order.location_to_region))
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { width: "150px" } }, [
                  _vm._v(_vm._s(order.recieved_price))
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { width: "150px" } }, [
                  _vm._v(_vm._s(order.track_code))
                ])
              ])
            ])
          })
        ],
        2
      ),
      _vm._v(" "),
      _c("br"),
      _c("br"),
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
        _c("th", { staticStyle: { width: "80px" } }, [_vm._v("تحديد")]),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-center", staticStyle: { width: "200px" } },
          [_c("li", { staticClass: "fa fa-gear" })]
        ),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "200px" } }, [_vm._v("البريد")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "200px" } }, [_vm._v("اسم المرسل")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "200px" } }, [_vm._v("رقم المرسل")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "200px" } }, [_vm._v("عنوان المرسل")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "200px" } }, [_vm._v("اسم المستلم")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "200px" } }, [_vm._v("رقم المستلم")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "200px" } }, [
          _vm._v("عنوان المستلم")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "150px" } }, [_vm._v("سعر البريد")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "150px" } }, [_vm._v("رمز البريد")])
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

/***/ "./resources/assets/js/components/Delivers/ViewCartBeforeForwarding.vue":
/*!******************************************************************************!*\
  !*** ./resources/assets/js/components/Delivers/ViewCartBeforeForwarding.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ViewCartBeforeForwarding_vue_vue_type_template_id_f6b0d74a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewCartBeforeForwarding.vue?vue&type=template&id=f6b0d74a& */ "./resources/assets/js/components/Delivers/ViewCartBeforeForwarding.vue?vue&type=template&id=f6b0d74a&");
/* harmony import */ var _ViewCartBeforeForwarding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewCartBeforeForwarding.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/Delivers/ViewCartBeforeForwarding.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ViewCartBeforeForwarding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ViewCartBeforeForwarding_vue_vue_type_template_id_f6b0d74a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ViewCartBeforeForwarding_vue_vue_type_template_id_f6b0d74a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/Delivers/ViewCartBeforeForwarding.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Delivers/ViewCartBeforeForwarding.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/assets/js/components/Delivers/ViewCartBeforeForwarding.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewCartBeforeForwarding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ViewCartBeforeForwarding.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Delivers/ViewCartBeforeForwarding.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewCartBeforeForwarding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Delivers/ViewCartBeforeForwarding.vue?vue&type=template&id=f6b0d74a&":
/*!*************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Delivers/ViewCartBeforeForwarding.vue?vue&type=template&id=f6b0d74a& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewCartBeforeForwarding_vue_vue_type_template_id_f6b0d74a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ViewCartBeforeForwarding.vue?vue&type=template&id=f6b0d74a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Delivers/ViewCartBeforeForwarding.vue?vue&type=template&id=f6b0d74a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewCartBeforeForwarding_vue_vue_type_template_id_f6b0d74a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewCartBeforeForwarding_vue_vue_type_template_id_f6b0d74a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);