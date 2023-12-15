(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/credit_orders_pending.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Admin/credit_orders_pending.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      orders: {},
      admin: false,
      receiver: false,
      miniload: false,
      post: {}
    };
  },
  created: function created() {
    this.fetchArticles();

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

      axios.get("/api/credit_orders/0?page=".concat(this.$route.params.page)).then(function (res) {
        _this.isLoaded = true;
        console.log(res.data);
        _this.orders = res.data;
        _this.current_page = res.data.current_page;

        if (res.data.next_page_url !== null) {
          _this.next = true;
        }

        if (res.data.prev_page_url !== null) {
          _this.prev = true;
        }
      })["catch"](function (res) {
        var toast = _this.$toasted.show("Error 500", {
          type: 'error',
          theme: "bubble",
          position: "bottom-right",
          duration: 2000
        });
      });
    },
    Next: function Next() {
      this.$router.push({
        path: "/credit_orders/0".concat(this.current_page + 1)
      });
    },
    Previous: function Previous() {
      this.$router.push({
        path: "/credit_orders/0".concat(this.current_page - 1)
      });
    },
    confirm_deliver: function confirm_deliver(order_id) {
      var _this2 = this;

      this.miniload = true;
      axios.post("/api/Accept_credit", order_id).then(function (res) {
        console.log(res.data);

        if (res.status == 200) {
          var toast = _this2.$toasted.show("Credit Added To Deliver", {
            type: 'success',
            theme: "bubble",
            position: "bottom-right",
            duration: 2000
          });

          _this2.miniload = false;
        } else {
          var _toast = _this2.$toasted.show("Error", {
            type: 'error',
            theme: "bubble",
            position: "bottom-right",
            duration: 2000
          });

          _this2.miniload = false;
        }
      })["catch"](function (res) {
        var toast = _this2.$toasted.show("Error 500", {
          type: 'error',
          theme: "bubble",
          position: "bottom-right",
          duration: 2000
        });

        currentObj.output = res;
        _this2.miniload = false;
      });
    }
  }
  /*mounted() {
      console.log('Component mounted.')
  }*/

});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/credit_orders_pending.vue?vue&type=template&id=18fd4cc8&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Admin/credit_orders_pending.vue?vue&type=template&id=18fd4cc8& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
          _c("thead", [
            _c("tr", {}, [
              _c("th", { staticStyle: { width: "80px" } }, [_vm._v("#")]),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _vm.receiver
                ? _c("th", { staticStyle: { width: "100px" } }, [
                    _vm._v("Release")
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("th", { staticStyle: { width: "200px" } }, [
                _vm._v("first name")
              ]),
              _vm._v(" "),
              _c("th", { staticStyle: { width: "200px" } }, [
                _vm._v("last name")
              ]),
              _vm._v(" "),
              _c("th", { staticStyle: { width: "200px" } }, [_vm._v("amount")]),
              _vm._v(" "),
              _c("th", { staticStyle: { width: "200px" } }, [
                _vm._v("transaction id")
              ]),
              _vm._v(" "),
              _c("th", { staticStyle: { width: "200px" } }, [
                _vm._v("phone number")
              ])
            ])
          ]),
          _vm._v(" "),
          !_vm.isLoaded
            ? _c("tbody", { staticClass: "tbdy" }, [_vm._m(1)])
            : _vm._e(),
          _vm._v(" "),
          _vm._l(_vm.orders.data, function(order, index) {
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
                    staticStyle: { width: "200px" }
                  },
                  [
                    _c(
                      "router-link",
                      {
                        attrs: {
                          to: "/viewdelivers_by_phone/" + order.phone_number
                        }
                      },
                      [
                        _c("button", { staticClass: "btn btn-outline-info" }, [
                          _c("i", { staticClass: "fas fa-user-tie" })
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    ("" + order.status == 0) & _vm.miniload
                      ? _c(
                          "button",
                          {
                            staticClass: "uk-button uk-button-default",
                            attrs: { disabled: "" }
                          },
                          [_c("i", { staticClass: "fa fa-refresh fa-spin" })]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    "" + order.status == 1
                      ? _c(
                          "button",
                          { staticClass: "btn", attrs: { disabled: "" } },
                          [_c("i", { staticClass: "fas fa-check-circle" })]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    ("" + order.status == 0) & !_vm.miniload
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-outline-success del-icon",
                            attrs: {
                              id: "" + order.id,
                              onclick: "$('#" + order.id + "').hide();"
                            },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.confirm_deliver(order)
                              }
                            }
                          },
                          [_c("i", { staticClass: "fas fa-check-circle" })]
                        )
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _c("td", { staticStyle: { width: "200px" } }, [
                  _vm._v(_vm._s(order.first_name))
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { width: "200px" } }, [
                  _vm._v(_vm._s(order.last_name))
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { width: "200px" } }, [
                  _vm._v(_vm._s(order.amount))
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { width: "200px" } }, [
                  _vm._v(_vm._s(order.transaction_id))
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { width: "200px" } }, [
                  _vm._v(_vm._s(order.phone_number))
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
      _c("div", { staticClass: "row Departmain" }, [
        _c(
          "div",
          { staticClass: "col-sm-6 Previous", attrs: { align: "center" } },
          [
            _vm.prev
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-secondary tab-nav-btn",
                    attrs: { "_ngcontent-udn-32": "", type: "button" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.Previous()
                      }
                    }
                  },
                  [
                    _c("i", {
                      staticClass: "fa fa-chevron-left",
                      attrs: { "_ngcontent-udn-32": "" }
                    })
                  ]
                )
              : _c(
                  "button",
                  {
                    staticClass: "btn btn-secondary tab-nav-btn disabled-btn",
                    attrs: {
                      "_ngcontent-udn-32": "",
                      type: "button",
                      disabled: ""
                    }
                  },
                  [
                    _c("i", {
                      staticClass: "fa fa-chevron-left",
                      attrs: { "_ngcontent-udn-32": "" }
                    })
                  ]
                )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-sm-6 Next", attrs: { align: "center" } },
          [
            _vm.next
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-secondary tab-nav-btn",
                    attrs: { "_ngcontent-udn-32": "", type: "button" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.Next()
                      }
                    }
                  },
                  [
                    _c("i", {
                      staticClass: "fa fa-chevron-right",
                      attrs: { "_ngcontent-udn-32": "" }
                    })
                  ]
                )
              : _c(
                  "button",
                  {
                    staticClass: "btn btn-secondary tab-nav-btn disabled-btn",
                    attrs: {
                      "_ngcontent-udn-32": "",
                      type: "button",
                      disabled: ""
                    }
                  },
                  [
                    _c("i", {
                      staticClass: "fa fa-chevron-right",
                      attrs: { "_ngcontent-udn-32": "" }
                    })
                  ]
                )
          ]
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "th",
      { staticClass: "text-center", staticStyle: { width: "200px" } },
      [_c("li", { staticClass: "fa fa-gear" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { staticStyle: { width: "80px" } }, [
        _c("i", { staticClass: "fa fa-refresh fa-spin" })
      ]),
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
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/Admin/credit_orders_pending.vue":
/*!************************************************************************!*\
  !*** ./resources/assets/js/components/Admin/credit_orders_pending.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _credit_orders_pending_vue_vue_type_template_id_18fd4cc8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./credit_orders_pending.vue?vue&type=template&id=18fd4cc8& */ "./resources/assets/js/components/Admin/credit_orders_pending.vue?vue&type=template&id=18fd4cc8&");
/* harmony import */ var _credit_orders_pending_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./credit_orders_pending.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/Admin/credit_orders_pending.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _credit_orders_pending_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _credit_orders_pending_vue_vue_type_template_id_18fd4cc8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _credit_orders_pending_vue_vue_type_template_id_18fd4cc8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/Admin/credit_orders_pending.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Admin/credit_orders_pending.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/components/Admin/credit_orders_pending.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_credit_orders_pending_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./credit_orders_pending.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/credit_orders_pending.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_credit_orders_pending_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Admin/credit_orders_pending.vue?vue&type=template&id=18fd4cc8&":
/*!*******************************************************************************************************!*\
  !*** ./resources/assets/js/components/Admin/credit_orders_pending.vue?vue&type=template&id=18fd4cc8& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_credit_orders_pending_vue_vue_type_template_id_18fd4cc8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./credit_orders_pending.vue?vue&type=template&id=18fd4cc8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/credit_orders_pending.vue?vue&type=template&id=18fd4cc8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_credit_orders_pending_vue_vue_type_template_id_18fd4cc8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_credit_orders_pending_vue_vue_type_template_id_18fd4cc8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);