(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[69],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/My_Invoice.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/My_Invoice.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CreatePost",
  data: function data() {
    return {
      post: {
        WebDeliver: 'WebDeliver'
      },
      val_errors: false,
      notConfirmed: false,
      OnlyDelivers: false,
      OnlyGD: false,
      loading: false
    };
  },
  created: function created() {
    $cookies.remove("token");
    $cookies.remove("table_type");
  },
  methods: {
    createPost: function createPost(post) {
      var _this = this;

      //laravel
      this.val_errors = false; // validationerrors

      this.notConfirmed = false; // if account not confirmed (error)

      this.loading = true; // for loading view

      this.OnlyDelivers = false;
      axios.post("/api/login_in", post).then(function (res) {
        if (res.status == 203) {
          _this.notConfirmed = true;
        }

        if (res.status == 204) {
          _this.OnlyDelivers = true;
        }

        if (res.status == 205) {
          _this.OnlyGD = true;
        }

        if (res.status == 200) {
          //if (res.data.table_type == "delivers") {
          $cookies.set('token', res.data.token);
          $cookies.set('table_type', res.data.table_type);
          $cookies.set('value', res.data.value);

          if (res.data.value == 5) {
            window.location.href = "/Gd_Panel";
          }

          if (res.data.value == 4) {
            window.location.href = "/DeliverPanel";
          } //}

        } //console.log(res.data);


        _this.loading = false;
      })["catch"](function (err) {
        _this.val_errors = true;
        _this.loading = false;
      });
    }
  },
  computed: {
    isValid: function isValid() {
      return this.post.phone_number !== '' && this.post.password !== '';
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/My_Invoice.vue?vue&type=template&id=6501b81e&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/My_Invoice.vue?vue&type=template&id=6501b81e& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      {
        staticStyle: { "margin-left": "0px" },
        attrs: { "uk-grid": "", id: "Div1" }
      },
      [
        _c(
          "div",
          {
            staticClass: "hodhod-imag-login",
            staticStyle: {
              background:
                "linear-gradient(90deg, rgba(100, 255, 141, 0.8869922969187675) 15%, rgb(62, 196, 84) 37%, rgba(0, 176, 38, 0.923406862745098) 64%, rgba(0, 151, 60, 0.9430147058823529) 88%)"
            }
          },
          [
            _c("center", [
              _c("img", {
                staticStyle: { margin: "auto", "margin-top": "10%" },
                attrs: { src: "/images/ihodhod.png", width: "66%" }
              }),
              _vm._v(" "),
              _c(
                "h1",
                {
                  staticStyle: {
                    color: "#ffffff",
                    "font-weight": "bold",
                    "font-size": "29px",
                    "font-family": "tahoma",
                    "text-shadow": "0px 0px 10px #454545"
                  }
                },
                [_vm._v("إدارة المندوبين")]
              )
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "hodhod-center" },
          [
            _c("center", [
              _c("h1", [_vm._v(" تسجيل تدخول ")]),
              _vm._v(" "),
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      return _vm.createPost(_vm.post)
                    }
                  }
                },
                [
                  _vm.val_errors
                    ? _c("div", { staticClass: "errorLOGIN" }, [
                        _vm._v("خطأ حاول مرة اخرى")
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.notConfirmed
                    ? _c("div", { staticClass: "errorLOGIN" }, [
                        _vm._v("الحساب غير مؤكد من قبل ادارة هدهد")
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.OnlyDelivers || _vm.OnlyGD
                    ? _c("div", { staticClass: "errorLOGIN" }, [
                        _vm._v("تدعم حسابات ادارة المندوبين فقط")
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "div",
                      {
                        staticClass: "uk-inline",
                        staticStyle: {
                          "margin-left": "0px",
                          "margin-right": "0px"
                        }
                      },
                      [
                        _c("span", {
                          staticClass: "uk-form-icon",
                          attrs: { "uk-icon": "icon: user" }
                        }),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.post.phone_number,
                              expression: "post.phone_number"
                            }
                          ],
                          staticClass: "uk-input hodhod-input",
                          attrs: { type: "text", placeholder: "Number" },
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
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticStyle: {
                        "margin-left": "0px",
                        "margin-right": "0px"
                      }
                    },
                    [
                      _c("div", { staticClass: "uk-inline" }, [
                        _c("span", {
                          staticClass: "uk-form-icon",
                          attrs: { "uk-icon": "icon: lock" }
                        }),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.post.password,
                              expression: "post.password"
                            }
                          ],
                          staticClass: "uk-input hodhod-input",
                          attrs: { type: "password", placeholder: "Password" },
                          domProps: { value: _vm.post.password },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.post,
                                "password",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "div",
                      {
                        staticClass: "uk-inline",
                        staticStyle: {
                          "margin-left": "0px",
                          "margin-right": "0px"
                        }
                      },
                      [
                        _vm.loading
                          ? _c(
                              "button",
                              {
                                staticClass:
                                  "uk-button uk-button-secondary uk-width-1-1 hodhod-button",
                                staticStyle: { background: "#1cc819" },
                                attrs: { disabled: _vm.loading },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.createPost(_vm.post)
                                  }
                                }
                              },
                              [
                                _c("span", {
                                  staticClass: "fa fa-refresh fa-spin",
                                  staticStyle: { color: "white" }
                                })
                              ]
                            )
                          : _c(
                              "button",
                              {
                                staticClass:
                                  "uk-button uk-button-secondary uk-width-1-1 hodhod-button",
                                staticStyle: { background: "#1cc819" },
                                attrs: { disabled: _vm.loading },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.createPost(_vm.post)
                                  }
                                }
                              },
                              [
                                _c("span", {
                                  staticClass: "hodhod-icon-login",
                                  attrs: { "uk-icon": "sign-in" }
                                })
                              ]
                            )
                      ]
                    )
                  ])
                ]
              )
            ])
          ],
          1
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "nav",
      {
        staticClass: "uk-navbar-container uk-margin MyInvoiceMobile",
        staticStyle: {
          background:
            "linear-gradient(90deg, rgba(100, 255, 141, 0.886) 15%, rgb(62, 196, 84) 37%, rgba(0, 176, 38, 0.92) 64%, rgba(0, 151, 60, 0.94) 88%)"
        },
        attrs: { "uk-navbar": "" }
      },
      [
        _c(
          "div",
          {
            staticClass: "uk-navbar-center",
            staticStyle: { display: "initial" }
          },
          [
            _c(
              "a",
              { staticClass: "uk-navbar-item uk-logo", attrs: { href: "#" } },
              [
                _c("img", {
                  staticStyle: { width: "71px" },
                  attrs: { src: "/images/ihodhod.png" }
                })
              ]
            )
          ]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/My_Invoice.vue":
/*!*******************************************************!*\
  !*** ./resources/assets/js/components/My_Invoice.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _My_Invoice_vue_vue_type_template_id_6501b81e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./My_Invoice.vue?vue&type=template&id=6501b81e& */ "./resources/assets/js/components/My_Invoice.vue?vue&type=template&id=6501b81e&");
/* harmony import */ var _My_Invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./My_Invoice.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/My_Invoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _My_Invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _My_Invoice_vue_vue_type_template_id_6501b81e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _My_Invoice_vue_vue_type_template_id_6501b81e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/My_Invoice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/My_Invoice.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/components/My_Invoice.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_My_Invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./My_Invoice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/My_Invoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_My_Invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/My_Invoice.vue?vue&type=template&id=6501b81e&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/components/My_Invoice.vue?vue&type=template&id=6501b81e& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_My_Invoice_vue_vue_type_template_id_6501b81e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./My_Invoice.vue?vue&type=template&id=6501b81e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/My_Invoice.vue?vue&type=template&id=6501b81e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_My_Invoice_vue_vue_type_template_id_6501b81e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_My_Invoice_vue_vue_type_template_id_6501b81e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);