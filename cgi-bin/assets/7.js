(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/ShowAllTopDelivers.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Admin/ShowAllTopDelivers.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ShowAllTopDelivers",
  data: function data() {
    return {
      messages: [],
      TopDelivers: {},
      post: {},
      admin: false,
      miniload: false,
      receiver: false
    };
  },
  created: function created() {
    var _this = this;

    axios.get("/api/Admin/ShowAllTopDelivers").then(function (res) {
      _this.isLoaded = true;
      _this.TopDelivers = res.data;
    })["catch"](function (res) {
      var toast = _this.$toasted.show("Error 500", {
        type: 'error',
        theme: "bubble",
        position: "bottom-right",
        duration: 2000
      });
    });
  }
  /*mounted() {
      console.log('Component mounted.')
  }*/

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/ShowAllTopMembers.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Admin/ShowAllTopMembers.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ShowAllTopDelivers",
  data: function data() {
    return {
      messages: [],
      TopMembers: {},
      post: {},
      admin: false,
      miniload: false,
      receiver: false
    };
  },
  created: function created() {
    var _this = this;

    axios.get("/api/Admin/ShowAllTopMembers").then(function (res) {
      _this.isLoaded = true;
      _this.TopMembers = res.data;
    })["catch"](function (res) {
      var toast = _this.$toasted.show("Error 500", {
        type: 'error',
        theme: "bubble",
        position: "bottom-right",
        duration: 2000
      });
    });
  }
  /*mounted() {
      console.log('Component mounted.')
  }*/

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Home.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Home.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_circle_progress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-circle-progress */ "./node_modules/vue2-circle-progress/dist/vue-circle-progress.js");
/* harmony import */ var vue2_circle_progress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue2_circle_progress__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_google_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-google-charts */ "./node_modules/vue-google-charts/index.js");
/* harmony import */ var highcharts_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts-vue */ "./node_modules/highcharts-vue/dist/highcharts-vue.min.js");
/* harmony import */ var highcharts_vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts_vue__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue2_slideout_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue2-slideout-panel */ "./node_modules/vue2-slideout-panel/dist/vue-slideout-panel.js");
/* harmony import */ var vue2_slideout_panel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue2_slideout_panel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Admin_ShowAllTopDelivers_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Admin/ShowAllTopDelivers.vue */ "./resources/assets/js/components/Admin/ShowAllTopDelivers.vue");
/* harmony import */ var _Admin_ShowAllTopMembers_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Admin/ShowAllTopMembers.vue */ "./resources/assets/js/components/Admin/ShowAllTopMembers.vue");
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




Vue.use(vue2_slideout_panel__WEBPACK_IMPORTED_MODULE_3___default.a); //TopDelivers


Vue.component("TopDelivers", {
  name: "TopDelivers",
  render: function render(h) {
    return h(_Admin_ShowAllTopDelivers_vue__WEBPACK_IMPORTED_MODULE_4__["default"]);
  }
}); //TopMembers



