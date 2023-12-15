(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/AdminPrices.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Admin/AdminPrices.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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
      orders2: {},
      seccus: false,
      post: {},
      admin: false,
      receiver: false,
      isHidden: false,
      miniload: false,
      loading: false
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

      axios.get("/api/Admin/price?page=".concat(this.$route.params.page)).then(function (res) {
        console.log(res.data);
        _this.orders = res.data.by_type;
        _this.orders2 = res.data.by_local;
        _this.current_page = res.data.current_page;

        if (res.data.next_page_url !== null) {
          _this.next = true;
        }

        if (res.data.prev_page_url !== null) {
          _this.prev = true;
        }

        _this.isLoaded = true;
      })["catch"](function (res) {
        var toast = _this.$toasted.show("Error 500", {
          type: 'error',
          theme: "bubble",
          position: "bottom-right",
          duration: 2000
        });
      });
    },
    deleteprice: function deleteprice(order_id) {
      var _this2 = this;

      this.miniload = true;
      axios.post("/api/Admin/deleteprice", order_id).then(function (res) {
        console.log(res.data);

        if (res.status == 200) {
          var toast = _this2.$toasted.show("Deleted", {
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
      });
    },
    deletepricelocal: function deletepricelocal(order_id) {
      var _this3 = this;

      this.miniload = true;
      axios.post("/api/Admin/deleteprice_local", order_id).then(function (res) {
        console.log(res.data);

        if (res.status == 200) {
          var toast = _this3.$toasted.show("Deleted", {
            type: 'success',
            theme: "bubble",
            position: "bottom-right",
            duration: 2000
          });

          _this3.miniload = false;
        } else {
          var _toast2 = _this3.$toasted.show("Error", {
            type: 'error',
            theme: "bubble",
            position: "bottom-right",
            duration: 2000
          });

          _this3.miniload = false;
        }
      })["catch"](function (res) {
        var toast = _this3.$toasted.show("Error 500", {
          type: 'error',
          theme: "bubble",
          position: "bottom-right",
          duration: 2000
        });
      });
    },
    Next: function Next() {
      this.$router.push({
        path: "/AdminPrices/".concat(this.current_page + 1)
      });
    },
    Previous: function Previous() {
      this.$router.push({
        path: "/AdminPrices/".concat(this.current_page - 1)
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/AdminPrices.vue?vue&type=template&id=1359181c&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Admin/AdminPrices.vue?vue&type=template&id=1359181c& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
              _c("th", { staticStyle: { width: "200px" } }, [_vm._v("type")]),
              _vm._v(" "),
              _c("th", { staticStyle: { width: "200px" } }, [
                _vm._v("distance from")
              ]),
              _vm._v(" "),
              _c("th", { staticStyle: { width: "200px" } }, [
                _vm._v("distance to")
              ]),
              _vm._v(" "),
              _c("th", { staticStyle: { width: "200px" } }, [
                _vm._v("Deliver Fee")
              ]),
              _vm._v(" "),
              _c("th", { staticStyle: { width: "200px" } }, [
                _vm._v("App Fee")
              ]),
              _vm._v(" "),
              _c(
                "th",
                { staticStyle: { width: "100px" } },
                [
                  _c(
                    "router-link",
                    { attrs: { to: { path: "/AdminAddPrice" } } },
                    [
                      _c(
                        "button",
                        {
                          staticClass: "AddBtn btn btn-success",
                          attrs: { type: "button" }
                        },
                        [_c("span", { staticClass: "fas fa-plus-circle" })]
                      )
                    ]
                  )
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          !_vm.isLoaded
            ? _c("tbody", { staticClass: "tbdy" }, [_vm._m(1)])
            : _vm._e(),
          _vm._v(" "),
          _vm._l(_vm.orders.data, function(order, index) {
            return _c("tbody", { key: order.id }, [
              _c("tr", { attrs: { id: "" + order.id } }, [
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
                      "button",
                      {
                        staticClass: "btn btn-outline-danger del-icon",
                        attrs: {
                          onclick: "$('#" + order.id + "').hide(1000);"
                        },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.deleteprice(order)
                          }
                        }
                      },
                      [_c("span", { staticClass: "fa fa-trash-o" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      { attrs: { to: "/AdminUpdatePrices/" + order.id } },
                      [
                        _c(
                          "button",
                          { staticClass: "btn btn-outline-success" },
                          [_c("span", { staticClass: "fa fa-pencil" })]
                        )
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("td", { staticStyle: { width: "200px" } }, [
                  _vm._v(_vm._s(order.type))
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { width: "200px" } }, [
                  _vm._v(_vm._s(order.distance_range_from))
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { width: "200px" } }, [
                  _vm._v(_vm._s(order.distance_range_to))
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { width: "200px" } }, [
                  _vm._v(_vm._s(order.Deliver_Fee))
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { width: "200px" } }, [
                  _vm._v(_vm._s(order.App_Fee))
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { width: "100px" } })
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
              _vm._m(2),
              _vm._v(" "),
              _c("th", { staticStyle: { width: "200px" } }, [
                _vm._v("distance from")
              ]),
              _vm._v(" "),
              _c("th", { staticStyle: { width: "200px" } }, [
                _vm._v("distance to")
              ]),
              _vm._v(" "),
              _c("th", { staticStyle: { width: "200px" } }, [
                _vm._v("Deliver Fee")
              ]),
              _vm._v(" "),
              _c("th", { staticStyle: { width: "200px" } }, [
                _vm._v("App Fee")
              ]),
              _vm._v(" "),
              _c(
                "th",
                { staticStyle: { width: "100px" } },
                [
                  _c(
                    "router-link",
                    { attrs: { to: { path: "/AdminAddPriceLocal" } } },
                    [
                      _c(
                        "button",
                        {
                          staticClass: "AddBtn btn btn-success",
                          attrs: { type: "button" }
                        },
                        [_c("span", { staticClass: "fas fa-plus-circle" })]
                      )
                    ]
                  )
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          !_vm.isLoaded
            ? _c("tbody", { staticClass: "tbdy" }, [_vm._m(3)])
            : _vm._e(),
          _vm._v(" "),
          _vm._l(_vm.orders2.data, function(order, index) {
            return _c("tbody", { key: order.id }, [
              _c("tr", { attrs: { id: "" + order.id } }, [
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
                      "button",
                      {
                        staticClass: "btn btn-outline-danger del-icon",
                        attrs: {
                          onclick: "$('#" + order.id + "').hide(1000);"
                        },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.deletepricelocal(order)
                          }
                        }
                      },
                      [_c("span", { staticClass: "fa fa-trash-o" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      { attrs: { to: "/AdminUpdatePricesLocal/" + order.id } },
                      [
                        _c(
                          "button",
                          { staticClass: "btn btn-outline-success" },
                          [_c("span", { staticClass: "fa fa-pencil" })]
                        )
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("td", { staticStyle: { width: "200px" } }, [
                  _vm._v(_vm._s(order.distance_range_from))
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { width: "200px" } }, [
                  _vm._v(_vm._s(order.distance_range_to))
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { width: "200px" } }, [
                  _vm._v(_vm._s(order.Deliver_Fee))
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { width: "200px" } }, [
                  _vm._v(_vm._s(order.App_Fee))
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { width: "100px" } })
              ])
            ])
          })
        ],
        2
      )
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
      ]),
      _vm._v(" "),
      _c("td", { staticStyle: { width: "100px" } })
    ])
  },
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
      _c("td", { staticStyle: { width: "100px" } })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/Admin/AdminPrices.vue":
/*!**************************************************************!*\
  !*** ./resources/assets/js/components/Admin/AdminPrices.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminPrices_vue_vue_type_template_id_1359181c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminPrices.vue?vue&type=template&id=1359181c& */ "./resources/assets/js/components/Admin/AdminPrices.vue?vue&type=template&id=1359181c&");
/* harmony import */ var _AdminPrices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminPrices.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/Admin/AdminPrices.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminPrices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminPrices_vue_vue_type_template_id_1359181c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminPrices_vue_vue_type_template_id_1359181c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/Admin/AdminPrices.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Admin/AdminPrices.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/components/Admin/AdminPrices.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPrices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminPrices.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/AdminPrices.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPrices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Admin/AdminPrices.vue?vue&type=template&id=1359181c&":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/components/Admin/AdminPrices.vue?vue&type=template&id=1359181c& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPrices_vue_vue_type_template_id_1359181c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminPrices.vue?vue&type=template&id=1359181c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/AdminPrices.vue?vue&type=template&id=1359181c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPrices_vue_vue_type_template_id_1359181c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminPrices_vue_vue_type_template_id_1359181c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);