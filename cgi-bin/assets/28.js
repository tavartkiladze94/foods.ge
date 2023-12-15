(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Delivers/DeliverPanel.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Delivers/DeliverPanel.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_circle_progress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-circle-progress */ "./node_modules/vue2-circle-progress/dist/vue-circle-progress.js");
/* harmony import */ var vue2_circle_progress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue2_circle_progress__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var numberAbbreviate = __webpack_require__(/*! number-abbreviate */ "./node_modules/number-abbreviate/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueCircle: vue2_circle_progress__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      fillwating: {
        gradient: ["rgb(119, 118, 118)"]
      },
      hodhod: {
        gradient: ["rgb(219, 90, 90)"]
      },
      fillpending: {
        gradient: ["rgb(176,158,62)"]
      },
      filldelivered: {
        gradient: ["rgb(48,172,86)"]
      },
      fillissued: {
        gradient: ["rgb(168,59,59)"]
      },
      orders: {},
      post: {},
      status: 'pending',
      notifications: {},
      STATISTIC: false,
      admin: false,
      nextpage: false,
      prevpage: false,
      current_page: 1,
      miniload: false,
      receiver: false,
      empty: false
    };
  },
  created: function created() {
    var _this = this;

    axios.get("/api/Deliver/DeliverStatistic").then(function (res) {
      _this.STATISTIC = res.data;
    })["catch"](function (res) {
      var toast = _this.$toasted.show("Error 500", {
        type: 'error',
        theme: "bubble",
        position: "bottom-right",
        duration: 2000
      });
    });
    this.fetchArticles(this.status, 1);

    if ($cookies.get('table_type') == "admins") {
      this.admin = true;
    }

    if ($cookies.get('table_type') == "receivers") {
      this.receiver = true;
    }
  },
  methods: {
    notCopied: function notCopied() {
      var toast = this.$toasted.show("Couldn't Copy", {
        type: 'error',
        theme: "bubble",
        position: "bottom-right",
        duration: 2000
      });
    },
    Summation: function Summation(Deliver_Fee, Recieved_price) {
      return parseInt(Deliver_Fee) + parseInt(Recieved_price);
    },
    numberAbbreviate2: function numberAbbreviate2(number) {
      return numberAbbreviate(number);
    },
    fetchArticles: function fetchArticles(Status, Page) {
      var _this2 = this;

      this.isLoaded = false;
      axios.get("/api/Deliver/DeliverOrders/".concat(Status, "?page=").concat(Page)).then(function (res) {
        _this2.orders = res.data;
        _this2.current_page = res.data.current_page;
        _this2.nextpage = res.data.next_page_url;
        _this2.prevpage = res.data.prev_page_url;

        if (res.data.length == 0) {
          _this2.empty = true;
        }

        _this2.isLoaded = true;
      })["catch"](function (res) {
        var toast = _this2.$toasted.show("Error 500", {
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
    Next: function Next() {
      this.fetchArticles(this.status, this.current_page + 1);
    },
    Previous: function Previous() {
      this.fetchArticles(this.status, this.current_page - 1);
    },
    onChange: function onChange(event) {
      this.status = event.target.value;
      this.fetchArticles(event.target.value);
    }
  }
});

/***/ }),

/***/ "./node_modules/number-abbreviate/index.js":
/*!*************************************************!*\
  !*** ./node_modules/number-abbreviate/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(root){
  'use strict';

  function NumberAbbreviate() {
    var units
    if (!(this instanceof NumberAbbreviate)) {
      // function usage: abbrev(n, decPlaces, units)
      var n = arguments[0]
      var decPlaces = arguments[1]
      units = arguments[2]
      var ab = new NumberAbbreviate(units)
      return ab.abbreviate(n, decPlaces)
    }
    // class usage: new NumberAbbreviate(units)
    units = arguments[0]
    this.units = units == null ? ['k', 'm', 'b', 't'] : units
  }

  NumberAbbreviate.prototype._abbreviate = function(number, decPlaces) {
    decPlaces = Math.pow(10, decPlaces)

    for (var i = this.units.length - 1; i >= 0; i--) {

      var size = Math.pow(10, (i + 1) * 3)

      if (size <= number) {
        number = Math.round(number * decPlaces / size) / decPlaces

        if ((number === 1000) && (i < this.units.length - 1)) {
          number = 1
          i++
        }

        number += this.units[i]

        break
      }
    }

    return number
  }

  NumberAbbreviate.prototype.abbreviate = function(number, decPlaces) {
    var isNegative = number < 0
    var abbreviatedNumber = this._abbreviate(Math.abs(number), decPlaces || 0)

    return isNegative ? '-' + abbreviatedNumber : abbreviatedNumber;
  }

  if ( true && module.exports) {
    module.exports = NumberAbbreviate
  } else {
    root.NumberAbbreviate = NumberAbbreviate
  }

})(this);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Delivers/DeliverPanel.vue?vue&type=template&id=04373a4e&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Delivers/DeliverPanel.vue?vue&type=template&id=04373a4e&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticStyle: { background: "#f6f6f6" } }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticStyle: { padding: "20px" } }, [
      _c(
        "div",
        {
          staticClass: "uk-child-width-1-3@m",
          staticStyle: { "margin-top": "0px" },
          attrs: { "uk-grid": "", "uk-scrollspy": "cls:  " }
        },
        [
          _c("div", [
            _c(
              "div",
              {
                staticClass: "uk-card uk-card-default",
                staticStyle: { "border-radius": "90px" },
                attrs: { align: "center" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "uk-card-header",
                    staticStyle: { padding: "9px", "border-radius": "90px" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "uk-grid-small uk-flex-middle",
                        attrs: { "uk-grid": "" }
                      },
                      [
                        _vm._m(1),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-width-expand" }, [
                          _c(
                            "h3",
                            {
                              staticClass:
                                "uk-card-title uk-margin-remove-bottom"
                            },
                            [
                              _c("span", [
                                _vm._v(_vm._s(_vm.STATISTIC.Deliver_Name))
                              ])
                            ]
                          )
                        ])
                      ]
                    )
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", [
            _c(
              "div",
              {
                staticClass: "uk-card uk-card-default",
                staticStyle: { "border-radius": "90px" },
                attrs: { align: "center" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "uk-card-header",
                    staticStyle: { padding: "9px", "border-radius": "90px" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "uk-grid-small uk-flex-middle",
                        attrs: { "uk-grid": "" }
                      },
                      [
                        _vm._m(2),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-width-expand" }, [
                          _c(
                            "h3",
                            {
                              staticClass:
                                "uk-card-title uk-margin-remove-bottom"
                            },
                            [
                              _c("span", [
                                _vm._v(_vm._s(_vm.STATISTIC.Deliver_Code))
                              ])
                            ]
                          )
                        ])
                      ]
                    )
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", [
            _c(
              "div",
              {
                staticClass: "uk-card uk-card-default",
                staticStyle: { "border-radius": "90px" },
                attrs: { align: "center" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "uk-card-header",
                    staticStyle: { padding: "9px", "border-radius": "90px" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "uk-grid-small uk-flex-middle",
                        attrs: { "uk-grid": "" }
                      },
                      [
                        _c("i", {
                          staticClass: "fas fa-shopping-cart",
                          staticStyle: {
                            "padding-left": "40px",
                            "margin-right": "0px",
                            "font-size": "3.3rem",
                            color: "rgb(213, 222, 73)"
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-width-expand" }, [
                          _c(
                            "h3",
                            {
                              staticClass:
                                "uk-card-title uk-margin-remove-bottom"
                            },
                            [
                              _c("span", {
                                domProps: {
                                  innerHTML: _vm._s(
                                    _vm.numberAbbreviate2(
                                      _vm.STATISTIC.TotalCarts
                                    )
                                  )
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticStyle: {
                                    padding: "0px",
                                    "border-radius": "99px"
                                  },
                                  attrs: { "uk-dropdown": "" }
                                },
                                [_vm._v(_vm._s(_vm.STATISTIC.TotalCarts))]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass: "uk-text-meta uk-margin-remove-top"
                            },
                            [_vm._v("السلات")]
                          )
                        ])
                      ]
                    )
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", [
            _c(
              "div",
              {
                staticClass: "uk-card uk-card-default",
                staticStyle: { "border-radius": "90px" },
                attrs: { align: "center" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "uk-card-header",
                    staticStyle: { padding: "9px", "border-radius": "90px" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "uk-grid-small uk-flex-middle",
                        attrs: { "uk-grid": "" }
                      },
                      [
                        _c("i", {
                          staticClass: "fas fa-boxes",
                          staticStyle: {
                            "padding-left": "40px",
                            "margin-right": "0px",
                            "font-size": "3.3rem",
                            color: "rgb(200, 35, 211)"
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-width-expand" }, [
                          _c(
                            "h3",
                            {
                              staticClass:
                                "uk-card-title uk-margin-remove-bottom"
                            },
                            [
                              _c("span", {
                                domProps: {
                                  innerHTML: _vm._s(
                                    _vm.numberAbbreviate2(
                                      _vm.STATISTIC.TotalOrders
                                    )
                                  )
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticStyle: {
                                    padding: "0px",
                                    "border-radius": "99px"
                                  },
                                  attrs: { "uk-dropdown": "" }
                                },
                                [_vm._v(_vm._s(_vm.STATISTIC.TotalOrders))]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass: "uk-text-meta uk-margin-remove-top"
                            },
                            [_vm._v("الطلبات")]
                          )
                        ])
                      ]
                    )
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", [
            _c(
              "div",
              {
                staticClass: "uk-card uk-card-default",
                staticStyle: { "border-radius": "90px" },
                attrs: { align: "center" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "uk-card-header",
                    staticStyle: { padding: "9px", "border-radius": "90px" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "uk-grid-small uk-flex-middle",
                        attrs: { "uk-grid": "" }
                      },
                      [
                        _c("i", {
                          staticClass: "fas fa-dollar-sign",
                          staticStyle: {
                            "padding-left": "40px",
                            "margin-right": "0px",
                            "font-size": "3.3rem",
                            color: "rgb(75, 222, 73)"
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-width-expand" }, [
                          _c(
                            "h3",
                            {
                              staticClass:
                                "uk-card-title uk-margin-remove-bottom"
                            },
                            [
                              _c("span", {
                                domProps: {
                                  innerHTML: _vm._s(
                                    _vm.numberAbbreviate2(
                                      _vm.STATISTIC.TotalEarnings
                                    )
                                  )
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticStyle: {
                                    padding: "0px",
                                    "border-radius": "99px"
                                  },
                                  attrs: { "uk-dropdown": "" }
                                },
                                [_vm._v(_vm._s(_vm.STATISTIC.TotalEarnings))]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass: "uk-text-meta uk-margin-remove-top"
                            },
                            [_vm._v("ألأرباح")]
                          )
                        ])
                      ]
                    )
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", [
            _c(
              "div",
              {
                staticClass: "uk-card uk-card-default",
                staticStyle: { "border-radius": "90px" },
                attrs: { align: "center" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "uk-card-header",
                    staticStyle: { padding: "9px", "border-radius": "90px" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "uk-grid-small uk-flex-middle",
                        attrs: { "uk-grid": "" }
                      },
                      [
                        _vm._m(3),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-width-expand" }, [
                          _c(
                            "h3",
                            {
                              staticClass:
                                "uk-card-title uk-margin-remove-bottom"
                            },
                            [
                              _c("span", {
                                domProps: {
                                  innerHTML: _vm._s(
                                    _vm.numberAbbreviate2(
                                      _vm.STATISTIC.TotalLeftCredit
                                    )
                                  )
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticStyle: {
                                    padding: "0px",
                                    "border-radius": "99px"
                                  },
                                  attrs: { "uk-dropdown": "" }
                                },
                                [_vm._v(_vm._s(_vm.STATISTIC.TotalLeftCredit))]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass: "uk-text-meta uk-margin-remove-top"
                            },
                            [_vm._v("الرصيد")]
                          )
                        ])
                      ]
                    )
                  ]
                )
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "uk-child-width-1-4@m",
          staticStyle: {
            background: "white",
            "margin-left": "0px",
            padding: "10px",
            "border-radius": "45px"
          },
          attrs: { "uk-grid": "", "uk-scrollspy": "cls:  " }
        },
        [
          _c("div", { staticStyle: { "padding-left": "0px" } }, [
            _c("div", { staticClass: "uk-card", attrs: { align: "center" } }, [
              _c("div", {}, [
                _c(
                  "div",
                  {
                    staticClass: "uk-grid-small uk-flex-middle",
                    attrs: { "uk-grid": "" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "uk-width-auto",
                        staticStyle: {
                          "justify-content": "center",
                          display: "flex"
                        }
                      },
                      [
                        _c(
                          "vue-circle",
                          {
                            attrs: {
                              progress: _vm.STATISTIC.WaitingOrdersPercent,
                              size: 70,
                              reverse: false,
                              "line-cap": "round",
                              fill: _vm.fillwating,
                              "empty-fill": "rgba(0, 0, 0, .1)",
                              "animation-start-value": 0.0,
                              "start-angle": 0,
                              "insert-mode": "append",
                              thickness: 10,
                              "show-percent": false
                            },
                            on: {
                              "vue-circle-progress": _vm.progress,
                              "vue-circle-end": _vm.progress_end
                            }
                          },
                          [
                            _c("i", {
                              staticClass: "fas fa-clock",
                              staticStyle: {
                                "margin-right": "0px",
                                "font-size": "3.3rem",
                                color: "rgb(185, 185, 185)"
                              }
                            })
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-width-expand" }, [
                      _c(
                        "h3",
                        {
                          staticClass: "uk-card-title uk-margin-remove-bottom"
                        },
                        [
                          _c("span", {
                            domProps: {
                              innerHTML: _vm._s(
                                _vm.numberAbbreviate2(
                                  _vm.STATISTIC.waitingOrders
                                )
                              )
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticStyle: {
                                padding: "0px",
                                "border-radius": "99px"
                              },
                              attrs: { "uk-dropdown": "" }
                            },
                            [_vm._v(_vm._s(_vm.STATISTIC.waitingOrders))]
                          ),
                          _vm._v(" "),
                          _c("font", { staticClass: "pt" }, [
                            _vm._v(
                              "(" +
                                _vm._s(_vm.STATISTIC.WaitingOrdersPercent) +
                                "%)"
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "p",
                        { staticClass: "uk-text-meta uk-margin-remove-top" },
                        [_vm._v("طلبات قيد المعالجة")]
                      )
                    ])
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticStyle: { "padding-left": "0px" } }, [
            _c("div", { staticClass: "uk-card", attrs: { align: "center" } }, [
              _c("div", {}, [
                _c(
                  "div",
                  {
                    staticClass: "uk-grid-small uk-flex-middle",
                    attrs: { "uk-grid": "" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "uk-width-auto",
                        staticStyle: {
                          "justify-content": "center",
                          display: "flex"
                        }
                      },
                      [
                        _c(
                          "vue-circle",
                          {
                            attrs: {
                              progress: _vm.STATISTIC.PendingOrdersPercent,
                              size: 70,
                              reverse: false,
                              "line-cap": "round",
                              fill: _vm.fillpending,
                              "empty-fill": "rgba(0, 0, 0, .1)",
                              "animation-start-value": 0.0,
                              "start-angle": 0,
                              "insert-mode": "append",
                              thickness: 10,
                              "show-percent": false
                            },
                            on: {
                              "vue-circle-progress": _vm.progress,
                              "vue-circle-end": _vm.progress_end
                            }
                          },
                          [
                            _c("i", {
                              staticClass: "fas fa-clock",
                              staticStyle: {
                                "margin-right": "0px",
                                "font-size": "3.3rem",
                                color: "rgb(222, 204, 73)"
                              }
                            })
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-width-expand" }, [
                      _c(
                        "h3",
                        {
                          staticClass: "uk-card-title uk-margin-remove-bottom"
                        },
                        [
                          _c("span", {
                            domProps: {
                              innerHTML: _vm._s(
                                _vm.numberAbbreviate2(
                                  _vm.STATISTIC.pendingOrders
                                )
                              )
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticStyle: {
                                padding: "0px",
                                "border-radius": "99px"
                              },
                              attrs: { "uk-dropdown": "" }
                            },
                            [_vm._v(_vm._s(_vm.STATISTIC.pendingOrders))]
                          ),
                          _vm._v(" "),
                          _c("font", { staticClass: "pt" }, [
                            _vm._v(
                              "(" +
                                _vm._s(_vm.STATISTIC.PendingOrdersPercent) +
                                "%)"
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "p",
                        { staticClass: "uk-text-meta uk-margin-remove-top" },
                        [_vm._v("طلبات قيد التوصيل")]
                      )
                    ])
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticStyle: { "padding-left": "0px" } }, [
            _c("div", { staticClass: "uk-card", attrs: { align: "center" } }, [
              _c("div", {}, [
                _c(
                  "div",
                  {
                    staticClass: "uk-grid-small uk-flex-middle",
                    attrs: { "uk-grid": "" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "uk-width-auto",
                        staticStyle: {
                          "justify-content": "center",
                          display: "flex"
                        }
                      },
                      [
                        _c(
                          "vue-circle",
                          {
                            attrs: {
                              progress: _vm.STATISTIC.DeliveredOrdersPercent,
                              size: 70,
                              reverse: false,
                              "line-cap": "round",
                              fill: _vm.filldelivered,
                              "empty-fill": "rgba(0, 0, 0, .1)",
                              "animation-start-value": 0.0,
                              "start-angle": 0,
                              "insert-mode": "append",
                              thickness: 10,
                              "show-percent": false
                            },
                            on: {
                              "vue-circle-progress": _vm.progress,
                              "vue-circle-end": _vm.progress_end
                            }
                          },
                          [
                            _c("i", {
                              staticClass: "fas fa-check-circle",
                              staticStyle: {
                                "margin-right": "0px",
                                "font-size": "3.3rem",
                                color: "rgb(60, 212, 107)"
                              }
                            })
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-width-expand" }, [
                      _c(
                        "h3",
                        {
                          staticClass: "uk-card-title uk-margin-remove-bottom"
                        },
                        [
                          _c("span", {
                            domProps: {
                              innerHTML: _vm._s(
                                _vm.numberAbbreviate2(
                                  _vm.STATISTIC.deliveredOrders
                                )
                              )
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticStyle: {
                                padding: "0px",
                                "border-radius": "99px"
                              },
                              attrs: { "uk-dropdown": "" }
                            },
                            [_vm._v(_vm._s(_vm.STATISTIC.deliveredOrders))]
                          ),
                          _vm._v(" "),
                          _c("font", { staticClass: "pt" }, [
                            _vm._v(
                              "(" +
                                _vm._s(_vm.STATISTIC.DeliveredOrdersPercent) +
                                "%)"
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "p",
                        { staticClass: "uk-text-meta uk-margin-remove-top" },
                        [_vm._v("طلبات مكتملة")]
                      )
                    ])
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticStyle: { "padding-left": "0px" } }, [
            _c("div", { staticClass: "uk-card", attrs: { align: "center" } }, [
              _c("div", {}, [
                _c(
                  "div",
                  {
                    staticClass: "uk-grid-small uk-flex-middle",
                    attrs: { "uk-grid": "" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "uk-width-auto",
                        staticStyle: {
                          "justify-content": "center",
                          display: "flex"
                        }
                      },
                      [
                        _c(
                          "vue-circle",
                          {
                            attrs: {
                              progress: _vm.STATISTIC.IssuedOrdersPercent,
                              size: 70,
                              reverse: false,
                              "line-cap": "round",
                              fill: _vm.fillissued,
                              "empty-fill": "rgba(0, 0, 0, .1)",
                              "animation-start-value": 0.0,
                              "start-angle": 0,
                              "insert-mode": "append",
                              thickness: 10,
                              "show-percent": false
                            },
                            on: {
                              "vue-circle-progress": _vm.progress,
                              "vue-circle-end": _vm.progress_end
                            }
                          },
                          [
                            _c("i", {
                              staticClass: "fas fa-times-circle",
                              staticStyle: {
                                "margin-right": "0px",
                                "font-size": "3.3rem",
                                color: "rgb(234, 82, 82)"
                              }
                            })
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-width-expand" }, [
                      _c(
                        "h3",
                        {
                          staticClass: "uk-card-title uk-margin-remove-bottom"
                        },
                        [
                          _c("span", {
                            domProps: {
                              innerHTML: _vm._s(
                                _vm.numberAbbreviate2(
                                  _vm.STATISTIC.issuedOrders
                                )
                              )
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticStyle: {
                                padding: "0px",
                                "border-radius": "99px"
                              },
                              attrs: { "uk-dropdown": "" }
                            },
                            [_vm._v(_vm._s(_vm.STATISTIC.issuedOrders))]
                          ),
                          _vm._v(" "),
                          _c("font", { staticClass: "pt" }, [
                            _vm._v(
                              "(" +
                                _vm._s(_vm.STATISTIC.IssuedOrdersPercent) +
                                "%)"
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "p",
                        { staticClass: "uk-text-meta uk-margin-remove-top" },
                        [_vm._v("طلبات غير مكتملة")]
                      )
                    ])
                  ]
                )
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("div", { staticClass: "uk", attrs: { align: "right" } }, [
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
            _c("option", { attrs: { value: "waiting" } }, [_vm._v("مقبول")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "pending" } }, [
              _vm._v("قيد التوصيل")
            ]),
            _vm._v(" "),
            _c("option", { attrs: { value: "delivered" } }, [
              _vm._v("تم التسليم")
            ]),
            _vm._v(" "),
            _c("option", { attrs: { value: "issued" } }, [
              _vm._v("لم يتم التسليم")
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c(
        "table",
        {
          staticClass: "table cust-table uk-card uk-card-default",
          attrs: { border: "0" }
        },
        [
          _vm._m(4),
          _vm._v(" "),
          !_vm.isLoaded
            ? _c("tbody", { staticClass: "tbdy" }, [_vm._m(5)])
            : _vm._e(),
          _vm._v(" "),
          _vm._l(_vm.orders.data, function(order, index) {
            return _vm.isLoaded
              ? _c("tbody", { key: order.id }, [
                  _c("tr", [
                    _c(
                      "td",
                      { staticStyle: { width: "200px", "font-size": "3vmin" } },
                      [_vm._v(_vm._s(order.product_name))]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticStyle: { width: "200px", "font-size": "3vmin" } },
                      [_vm._v(_vm._s(order.track_code))]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticStyle: { width: "200px", "font-size": "3vmin" } },
                      [_vm._v(_vm._s(order.recieve_date))]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticStyle: { width: "200px", "font-size": "3vmin" } },
                      [_vm._v(_vm._s(order.recieved_price))]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticStyle: { width: "200px", "font-size": "3vmin" } },
                      [_vm._v(_vm._s(order.Deliver_Fee))]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticStyle: { width: "200px", "font-size": "3vmin" } },
                      [
                        _c("span", {
                          domProps: {
                            innerHTML: _vm._s(
                              _vm.Summation(
                                order.Deliver_Fee,
                                order.recieved_price
                              )
                            )
                          }
                        })
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
      !_vm.orders.data.length && _vm.isLoaded
        ? _c("div", { attrs: { align: "center" } }, [
            _c("i", {
              staticClass: "fas fa-box-open",
              staticStyle: { "font-size": "32vmin", color: "#e0e0e0" }
            })
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "uk-child-width-1-1@m",
          staticStyle: { "margin-top": "0px" },
          attrs: { "uk-grid": "", "uk-scrollspy": "cls:  " }
        },
        [
          _c("div", { attrs: { align: "center" } }, [
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
              : _vm._e(),
            _vm._v(" "),
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
        ]
      ),
      _vm._v(" "),
      _c("br")
    ])
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
        staticClass: "uk-navbar-container",
        staticStyle: {
          background: "linear-gradient(45deg, #ff8181, #ff0000)",
          "box-shadow": "0px 0px 9px #7b7b7b"
        },
        attrs: { "uk-navbar": "" }
      },
      [
        _c("div", { staticClass: "uk-navbar-left" }, [
          _c("ul", { staticClass: "uk-navbar-nav" }, [
            _c("li", { staticClass: "uk-active" }, [
              _c("img", {
                staticStyle: { width: "71px" },
                attrs: { src: "/images/ihodhod.png" }
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "uk-navbar-right" }, [
          _c("ul", { staticClass: "uk-navbar-nav" }, [
            _c("li", [
              _c("a", { attrs: { href: "/My_Invoices" } }, [
                _c("i", {
                  staticClass: "SGL fas fa-door-open",
                  staticStyle: { "font-size": "44px", color: "#fafafa" },
                  attrs: { "aria-hidden": "true" }
                })
              ])
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "uk-width-auto",
        staticStyle: { "justify-content": "center", display: "flex" }
      },
      [
        _c("i", {
          staticClass: "fas fa-user-tie",
          staticStyle: {
            "padding-left": "20px",
            "margin-right": "0px",
            "font-size": "3.3rem",
            color: "rgb(255, 101, 101)"
          }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "uk-width-auto",
        staticStyle: { "justify-content": "center", display: "flex" }
      },
      [
        _c("i", {
          staticClass: "fas fa-key",
          staticStyle: {
            "padding-left": "20px",
            "margin-right": "0px",
            "font-size": "3.3rem",
            color: "rgb(35, 219, 151)"
          }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "uk-width-auto",
        staticStyle: { "justify-content": "center", display: "flex" }
      },
      [
        _c("i", {
          staticClass: "fas fa-coins",
          staticStyle: {
            "padding-left": "22px",
            "margin-right": "0px",
            "font-size": "3.3rem",
            color: "rgb(73, 126, 222)"
          }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", {}, [
        _c("th", { staticStyle: { width: "200px", "font-size": "3vmin" } }, [
          _vm._v("البريد")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "200px", "font-size": "3vmin" } }, [
          _vm._v("رمز التتبع")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "200px", "font-size": "3vmin" } }, [
          _vm._v("تاريخ الاستلام")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "200px", "font-size": "3vmin" } }, [
          _vm._v("سعر البريد")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "200px", "font-size": "3vmin" } }, [
          _vm._v("عمولة المندوب")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "200px", "font-size": "3vmin" } }, [
          _vm._v("اجمالي الرصيد")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
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
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/Delivers/DeliverPanel.vue":
/*!******************************************************************!*\
  !*** ./resources/assets/js/components/Delivers/DeliverPanel.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeliverPanel_vue_vue_type_template_id_04373a4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeliverPanel.vue?vue&type=template&id=04373a4e&scoped=true& */ "./resources/assets/js/components/Delivers/DeliverPanel.vue?vue&type=template&id=04373a4e&scoped=true&");
/* harmony import */ var _DeliverPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeliverPanel.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/Delivers/DeliverPanel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DeliverPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DeliverPanel_vue_vue_type_template_id_04373a4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DeliverPanel_vue_vue_type_template_id_04373a4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "04373a4e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/Delivers/DeliverPanel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Delivers/DeliverPanel.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/js/components/Delivers/DeliverPanel.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeliverPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DeliverPanel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Delivers/DeliverPanel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeliverPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Delivers/DeliverPanel.vue?vue&type=template&id=04373a4e&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Delivers/DeliverPanel.vue?vue&type=template&id=04373a4e&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeliverPanel_vue_vue_type_template_id_04373a4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DeliverPanel.vue?vue&type=template&id=04373a4e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Delivers/DeliverPanel.vue?vue&type=template&id=04373a4e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeliverPanel_vue_vue_type_template_id_04373a4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeliverPanel_vue_vue_type_template_id_04373a4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);