Vue.component("TopMembers", {
  name: "TopMembers",
  render: function render(h) {
    return h(_Admin_ShowAllTopMembers_vue__WEBPACK_IMPORTED_MODULE_5__["default"]);
  }
});
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueCircle: vue2_circle_progress__WEBPACK_IMPORTED_MODULE_0___default.a,
    Chart: highcharts_vue__WEBPACK_IMPORTED_MODULE_2__["Chart"],
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_6__["default"],
    GChart: vue_google_charts__WEBPACK_IMPORTED_MODULE_1__["GChart"]
  },
  data: function data() {
    return {
      fillwating: {
        gradient: ["rgb(119, 118, 118)"]
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
      orders_this_week: [],
      SoldProdsSubWeek: [],
      DeliverFeeSubWeek: [],
      orders: null,
      WaitingOrdersCountAccepted: false,
      WaitingOrdersAcceptedPercent: false,
      WaitingOrdersCountNotAccepted: false,
      WaitingOrdersNotAcceptedPercent: false,
      PendingOrdersPercent: false,
      DeliveredOrdersPercent: false,
      IssuedOrdersPercent: false,
      users: null,
      stores: null,
      dateFrom: 'All',
      dateTo: 'All',
      delivers: null,
      Orders_black_list: null,
      gd_delivers: null,
      discounts: null,
      deposed: null,
      Withdraw_balance: null,
      Users_Stores_balance: null,
      Withdraw_and_unWithdrawen_balance: null,
      recieved_prices: null,
      Deliver_Fee: null,
      Reports: {},
      CountReports: null,
      isLoaded: false,
      IssuedOrdersCount: false,
      PendingOrdersCount: false,
      DeliveredOrdersCount: false,
      OrdersChartAllStatus: [],
      OrdersToStateDestinic: {},
      OrdersFromStateDestinic: {},
      F_Top_5_Members: {},
      F_Top_5_Delivers: {},
      ShowOrderByDate: false,
      WaitingUnAcceptedByDate: false,
      WaitingAcceptedByDate: false,
      PendingByDate: false,
      DeliveredByDate: false,
      IssuedByDate: false
    };
  },
  created: function created() {
    if (this.dateFrom) this.fetchHome(this.dateFrom, this.dateTo);
  },
  methods: {
    fetchHome: function fetchHome(dateFrom, dateTo) {
      var _this = this;

      axios.get("/api/Admin/home/".concat(dateFrom, "/").concat(dateTo)).then(function (response) {
        _this.gd_delivers = response.data.gd_delivers;
        _this.orders = response.data.orders;
        _this.orders_this_week = {
          chart: {
            type: 'spline'
          },
          yAxis: {
            title: {
              text: ''
            }
          },
          legend: {
            enabled: 0
          },
          title: {
            text: 'ORDERS (This Week)'
          },
          series: [{
            data: response.data.orders_this_week,
            color: '#5ea3d5'
          }]
        };
        _this.SoldProdsSubWeek = {
          chart: {
            type: 'spline'
          },
          yAxis: {
            title: {
              text: ''
            }
          },
          legend: {
            enabled: 0
          },
          title: {
            text: 'SOLD PRODUCTS (This Week)'
          },
          series: [{
            data: response.data.SoldProdsSubWeek,
            color: 'rgb(100, 194, 106)'
          }]
        };
        _this.DeliverFeeSubWeek = {
          chart: {
            type: 'spline'
          },
          yAxis: {
            title: {
              text: ''
            }
          },
          legend: {
            enabled: 0
          },
          title: {
            text: 'DELIVERS FEES (This Week)'
          },
          series: [{
            data: response.data.DeliverFeeSubWeek,
            color: 'rgb(189, 133, 218)'
          }]
        };
        _this.OrdersChartAllStatus = [['Orders', 'Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'], response.data.WaitingOrdersNotAccepted, response.data.WaitingOrdersAccepted, response.data.PendingOrders, response.data.DeliveredOrders, response.data.IssuedOrders];
        _this.DeliveredOrdersCount = response.data.DeliveredOrdersCount;
        _this.PendingOrdersCount = response.data.PendingOrdersCount;
        _this.WaitingOrdersCountAccepted = response.data.WaitingOrdersCountAccepted;
        _this.WaitingOrdersAcceptedPercent = response.data.WaitingOrdersAcceptedPercent;
        _this.WaitingOrdersCountNotAccepted = response.data.WaitingOrdersCountNotAccepted;
        _this.WaitingOrdersNotAcceptedPercent = response.data.WaitingOrdersNotAcceptedPercent;
        _this.IssuedOrdersCount = response.data.IssuedOrdersCount;
        _this.PendingOrdersPercent = response.data.PendingOrdersPercent;
        _this.DeliveredOrdersPercent = response.data.DeliveredOrdersPercent;
        _this.IssuedOrdersPercent = response.data.IssuedOrdersPercent;
        _this.users = response.data.users;
        _this.stores = response.data.stores;
        _this.delivers = response.data.delivers;
        _this.discounts = response.data.discounts;
        _this.deposed = response.data.deposed;
        _this.Orders_black_list = response.data.Orders_black_list;
        _this.recieved_prices = response.data.recieved_prices;
        _this.Deliver_Fee = response.data.Deliver_Fee;
        _this.Reports = response.data.Reports;
        _this.CountReports = response.data.CountReports;
        _this.Withdraw_balance = response.data.Withdraw_balance;
        _this.Users_Stores_balance = response.data.Users_Stores_balance;
        _this.Withdraw_and_unWithdrawen_balance = response.data.Withdraw_and_unWithdrawen_balance;
        _this.OrdersToStateDestinic = response.data.OrdersToStateDestinic;
        _this.OrdersFromStateDestinic = response.data.OrdersFromStateDestinic;
        _this.F_Top_5_Members = response.data.F_Top_5_Members;
        _this.F_Top_5_Delivers = response.data.F_Top_5_Delivers;
        _this.WaitingUnAcceptedByDate = response.data.WaitingUnAcceptedByDate;
        _this.WaitingAcceptedByDate = response.data.WaitingAcceptedByDate;
        _this.PendingByDate = response.data.PendingByDate;
        _this.DeliveredByDate = response.data.DeliveredByDate;
        _this.IssuedByDate = response.data.IssuedByDate;
        _this.isLoaded = true;
      });
    },
    onChangeDateFrom: function onChangeDateFrom(event) {
      this.dateFrom = event.toISOString().substr(0, 10);
      this.fetchHome(this.dateFrom, this.dateTo);

      if (this.dateFrom !== 'All' && this.dateTo !== 'All') {
        this.ShowOrderByDate = true;
      }
    },
    onChangeDateTo: function onChangeDateTo(event) {
      this.dateTo = event.toISOString().substr(0, 10);
      this.fetchHome(this.dateFrom, this.dateTo);

      if (this.dateFrom !== 'All' && this.dateTo !== 'All') {
        this.ShowOrderByDate = true;
      }
    },
    showPanelTopDelivers: function showPanelTopDelivers() {
      var panel1Handle = this.$showPanel({
        component: 'TopDelivers',
        width: 400,
        openOn: 'right'
      });
    },
    showPanelTopMembers: function showPanelTopMembers() {
      var panel1Handle = this.$showPanel({
        component: 'TopMembers',
        width: 400,
        openOn: 'right'
      });
    },
    progress: function progress(event, _progress, stepValue) {
      console.log(stepValue);
    },
    progress_end: function progress_end(event) {
      console.log("Circle progress end");
    },
    DownloadWithdraw_and_unWithdrawen_balance: function DownloadWithdraw_and_unWithdrawen_balance() {
      window.open("/api/DownloadWithdrawOrders/Withdrawn_And_Unwithdrawn", '_blank');
    },
    DownloadUsers_Stores_balance: function DownloadUsers_Stores_balance() {
      window.open("/api/DownloadWithdrawOrders/CurrentBalances", '_blank');
    },
    DownloadWithdraw_balance: function DownloadWithdraw_balance() {
      window.open("/api/DownloadWithdrawOrders/Accepted", '_blank');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/ShowAllTopDelivers.vue?vue&type=template&id=07292a14&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Admin/ShowAllTopDelivers.vue?vue&type=template&id=07292a14&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    _vm._l(_vm.TopDelivers, function(order, index) {
      return _c(
        "div",
        {
          key: order.id,
          staticClass: "uk-card uk-card-default uk-margin-card"
        },
        [
          _c(
            "div",
            {
              staticClass: "uk-card-header",
              staticStyle: { padding: "5px 30px" }
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
                        width: "81px",
                        "justify-content": "center",
                        display: "flex"
                      }
                    },
                    [
                      _c(
                        "span",
                        {
                          staticStyle: {
                            "font-size": "3.1rem",
                            color: "rgb(111, 218, 118)"
                          }
                        },
                        [_vm._v("#" + _vm._s(index + 1))]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "uk-width-expand" }, [
                    _c(
                      "h3",
                      { staticClass: "uk-card-title uk-margin-remove-bottom" },
                      [
                        _c(
                          "router-link",
                          {
                            staticStyle: { color: "black" },
                            attrs: { to: "/viewdelivers/" + order.id }
                          },
                          [
                            _vm._v(
                              "\n                            " +
                                _vm._s(order.Deliver) +
                                "\n                        "
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass: "uk-text-meta uk-margin-remove-top",
                        staticStyle: { "font-size": "17px", color: "#2075a7" }
                      },
                      [_vm._v(_vm._s(order.Total_Orders) + " Orders")]
                    )
                  ])
                ]
              )
            ]
          )
        ]
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/ShowAllTopMembers.vue?vue&type=template&id=d7c0547e&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Admin/ShowAllTopMembers.vue?vue&type=template&id=d7c0547e&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    _vm._l(_vm.TopMembers, function(order, index) {
      return _c(
        "div",
        {
          key: order.id,
          staticClass: "uk-card uk-card-default uk-margin-card"
        },
        [
          _c(
            "div",
            {
              staticClass: "uk-card-header",
              staticStyle: { padding: "5px 30px" }
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
                        width: "81px",
                        "justify-content": "center",
                        display: "flex"
                      }
                    },
                    [
                      _c(
                        "span",
                        {
                          staticStyle: {
                            "font-size": "3.1rem",
                            color: "rgb(111, 218, 118)"
                          }
                        },
                        [_vm._v("#" + _vm._s(index + 1))]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "uk-width-expand" }, [
                    _c(
                      "h3",
                      { staticClass: "uk-card-title uk-margin-remove-bottom" },
                      [
                        order.account_type == 2
                          ? _c(
                              "router-link",
                              {
                                staticStyle: { color: "black" },
                                attrs: { to: "/viewusers/" + order.id }
                              },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(order.Member) +
                                    "\n                        "
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        order.account_type == 3
                          ? _c(
                              "router-link",
                              {
                                staticStyle: { color: "black" },
                                attrs: { to: "/viewstores/" + order.id }
                              },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(order.Member) +
                                    "\n                        "
                                )
                              ]
                            )
                          : _vm._e()
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass: "uk-text-meta uk-margin-remove-top",
                        staticStyle: { "font-size": "17px", color: "#2075a7" }
                      },
                      [_vm._v(_vm._s(order.Total_Orders) + " Orders")]
                    )
                  ])
                ]
              )
            ]
          )
        ]
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Home.vue?vue&type=template&id=6707e3d4&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Home.vue?vue&type=template&id=6707e3d4& ***!
  \**************************************************************************************************************************************************************************************************************/
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
  return _vm.isLoaded
    ? _c("div", { staticClass: "uk-margin" }, [
        _c(
          "div",
          {
            staticClass: "uk-child-width-1-3@m uk-margin",
            attrs: { "uk-grid": "", "uk-scrollspy": "cls:  " }
          },
          [
            _c("div", [
              _c(
                "div",
                {
                  staticClass: "uk-card uk-card-default uk-margin-card",
                  attrs: { "uk-grid": "" }
                },
                [
                  _c("div", { staticClass: "uk-card-header" }, [
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
                              staticClass:
                                "uk-card-title uk-margin-remove-bottom"
                            },
                            [_vm._v(_vm._s(_vm.users))]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass: "uk-text-meta uk-margin-remove-top"
                            },
                            [_vm._v("Users")]
                          )
                        ])
                      ]
                    )
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", [
              _c(
                "div",
                {
                  staticClass: "uk-card uk-card-default uk-margin-card",
                  attrs: { "uk-grid": "" }
                },
                [
                  _c("div", { staticClass: "uk-card-header" }, [
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
                            [_vm._v(_vm._s(_vm.stores))]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass: "uk-text-meta uk-margin-remove-top"
                            },
                            [_vm._v("Stores")]
                          )
                        ])
                      ]
                    )
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", [
              _c(
                "div",
                {
                  staticClass: "uk-card uk-card-default uk-margin-card",
                  attrs: { "uk-grid": "" }
                },
                [
                  _c("div", { staticClass: "uk-card-header" }, [
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
                            [_vm._v(_vm._s(_vm.delivers))]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass: "uk-text-meta uk-margin-remove-top"
                            },
                            [_vm._v("Delivers")]
                          )
                        ])
                      ]
                    )
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", [
              _c(
                "div",
                {
                  staticClass: "uk-card uk-card-default uk-margin-card",
                  attrs: { "uk-grid": "" }
                },
                [
                  _c("div", { staticClass: "uk-card-header" }, [
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
                            [_vm._v(_vm._s(_vm.gd_delivers))]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass: "uk-text-meta uk-margin-remove-top"
                            },
                            [_vm._v("GD Delivers")]
                          )
                        ])
                      ]
                    )
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", [
              _c(
                "div",
                {
                  staticClass: "uk-card uk-card-default uk-margin-card",
                  attrs: { "uk-grid": "" }
                },
                [
                  _c("div", { staticClass: "uk-card-header" }, [
                    _c(
                      "div",
                      {
                        staticClass: "uk-grid-small uk-flex-middle",
                        attrs: { "uk-grid": "" }
                      },
                      [
                        _vm._m(4),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-width-expand" }, [
                          _c(
                            "h3",
                            {
                              staticClass:
                                "uk-card-title uk-margin-remove-bottom"
                            },
                            [_vm._v(_vm._s(_vm.discounts))]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass: "uk-text-meta uk-margin-remove-top"
                            },
                            [_vm._v("Discounts")]
                          )
                        ])
                      ]
                    )
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", [
              _c(
                "div",
                {
                  staticClass: "uk-card uk-card-default uk-margin-card",
                  attrs: { "uk-grid": "" }
                },
                [
                  _c("div", { staticClass: "uk-card-header" }, [
                    _c(
                      "div",
                      {
                        staticClass: "uk-grid-small uk-flex-middle",
                        attrs: { "uk-grid": "" }
                      },
                      [
                        _vm._m(5),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-width-expand" }, [
                          _c(
                            "h3",
                            {
                              staticClass:
                                "uk-card-title uk-margin-remove-bottom"
                            },
                            [_vm._v(_vm._s(_vm.Orders_black_list))]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass: "uk-text-meta uk-margin-remove-top"
                            },
                            [_vm._v("black list")]
                          )
                        ])
                      ]
                    )
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", [
              _c(
                "div",
                {
                  staticClass: "uk-card uk-card-default uk-margin-card",
                  attrs: { "uk-grid": "" }
                },
                [
                  _c("div", { staticClass: "uk-card-header" }, [
                    _c(
                      "div",
                      {
                        staticClass: "uk-grid-small uk-flex-middle",
                        attrs: { "uk-grid": "" }
                      },
                      [
                        _vm._m(6),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-width-expand" }, [
                          _c(
                            "h3",
                            {
                              staticClass:
                                "uk-card-title uk-margin-remove-bottom"
                            },
                            [_vm._v(_vm._s(_vm.Withdraw_balance))]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass: "uk-text-meta uk-margin-remove-top",
                              staticStyle: { margin: "5px 0px" }
                            },
                            [_vm._v("Withdrawn balance")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-outline-success",
                              staticStyle: {
                                padding: "3px 9px",
                                width: "100%"
                              },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.DownloadWithdraw_balance()
                                }
                              }
                            },
                            [_c("span", { staticClass: "fas fa-download" })]
                          )
                        ])
                      ]
                    )
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", [
              _c(
                "div",
                {
                  staticClass: "uk-card uk-card-default uk-margin-card",
                  attrs: { "uk-grid": "" }
                },
                [
                  _c("div", { staticClass: "uk-card-header" }, [
                    _c(
                      "div",
                      {
                        staticClass: "uk-grid-small uk-flex-middle",
                        attrs: { "uk-grid": "" }
                      },
                      [
                        _vm._m(7),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-width-expand" }, [
                          _c(
                            "h3",
                            {
                              staticClass:
                                "uk-card-title uk-margin-remove-bottom"
                            },
                            [_vm._v(_vm._s(_vm.Users_Stores_balance))]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass: "uk-text-meta uk-margin-remove-top",
                              staticStyle: { margin: "5px 0px" }
                            },
                            [_vm._v("Unwithdrawn Balance")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-outline-success",
                              staticStyle: {
                                padding: "3px 9px",
                                width: "100%"
                              },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.DownloadUsers_Stores_balance()
                                }
                              }
                            },
                            [_c("span", { staticClass: "fas fa-download" })]
                          )
                        ])
                      ]
                    )
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", [
              _c(
                "div",
                {
                  staticClass: "uk-card uk-card-default uk-margin-card",
                  attrs: { "uk-grid": "" }
                },
                [
                  _c("div", { staticClass: "uk-card-header" }, [
                    _c(
                      "div",
                      {
                        staticClass: "uk-grid-small uk-flex-middle",
                        attrs: { "uk-grid": "" }
                      },
                      [
                        _vm._m(8),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-width-expand" }, [
                          _c(
                            "h3",
                            {
                              staticClass:
                                "uk-card-title uk-margin-remove-bottom"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.Withdraw_and_unWithdrawen_balance)
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass: "uk-text-meta uk-margin-remove-top",
                              staticStyle: { margin: "5px 0px" }
                            },
                            [_vm._v("Withdrawn And Unwithdrawn")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-outline-success",
                              staticStyle: {
                                padding: "3px 9px",
                                width: "100%"
                              },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.DownloadWithdraw_and_unWithdrawen_balance()
                                }
                              }
                            },
                            [_c("span", { staticClass: "fas fa-download" })]
                          )
                        ])
                      ]
                    )
                  ])
                ]
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "uk-child-width-1-3@m",
            attrs: { "uk-grid": "", "uk-scrollspy": "cls:  " }
          },
          [
            _c(
              "div",
              { staticClass: "CHART" },
              [
                _c("chart", {
                  staticClass: "highcharts uk-margin-card",
                  staticStyle: { overflow: "auto" },
                  attrs: { options: _vm.orders_this_week }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "CHART" },
              [
                _c("chart", {
                  staticClass: "highcharts uk-margin-card",
                  attrs: { options: _vm.SoldProdsSubWeek }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "CHART" },
              [
                _c("chart", {
                  staticClass: "highcharts uk-margin-card",
                  attrs: { options: _vm.DeliverFeeSubWeek }
                })
              ],
              1
            )
          ]
        ),
        _vm._v(" "),
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
                  staticClass: "uk-card uk-card-default uk-margin-card",
                  attrs: { "uk-grid": "" }
                },
                [
                  _c("div", { staticClass: "uk-card-header" }, [
                    _c(
                      "div",
                      {
                        staticClass: "uk-grid-small uk-flex-middle",
                        attrs: { "uk-grid": "" }
                      },
                      [
                        _vm._m(9),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-width-expand" }, [
                          _c(
                            "h3",
                            {
                              staticClass:
                                "uk-card-title uk-margin-remove-bottom"
                            },
                            [_vm._v(_vm._s(_vm.orders))]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass: "uk-text-meta uk-margin-remove-top"
                            },
                            [_vm._v("Orders")]
                          )
                        ])
                      ]
                    )
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", [
              _c(
                "div",
                {
                  staticClass: "uk-card uk-card-default uk-margin-card",
                  attrs: { "uk-grid": "" }
                },
                [
                  _c("div", { staticClass: "uk-card-header" }, [
                    _c(
                      "div",
                      {
                        staticClass: "uk-grid-small uk-flex-middle",
                        attrs: { "uk-grid": "" }
                      },
                      [
                        _vm._m(10),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-width-expand" }, [
                          _c(
                            "h3",
                            {
                              staticClass:
                                "uk-card-title uk-margin-remove-bottom"
                            },
                            [_vm._v(_vm._s(_vm.recieved_prices))]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass: "uk-text-meta uk-margin-remove-top"
                            },
                            [_vm._v("Sold Products")]
                          )
                        ])
                      ]
                    )
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", [
              _c(
                "div",
                {
                  staticClass: "uk-card uk-card-default uk-margin-card",
                  attrs: { "uk-grid": "" }
                },
                [
                  _c("div", { staticClass: "uk-card-header" }, [
                    _c(
                      "div",
                      {
                        staticClass: "uk-grid-small uk-flex-middle",
                        attrs: { "uk-grid": "" }
                      },
                      [
                        _vm._m(11),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-width-expand" }, [
                          _c(
                            "h3",
                            {
                              staticClass:
                                "uk-card-title uk-margin-remove-bottom"
                            },
                            [_vm._v(_vm._s(_vm.Deliver_Fee))]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass: "uk-text-meta uk-margin-remove-top"
                            },
                            [_vm._v("Delivers Fees")]
                          )
                        ])
                      ]
                    )
                  ])
                ]
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c("hr", { staticClass: "uk-divider-icon" }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "uk-child-width-1-3@m",
            attrs: { "uk-grid": "", "uk-scrollspy": "cls:  " }
          },
          [
            _c("div", [
              _c(
                "div",
                { staticClass: "uk-card uk-card-default uk-margin-card" },
                [
                  _c("div", { staticClass: "uk-card-header" }, [
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
                              "router-link",
                              {
                                staticClass: "StCls",
                                attrs: { to: "/ordersget/waiting" }
                              },
                              [
                                _c(
                                  "vue-circle",
                                  {
                                    attrs: {
                                      progress:
                                        _vm.WaitingOrdersAcceptedPercent,
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
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-width-expand" }, [
                          _c(
                            "h3",
                            {
                              staticClass:
                                "uk-card-title uk-margin-remove-bottom"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.WaitingOrdersCountAccepted) + " "
                              ),
                              _c("font", { staticClass: "pt" }, [
                                _vm._v(
                                  "(" +
                                    _vm._s(_vm.WaitingOrdersAcceptedPercent) +
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
                              staticClass: "uk-text-meta uk-margin-remove-top"
                            },
                            [_vm._v("Accepted Waiting Orders")]
                          )
                        ])
                      ]
                    )
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", [
              _c(
                "div",
                { staticClass: "uk-card uk-card-default uk-margin-card" },
                [
                  _c("div", { staticClass: "uk-card-header" }, [
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
                              "router-link",
                              {
                                staticClass: "StCls",
                                attrs: { to: "/ordersget/waiting_unaccepted" }
                              },
                              [
                                _c(
                                  "vue-circle",
                                  {
                                    attrs: {
                                      progress:
                                        _vm.WaitingOrdersNotAcceptedPercent,
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
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-width-expand" }, [
                          _c(
                            "h3",
                            {
                              staticClass:
                                "uk-card-title uk-margin-remove-bottom"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.WaitingOrdersCountNotAccepted) + " "
                              ),
                              _c("font", { staticClass: "pt" }, [
                                _vm._v(
                                  "(" +
                                    _vm._s(
                                      _vm.WaitingOrdersNotAcceptedPercent
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
                            {
                              staticClass: "uk-text-meta uk-margin-remove-top"
                            },
                            [_vm._v("Unaccepted Waiting Orders")]
                          )
                        ])
                      ]
                    )
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", [
              _c(
                "div",
                { staticClass: "uk-card uk-card-default uk-margin-card" },
                [
                  _c("div", { staticClass: "uk-card-header" }, [
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
                              "router-link",
                              {
                                staticClass: "StCls",
                                attrs: { to: "/ordersget/pending" }
                              },
                              [
                                _c(
                                  "vue-circle",
                                  {
                                    attrs: {
                                      progress: _vm.PendingOrdersPercent,
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
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-width-expand" }, [
                          _c(
                            "h3",
                            {
                              staticClass:
                                "uk-card-title uk-margin-remove-bottom"
                            },
                            [
                              _vm._v(_vm._s(_vm.PendingOrdersCount) + " "),
                              _c("font", { staticClass: "pt" }, [
                                _vm._v(
                                  "(" + _vm._s(_vm.PendingOrdersPercent) + "%)"
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass: "uk-text-meta uk-margin-remove-top"
                            },
                            [_vm._v("Pending Orders")]
                          )
                        ])
                      ]
                    )
                  ])
                ]
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "uk-child-width-1-2@m",
            attrs: { "uk-grid": "", "uk-scrollspy": "cls:  " }
          },
          [
            _c("div", [
              _c(
                "div",
                { staticClass: "uk-card uk-card-default uk-margin-card" },
                [
                  _c("div", { staticClass: "uk-card-header" }, [
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
                              "router-link",
                              {
                                staticClass: "StCls",
                                attrs: { to: "/ordersget/delivered" }
                              },
                              [
                                _c(
                                  "vue-circle",
                                  {
                                    attrs: {
                                      progress: _vm.DeliveredOrdersPercent,
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
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-width-expand" }, [
                          _c(
                            "h3",
                            {
                              staticClass:
                                "uk-card-title uk-margin-remove-bottom"
                            },
                            [
                              _vm._v(_vm._s(_vm.DeliveredOrdersCount) + " "),
                              _c("font", { staticClass: "pt" }, [
                                _vm._v(
                                  "(" +
                                    _vm._s(_vm.DeliveredOrdersPercent) +
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
                              staticClass: "uk-text-meta uk-margin-remove-top"
                            },
                            [_vm._v("Delivered Orders")]
                          )
                        ])
                      ]
                    )
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", [
              _c(
                "div",
                { staticClass: "uk-card uk-card-default uk-margin-card" },
                [
                  _c("div", { staticClass: "uk-card-header" }, [
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
                              "router-link",
                              {
                                staticClass: "StCls",
                                attrs: { to: "/ordersget/issued" }
                              },
                              [
                                _c(
                                  "vue-circle",
                                  {
                                    attrs: {
                                      progress: _vm.IssuedOrdersPercent,
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
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-width-expand" }, [
                          _c(
                            "h3",
                            {
                              staticClass:
                                "uk-card-title uk-margin-remove-bottom"
                            },
                            [
                              _vm._v(_vm._s(_vm.IssuedOrdersCount) + " "),
                              _c("font", { staticClass: "pt" }, [
                                _vm._v(
                                  "(" + _vm._s(_vm.IssuedOrdersPercent) + "%)"
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass: "uk-text-meta uk-margin-remove-top"
                            },
                            [_vm._v("Issued Orders")]
                          )
                        ])
                      ]
                    )
                  ])
                ]
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "uk-child-width-1-1@m",
            attrs: { "uk-grid": "", "uk-scrollspy": "cls:  " }
          },
          [
            _c("div", [
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
                      )
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _vm.ShowOrderByDate
                ? _c(
                    "div",
                    {
                      staticClass: "uk-child-width-1-5@m",
                      attrs: { "uk-grid": "", "uk-scrollspy": "cls:  " }
                    },
                    [
                      _c("div", [
                        _c(
                          "div",
                          {
                            staticClass:
                              "uk-card uk-card-default uk-margin-card",
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
                                    _c(
                                      "div",
                                      { staticClass: "uk-width-expand" },
                                      [
                                        _c(
                                          "h3",
                                          {
                                            staticClass:
                                              "uk-card-title uk-margin-remove-bottom"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                this.WaitingUnAcceptedByDate
                                              )
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "uk-text-meta uk-margin-remove-top"
                                          },
                                          [_vm._v("Waiting UnAccepted")]
                                        )
                                      ]
                                    )
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
                            staticClass:
                              "uk-card uk-card-default uk-margin-card",
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
                                    _c(
                                      "div",
                                      { staticClass: "uk-width-expand" },
                                      [
                                        _c(
                                          "h3",
                                          {
                                            staticClass:
                                              "uk-card-title uk-margin-remove-bottom"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(this.WaitingAcceptedByDate)
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "uk-text-meta uk-margin-remove-top"
                                          },
                                          [_vm._v("Waiting Accepted")]
                                        )
                                      ]
                                    )
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
                            staticClass:
                              "uk-card uk-card-default uk-margin-card",
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
                                    _c(
                                      "div",
                                      { staticClass: "uk-width-expand" },
                                      [
                                        _c(
                                          "h3",
                                          {
                                            staticClass:
                                              "uk-card-title uk-margin-remove-bottom"
                                          },
                                          [_vm._v(_vm._s(this.PendingByDate))]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "uk-text-meta uk-margin-remove-top"
                                          },
                                          [_vm._v("Pending")]
                                        )
                                      ]
                                    )
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
                            staticClass:
                              "uk-card uk-card-default uk-margin-card",
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
                                    _c(
                                      "div",
                                      { staticClass: "uk-width-expand" },
                                      [
                                        _c(
                                          "h3",
                                          {
                                            staticClass:
                                              "uk-card-title uk-margin-remove-bottom"
                                          },
                                          [_vm._v(_vm._s(this.DeliveredByDate))]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "uk-text-meta uk-margin-remove-top"
                                          },
                                          [_vm._v("Delivered")]
                                        )
                                      ]
                                    )
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
                            staticClass:
                              "uk-card uk-card-default uk-margin-card",
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
                                    _c(
                                      "div",
                                      { staticClass: "uk-width-expand" },
                                      [
                                        _c(
                                          "h3",
                                          {
                                            staticClass:
                                              "uk-card-title uk-margin-remove-bottom"
                                          },
                                          [_vm._v(_vm._s(this.IssuedByDate))]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "uk-text-meta uk-margin-remove-top"
                                          },
                                          [_vm._v("Issued")]
                                        )
                                      ]
                                    )
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
              _c(
                "div",
                {
                  staticClass: "uk-card uk-card-default uk-margin-card GCHART"
                },
                [
                  _vm.isLoaded
                    ? _c("GChart", {
                        attrs: {
                          type: "ColumnChart",
                          data: _vm.OrdersChartAllStatus,
                          options: _vm.chartOptions
                        }
                      })
                    : _vm._e()
                ],
                1
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c("hr", { staticClass: "uk-divider-icon" }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "uk-child-width-1-2@m",
            attrs: { "uk-grid": "", "uk-scrollspy": "cls:  " }
          },
          [
            _c(
              "div",
              [
                _vm._m(12),
                _vm._v(" "),
                _vm._l(_vm.F_Top_5_Delivers, function(order, index) {
                  return _c(
                    "div",
                    {
                      key: order.id,
                      staticClass: "uk-card uk-card-default uk-margin-card"
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "uk-card-header",
                          staticStyle: { padding: "5px 30px" }
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
                                    width: "81px",
                                    "justify-content": "center",
                                    display: "flex"
                                  }
                                },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticStyle: {
                                        "font-size": "3.1rem",
                                        color: "rgb(111, 218, 118)"
                                      }
                                    },
                                    [_vm._v("#" + _vm._s(index + 1))]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "uk-width-expand" }, [
                                _c(
                                  "h3",
                                  {
                                    staticClass:
                                      "uk-card-title uk-margin-remove-bottom"
                                  },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticStyle: { color: "black" },
                                        attrs: {
                                          to: "/viewdelivers/" + order.id
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(order.Deliver) +
                                            "\n                                "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "uk-text-meta uk-margin-remove-top",
                                    staticStyle: {
                                      "font-size": "17px",
                                      color: "#2075a7"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(order.Total_Orders) + " Orders"
                                    )
                                  ]
                                )
                              ])
                            ]
                          )
                        ]
                      )
                    ]
                  )
                }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "justify-content-center",
                    attrs: { "uk-grid": "", align: "center" }
                  },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-outline-info",
                        staticStyle: { padding: "6px", margin: "9px" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.showPanelTopDelivers($event)
                          }
                        }
                      },
                      [_vm._v("show all")]
                    )
                  ]
                )
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              [
                _vm._m(13),
                _vm._v(" "),
                _vm._l(_vm.F_Top_5_Members, function(order, index) {
                  return _c(
                    "div",
                    {
                      key: order.id,
                      staticClass: "uk-card uk-card-default uk-margin-card"
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "uk-card-header",
                          staticStyle: { padding: "5px 30px" }
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
                                    width: "81px",
                                    "justify-content": "center",
                                    display: "flex"
                                  }
                                },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticStyle: {
                                        "font-size": "3.1rem",
                                        color: "rgb(111, 218, 118)"
                                      }
                                    },
                                    [_vm._v("#" + _vm._s(index + 1))]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "uk-width-expand" }, [
                                _c(
                                  "h3",
                                  {
                                    staticClass:
                                      "uk-card-title uk-margin-remove-bottom"
                                  },
                                  [
                                    order.account_type == 2
                                      ? _c(
                                          "router-link",
                                          {
                                            staticStyle: { color: "black" },
                                            attrs: {
                                              to: "/viewusers/" + order.id
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                    " +
                                                _vm._s(order.Member) +
                                                "\n                                "
                                            )
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    order.account_type == 3
                                      ? _c(
                                          "router-link",
                                          {
                                            staticStyle: { color: "black" },
                                            attrs: {
                                              to: "/viewstores/" + order.id
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                    " +
                                                _vm._s(order.Member) +
                                                "\n                                "
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "uk-text-meta uk-margin-remove-top",
                                    staticStyle: {
                                      "font-size": "17px",
                                      color: "#2075a7"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(order.Total_Orders) + " Orders"
                                    )
                                  ]
                                )
                              ])
                            ]
                          )
                        ]
                      )
                    ]
                  )
                }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "justify-content-center",
                    attrs: { "uk-grid": "", align: "center" }
                  },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-outline-info",
                        staticStyle: { padding: "6px", margin: "9px" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.showPanelTopMembers($event)
                          }
                        }
                      },
                      [_vm._v("show all")]
                    )
                  ]
                )
              ],
              2
            ),
            _vm._v(" "),
            _c("div", [
              _c(
                "div",
                {
                  staticClass: "uk-child-width-1-2@m",
                  attrs: { "uk-grid": "", "uk-scrollspy": "cls:  " }
                },
                [
                  _c("div", [
                    _c(
                      "div",
                      { staticClass: "uk-card uk-card-default uk-margin-card" },
                      [
                        _c(
                          "table",
                          {
                            staticClass: "table cust-table",
                            attrs: { border: "0" }
                          },
                          [
                            _vm._m(14),
                            _vm._v(" "),
                            _vm._l(_vm.OrdersFromStateDestinic, function(
                              order,
                              index
                            ) {
                              return _c("tbody", { key: order.id }, [
                                _c("tr", [
                                  _c(
                                    "td",
                                    { staticStyle: { width: "200px" } },
                                    [_vm._v(_vm._s(order.location_from_state))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    { staticStyle: { width: "200px" } },
                                    [_vm._v(_vm._s(order.Total_Orders))]
                                  )
                                ])
                              ])
                            })
                          ],
                          2
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "div",
                      { staticClass: "uk-card uk-card-default uk-margin-card" },
                      [
                        _c(
                          "table",
                          {
                            staticClass: "table cust-table",
                            attrs: { border: "0" }
                          },
                          [
                            _vm._m(15),
                            _vm._v(" "),
                            _vm._l(_vm.OrdersToStateDestinic, function(
                              order,
                              index
                            ) {
                              return _c("tbody", { key: order.id }, [
                                _c("tr", [
                                  _c(
                                    "td",
                                    { staticStyle: { width: "200px" } },
                                    [_vm._v(_vm._s(order.location_to_state))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    { staticStyle: { width: "200px" } },
                                    [_vm._v(_vm._s(order.Total_Orders))]
                                  )
                                ])
                              ])
                            })
                          ],
                          2
                        )
                      ]
                    )
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", [
              _c(
                "div",
                {
                  staticClass: "uk-card uk-card-default uk-margin-card",
                  attrs: { "uk-grid": "" }
                },
                [
                  _c("div", { staticClass: "uk-card-header" }, [
                    _c(
                      "div",
                      {
                        staticClass: "uk-grid-small uk-flex-middle",
                        attrs: { "uk-grid": "" }
                      },
                      [
                        _vm._m(16),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-width-expand" }, [
                          _c(
                            "h3",
                            {
                              staticClass:
                                "uk-card-title uk-margin-remove-bottom"
                            },
                            [_vm._v(_vm._s(_vm.CountReports))]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass: "uk-text-meta uk-margin-remove-top"
                            },
                            [_vm._v("Reports")]
                          )
                        ])
                      ]
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "uk-card uk-card-default uk-margin-card" },
                [
                  _c(
                    "table",
                    {
                      staticClass: "table cust-table",
                      attrs: { border: "f0" }
                    },
                    [
                      _vm._m(17),
                      _vm._v(" "),
                      _vm._l(_vm.Reports.data, function(order, index) {
                        return _c("tbody", { key: order.id }, [
                          _c("tr", [
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
                            _c("td", { staticStyle: { width: "200px" } }, [
                              _vm._v(_vm._s(order.describtion))
                            ])
                          ])
                        ])
                      })
                    ],
                    2
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("slideout-panel")
          ],
          1
        )
      ])
    : _c("div", { staticClass: "roo row Departmain" }, [_vm._m(18)])
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
        staticStyle: {
          width: "81px",
          "justify-content": "center",
          display: "flex"
        }
      },
      [
        _c("i", {
          staticClass: "fas fa-user",
          staticStyle: { "font-size": "3.1rem", color: "rgb(255, 85, 147)" }
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
        staticStyle: {
          width: "81px",
          "justify-content": "center",
          display: "flex"
        }
      },
      [
        _c("i", {
          staticClass: "fas fa-store",
          staticStyle: { "font-size": "3.1rem", color: "rgb(93, 72, 175)" }
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
        staticStyle: {
          width: "81px",
          "justify-content": "center",
          display: "flex"
        }
      },
      [
        _c("i", {
          staticClass: "fa fa-truck sidebar-icon",
          staticStyle: { "font-size": "3.1rem", color: "rgb(191, 194, 100)" }
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
        staticStyle: {
          width: "81px",
          "justify-content": "center",
          display: "flex"
        }
      },
      [
        _c("i", {
          staticClass: "fas fa-user-tie",
          staticStyle: { "font-size": "3.1rem", color: "rgb(100, 190, 194)" }
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
        staticStyle: {
          width: "81px",
          "justify-content": "center",
          display: "flex"
        }
      },
      [
        _c("i", {
          staticClass: "fas fa-dollar-sign",
          staticStyle: { "font-size": "3.1rem", color: "rgb(100, 194, 106)" }
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
        staticStyle: {
          width: "81px",
          "justify-content": "center",
          display: "flex"
        }
      },
      [
        _c("i", {
          staticClass: "fas fa-user",
          staticStyle: { "font-size": "3.1rem", color: "black" }
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
        staticStyle: {
          width: "81px",
          "justify-content": "center",
          display: "flex"
        }
      },
      [
        _c("i", {
          staticClass: "fas fa-dollar-sign",
          staticStyle: { "font-size": "3.1rem", color: "rgb(100, 194, 106)" }
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
        staticStyle: {
          width: "81px",
          "justify-content": "center",
          display: "flex"
        }
      },
      [
        _c("i", {
          staticClass: "fas fa-dollar-sign",
          staticStyle: { "font-size": "3.1rem", color: "rgb(100, 194, 106)" }
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
        staticStyle: {
          width: "81px",
          "justify-content": "center",
          display: "flex"
        }
      },
      [
        _c("i", {
          staticClass: "fas fa-dollar-sign",
          staticStyle: { "font-size": "3.1rem", color: "rgb(100, 194, 106)" }
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
        staticStyle: {
          width: "81px",
          "justify-content": "center",
          display: "flex"
        }
      },
      [
        _c("i", {
          staticClass: "fas fa-boxes sidebar-icon",
          staticStyle: { "font-size": "3.1rem", color: "#5ea3d5" }
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
        staticStyle: {
          width: "81px",
          "justify-content": "center",
          display: "flex"
        }
      },
      [
        _c("i", {
          staticClass: "fas fa-file-invoice-dollar",
          staticStyle: { "font-size": "3.1rem", color: "rgb(100, 194, 106)" }
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
        staticStyle: {
          width: "81px",
          "justify-content": "center",
          display: "flex"
        }
      },
      [
        _c("i", {
          staticClass: "fas fa-hand-holding-usd",
          staticStyle: { "font-size": "3.1rem", color: "rgb(189, 133, 218)" }
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
        staticClass: "uk-card uk-card-default uk-margin-card",
        attrs: { "uk-grid": "" }
      },
      [
        _c(
          "div",
          {
            staticClass: "uk-card-header",
            staticStyle: { padding: "5px 30px" }
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
                      width: "81px",
                      "justify-content": "center",
                      display: "flex"
                    }
                  },
                  [
                    _c("i", {
                      staticClass: "fas fa-star",
                      staticStyle: {
                        "font-size": "3.1rem",
                        color: "rgb(222, 204, 73)"
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "uk-width-expand" }, [
                  _c(
                    "h3",
                    { staticClass: "uk-card-title uk-margin-remove-bottom" },
                    [
                      _vm._v(
                        "\n                                Top 5 Delivers\n                                "
                      ),
                      _c("span", {
                        staticClass: "fa fa-truck sidebar-icon",
                        staticStyle: {
                          "font-size": "1.5rem",
                          color: "rgb(89, 89, 89)"
                        },
                        attrs: { "aria-hidden": "true" }
                      })
                    ]
                  )
                ])
              ]
            )
          ]
        )
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
        staticClass: "uk-card uk-card-default uk-margin-card",
        attrs: { "uk-grid": "" }
      },
      [
        _c(
          "div",
          {
            staticClass: "uk-card-header",
            staticStyle: { padding: "5px 30px" }
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
                      width: "81px",
                      "justify-content": "center",
                      display: "flex"
                    }
                  },
                  [
                    _c("i", {
                      staticClass: "fas fa-star",
                      staticStyle: {
                        "font-size": "3.1rem",
                        color: "rgb(222, 204, 73)"
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "uk-width-expand" }, [
                  _c(
                    "h3",
                    { staticClass: "uk-card-title uk-margin-remove-bottom" },
                    [
                      _vm._v(
                        "\n                                Top 5 Members\n                                "
                      ),
                      _c("span", {
                        staticClass: "fas fa-user",
                        staticStyle: {
                          "font-size": "1.5rem",
                          color: "rgb(89, 89, 89)"
                        },
                        attrs: { "aria-hidden": "true" }
                      })
                    ]
                  )
                ])
              ]
            )
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", {}, [
        _c("th", { staticStyle: { width: "200px" } }, [
          _vm._v("Orders Sent From")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "200px" } }, [_vm._v("Total")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", {}, [
        _c("th", { staticStyle: { width: "200px" } }, [
          _vm._v("Orders Sent To")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "200px" } }, [_vm._v("Total")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "uk-width-auto",
        staticStyle: {
          width: "81px",
          "justify-content": "center",
          display: "flex"
        }
      },
      [
        _c("i", {
          staticClass: "fa fa-file sidebar-icon",
          staticStyle: { "font-size": "3.1rem", color: "rgb(156, 156, 156)" }
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
        _c("th", { staticStyle: { width: "200px" } }, [
          _c("i", { staticClass: "fas fa-envelope-open-text" })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-12", attrs: { align: "center" } }, [
      _c("img", { attrs: { src: "/images/loading.gif" } })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/Admin/ShowAllTopDelivers.vue":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/components/Admin/ShowAllTopDelivers.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShowAllTopDelivers_vue_vue_type_template_id_07292a14_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowAllTopDelivers.vue?vue&type=template&id=07292a14&scoped=true& */ "./resources/assets/js/components/Admin/ShowAllTopDelivers.vue?vue&type=template&id=07292a14&scoped=true&");
/* harmony import */ var _ShowAllTopDelivers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowAllTopDelivers.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/Admin/ShowAllTopDelivers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShowAllTopDelivers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShowAllTopDelivers_vue_vue_type_template_id_07292a14_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShowAllTopDelivers_vue_vue_type_template_id_07292a14_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "07292a14",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/Admin/ShowAllTopDelivers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Admin/ShowAllTopDelivers.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/components/Admin/ShowAllTopDelivers.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowAllTopDelivers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShowAllTopDelivers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/ShowAllTopDelivers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowAllTopDelivers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Admin/ShowAllTopDelivers.vue?vue&type=template&id=07292a14&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Admin/ShowAllTopDelivers.vue?vue&type=template&id=07292a14&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowAllTopDelivers_vue_vue_type_template_id_07292a14_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShowAllTopDelivers.vue?vue&type=template&id=07292a14&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/ShowAllTopDelivers.vue?vue&type=template&id=07292a14&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowAllTopDelivers_vue_vue_type_template_id_07292a14_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowAllTopDelivers_vue_vue_type_template_id_07292a14_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/Admin/ShowAllTopMembers.vue":
/*!********************************************************************!*\
  !*** ./resources/assets/js/components/Admin/ShowAllTopMembers.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShowAllTopMembers_vue_vue_type_template_id_d7c0547e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowAllTopMembers.vue?vue&type=template&id=d7c0547e&scoped=true& */ "./resources/assets/js/components/Admin/ShowAllTopMembers.vue?vue&type=template&id=d7c0547e&scoped=true&");
/* harmony import */ var _ShowAllTopMembers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowAllTopMembers.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/Admin/ShowAllTopMembers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShowAllTopMembers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShowAllTopMembers_vue_vue_type_template_id_d7c0547e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShowAllTopMembers_vue_vue_type_template_id_d7c0547e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d7c0547e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/Admin/ShowAllTopMembers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Admin/ShowAllTopMembers.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/components/Admin/ShowAllTopMembers.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowAllTopMembers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShowAllTopMembers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/ShowAllTopMembers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowAllTopMembers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Admin/ShowAllTopMembers.vue?vue&type=template&id=d7c0547e&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Admin/ShowAllTopMembers.vue?vue&type=template&id=d7c0547e&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowAllTopMembers_vue_vue_type_template_id_d7c0547e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShowAllTopMembers.vue?vue&type=template&id=d7c0547e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/ShowAllTopMembers.vue?vue&type=template&id=d7c0547e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowAllTopMembers_vue_vue_type_template_id_d7c0547e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowAllTopMembers_vue_vue_type_template_id_d7c0547e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/Home.vue":
/*!*************************************************!*\
  !*** ./resources/assets/js/components/Home.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_6707e3d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=6707e3d4& */ "./resources/assets/js/components/Home.vue?vue&type=template&id=6707e3d4&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_6707e3d4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_6707e3d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/assets/js/components/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Home.vue?vue&type=template&id=6707e3d4&":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/components/Home.vue?vue&type=template&id=6707e3d4& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_6707e3d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=6707e3d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Home.vue?vue&type=template&id=6707e3d4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_6707e3d4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_6707e3d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);