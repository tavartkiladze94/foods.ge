(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/Options.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Admin/Options.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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

      axios.get("/api/Admin/options").then(function (res) {
        _this.isLoaded = true;
        _this.orders = res.data;
      })["catch"](function (res) {
        var toast = _this.$toasted.show("Error 500", {
          type: 'error',
          theme: "bubble",
          position: "bottom-right",
          duration: 2000
        });
      });
    },
    createPost: function createPost(post, bool) {
      var _this2 = this;

      this.miniload = true;
      var formData = new FormData();
      formData.append('id', post);
      formData.append('bool', bool);
      axios.post("/api/Admin/options", formData).then(function (res) {
        var toast = _this2.$toasted.show("Updated", {
          type: 'success',
          theme: "bubble",
          position: "bottom-center",
          duration: 2000
        });

        axios.get("/api/Admin/options").then(function (res) {
          _this2.isLoaded = true;
          _this2.orders = res.data;
          _this2.miniload = false;
        })["catch"](function (err) {
          return console.log(err);
        });
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/Options.vue?vue&type=template&id=f9d66fd2&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Admin/Options.vue?vue&type=template&id=f9d66fd2& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
        _vm._m(0),
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
              _c("td", { staticStyle: { width: "300px" } }, [
                _vm._v(_vm._s(order.state))
              ]),
              _vm._v(" "),
              _c("td", { staticStyle: { width: "300px" } }, [
                _vm.miniload
                  ? _c("div", [
                      _c("span", { staticClass: "fa fa-refresh fa-spin" })
                    ])
                  : _c("div", [
                      order.available == 0
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-outline-success del-icon",
                              staticStyle: { padding: "9px" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.createPost(order.id, 1)
                                }
                              }
                            },
                            [_c("span", { staticClass: "fas fa-check-circle" })]
                          )
                        : _c(
                            "button",
                            {
                              staticClass: "btn btn-outline-danger del-icon",
                              staticStyle: { padding: "9px" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.createPost(order.id, 0)
                                }
                              }
                            },
                            [_c("span", { staticClass: "fas fa-times-circle" })]
                          )
                    ])
              ])
            ])
          ])
        })
      ],
      2
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticStyle: { width: "80px" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "300px" } }, [_vm._v("State")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "300px" } }, [_vm._v("Available")])
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
      _c("td", { staticStyle: { width: "300px" } }, [
        _c("i", { staticClass: "fa fa-refresh fa-spin" })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/Admin/Options.vue":
/*!**********************************************************!*\
  !*** ./resources/assets/js/components/Admin/Options.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Options_vue_vue_type_template_id_f9d66fd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Options.vue?vue&type=template&id=f9d66fd2& */ "./resources/assets/js/components/Admin/Options.vue?vue&type=template&id=f9d66fd2&");
/* harmony import */ var _Options_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Options.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/Admin/Options.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Options_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Options_vue_vue_type_template_id_f9d66fd2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Options_vue_vue_type_template_id_f9d66fd2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/Admin/Options.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Admin/Options.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/assets/js/components/Admin/Options.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Options_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Options.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/Options.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Options_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Admin/Options.vue?vue&type=template&id=f9d66fd2&":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/components/Admin/Options.vue?vue&type=template&id=f9d66fd2& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Options_vue_vue_type_template_id_f9d66fd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Options.vue?vue&type=template&id=f9d66fd2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/Options.vue?vue&type=template&id=f9d66fd2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Options_vue_vue_type_template_id_f9d66fd2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Options_vue_vue_type_template_id_f9d66fd2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);