(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[72],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/auth/Login.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/auth/Login.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CreatePost",
  data: function data() {
    return {
      post: {
        web: 'web'
      },
      val_errors: false,
      notConfirmed: false,
      OnlyAdminsAndReceivers: false,
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

      this.OnlyAdminsAndReceivers = false;
      axios.post("/api/login_in", post).then(function (res) {
        if (res.status == 203) {
          _this.notConfirmed = true;
        }

        if (res.status == 200) {
          $cookies.set('token', res.data.token);
          $cookies.set('table_type', res.data.table_type);

          if (res.data.table_type == "admins") {
            window.location.href = "/center";
          }

          if (res.data.table_type == "receivers") {
            window.location.href = "/unconfirmed_delivers/1";
          }
        }

        if (res.status == 204) {
          _this.OnlyAdminsAndReceivers = true;
        }

        _this.loading = false;
      })["catch"](function (err) {
        _this.loading = false;
        _this.val_errors = true;
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/auth/Login.vue?vue&type=template&id=dca5370e&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/auth/Login.vue?vue&type=template&id=dca5370e& ***!
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
  return _c("div", { attrs: { "uk-grid": "", id: "Div1" } }, [
    _c(
      "div",
      { staticClass: "hodhod-imag-login" },
      [
        _c("center", [
          _c("img", {
            staticStyle: { margin: "auto", "margin-top": "10%" },
            attrs: { src: "/images/ihodhod.png", width: "66%" }
          }),
          _vm._v(" "),
          _c("h1", [_vm._v("System Login Hodhod")])
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
          _c("h1", [_vm._v(" Login to Hodhod ")]),
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
                    _vm._v("incorrect informations")
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.notConfirmed
                ? _c("div", { staticClass: "errorLOGIN" }, [
                    _vm._v("your account must be confirmed by admin")
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.OnlyAdminsAndReceivers
                ? _c("div", { staticClass: "errorLOGIN" }, [
                    _vm._v("only admins and receivers can access this page")
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("div", [
                _c(
                  "div",
                  {
                    staticClass: "uk-inline",
                    staticStyle: { "margin-left": "0px", "margin-right": "0px" }
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
                  staticStyle: { "margin-left": "0px", "margin-right": "0px" }
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
                          _vm.$set(_vm.post, "password", $event.target.value)
                        }
                      }
                    })
                  ])
                ]
              ),
              _vm._v(" "),
              _c("label", [
                _c("input", { attrs: { type: "checkbox" } }),
                _vm._v(" Remamber Password")
              ]),
              _vm._v(" "),
              _c("div", [
                _c(
                  "div",
                  {
                    staticClass: "uk-inline",
                    staticStyle: { "margin-left": "0px", "margin-right": "0px" }
                  },
                  [
                    _vm.loading
                      ? _c(
                          "button",
                          {
                            staticClass:
                              "uk-button uk-button-secondary uk-width-1-1 hodhod-button",
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
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/auth/Login.vue":
/*!*******************************************************!*\
  !*** ./resources/assets/js/components/auth/Login.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_dca5370e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=dca5370e& */ "./resources/assets/js/components/auth/Login.vue?vue&type=template&id=dca5370e&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/auth/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_dca5370e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_dca5370e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/auth/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/auth/Login.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/components/auth/Login.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/auth/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/auth/Login.vue?vue&type=template&id=dca5370e&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/components/auth/Login.vue?vue&type=template&id=dca5370e& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_dca5370e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=dca5370e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/auth/Login.vue?vue&type=template&id=dca5370e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_dca5370e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_dca5370e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);