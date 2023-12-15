(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/users.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Admin/users.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      orders: {},
      post: {},
      admin: false,
      miniload: false,
      receiver: false
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

      axios.get("/api/Admin/modify_account_get/users?page=".concat(this.$route.params.page)).then(function (res) {
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
    createPost: function createPost(post) {
      this.$router.push({
        path: "/serach_for_accounts/".concat(this.post.phone_number),
        params: {
          post: post
        }
      });
    },
    Next: function Next() {
      this.$router.push({
        path: "/Admin_Accounts_users/".concat(this.current_page + 1)
      });
    },
    Previous: function Previous() {
      this.$router.push({
        path: "/Admin_Accounts_users/".concat(this.current_page - 1)
      });
    },
    Release: function Release(order_id) {
      var _this2 = this;

      this.miniload = true;
      axios.post("/api/Receiver/accounting", order_id).then(function (response) {
        _this2.isLoaded = true;
        console.log(response.status);

        if (response.status == 200) {
          var toast = _this2.$toasted.show("Released", {
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
    }
  }
  /*mounted() {
      console.log('Component mounted.')
  }*/

});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/users.vue?vue&type=template&id=71f8eee1&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Admin/users.vue?vue&type=template&id=71f8eee1& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
      "table",
      {
        staticClass: "table cust-table uk-card uk-card-default",
        attrs: { border: "0" }
      },
      [
        _c("thead", [
          _c("tr", [
            _c(
              "th",
              {
                staticStyle: {
                  width: "auto",
                  "border-bottom": "none",
                  "border-top": "none"
                }
              },
              [
                _c(
                  "nav",
                  {
                    staticClass: "uk-navbar-container uk-margin",
                    attrs: { "uk-navbar": "" }
                  },
                  [
                    _vm._m(0),
                    _vm._v(" "),
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "nav-overlay uk-navbar-left uk-flex-1",
                        attrs: { hidden: "" }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "uk-navbar-item uk-width-expand" },
                          [
                            _c(
                              "form",
                              {
                                staticClass:
                                  "uk-search uk-search-navbar uk-width-1-1",
                                on: {
                                  submit: function($event) {
                                    $event.preventDefault()
                                    return _vm.createPost(_vm.post)
                                  }
                                }
                              },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.post.phone_number,
                                      expression: "post.phone_number"
                                    }
                                  ],
                                  staticClass: "uk-search-input",
                                  attrs: {
                                    type: "search",
                                    placeholder: "Enter Phone Number",
                                    autofocus: ""
                                  },
                                  domProps: { value: _vm.post.phone_number },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.post,
                                        "phone_number",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("a", {
                          staticClass: "uk-navbar-toggle",
                          attrs: {
                            "uk-close": "",
                            "uk-toggle":
                              "target: .nav-overlay; animation: uk-animation-fade",
                            href: "#"
                          }
                        })
                      ]
                    )
                  ]
                )
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _vm._m(2),
        _vm._v(" "),
        !_vm.isLoaded
          ? _c("tbody", { staticClass: "tbdy" }, [_vm._m(3)])
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
                { staticClass: "text-center", staticStyle: { width: "300px" } },
                [
                  _c(
                    "router-link",
                    { attrs: { to: "/viewusers/" + order.id } },
                    [
                      _c("button", { staticClass: "btn btn-outline-info" }, [
                        _c("span", { staticClass: "fa fa-eye" })
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _vm.admin
                    ? _c(
                        "router-link",
                        { attrs: { to: "/notify/" + order.phone_number } },
                        [
                          _c(
                            "button",
                            { staticClass: "btn btn-outline-success" },
                            [_c("span", { staticClass: "fas fa-comment-dots" })]
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.admin
                    ? _c(
                        "router-link",
                        { attrs: { to: "/ViewCart/2/" + order.id } },
                        [
                          _c(
                            "button",
                            { staticClass: "btn btn-outline-warning" },
                            [
                              _c("span", {
                                staticClass: "fas fa-shopping-cart"
                              })
                            ]
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.admin
                    ? _c(
                        "router-link",
                        {
                          attrs: { to: "/DeliverStat/" + order.id + "/users" }
                        },
                        [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-outline-info",
                              staticStyle: { color: "#04bacc" }
                            },
                            [_c("span", { staticClass: "fas fa-chart-bar" })]
                          )
                        ]
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
              _c("td", { staticStyle: { width: "100px" } }, [
                _vm._v(_vm._s(order.address_country))
              ]),
              _vm._v(" "),
              _c("td", { staticStyle: { width: "100px" } }, [
                _vm._v(_vm._s(order.address_state))
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
      _c("div", { staticClass: "col-sm-6 Next", attrs: { align: "center" } }, [
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
                attrs: { "_ngcontent-udn-32": "", type: "button", disabled: "" }
              },
              [
                _c("i", {
                  staticClass: "fa fa-chevron-right",
                  attrs: { "_ngcontent-udn-32": "" }
                })
              ]
            )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "nav-overlay uk-navbar-left" }, [
      _c("a", { staticClass: "uk-navbar-item uk-logo", attrs: { href: "#" } }, [
        _vm._v("Search by account phone number")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "nav-overlay uk-navbar-right" }, [
      _c("a", {
        staticClass: "uk-navbar-toggle",
        attrs: {
          "uk-search-icon": "",
          "uk-toggle": "target: .nav-overlay; animation: uk-animation-fade",
          href: "#"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticStyle: { width: "80px" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-center", staticStyle: { width: "300px" } },
          [_c("li", { staticClass: "fa fa-gear" })]
        ),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "200px" } }, [_vm._v("first name")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "200px" } }, [_vm._v("last name")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "100px" } }, [_vm._v("country")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "100px" } }, [_vm._v("state")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "200px" } }, [_vm._v("phone number")])
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
      _c("td", { staticStyle: { width: "300px" } }, [
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
      _c("td", { staticStyle: { width: "100px" } }, [
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

/***/ "./resources/assets/js/components/Admin/users.vue":
/*!********************************************************!*\
  !*** ./resources/assets/js/components/Admin/users.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _users_vue_vue_type_template_id_71f8eee1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.vue?vue&type=template&id=71f8eee1& */ "./resources/assets/js/components/Admin/users.vue?vue&type=template&id=71f8eee1&");
/* harmony import */ var _users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/Admin/users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _users_vue_vue_type_template_id_71f8eee1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _users_vue_vue_type_template_id_71f8eee1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/Admin/users.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Admin/users.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/assets/js/components/Admin/users.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Admin/users.vue?vue&type=template&id=71f8eee1&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/components/Admin/users.vue?vue&type=template&id=71f8eee1& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_template_id_71f8eee1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./users.vue?vue&type=template&id=71f8eee1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/users.vue?vue&type=template&id=71f8eee1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_template_id_71f8eee1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_template_id_71f8eee1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);