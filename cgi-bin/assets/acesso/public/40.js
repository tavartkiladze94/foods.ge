(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/DeliverStat.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Admin/DeliverStat.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuejs_datepicker_dist_vuejs_datepicker_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuejs-datepicker/dist/vuejs-datepicker.esm.js */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var vue2_circle_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-circle-progress */ "./node_modules/vue2-circle-progress/dist/vue-circle-progress.js");
/* harmony import */ var vue2_circle_progress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue2_circle_progress__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_clipboard2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-clipboard2 */ "./node_modules/vue-clipboard2/vue-clipboard.js");
/* harmony import */ var vue_clipboard2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_clipboard2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_google_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-google-charts */ "./node_modules/vue-google-charts/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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



vue_clipboard2__WEBPACK_IMPORTED_MODULE_2___default.a.config.autoSetContainer = true; // add this line

Vue.use(vue_clipboard2__WEBPACK_IMPORTED_MODULE_2___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueCircle: vue2_circle_progress__WEBPACK_IMPORTED_MODULE_1___default.a,
    Datepicker: vuejs_datepicker_dist_vuejs_datepicker_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    GChart: vue_google_charts__WEBPACK_IMPORTED_MODULE_3__["GChart"]
  },
  data: function data() {
    return {
      fillwating: {
        gradient: ["rgb(119, 118, 118)"]
      },
      hodhod: {
        gradient: ["rgb(219, 90, 90)"]
      },
      carts: {
        gradient: ["rgb(213, 222, 73)"]
      },
      fillorders: {
        gradient: ["rgb(200, 35, 211)"]
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
      id: null,
      type: null,
      status: 'pending',
      dateFrom: 'All',
      dateTo: 'All',
      notifications: {},
      STATISTIC: false,
      ShowOrderByDate: false,
      admin: false,
      nextpage: false,
      prevpage: false,
      OrdersChartAllStatus: [],
      current_page: 1,
      miniload: false,
      receiver: false,
      empty: false
    };
  },
  created: function created() {
    this.id = this.$route.params.DeliverId;
    this.type = this.$route.params.Type;
    this.Statistic(this.dateFrom, this.dateTo);
    this.fetchArticles(this.status, 1, this.dateFrom, this.dateTo);

    if ($cookies.get('table_type') == "admins") {
      this.admin = true;
    }

    if ($cookies.get('table_type') == "receivers") {
      this.receiver = true;
    }
  },
  methods: {
    copied: function copied() {
      var toast = this.$toasted.show("Copied", {
        type: 'success',
        theme: "bubble",
        position: "bottom-right",
        duration: 2000
      });
      this.miniload = false;
    },
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
    Statistic: function Statistic(dateFrom, dateTo) {
      var _this = this;

      axios.get("/api/Admin/DeliverStatistic/".concat(this.$route.params.DeliverId, "/").concat(this.$route.params.Type, "/").concat(dateFrom, "/").concat(dateTo)).then(function (res) {
        _this.STATISTIC = res.data;
        _this.OrdersChartAllStatus = [['Orders', 'Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'], res.data.WaitingOrdersAcceptedChart, res.data.PendingOrdersChart, res.data.DeliveredOrdersChart, res.data.IssuedOrdersChart];
      })["catch"](function (res) {
        var toast = _this.$toasted.show("Error 500", {
          type: 'error',
          theme: "bubble",
          position: "bottom-right",
          duration: 2000
        });
      });
    },
    fetchArticles: function fetchArticles(Status, Page, dateFrom, dateto) {
      var _this2 = this;

      this.isLoaded = false;
      axios.get("/api/Admin/DeliverOrders/".concat(this.$route.params.DeliverId, "/").concat(this.$route.params.Type, "/").concat(Status, "/").concat(dateFrom, "/").concat(dateto, "?page=").concat(Page)).then(function (res) {
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
      this.fetchArticles(this.status, this.current_page + 1, this.dateFrom, this.dateTo);
    },
    Previous: function Previous() {
      this.fetchArticles(this.status, this.current_page - 1, this.dateFrom, this.dateTo);
    },
    onChangeDateFrom: function onChangeDateFrom(event) {
      this.dateFrom = event.toISOString().substr(0, 10);
      this.fetchArticles(this.status, 1, this.dateFrom, this.dateTo);
      this.Statistic(this.dateFrom, this.dateTo);

      if (this.dateFrom !== 'All' && this.dateTo !== 'All') {
        this.ShowOrderByDate = true;
      }
    },
    onChangeDateTo: function onChangeDateTo(event) {
      this.dateTo = event.toISOString().substr(0, 10);
      this.fetchArticles(this.status, 1, this.dateFrom, this.dateTo);
      this.Statistic(this.dateFrom, this.dateTo);

      if (this.dateFrom !== 'All' && this.dateTo !== 'All') {
        this.ShowOrderByDate = true;
      }
    },
    onChange: function onChange(event) {
      this.status = event.target.value;
      this.fetchArticles(this.status, 1, this.dateFrom, this.dateTo);
    },
    Download: function Download(id, type, status) {
      window.open("/api/DownloadStat/".concat(id, "/").concat(type, "/").concat(status, "/").concat(this.dateFrom, "/").concat(this.dateTo), '_blank');
    },
    DownloadAll: function DownloadAll(id, type) {
      window.open("/api/DownloadStat/".concat(id, "/").concat(type, "/All/").concat(this.dateFrom, "/").concat(this.dateTo), '_blank');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/DeliverStat.vue?vue&type=template&id=37971c92&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Admin/DeliverStat.vue?vue&type=template&id=37971c92& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
                      _vm._m(0),
                      _vm._v(" "),
                      _c("div", { staticClass: "uk-width-expand" }, [
                        _c(
                          "h3",
                          {
                            staticClass: "uk-card-title uk-margin-remove-bottom"
                          },
                          [
                            _c("span", [
                              _vm._v(_vm._s(_vm.STATISTIC.DeliverName))
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
                                progress: _vm.STATISTIC.TotalCartsPercent,
                                size: 70,
                                reverse: false,
                                "line-cap": "round",
                                fill: _vm.carts,
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
                                staticClass: "fas fa-shopping-cart",
                                staticStyle: {
                                  "margin-right": "0px",
                                  "font-size": "2.3rem",
                                  color: "rgb(213, 222, 73)"
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
                            ),
                            _vm._v(" "),
                            _c("font", { staticClass: "pt" }, [
                              _vm._v(
                                "(" +
                                  _vm._s(_vm.STATISTIC.TotalCartsPercent) +
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
                          [_vm._v("Total Carts")]
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
                                progress: _vm.STATISTIC.TotalCartsOrders,
                                size: 70,
                                reverse: false,
                                "line-cap": "round",
                                fill: _vm.fillorders,
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
                                staticClass: "fas fa-boxes",
                                staticStyle: {
                                  "margin-right": "0px",
                                  "font-size": "2.3rem",
                                  color: "rgb(200, 35, 211)"
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
                            ),
                            _vm._v(" "),
                            _c("font", { staticClass: "pt" }, [
                              _vm._v(
                                "(" +
                                  _vm._s(_vm.STATISTIC.TotalCartsOrders) +
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
                          [_vm._v("Total Orders")]
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
                                progress: _vm.STATISTIC.HodHod_Earnings_Percent,
                                size: 70,
                                reverse: false,
                                "line-cap": "round",
                                fill: _vm.hodhod,
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
                                staticClass: "fas fa-dove",
                                staticStyle: {
                                  "margin-right": "0px",
                                  "font-size": "2.3rem",
                                  color: "rgb(255, 101, 101)"
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
                                    _vm.STATISTIC.HodHod_Earnings
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
                              [_vm._v(_vm._s(_vm.STATISTIC.HodHod_Earnings))]
                            ),
                            _vm._v(" "),
                            _c("font", { staticClass: "pt" }, [
                              _vm._v(
                                "(" +
                                  _vm._s(
                                    _vm.STATISTIC.HodHod_Earnings_Percent
                                  ) +
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
                          [_vm._v("HodHod Earnings")]
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
                          "font-size": "4.3rem",
                          color: "rgb(75, 222, 73)"
                        }
                      }),
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
                          { staticClass: "uk-text-meta uk-margin-remove-top" },
                          [_vm._v("Deliver Earnings")]
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
                      _vm._m(1),
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
                          { staticClass: "uk-text-meta uk-margin-remove-top" },
                          [_vm._v("Left Credit")]
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
          "border-radius": "90px"
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
                      "p",
                      {
                        staticClass: "uk-text-meta uk-margin-remove-top",
                        staticStyle: { "margin-bottom": "0px" }
                      },
                      [_vm._v("Waiting Orders")]
                    ),
                    _vm._v(" "),
                    _c(
                      "h3",
                      {
                        staticClass: "uk-card-title uk-margin-remove-bottom",
                        staticStyle: {
                          "margin-top": "0px",
                          "margin-bottom": "10px !important"
                        }
                      },
                      [
                        _c("span", {
                          domProps: {
                            innerHTML: _vm._s(
                              _vm.numberAbbreviate2(_vm.STATISTIC.waitingOrders)
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
                      {
                        staticClass: "uk-text-meta uk-margin-remove-top",
                        staticStyle: { "margin-bottom": "0px" }
                      },
                      [_vm._v("Total Credit Invoices")]
                    ),
                    _vm._v(" "),
                    _c(
                      "h3",
                      {
                        staticClass: "uk-card-title uk-margin-remove-bottom",
                        staticStyle: { "margin-top": "0px" }
                      },
                      [
                        _c("span", {
                          domProps: {
                            innerHTML: _vm._s(
                              _vm.numberAbbreviate2(
                                _vm.STATISTIC.TotalInvoicesWaiting
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
                          [_vm._v(_vm._s(_vm.STATISTIC.TotalInvoicesWaiting))]
                        )
                      ]
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
                      "p",
                      {
                        staticClass: "uk-text-meta uk-margin-remove-top",
                        staticStyle: { "margin-bottom": "0px" }
                      },
                      [_vm._v("Pending Orders")]
                    ),
                    _vm._v(" "),
                    _c(
                      "h3",
                      {
                        staticClass: "uk-card-title uk-margin-remove-bottom",
                        staticStyle: {
                          "margin-top": "0px",
                          "margin-bottom": "10px !important"
                        }
                      },
                      [
                        _c("span", {
                          domProps: {
                            innerHTML: _vm._s(
                              _vm.numberAbbreviate2(_vm.STATISTIC.pendingOrders)
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
                      {
                        staticClass: "uk-text-meta uk-margin-remove-top",
                        staticStyle: { "margin-bottom": "0px" }
                      },
                      [_vm._v("Total Credit Invoices")]
                    ),
                    _vm._v(" "),
                    _c(
                      "h3",
                      {
                        staticClass: "uk-card-title uk-margin-remove-bottom",
                        staticStyle: { "margin-top": "0px" }
                      },
                      [
                        _c("span", {
                          domProps: {
                            innerHTML: _vm._s(
                              _vm.numberAbbreviate2(
                                _vm.STATISTIC.TotalInvoicesPending
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
                          [_vm._v(_vm._s(_vm.STATISTIC.TotalInvoicesPending))]
                        )
                      ]
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
                      "p",
                      {
                        staticClass: "uk-text-meta uk-margin-remove-top",
                        staticStyle: { "margin-bottom": "0px" }
                      },
                      [_vm._v("Delivered Orders")]
                    ),
                    _vm._v(" "),
                    _c(
                      "h3",
                      {
                        staticClass: "uk-card-title uk-margin-remove-bottom",
                        staticStyle: {
                          "margin-top": "0px",
                          "margin-bottom": "10px !important"
                        }
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
                      {
                        staticClass: "uk-text-meta uk-margin-remove-top",
                        staticStyle: { "margin-bottom": "0px" }
                      },
                      [_vm._v("Total Credit Invoices")]
                    ),
                    _vm._v(" "),
                    _c(
                      "h3",
                      {
                        staticClass: "uk-card-title uk-margin-remove-bottom",
                        staticStyle: { "margin-top": "0px" }
                      },
                      [
                        _c("span", {
                          domProps: {
                            innerHTML: _vm._s(
                              _vm.numberAbbreviate2(
                                _vm.STATISTIC.TotalInvoicesDelivered
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
                          [_vm._v(_vm._s(_vm.STATISTIC.TotalInvoicesDelivered))]
                        )
                      ]
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
                      "p",
                      {
                        staticClass: "uk-text-meta uk-margin-remove-top",
                        staticStyle: { "margin-bottom": "0px" }
                      },
                      [_vm._v("Issued Orders")]
                    ),
                    _vm._v(" "),
                    _c(
                      "h3",
                      {
                        staticClass: "uk-card-title uk-margin-remove-bottom",
                        staticStyle: {
                          "margin-top": "0px",
                          "margin-bottom": "10px !important"
                        }
                      },
                      [
                        _c("span", {
                          domProps: {
                            innerHTML: _vm._s(
                              _vm.numberAbbreviate2(_vm.STATISTIC.issuedOrders)
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
                      {
                        staticClass: "uk-text-meta uk-margin-remove-top",
                        staticStyle: { "margin-bottom": "0px" }
                      },
                      [_vm._v("Total Credit Invoices")]
                    ),
                    _vm._v(" "),
                    _c(
                      "h3",
                      {
                        staticClass: "uk-card-title uk-margin-remove-bottom",
                        staticStyle: { "margin-top": "0px" }
                      },
                      [
                        _c("span", {
                          domProps: {
                            innerHTML: _vm._s(
                              _vm.numberAbbreviate2(
                                _vm.STATISTIC.TotalInvoicesIssued
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
                          [_vm._v(_vm._s(_vm.STATISTIC.TotalInvoicesIssued))]
                        )
                      ]
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
    _c("hr", { staticClass: "uk-divider-icon" }),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "uk-card uk-card-default uk-margin-card GCHART" },
      [
        _c("GChart", {
          attrs: {
            type: "ColumnChart",
            data: _vm.OrdersChartAllStatus,
            options: _vm.chartOptions
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "nav",
      {
        staticClass: "uk-navbar-container",
        staticStyle: { margin: "20px 0px" },
        attrs: { "uk-navbar": "" }
      },
      [
        _c("div", { staticClass: "uk-navbar-left" }, [
          _c("ul", { staticClass: "uk-navbar-nav datepickerCs" }, [
            _c(
              "li",
              [
                _c("datepicker", {
                  staticClass: "datepickerCsLi",
                  attrs: { placeholder: "From" },
                  on: {
                    selected: function($event) {
                      return _vm.onChangeDateFrom($event)
                    }
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c("datepicker", {
                  staticClass: "datepickerCsLi",
                  attrs: { placeholder: "To" },
                  on: {
                    selected: function($event) {
                      return _vm.onChangeDateTo($event)
                    }
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("li", [
              _c(
                "button",
                {
                  staticClass: "btn btn-outline-success",
                  staticStyle: { "font-size": "12px" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.Download(_vm.id, _vm.type, _vm.status)
                    }
                  }
                },
                [
                  _c("span", {
                    staticClass: "fas fa-download",
                    staticStyle: { "font-size": "12px" }
                  })
                ]
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _c(
                "button",
                {
                  staticClass: "btn btn-outline-success",
                  staticStyle: { "font-size": "12px" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.DownloadAll(_vm.id, _vm.type)
                    }
                  }
                },
                [
                  _c("span", {
                    staticClass: "fas fa-download",
                    staticStyle: { "font-size": "12px" }
                  }),
                  _vm._v(" "),
                  _c("font", { staticStyle: {} }, [_vm._v(" ALL")])
                ],
                1
              )
            ])
          ])
        ]),
        _vm._v(" "),
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
    _vm.ShowOrderByDate
      ? _c(
          "div",
          { staticClass: "uk-child-width-1-4@m", attrs: { "uk-grid": "" } },
          [
            _c("div", [
              _c(
                "div",
                {
                  staticClass: "uk-card uk-card-default uk-margin-card",
                  staticStyle: { "border-radius": "10px" }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "uk-card-header",
                      staticStyle: { padding: "1px 17px" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "uk-grid-small uk-flex-middle",
                          attrs: { "uk-grid": "" }
                        },
                        [
                          _c("div", { staticClass: "uk-width-expand" }, [
                            _c(
                              "h3",
                              {
                                staticClass:
                                  "uk-card-title uk-margin-remove-bottom"
                              },
                              [
                                _vm._v(
                                  _vm._s(_vm.STATISTIC.WaitingAcceptedByDate)
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "p",
                              {
                                staticClass: "uk-text-meta uk-margin-remove-top"
                              },
                              [_vm._v("Waiting")]
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
                  staticClass: "uk-card uk-card-default uk-margin-card",
                  staticStyle: { "border-radius": "10px" }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "uk-card-header",
                      staticStyle: { padding: "1px 17px" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "uk-grid-small uk-flex-middle",
                          attrs: { "uk-grid": "" }
                        },
                        [
                          _c("div", { staticClass: "uk-width-expand" }, [
                            _c(
                              "h3",
                              {
                                staticClass:
                                  "uk-card-title uk-margin-remove-bottom"
                              },
                              [_vm._v(_vm._s(_vm.STATISTIC.PendingByDate))]
                            ),
                            _vm._v(" "),
                            _c(
                              "p",
                              {
                                staticClass: "uk-text-meta uk-margin-remove-top"
                              },
                              [_vm._v("Pending")]
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
                  staticClass: "uk-card uk-card-default uk-margin-card",
                  staticStyle: { "border-radius": "10px" }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "uk-card-header",
                      staticStyle: { padding: "1px 17px" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "uk-grid-small uk-flex-middle",
                          attrs: { "uk-grid": "" }
                        },
                        [
                          _c("div", { staticClass: "uk-width-expand" }, [
                            _c(
                              "h3",
                              {
                                staticClass:
                                  "uk-card-title uk-margin-remove-bottom"
                              },
                              [_vm._v(_vm._s(_vm.STATISTIC.DeliveredByDate))]
                            ),
                            _vm._v(" "),
                            _c(
                              "p",
                              {
                                staticClass: "uk-text-meta uk-margin-remove-top"
                              },
                              [_vm._v("Delivered")]
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
                  staticClass: "uk-card uk-card-default uk-margin-card",
                  staticStyle: { "border-radius": "10px" }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "uk-card-header",
                      staticStyle: { padding: "1px 17px" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "uk-grid-small uk-flex-middle",
                          attrs: { "uk-grid": "" }
                        },
                        [
                          _c("div", { staticClass: "uk-width-expand" }, [
                            _c(
                              "h3",
                              {
                                staticClass:
                                  "uk-card-title uk-margin-remove-bottom"
                              },
                              [_vm._v(_vm._s(_vm.STATISTIC.IssuedByDate))]
                            ),
                            _vm._v(" "),
                            _c(
                              "p",
                              {
                                staticClass: "uk-text-meta uk-margin-remove-top"
                              },
                              [_vm._v("Issued")]
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
        )
      : _vm._e(),
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
        _vm._m(2),
        _vm._v(" "),
        !_vm.isLoaded
          ? _c("tbody", { staticClass: "tbdy" }, [_vm._m(3)])
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
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("td", { staticStyle: { width: "200px" } }, [
                    _vm._v(_vm._s(order.product_name))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticStyle: { width: "200px" } }, [
                    _vm._v(_vm._s(order.track_code))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticStyle: { width: "200px" } }, [
                    _vm._v(_vm._s(order.recieve_date))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticStyle: { width: "200px" } }, [
                    _vm._v(_vm._s(order.recieved_price))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticStyle: { width: "200px" } }, [
                    _vm._v(_vm._s(order.Deliver_Fee))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticStyle: { width: "200px" } }, [
                    _c("span", {
                      domProps: {
                        innerHTML: _vm._s(
                          _vm.Summation(order.Deliver_Fee, order.recieved_price)
                        )
                      }
                    })
                  ])
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
            "padding-left": "10px",
            "margin-right": "0px",
            "font-size": "4.3rem",
            color: "rgb(63, 196, 147)"
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
            "padding-left": "20px",
            "margin-right": "0px",
            "font-size": "4.3rem",
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
        _c("th", { staticStyle: { width: "200px" } }, [
          _vm._v("Tracking Code")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "200px" } }, [_vm._v("Recive Date")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "200px" } }, [
          _vm._v("Product Price")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "200px" } }, [_vm._v("Deliver Fee")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "200px" } }, [
          _vm._v("Total Credit Invoice")
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
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/Admin/DeliverStat.vue":
/*!**************************************************************!*\
  !*** ./resources/assets/js/components/Admin/DeliverStat.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeliverStat_vue_vue_type_template_id_37971c92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeliverStat.vue?vue&type=template&id=37971c92& */ "./resources/assets/js/components/Admin/DeliverStat.vue?vue&type=template&id=37971c92&");
/* harmony import */ var _DeliverStat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeliverStat.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/Admin/DeliverStat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DeliverStat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DeliverStat_vue_vue_type_template_id_37971c92___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DeliverStat_vue_vue_type_template_id_37971c92___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/Admin/DeliverStat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Admin/DeliverStat.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/components/Admin/DeliverStat.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeliverStat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DeliverStat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/DeliverStat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeliverStat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Admin/DeliverStat.vue?vue&type=template&id=37971c92&":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/components/Admin/DeliverStat.vue?vue&type=template&id=37971c92& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeliverStat_vue_vue_type_template_id_37971c92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DeliverStat.vue?vue&type=template&id=37971c92& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/DeliverStat.vue?vue&type=template&id=37971c92&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeliverStat_vue_vue_type_template_id_37971c92___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeliverStat_vue_vue_type_template_id_37971c92___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);