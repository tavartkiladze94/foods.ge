(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/OffersOrders.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Admin/OffersOrders.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
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
      CartOrders: {},
      seccus: false,
      status: 'waiting',
      post: {},
      prev: {},
      next: {},
      admin: false,
      receiver: false,
      isHidden: false,
      miniload: false,
      isLoadedCarts: false,
      loading: false,
      CartIdBeforeAccept: ''
    };
  },
  created: function created() {
    this.fetchArticles('waiting', 1);

    if ($cookies.get('table_type') == "admins") {
      this.admin = true;
    }

    if ($cookies.get('table_type') == "receivers") {
      this.receiver = true;
    }
  },
  methods: {
    fetchArticles: function fetchArticles(Status, Page) {
      var _this = this;

      axios.get("/api/Admin/GetOffersCarts/".concat(Status, "?page=").concat(Page)).then(function (res) {
        _this.orders = res.data;
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
    onChange: function onChange(event) {
      this.isLoaded = false;
      this.status = event.target.value;
      this.fetchArticles(event.target.value, 1);
    },
    ShowCartOrders: function ShowCartOrders(Cart_Id) {
      var _this2 = this;

      this.isLoadedCarts = false;
      this.CartIdBeforeAccept = Cart_Id;
      axios.get("/api/Admin/GetCartOffers/".concat(Cart_Id)).then(function (res) {
        _this2.CartOrders = res.data;
        _this2.isLoadedCarts = true;
      })["catch"](function (res) {
        var toast = _this2.$toasted.show("Error 500", {
          type: 'error',
          theme: "bubble",
          position: "bottom-right",
          duration: 2000
        });
      });
    },
    AcceptedCart: function AcceptedCart() {
      var _this3 = this;

      var formData = new FormData();
      formData.append('cart_id', this.CartIdBeforeAccept);
      formData.append('status', 'pending');
      axios.post("/api/Admin/UpdateCartStatus", formData).then(function (res) {
        if (res.status == 200) {
          var toast = _this3.$toasted.show("Accepted", {
            type: 'success',
            theme: "bubble",
            position: "bottom-right",
            duration: 2000
          });

          _this3.fetchArticles('waiting', 1);

          UIkit.modal('#CartOrders').hide();
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
        path: "/OffersOrders/".concat(this.current_page + 1)
      });
    },
    Previous: function Previous() {
      this.$router.push({
        path: "/OffersOrders/".concat(this.current_page - 1)
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/OffersOrders.vue?vue&type=template&id=aa20629a&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Admin/OffersOrders.vue?vue&type=template&id=aa20629a& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "uk-margin" }, [
    _c(
      "nav",
      {
        staticClass: "uk-navbar-container",
        staticStyle: { margin: "20px 0px" },
        attrs: { "uk-navbar": "" }
      },
      [
        _c("div", { staticClass: "uk-navbar-right" }, [
          _c("ul", { staticClass: "uk-navbar-nav" }, [
            _c("li", [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.status,
                      expression: "status"
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
                        _vm.status = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      },
                      function($event) {
                        return _vm.onChange($event)
                      }
                    ]
                  }
                },
                [
                  _c("option", { attrs: { value: "waiting" } }, [
                    _vm._v("Waiting")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "pending" } }, [
                    _vm._v("Pending")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "delivered" } }, [
                    _vm._v("Delivered")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "issued" } }, [
                    _vm._v("Issued")
                  ])
                ]
              )
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
        _vm._l(_vm.orders, function(order, index) {
          return _c("tbody", { key: order.id }, [
            _c("tr", [
              _c("td", { staticStyle: { width: "5%" } }, [
                _vm._v(_vm._s(order.id))
              ]),
              _vm._v(" "),
              _c(
                "td",
                { staticClass: "text-center", staticStyle: { width: "15%" } },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-outline-info",
                      attrs: { "uk-toggle": "target: #CartOrders" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.ShowCartOrders(order.id)
                        }
                      }
                    },
                    [_c("span", { staticClass: "fas fa-shopping-cart" })]
                  )
                ]
              ),
              _vm._v(" "),
              _c("td", { staticStyle: { width: "5%" } }, [
                _vm._v(_vm._s(order.sender_full_name))
              ]),
              _vm._v(" "),
              _c("td", { staticStyle: { width: "10%" } }, [
                _vm._v(_vm._s(order.sender_phone_number))
              ]),
              _vm._v(" "),
              _c("td", { staticStyle: { width: "5%" } }, [
                _vm._v(_vm._s(order.sender_state))
              ]),
              _vm._v(" "),
              _c("td", { staticStyle: { width: "10%" } }, [
                _vm._v(_vm._s(order.sender_address))
              ]),
              _vm._v(" "),
              _c("td", { staticStyle: { width: "5%" } }, [
                _vm._v(_vm._s(order.receiver_full_name))
              ]),
              _vm._v(" "),
              _c("td", { staticStyle: { width: "10%" } }, [
                _vm._v(_vm._s(order.receiver_phone_number))
              ]),
              _vm._v(" "),
              _c("td", { staticStyle: { width: "5%" } }, [
                _vm._v(_vm._s(order.receiver_state))
              ]),
              _vm._v(" "),
              _c("td", { staticStyle: { width: "10%" } }, [
                _vm._v(_vm._s(order.receiver_address))
              ]),
              _vm._v(" "),
              _c("td", { staticStyle: { width: "10%" } }, [
                _vm._v(_vm._s(order.receiving_date))
              ]),
              _vm._v(" "),
              _c("td", { staticStyle: { width: "10%" } }, [
                _vm._v(_vm._s(order.Total_Price))
              ])
            ])
          ])
        })
      ],
      2
    ),
    _vm._v(" "),
    _c("div", { attrs: { id: "CartOrders", "uk-modal": "" } }, [
      _c(
        "div",
        {
          staticClass: "uk-modal-dialog uk-modal-body",
          staticStyle: { width: "100%", background: "#f3f3f3" }
        },
        [
          _c(
            "h2",
            {
              staticClass: "uk-modal-title",
              staticStyle: { "text-align": "left", "padding-left": "10px" }
            },
            [_vm._v("Total Price : " + _vm._s(_vm.CartOrders.Total_Price))]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "uk-child-width-1-1@m",
              staticStyle: { "margin-left": "0px", padding: "10px" },
              attrs: { "uk-grid": "", "uk-scrollspy": "cls:  " }
            },
            [
              _c(
                "table",
                {
                  staticClass: "table cust-table uk-card uk-card-default",
                  attrs: { border: "0" }
                },
                [
                  _vm._m(2),
                  _vm._v(" "),
                  !_vm.isLoadedCarts
                    ? _c("tbody", { staticClass: "tbdy" }, [_vm._m(3)])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._l(_vm.CartOrders.result, function(order, index) {
                    return _c("tbody", { key: order.id }, [
                      _c("tr", [
                        _c("th", { staticStyle: { width: "10%" } }, [
                          _vm._v(_vm._s(index + 1))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticStyle: { width: "10%" } }, [
                          _vm._v(_vm._s(order.product_name))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticStyle: { width: "10%" } }, [
                          order.free_shipping
                            ? _c("span", [_vm._v("Yes")])
                            : _c("span", [_vm._v("No")])
                        ]),
                        _vm._v(" "),
                        _c("td", { staticStyle: { width: "10%" } }, [
                          _vm._v(_vm._s(order.price))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticStyle: { width: "10%" } }, [
                          _vm._v(_vm._s(order.quantity))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticStyle: { width: "10%" } }, [
                          _vm._v(_vm._s(order.Total_Price))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticStyle: { width: "10%" } }, [
                          _vm._v(_vm._s(order.order_number))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticStyle: { width: "10%" } }, [
                          _vm._v(_vm._s(order.image))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticStyle: { width: "20%" } }, [
                          _vm._v(_vm._s(order.describtion))
                        ])
                      ])
                    ])
                  })
                ],
                2
              )
            ]
          ),
          _vm._v(" "),
          _c("p", { staticClass: "uk-text-right" }, [
            _c(
              "button",
              {
                staticClass: "uk-button uk-button-default uk-modal-close",
                attrs: { type: "button" }
              },
              [_vm._v("Cancel")]
            ),
            _vm._v(" "),
            _vm.status == "waiting"
              ? _c(
                  "button",
                  {
                    staticClass: "uk-button uk-button-primary",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.AcceptedCart()
                      }
                    }
                  },
                  [
                    _vm.miniload
                      ? _c("i", { staticClass: "fa fa-refresh fa-spin" })
                      : _c("span", [_vm._v("Accepted")])
                  ]
                )
              : _vm._e()
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", {}, [
        _c("th", { staticStyle: { width: "5%" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-center", staticStyle: { width: "15%" } },
          [_c("li", { staticClass: "fa fa-gear" })]
        ),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "30%" } }, [_vm._v("Sender")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "30%" } }, [_vm._v("Receiver")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "10%" } }, [_vm._v("Receiving Date")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "10%" } }, [_vm._v("Total Price")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { staticStyle: { width: "5%" } }, [
        _c("i", { staticClass: "fa fa-refresh fa-spin" })
      ]),
      _vm._v(" "),
      _c("td", { staticStyle: { width: "15%" } }, [
        _c("i", { staticClass: "fa fa-refresh fa-spin" })
      ]),
      _vm._v(" "),
      _c("td", { staticStyle: { width: "30%" } }, [
        _c("i", { staticClass: "fa fa-refresh fa-spin" })
      ]),
      _vm._v(" "),
      _c("td", { staticStyle: { width: "30%" } }, [
        _c("i", { staticClass: "fa fa-refresh fa-spin" })
      ]),
      _vm._v(" "),
      _c("td", { staticStyle: { width: "10%" } }, [
        _c("i", { staticClass: "fa fa-refresh fa-spin" })
      ]),
      _vm._v(" "),
      _c("td", { staticStyle: { width: "10%" } }, [
        _c("i", { staticClass: "fa fa-refresh fa-spin" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", {}, [
        _c("th", { staticStyle: { width: "10%" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "10%" } }, [_vm._v("product_name")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "10%" } }, [_vm._v("free_shipping")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "10%" } }, [_vm._v("price")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "10%" } }, [_vm._v("quantity")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "10%" } }, [_vm._v("Total_Price")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "10%" } }, [_vm._v("order_number")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "10%" } }, [_vm._v("image")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "20%" } }, [_vm._v("describtion")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { staticStyle: { width: "10%" } }, [
        _c("i", { staticClass: "fa fa-refresh fa-spin" })
      ]),
      _c("td", { staticStyle: { width: "10%" } }, [
        _c("i", { staticClass: "fa fa-refresh fa-spin" })
      ]),
      _vm._v(" "),
      _c("td", { staticStyle: { width: "10%" } }, [
        _c("i", { staticClass: "fa fa-refresh fa-spin" })
      ]),
      _vm._v(" "),
      _c("td", { staticStyle: { width: "10%" } }, [
        _c("i", { staticClass: "fa fa-refresh fa-spin" })
      ]),
      _vm._v(" "),
      _c("td", { staticStyle: { width: "10%" } }, [
        _c("i", { staticClass: "fa fa-refresh fa-spin" })
      ]),
      _vm._v(" "),
      _c("td", { staticStyle: { width: "10%" } }, [
        _c("i", { staticClass: "fa fa-refresh fa-spin" })
      ]),
      _vm._v(" "),
      _c("td", { staticStyle: { width: "10%" } }, [
        _c("i", { staticClass: "fa fa-refresh fa-spin" })
      ]),
      _vm._v(" "),
      _c("td", { staticStyle: { width: "10%" } }, [
        _c("i", { staticClass: "fa fa-refresh fa-spin" })
      ]),
      _vm._v(" "),
      _c("td", { staticStyle: { width: "20%" } }, [
        _c("i", { staticClass: "fa fa-refresh fa-spin" })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/Admin/OffersOrders.vue":
/*!***************************************************************!*\
  !*** ./resources/assets/js/components/Admin/OffersOrders.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OffersOrders_vue_vue_type_template_id_aa20629a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OffersOrders.vue?vue&type=template&id=aa20629a& */ "./resources/assets/js/components/Admin/OffersOrders.vue?vue&type=template&id=aa20629a&");
/* harmony import */ var _OffersOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OffersOrders.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/Admin/OffersOrders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OffersOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OffersOrders_vue_vue_type_template_id_aa20629a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OffersOrders_vue_vue_type_template_id_aa20629a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/Admin/OffersOrders.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Admin/OffersOrders.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/components/Admin/OffersOrders.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OffersOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OffersOrders.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/OffersOrders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OffersOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Admin/OffersOrders.vue?vue&type=template&id=aa20629a&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/components/Admin/OffersOrders.vue?vue&type=template&id=aa20629a& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OffersOrders_vue_vue_type_template_id_aa20629a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OffersOrders.vue?vue&type=template&id=aa20629a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/OffersOrders.vue?vue&type=template&id=aa20629a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OffersOrders_vue_vue_type_template_id_aa20629a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OffersOrders_vue_vue_type_template_id_aa20629a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);