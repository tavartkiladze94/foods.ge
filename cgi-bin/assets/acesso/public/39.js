(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/DeliverOrders.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Admin/DeliverOrders.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_simple_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-simple-alert */ "./node_modules/vue-simple-alert/lib/index.js");
/* harmony import */ var vue_datetime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-datetime */ "./node_modules/vue-datetime/dist/vue-datetime.js");
/* harmony import */ var vue_datetime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_datetime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_datetime_dist_vue_datetime_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-datetime/dist/vue-datetime.css */ "./node_modules/vue-datetime/dist/vue-datetime.css");
/* harmony import */ var vue_datetime_dist_vue_datetime_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_datetime_dist_vue_datetime_css__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



Vue.use(vue_simple_alert__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    datetime: vue_datetime__WEBPACK_IMPORTED_MODULE_1__["Datetime"]
  },
  data: function data() {
    return {
      orders: {},
      post: {},
      dateFrom: 'All',
      dateTo: 'All',
      test: 'All',
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
    this.fetchArticles(this.status, 1, 'All', 'All');
    this.type = $cookies.get('table_type');

    if ($cookies.get('table_type') == "admins") {
      this.admin = true;
    }

    if ($cookies.get('table_type') == "receivers") {
      this.receiver = true;
    }
  },
  methods: {
    fetchArticles: function fetchArticles(Status, Page, dateFrom, dateto) {
      var _this = this;

      this.isLoaded = false;
      axios.get("/api/Admin/DeliverOrders/".concat(this.$route.params.DeliverId, "/").concat(this.$route.params.Type, "/").concat(Status, "/").concat(dateFrom, "/").concat(dateto, "?page=").concat(Page)).then(function (res) {
        _this.orders = res.data;
        _this.current_page = res.data.current_page;
        _this.nextpage = res.data.next_page_url;
        _this.prevpage = res.data.prev_page_url;
        console.log(res.data);
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
    ViewDetails: function ViewDetails(order) {
      this.$fire({
        title: "Created At : " + order.created_at,
        text: "updated At: " + order.updated_at,
        type: "info",
        timer: 0
      }).then(function (r) {
        console.log(r.value);
      });
    },
    deleteOrder: function deleteOrder(order_id) {
      var _this2 = this;

      this.$confirm("Are you sure?").then(function () {
        _this2.miniload = true;
        axios.post("/api/Admin/Remove_Order", order_id).then(function (res) {
          if (res.status == 200) {
            _this2.fetchArticles(_this2.status, _this2.current_page, _this2.dateFrom, _this2.dateTo);

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
      });
    },
    Next: function Next() {
      this.fetchArticles(this.status, this.current_page + 1, this.dateFrom, this.dateTo);
    },
    Previous: function Previous() {
      this.fetchArticles(this.status, this.current_page - 1, this.dateFrom, this.dateTo);
    },

    /*onChangeDateFrom(event) {
        this.dateFrom = encodeURI('/////');//.toISOString().substr(0,10);
        //.toISOString().substr(0,10);
        if(this.dateFrom !== 'All' && this.dateTo !== 'All'){
            this.fetchArticles(this.status, 1, this.dateFrom,  this.dateTo);
            this.ShowOrderByDate = true;
            this.Cancle = true;
        }
    },
     onChangeDateTo(event) {
        this.dateTo = encodeURI(event);//.toISOString().substr(0,10);
         if(this.dateFrom !== 'All' && this.dateTo !== 'All'){
            this.fetchArticles(this.status, 1, this.dateFrom,  this.dateTo);
            this.ShowOrderByDate = true;
            this.Cancle = true;
        }
    },
    */
    CancleDateFilter: function CancleDateFilter() {
      this.dateFrom = 'All';
      this.dateTo = 'All';
      this.Cancle = false;
      this.fetchArticles(this.status, 1, this.dateFrom, this.dateTo);
    },
    onChangeF: function onChangeF() {
      if (this.dateFrom == '' || this.dateTo == '') {
        this.fetchArticles(this.status, 1, 'All', 'All');
      } else {
        this.fetchArticles(this.status, 1, this.dateFrom.replace('.000Z', ''), this.dateTo.replace('.000Z', ''));
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/DeliverOrders.vue?vue&type=template&id=4678f723&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Admin/DeliverOrders.vue?vue&type=template&id=4678f723& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
                "button",
                {
                  staticClass: "btn btn-outline-success",
                  staticStyle: { padding: "2px 9px", margin: "0px 10px" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.onChangeF()
                    }
                  }
                },
                [_vm._v("GO")]
              )
            ]),
            _vm._v(" "),
            _c(
              "li",
              [
                _c("datetime", {
                  staticStyle: { margin: "0px 10px" },
                  attrs: { placeholder: "To", type: "datetime" },
                  model: {
                    value: _vm.dateTo,
                    callback: function($$v) {
                      _vm.dateTo = $$v
                    },
                    expression: "dateTo"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c("datetime", {
                  staticStyle: { margin: "0px 10px" },
                  attrs: { placeholder: "From", type: "datetime" },
                  model: {
                    value: _vm.dateFrom,
                    callback: function($$v) {
                      _vm.dateFrom = $$v
                    },
                    expression: "dateFrom"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
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
                  staticClass: "uk-select",
                  staticStyle: { height: "31px" },
                  on: {
                    change: function($event) {
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
                    }
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
                    _vm._v(_vm._s(order.sender_full_name))
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
    _c("div", { staticClass: "row Departmain" }, [
      _c(
        "div",
        { staticClass: "col-sm-6 Previous", attrs: { align: "center" } },
        [
          _vm.prevpage !== null
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
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-6 Next", attrs: { align: "center" } }, [
        _vm.nextpage !== null
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
          : _vm._e()
      ])
    ]),
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
        _c("th", { staticStyle: { width: "200px" } }, [_vm._v("sender name")]),
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

/***/ "./resources/assets/js/components/Admin/DeliverOrders.vue":
/*!****************************************************************!*\
  !*** ./resources/assets/js/components/Admin/DeliverOrders.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeliverOrders_vue_vue_type_template_id_4678f723___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeliverOrders.vue?vue&type=template&id=4678f723& */ "./resources/assets/js/components/Admin/DeliverOrders.vue?vue&type=template&id=4678f723&");
/* harmony import */ var _DeliverOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeliverOrders.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/Admin/DeliverOrders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DeliverOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DeliverOrders_vue_vue_type_template_id_4678f723___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DeliverOrders_vue_vue_type_template_id_4678f723___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/Admin/DeliverOrders.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Admin/DeliverOrders.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/components/Admin/DeliverOrders.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeliverOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DeliverOrders.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/DeliverOrders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeliverOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Admin/DeliverOrders.vue?vue&type=template&id=4678f723&":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/components/Admin/DeliverOrders.vue?vue&type=template&id=4678f723& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeliverOrders_vue_vue_type_template_id_4678f723___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DeliverOrders.vue?vue&type=template&id=4678f723& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/DeliverOrders.vue?vue&type=template&id=4678f723&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeliverOrders_vue_vue_type_template_id_4678f723___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeliverOrders_vue_vue_type_template_id_4678f723___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);