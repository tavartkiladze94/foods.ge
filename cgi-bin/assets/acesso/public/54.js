(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/reports.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Admin/reports.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
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

      axios.get("/api/Report?page=".concat(this.$route.params.page)).then(function (res) {
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
        path: "/reports/".concat(this.current_page + 1)
      });
    },
    Previous: function Previous() {
      this.$router.push({
        path: "/reports/".concat(this.current_page - 1)
      });
    }
  }
  /*mounted() {
      console.log('Component mounted.')
  }*/

});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/reports.vue?vue&type=template&id=265672d8&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Admin/reports.vue?vue&type=template&id=265672d8& ***!
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
              _c("td", { staticStyle: { width: "200px" } }, [
                _vm._v(_vm._s(order.name))
              ]),
              _vm._v(" "),
              _c("td", { staticStyle: { width: "200px" } }, [
                _vm._v(_vm._s(order.phone_number))
              ]),
              _vm._v(" "),
              _c("td", { staticStyle: { width: "200px" } }, [
                _vm._v(_vm._s(order.track_code))
              ]),
              _vm._v(" "),
              _c("td", { staticStyle: { width: "400px" } }, [
                _vm._v(_vm._s(order.describtion))
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
    return _c("thead", [
      _c("tr", {}, [
        _c("th", { staticStyle: { width: "80px" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "200px" } }, [
          _c("i", { staticClass: "fas fa-id-card" })
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "200px" } }, [
          _c("i", { staticClass: "fas fa-phone" })
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "200px" } }, [
          _c("i", { staticClass: "fas fa-truck" }),
          _c("i", { staticClass: "fas fa-key" })
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "400px" } }, [
          _c("i", { staticClass: "fas fa-envelope-open-text" })
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
      _c("td", { staticStyle: { width: "400px" } }, [
        _c("i", { staticClass: "fa fa-refresh fa-spin" })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/Admin/reports.vue":
/*!**********************************************************!*\
  !*** ./resources/assets/js/components/Admin/reports.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reports_vue_vue_type_template_id_265672d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reports.vue?vue&type=template&id=265672d8& */ "./resources/assets/js/components/Admin/reports.vue?vue&type=template&id=265672d8&");
/* harmony import */ var _reports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reports.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/Admin/reports.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _reports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _reports_vue_vue_type_template_id_265672d8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _reports_vue_vue_type_template_id_265672d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/Admin/reports.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Admin/reports.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/assets/js/components/Admin/reports.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./reports.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/reports.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Admin/reports.vue?vue&type=template&id=265672d8&":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/components/Admin/reports.vue?vue&type=template&id=265672d8& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reports_vue_vue_type_template_id_265672d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./reports.vue?vue&type=template&id=265672d8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/reports.vue?vue&type=template&id=265672d8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reports_vue_vue_type_template_id_265672d8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reports_vue_vue_type_template_id_265672d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);