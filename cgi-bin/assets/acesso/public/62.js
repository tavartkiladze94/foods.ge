(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[62],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Delivers/GD_RecievingDeliverOrders.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Delivers/GD_RecievingDeliverOrders.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuejs_datepicker_dist_vuejs_datepicker_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuejs-datepicker/dist/vuejs-datepicker.esm.js */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var vue_simple_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-simple-alert */ "./node_modules/vue-simple-alert/lib/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 //import moment from "moment";

Vue.use(vue_simple_alert__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Datepicker: vuejs_datepicker_dist_vuejs_datepicker_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      orders: {},
      post: {},
      dateFrom: 'All',
      dateTo: 'All',
      vModelExample: null,
      status: 'pending',
      notifications: {},
      admin: false,
      Cancle: false,
      type: false,
      nextpage: false,
      prevpage: false,
      miniload: false,
      receiver: false
    };
  },
  created: function created() {
    this.fetchArticles(this.status, 1, this.dateFrom, this.dateTo);
    this.type = $cookies.get('table_type');

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

      this.isLoaded = false;
      axios.get("/api/GD_MyReceivingDeliversOrders/".concat(this.$route.params.DeliverId)).then(function (res) {
        _this.orders = res.data; //this.current_page = res.data.current_page;
        //this.nextpage = res.data.next_page_url;
        //this.prevpage = res.data.prev_page_url;

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
    formatDate: function formatDate(time) {
      return new Date(time);
    },
    ViewDetails: function ViewDetails(order) {
      this.$fire({
        title: this.formatDate(order.created_at).toLocaleDateString(['en-iq'], {
          month: 'short',
          day: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        //text: "updated At: "+order.updated_at,
        type: "info",
        timer: 0
      }).then(function (r) {
        console.log(r.value);
      });
    } //Next() { this.fetchArticles(this.status,this.current_page+1, this.dateFrom,  this.dateTo); },
    //Previous() { this.fetchArticles(this.status,this.current_page-1, this.dateFrom,  this.dateTo); },

  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Delivers/GD_RecievingDeliverOrders.vue?vue&type=template&id=418b69ca&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Delivers/GD_RecievingDeliverOrders.vue?vue&type=template&id=418b69ca& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
          return _vm.isLoaded
            ? _c("tbody", { key: order.id }, [
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
                        { attrs: { to: "/order_details/" + order.id } },
                        [
                          _c(
                            "button",
                            { staticClass: "btn btn-outline-info" },
                            [_c("span", { staticClass: "fa fa-eye" })]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _vm.miniload
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
                      _vm.admin
                        ? _c(
                            "button",
                            {
                              directives: [{ name: "else", rawName: "v-else" }],
                              staticClass: "btn btn-outline-danger",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.deleteOrder(order)
                                }
                              }
                            },
                            [_c("span", { staticClass: "fa fa-trash-o" })]
                          )
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("td", { staticStyle: { width: "200px" } }, [
                    _vm._v(_vm._s(order.product_name))
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
                  _c(
                    "td",
                    { staticStyle: { width: "100px", overflow: "hidden" } },
                    [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-info",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.ViewDetails(order)
                            }
                          }
                        },
                        [_c("span", { staticClass: "far fa-calendar-alt" })]
                      )
                    ]
                  )
                ])
              ])
            : _vm._e()
        })
      ],
      2
    ),
    _vm._v(" "),
    _c("br"),
    _c("br"),
    _vm._v(" "),
    _vm.orders.data.length == 0 && _vm.isLoaded
      ? _c("div", { attrs: { align: "center" } }, [
          _c("i", {
            staticClass: "fas fa-box-open",
            staticStyle: { "font-size": "32vmin", color: "#e0e0e0" }
          })
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("br")
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
        _c(
          "th",
          { staticClass: "text-center", staticStyle: { width: "200px" } },
          [_c("li", { staticClass: "fa fa-gear" })]
        ),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "200px" } }, [_vm._v("product name")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "200px" } }, [_vm._v("sender phone")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "200px" } }, [
          _vm._v("sender address")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "200px" } }, [
          _vm._v("receiver name")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "200px" } }, [
          _vm._v("receiver phone")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "200px" } }, [
          _vm._v("receiver address")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "150px" } }, [_vm._v("price")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "100px" } }, [_vm._v("date")])
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
      _c("td", { staticStyle: { width: "100px" } }, [
        _c("i", { staticClass: "fa fa-refresh fa-spin" })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/Delivers/GD_RecievingDeliverOrders.vue":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/components/Delivers/GD_RecievingDeliverOrders.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GD_RecievingDeliverOrders_vue_vue_type_template_id_418b69ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GD_RecievingDeliverOrders.vue?vue&type=template&id=418b69ca& */ "./resources/assets/js/components/Delivers/GD_RecievingDeliverOrders.vue?vue&type=template&id=418b69ca&");
/* harmony import */ var _GD_RecievingDeliverOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GD_RecievingDeliverOrders.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/Delivers/GD_RecievingDeliverOrders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GD_RecievingDeliverOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GD_RecievingDeliverOrders_vue_vue_type_template_id_418b69ca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GD_RecievingDeliverOrders_vue_vue_type_template_id_418b69ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/Delivers/GD_RecievingDeliverOrders.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Delivers/GD_RecievingDeliverOrders.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/assets/js/components/Delivers/GD_RecievingDeliverOrders.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GD_RecievingDeliverOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GD_RecievingDeliverOrders.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Delivers/GD_RecievingDeliverOrders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GD_RecievingDeliverOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Delivers/GD_RecievingDeliverOrders.vue?vue&type=template&id=418b69ca&":
/*!**************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Delivers/GD_RecievingDeliverOrders.vue?vue&type=template&id=418b69ca& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GD_RecievingDeliverOrders_vue_vue_type_template_id_418b69ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GD_RecievingDeliverOrders.vue?vue&type=template&id=418b69ca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Delivers/GD_RecievingDeliverOrders.vue?vue&type=template&id=418b69ca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GD_RecievingDeliverOrders_vue_vue_type_template_id_418b69ca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GD_RecievingDeliverOrders_vue_vue_type_template_id_418b69ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);