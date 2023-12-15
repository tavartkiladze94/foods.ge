(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[71],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/auth/Client_Location.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/auth/Client_Location.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
      loading: false,
      location: null,
      gettingLocation: false,
      errorStr: null
    };
  },
  created: function created() {
    var _this = this;

    //do we support geolocation
    if (!("geolocation" in navigator)) {
      this.errorStr = 'Geolocation is not available.';
      return;
    }

    this.gettingLocation = true; // get position

    navigator.geolocation.getCurrentPosition(function (pos) {
      _this.gettingLocation = false;
      _this.location = pos;
    }, function (err) {
      _this.gettingLocation = false;
      _this.errorStr = err.message;
    });
  },
  methods: {
    copyTestingCode: function copyTestingCode() {
      var testingCodeToCopy = document.querySelector('#testing-code');
      testingCodeToCopy.setAttribute('type', 'text'); // 不是 hidden 才能複製

      testingCodeToCopy.select();

      try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        var toast = this.$toasted.show("تم النسخ", {
          type: 'success',
          theme: "bubble",
          position: "bottom-right",
          duration: 2000
        }); //alert('Testing code was copied ' + msg);
      } catch (err) {
        var _toast = this.$toasted.show("حدث خطأ ما", {
          type: 'error',
          theme: "bubble",
          position: "bottom-right",
          duration: 2000
        });
      }
      /* unselect the range */


      testingCodeToCopy.setAttribute('type', 'hidden');
      window.getSelection().removeAllRanges();
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/auth/Client_Location.vue?vue&type=template&id=7e6744d9&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/auth/Client_Location.vue?vue&type=template&id=7e6744d9& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticStyle: { "text-align": "center" } }, [
      _vm._m(1),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _c("br"),
      _c("br"),
      _c("br"),
      _vm._v(" "),
      _vm.errorStr
        ? _c("div", { staticClass: "row Cdiv4" }, [
            _c("div", { staticClass: "col-sm-12" }, [
              _c("span", [
                _vm._v(
                  "Sorry, but the following error occurred: " +
                    _vm._s(_vm.errorStr)
                )
              ])
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.gettingLocation
        ? _c("div", { staticClass: "row Cdiv4" }, [_vm._m(3)])
        : _vm._e(),
      _vm._v(" "),
      _vm.location
        ? _c("div", { staticClass: "row Cdiv4" }, [
            _c("div", { staticClass: "col-sm-12" }, [
              _c("span", [
                _vm._v(
                  _vm._s(_vm.location.coords.latitude) +
                    "," +
                    _vm._s(_vm.location.coords.longitude)
                )
              ])
            ]),
            _vm._v(" "),
            _c("input", {
              attrs: { type: "hidden", id: "testing-code" },
              domProps: {
                value:
                  _vm.location.coords.latitude +
                  "," +
                  _vm.location.coords.longitude
              }
            })
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("br"),
      _c("br"),
      _c("br"),
      _vm._v(" "),
      _vm.location
        ? _c("div", { staticClass: "row Cdiv5" }, [
            _c("div", { staticClass: "col-sm-12" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-success Cdiv5",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      $event.preventDefault()
                      return _vm.copyTestingCode($event)
                    }
                  }
                },
                [_vm._v("نسخ")]
              )
            ])
          ])
        : _vm._e()
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row Cdiv1" }, [
      _c("div", { staticClass: "col-sm-12" }, [_vm._v("هدهد للتوصيل التشاركي")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row Cdiv2" }, [
      _c("div", { staticClass: "col-sm-12" }, [
        _vm._v("قم بنسخ رمز الموقع وارساله الى صاحب المتجر")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row Cdiv3" }, [
      _c("div", { staticClass: "col-sm-12" }, [
        _vm._v(
          "تنبيه : ان لم تطلب اي شيء لتوصيله اليك من صاحب المتجر لاتقوم باجراء هذه العملية"
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-12" }, [
      _c("span", [_vm._v("Getting your location...")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/auth/Client_Location.vue":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/components/auth/Client_Location.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Client_Location_vue_vue_type_template_id_7e6744d9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Client_Location.vue?vue&type=template&id=7e6744d9& */ "./resources/assets/js/components/auth/Client_Location.vue?vue&type=template&id=7e6744d9&");
/* harmony import */ var _Client_Location_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Client_Location.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/auth/Client_Location.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Client_Location_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Client_Location_vue_vue_type_template_id_7e6744d9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Client_Location_vue_vue_type_template_id_7e6744d9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/auth/Client_Location.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/auth/Client_Location.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/components/auth/Client_Location.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Client_Location_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Client_Location.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/auth/Client_Location.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Client_Location_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/auth/Client_Location.vue?vue&type=template&id=7e6744d9&":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/components/auth/Client_Location.vue?vue&type=template&id=7e6744d9& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Client_Location_vue_vue_type_template_id_7e6744d9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Client_Location.vue?vue&type=template&id=7e6744d9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/auth/Client_Location.vue?vue&type=template&id=7e6744d9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Client_Location_vue_vue_type_template_id_7e6744d9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Client_Location_vue_vue_type_template_id_7e6744d9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);