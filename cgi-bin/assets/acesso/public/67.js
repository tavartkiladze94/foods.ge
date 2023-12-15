(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[67],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Delivers/Gd_delivers.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Delivers/Gd_delivers.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_simple_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-simple-alert */ "./node_modules/vue-simple-alert/lib/index.js");
/* harmony import */ var vue2_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-google-maps */ "./node_modules/vue2-google-maps/dist/main.js");
/* harmony import */ var vue2_google_maps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue2_google_maps__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue2_gmap_custom_marker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-gmap-custom-marker */ "./node_modules/vue2-gmap-custom-marker/gmap-custom-marker.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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


Vue.use(vue2_google_maps__WEBPACK_IMPORTED_MODULE_1__, {
  load: {
    key: 'AIzaSyAvWpsePUWUf5VIiRh6xckWdZrmJI-t2i4',
    libraries: 'places'
  }
});
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'gmap-custom-marker': vue2_gmap_custom_marker__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      orders: {},
      miniload: false,
      SelectedDeliverInfos: {
        deliver_id: '',
        deliver_name: '',
        credit: '',
        Deliver_Fee: '',
        Deliver_Fee_Global: ''
      },
      DeliverCurrentLocation_id: '',
      Current_Location_Lat: '',
      Current_Location_Lng: '',
      post: {},
      test: {}
    };
  },
  created: function created() {
    this.fetchArticles();
  },
  methods: {
    fetchArticles: function fetchArticles() {
      var _this = this;

      axios.get("/api/GetCarsInfo").then(function (res) {
        _this.isLoaded = true;
        _this.orders = res.data; //this.current_page = res.data.current_page;
        //if (res.data.next_page_url !== null) { this.next = true; }
        //if (res.data.prev_page_url !== null) { this.prev = true; }
      })["catch"](function (res) {
        var toast = _this.$toasted.show("Error 500", {
          type: 'error',
          theme: "bubble",
          position: "bottom-right",
          duration: 2000
        });
      });
    },
    createPost: function createPost(post) {
      this.$router.push({
        path: "/serach_for_accounts/".concat(this.post.phone_number)
      });
    },
    //Next() { this.$router.push({path: `/Admin_Accounts_delivers/${this.current_page+1}` }); },
    //Previous() { this.$router.push({path: `/Admin_Accounts_delivers/${this.current_page-1}` }); },
    WithdrawCredit: function WithdrawCredit(order_id) {
      var _this2 = this;

      this.miniload = true;
      this.$confirm("سيتم استرجاع الرصيد من المندوب هل انت متأكد ؟").then(function () {
        var formData = new FormData();
        formData.append('deliver_id', order_id);
        axios.post("/api/WithdrawFromDeliverToGd", formData).then(function (res) {
          if (res.status == 200) {
            _this2.fetchArticles();

            var toast = _this2.$toasted.show("تم تصفير الحساب", {
              type: 'success',
              theme: "bubble",
              position: "bottom-right",
              duration: 2000
            });

            _this2.miniload = false;
          } else {
            var _toast = _this2.$toasted.show(res.data.error, {
              type: 'error',
              theme: "bubble",
              position: "bottom-right",
              duration: 2000
            });

            _this2.miniload = false;
          }

          _this2.isLoaded = true;
          _this2.orders = res.data;
        })["catch"](function (res) {
          //console.log(res);
          var toast = _this2.$toasted.show(res, {
            type: 'error',
            theme: "bubble",
            position: "bottom-right",
            duration: 2000
          });
        });
      });
    },
    Release: function Release(order_id) {
      var _this3 = this;

      this.miniload = true;
      this.$confirm("سيتم تصفير الحساب هل انت متأكد ؟").then(function () {
        var formData = new FormData();
        formData.append('deliver_id', order_id);
        axios.post("/api/GDAccountingCar", formData).then(function (res) {
          if (res.status == 200) {
            _this3.fetchArticles();

            var toast = _this3.$toasted.show("تم تصفير الحساب", {
              type: 'success',
              theme: "bubble",
              position: "bottom-right",
              duration: 2000
            });

            _this3.miniload = false;
          } else {
            var _toast2 = _this3.$toasted.show(res.data.error, {
              type: 'error',
              theme: "bubble",
              position: "bottom-right",
              duration: 2000
            });

            _this3.miniload = false;
          }

          _this3.isLoaded = true;
          _this3.orders = res.data;
        })["catch"](function (res) {
          //console.log(res);
          var toast = _this3.$toasted.show(res, {
            type: 'error',
            theme: "bubble",
            position: "bottom-right",
            duration: 2000
          });
        });
      });
    },
    BeforTransfer: function BeforTransfer(Deliver_id, Deliver_FirstName, Deliver_LastName) {
      this.SelectedDeliverInfos.deliver_id = Deliver_id;
      this.SelectedDeliverInfos.deliver_name = Deliver_FirstName + ' ' + Deliver_LastName;
    },
    Transfer: function Transfer() {
      var _this4 = this;

      this.miniload = true;
      var formData = new FormData();
      formData.append('deliver_id', this.SelectedDeliverInfos.deliver_id);
      formData.append('credit', this.SelectedDeliverInfos.credit);
      formData.append('Deliver_Fee', this.SelectedDeliverInfos.Deliver_Fee);
      formData.append('Deliver_Fee_Global', this.SelectedDeliverInfos.Deliver_Fee_Global);
      axios.post("/api/GD_Transfer_Credit", formData).then(function (res) {
        if (res.status == 200) {
          _this4.fetchArticles();

          var toast = _this4.$toasted.show("تم تحويل الرصيد", {
            type: 'success',
            theme: "bubble",
            position: "bottom-right",
            duration: 2000
          });

          _this4.miniload = false;
          UIkit.modal('#modal-example').hide();
        } else {
          var _toast3 = _this4.$toasted.show("خطأ حاول مرة اخرى", {
            type: 'error',
            theme: "bubble",
            position: "bottom-right",
            duration: 2000
          });

          _this4.miniload = false;
        }

        _this4.isLoaded = true;
        _this4.orders = res.data;
      })["catch"](function (res) {
        //console.log(res);
        var toast = _this4.$toasted.show("ليس لديك رصيد كاف", {
          type: 'error',
          theme: "bubble",
          position: "bottom-center",
          duration: 2000
        });

        _this4.miniload = false;
      });
    },
    disabled: function disabled() {}
  },
  computed: {
    isValid: function isValid() {
      return this.SelectedDeliverInfos.credit !== '' && this.SelectedDeliverInfos.Deliver_Fee !== '' && this.SelectedDeliverInfos.Deliver_Fee_Global !== '';
    }
  },
  mounted: function mounted() {
    var vm = this;
    var pusher = new Pusher("2b072c56376c916028f3", {
      cluster: 'ap2'
    });
    Pusher.logToConsole = true;
    var channel = pusher.subscribe('UpdateDeliverLocation-channel');
    channel.bind('UpdateDeliverLocation-Event', function (data) {
      //update Delivers Locations
      //vm.fetchArticles();
      vm.test = data.message;
      vm.DeliverCurrentLocation_id = data.message.deliver_id;
      vm.Current_Location_Lat = data.message.Current_location_lat;
      vm.Current_Location_Lng = data.message.Current_location_lng;
      Vue.toasted.show(data.message, {
        type: 'success',
        theme: "toasted-primary",
        position: "bottom-right",
        duration: 2000
      }); //setTimeout(() => vm.DeliverCurrentLocation_id = '', 5000);
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Delivers/Gd_delivers.vue?vue&type=template&id=370dd786&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Delivers/Gd_delivers.vue?vue&type=template&id=370dd786& ***!
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
              _c("td", { staticStyle: { width: "80px" } }, [
                _vm._v(_vm._s(order.id))
              ]),
              _vm._v(" "),
              _c(
                "td",
                { staticClass: "text-center", staticStyle: { width: "200px" } },
                [
                  _c(
                    "router-link",
                    { attrs: { to: "/viewdelivers/" + order.id } },
                    [
                      _c("button", { staticClass: "btn btn-outline-info" }, [
                        _c("span", { staticClass: "fa fa-eye" })
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _vm.admin
                    ? _c(
                        "router-link",
                        { attrs: { to: "/notify/" + order.phone_number } },
                        [
                          _c(
                            "button",
                            { staticClass: "btn btn-outline-success" },
                            [_c("span", { staticClass: "fas fa-comment-dots" })]
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      attrs: { to: "/DeliverOrders/" + order.id + "/delivers" }
                    },
                    [
                      _c("button", { staticClass: "btn btn-outline-warning" }, [
                        _c("span", { staticClass: "fas fa-boxes" })
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-outline-danger",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.Release(order.id)
                        }
                      }
                    },
                    [
                      _c("span", {
                        staticClass: "fab fa-creative-commons-zero"
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-outline-danger",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.WithdrawCredit(order.id)
                        }
                      }
                    },
                    [_c("span", { staticClass: "fas fa-hand-holding-usd" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-outline-danger",
                      attrs: {
                        type: "button",
                        "uk-toggle": "target: #modal-example"
                      },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.BeforTransfer(
                            order.id,
                            order.first_name,
                            order.last_name
                          )
                        }
                      }
                    },
                    [_c("span", { staticClass: "fas fa-comment-dollar" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    { attrs: { to: "/DeliverStat/" + order.id + "/delivers" } },
                    [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-info",
                          staticStyle: { color: "#04bacc" }
                        },
                        [_c("span", { staticClass: "fas fa-chart-bar" })]
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("td", { staticStyle: { width: "100px" } }, [
                _vm._v(_vm._s(order.first_name) + " " + _vm._s(order.last_name))
              ]),
              _vm._v(" "),
              _c("td", { staticStyle: { width: "200px" } }, [
                _vm._v(_vm._s(order.phone_number))
              ]),
              _vm._v(" "),
              _c("td", { staticStyle: { width: "100px" } }, [
                _vm._v(_vm._s(order.waiting_ords))
              ]),
              _vm._v(" "),
              _c("td", { staticStyle: { width: "120px" } }, [
                _vm._v(_vm._s(order.pending_ords))
              ]),
              _vm._v(" "),
              _c("td", { staticStyle: { width: "100px" } }, [
                _vm._v(_vm._s(order.delivered_ords))
              ]),
              _vm._v(" "),
              _c("td", { staticStyle: { width: "100px" } }, [
                _vm._v(_vm._s(order.issued_ords))
              ]),
              _vm._v(" "),
              _c("td", { staticStyle: { width: "100px" } }, [
                _vm._v(_vm._s(order.balance))
              ]),
              _vm._v(" "),
              _c("td", { staticStyle: { width: "100px" } }, [
                _vm._v(_vm._s(order.credit))
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
    _c("div", { attrs: { id: "modal-example", "uk-modal": "" } }, [
      _c("div", { staticClass: "uk-modal-dialog uk-modal-body" }, [
        _c(
          "h2",
          {
            staticClass: "uk-modal-title",
            staticStyle: { "text-align": "center" }
          },
          [
            _vm._v(
              "تحويل رصيد الى " + _vm._s(_vm.SelectedDeliverInfos.deliver_name)
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "uk-child-width-1-3@m",
            staticStyle: {
              background: "white",
              "margin-left": "0px",
              padding: "10px",
              "border-radius": "45px"
            },
            attrs: { "uk-grid": "", "uk-scrollspy": "cls:  " }
          },
          [
            _c("div", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.SelectedDeliverInfos.Deliver_Fee_Global,
                    expression: "SelectedDeliverInfos.Deliver_Fee_Global"
                  }
                ],
                staticClass: "uk-input",
                staticStyle: { "text-align": "center" },
                attrs: { type: "number", placeholder: "العمولة الخارجية" },
                domProps: {
                  value: _vm.SelectedDeliverInfos.Deliver_Fee_Global
                },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.SelectedDeliverInfos,
                      "Deliver_Fee_Global",
                      $event.target.value
                    )
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.SelectedDeliverInfos.Deliver_Fee,
                    expression: "SelectedDeliverInfos.Deliver_Fee"
                  }
                ],
                staticClass: "uk-input",
                staticStyle: { "text-align": "center" },
                attrs: { type: "number", placeholder: "العمولة الداخلية" },
                domProps: { value: _vm.SelectedDeliverInfos.Deliver_Fee },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.SelectedDeliverInfos,
                      "Deliver_Fee",
                      $event.target.value
                    )
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.SelectedDeliverInfos.credit,
                    expression: "SelectedDeliverInfos.credit"
                  }
                ],
                staticClass: "uk-input",
                staticStyle: { "text-align": "center" },
                attrs: { type: "number", placeholder: "الرصيد" },
                domProps: { value: _vm.SelectedDeliverInfos.credit },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.SelectedDeliverInfos,
                      "credit",
                      $event.target.value
                    )
                  }
                }
              })
            ])
          ]
        ),
        _vm._v(" "),
        _c("p", { staticClass: "uk-text-right" }, [
          _c(
            "button",
            {
              staticClass: "uk-button uk-button-default uk-modal-close",
              attrs: { type: "button" }
            },
            [_vm._v("ألغاء")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "uk-button uk-button-primary",
              attrs: { disabled: !_vm.isValid, type: "button" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.Transfer()
                }
              }
            },
            [
              _vm.miniload
                ? _c("i", { staticClass: "fa fa-refresh fa-spin" })
                : _c("span", [_vm._v("تحويل")])
            ]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "uk-child-width-1-3@m",
        attrs: { "uk-grid": "", "uk-scrollspy": "cls:  " }
      },
      _vm._l(_vm.orders.data, function(order, index) {
        return _c("div", { key: order.id }, [
          _c("div", { staticClass: "uk-card-default" }, [
            _c("div", { staticClass: "uk-card-header" }, [
              _c(
                "div",
                {
                  staticClass: "uk-grid-small uk-flex-middle",
                  attrs: { "uk-grid": "" }
                },
                [
                  _vm._m(2, true),
                  _vm._v(" "),
                  _c("div", { staticClass: "uk-width-expand" }, [
                    _c(
                      "h3",
                      { staticClass: "uk-card-title uk-margin-remove-bottom" },
                      [
                        _vm._v(
                          _vm._s(order.first_name) +
                            " " +
                            _vm._s(order.last_name)
                        )
                      ]
                    )
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", {}, [
              _c(
                "div",
                [
                  _vm.DeliverCurrentLocation_id == order.id
                    ? _c(
                        "GmapMap",
                        {
                          ref: "map",
                          refInFor: true,
                          staticStyle: {
                            width: "100%",
                            height: "287px",
                            "box-shadow": "0px 0px 2px #919191"
                          },
                          attrs: {
                            options: {
                              mapTypeControl: false,
                              streetViewControl: false
                            },
                            center: {
                              lat: parseFloat(_vm.Current_Location_Lat),
                              lng: parseFloat(_vm.Current_Location_Lng)
                            },
                            zoom: 15,
                            "map-type-id": "terrain"
                          }
                        },
                        [
                          _c(
                            "gmap-custom-marker",
                            {
                              attrs: {
                                marker: {
                                  lat: parseFloat(_vm.Current_Location_Lat),
                                  lng: parseFloat(_vm.Current_Location_Lng)
                                }
                              }
                            },
                            [
                              _c("img", {
                                attrs: {
                                  src: "/images/DeliverLocation.webp",
                                  width: "50"
                                }
                              })
                            ]
                          )
                        ],
                        1
                      )
                    : _c(
                        "GmapMap",
                        {
                          ref: "map",
                          refInFor: true,
                          staticStyle: {
                            width: "100%",
                            height: "287px",
                            "box-shadow": "0px 0px 2px #919191"
                          },
                          attrs: {
                            options: {
                              mapTypeControl: false,
                              streetViewControl: false
                            },
                            center: {
                              lat: parseFloat(order.current_location_lat),
                              lng: parseFloat(order.current_location_lng)
                            },
                            zoom: 15,
                            "map-type-id": "terrain"
                          }
                        },
                        [
                          _c(
                            "gmap-custom-marker",
                            {
                              attrs: {
                                marker: {
                                  lat: parseFloat(order.current_location_lat),
                                  lng: parseFloat(order.current_location_lng)
                                }
                              }
                            },
                            [
                              _c("img", {
                                attrs: {
                                  src: "/images/DeliverLocation.webp",
                                  width: "50"
                                }
                              })
                            ]
                          )
                        ],
                        1
                      )
                ],
                1
              )
            ])
          ])
        ])
      }),
      0
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
        _c(
          "th",
          { staticClass: "text-center", staticStyle: { width: "200px" } },
          [_c("li", { staticClass: "fa fa-gear" })]
        ),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "100px" } }, [_vm._v("الاسم")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "200px" } }, [_vm._v("رقم الهاتف")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "100px" } }, [_vm._v("بريد مقبول")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "120px" } }, [
          _vm._v("بريد قيد التوصيل")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "100px" } }, [_vm._v("بريد مكتمل")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "100px" } }, [
          _vm._v("بريد غير مكتمل")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "100px" } }, [_vm._v("الارباح")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "100px" } }, [_vm._v("الرصيد")])
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
      _c("td", { staticStyle: { width: "100px" } }, [
        _c("i", { staticClass: "fa fa-refresh fa-spin" })
      ]),
      _vm._v(" "),
      _c("td", { staticStyle: { width: "120px" } }, [
        _c("i", { staticClass: "fa fa-refresh fa-spin" })
      ]),
      _vm._v(" "),
      _c("td", { staticStyle: { width: "100px" } }, [
        _c("i", { staticClass: "fa fa-refresh fa-spin" })
      ]),
      _vm._v(" "),
      _c("td", { staticStyle: { width: "100px" } }, [
        _c("i", { staticClass: "fa fa-refresh fa-spin" })
      ]),
      _vm._v(" "),
      _c("td", { staticStyle: { width: "100px" } }, [
        _c("i", { staticClass: "fa fa-refresh fa-spin" })
      ]),
      _vm._v(" "),
      _c("td", { staticStyle: { width: "100px" } }, [
        _c("i", { staticClass: "fa fa-refresh fa-spin" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "uk-width-auto" }, [
      _c("i", {
        staticClass: "fas fa-map-marker-alt",
        staticStyle: { "font-size": "48px" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/Delivers/Gd_delivers.vue":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/components/Delivers/Gd_delivers.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Gd_delivers_vue_vue_type_template_id_370dd786___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gd_delivers.vue?vue&type=template&id=370dd786& */ "./resources/assets/js/components/Delivers/Gd_delivers.vue?vue&type=template&id=370dd786&");
/* harmony import */ var _Gd_delivers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gd_delivers.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/Delivers/Gd_delivers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Gd_delivers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Gd_delivers_vue_vue_type_template_id_370dd786___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Gd_delivers_vue_vue_type_template_id_370dd786___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/Delivers/Gd_delivers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Delivers/Gd_delivers.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/components/Delivers/Gd_delivers.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gd_delivers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Gd_delivers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Delivers/Gd_delivers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gd_delivers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Delivers/Gd_delivers.vue?vue&type=template&id=370dd786&":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/components/Delivers/Gd_delivers.vue?vue&type=template&id=370dd786& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gd_delivers_vue_vue_type_template_id_370dd786___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Gd_delivers.vue?vue&type=template&id=370dd786& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Delivers/Gd_delivers.vue?vue&type=template&id=370dd786&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gd_delivers_vue_vue_type_template_id_370dd786___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gd_delivers_vue_vue_type_template_id_370dd786___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);