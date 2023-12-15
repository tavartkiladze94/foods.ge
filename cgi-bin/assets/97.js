(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[97],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/AdminShowOrderByID.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Admin/AdminShowOrderByID.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue2_gmap_custom_marker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-gmap-custom-marker */ "./node_modules/vue2-gmap-custom-marker/gmap-custom-marker.vue");
/* harmony import */ var vue2_google_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-google-maps */ "./node_modules/vue2-google-maps/dist/main.js");
/* harmony import */ var vue2_google_maps__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue2_google_maps__WEBPACK_IMPORTED_MODULE_2__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


Vue.use(vue2_google_maps__WEBPACK_IMPORTED_MODULE_2__, {
  load: {
    key: 'AIzaSyAvWpsePUWUf5VIiRh6xckWdZrmJI-t2i4',
    libraries: 'places'
  }
}); //import {GmapMarker} from 'vue2-google-maps/src/components/marker'
//Vue.component('GmapMarker', GmapMarker)

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CreatePost",
  components: {
    'gmap-custom-marker': vue2_gmap_custom_marker__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    /*var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    directionsDisplay.setMap(this.$refs.map.$mapObject);
     directionsService.route({
        origin: {lat: 33.30572553627776, lng: 44.337879940867424},
        destination: {lat: 30.498588967436646, lng: 47.83312048763037},
        travelMode: 'DRIVING'
    });*/
  },
  data: function data() {
    return {
      updatecheck: 0,
      disabled: 1,
      customer: null,
      sender: null,
      post: {},
      admin: false,
      post2: {},
      markerFrom: {
        lat: '',
        lng: ''
      },
      current: {
        lat: '',
        lng: ''
      },
      markerTo: {
        lat: '',
        lng: ''
      },
      ChangedData: [],
      val_errors: null,
      val_errors2: null,
      notFound: false,
      miniload: false,
      seccus: false
    };
  },
  created: function created() {
    var _this = this;

    if ($cookies.get('table_type') == "admins") {
      this.admin = true;
    }

    _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios.get("/api/Admin/Orders/".concat(_this.$route.params.id)).then(function (response) {
                if (response.status == 203) {
                  _this.notFound = true;
                } else {
                  _this.customer = response.data.customer;
                  _this.current.lat = parseFloat(response.data.customer.current_location_lat);
                  _this.current.lng = parseFloat(response.data.customer.current_location_lng);
                  _this.markerFrom.lat = parseFloat(response.data.customer.current_location_from_lat);
                  _this.markerFrom.lng = parseFloat(response.data.customer.current_location_from_lng);
                  _this.markerTo.lat = parseFloat(response.data.customer.current_location_to_lat);
                  _this.markerTo.lng = parseFloat(response.data.customer.current_location_to_lng);
                  _this.sender = response.data.sender;
                  _this.post = response.data.customer;
                  _this.post2 = response.data.sender;
                  console.log(response.data.sender);
                }
              })["catch"](function (res) {
                var toast = _this.$toasted.show("Error 500", {
                  type: 'error',
                  theme: "bubble",
                  position: "bottom-right",
                  duration: 2000
                });
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    Update: function Update() {
      this.updatecheck = 1;
      this.disabled = 0;
    },
    createPost: function createPost(post, post2) {
      var _this2 = this;

      //console.log(post);
      //console.log(post2);
      this.miniload = true;
      this.seccus = false;
      this.val_errors = false; //UPdate Order

      axios.post("/api/Admin/Orders/".concat(this.$route.params.id), post).then(function (res) {
        //console.log(res.data);
        if (res.status == 202) {
          var toast = _this2.$toasted.show("Error", {
            type: 'error',
            theme: "bubble",
            position: "bottom-center",
            duration: 2000
          });

          _this2.val_errors = res.data.errs;
          _this2.miniload = false;
          console.log(res.data);
        }

        if (res.status == 200) {
          console.log(res.data);

          var _toast = _this2.$toasted.show("Order Updated", {
            type: 'success',
            theme: "bubble",
            position: "bottom-center",
            duration: 2000
          });
        }
      })["catch"](function (res) {
        var toast = _this2.$toasted.show("Error 500", {
          type: 'error',
          theme: "bubble",
          position: "bottom-right",
          duration: 2000
        });

        _this2.miniload = false;
        console.log(res.response);
      }); //UPdate Cart

      axios.post("/api/Admin/Carts/".concat(this.$route.params.id), post2).then(function (res) {
        console.log(res.data);

        if (res.status == 202) {
          var toast = _this2.$toasted.show("Error", {
            type: 'error',
            theme: "bubble",
            position: "bottom-center",
            duration: 2000
          });

          _this2.val_errors2 = res.data.errs;
          _this2.miniload = false; //console.log(res.data);
        }

        if (res.status == 200) {
          var _toast2 = _this2.$toasted.show("Cart Updated", {
            type: 'success',
            theme: "bubble",
            position: "bottom-center",
            duration: 2000
          });

          _this2.miniload = false;
          _this2.disabled = 1;
          _this2.updatecheck = 0;
        }
      })["catch"](function (res) {
        console.log(res.response);

        var toast = _this2.$toasted.show("Error 500", {
          type: 'error',
          theme: "bubble",
          position: "bottom-right",
          duration: 2000
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/AdminShowOrderByID.vue?vue&type=template&id=4c200aab&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Admin/AdminShowOrderByID.vue?vue&type=template&id=4c200aab& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _vm.customer
    ? _c(
        "div",
        { staticClass: "uk-margin", staticStyle: { "margin-bottom": "0px" } },
        [
          _vm.admin
            ? _c(
                "div",
                {
                  staticClass: "uk-child-width-1-2@s uk-grid-match",
                  attrs: { "uk-grid": "" }
                },
                [
                  _c("div", [
                    _vm.updatecheck
                      ? _c("div", [
                          _vm.miniload
                            ? _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-outline-success del-icon",
                                  staticStyle: { padding: "9px" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                    }
                                  }
                                },
                                [
                                  _c("span", {
                                    staticClass: "fa fa-refresh fa-spin"
                                  })
                                ]
                              )
                            : _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-outline-success del-icon",
                                  staticStyle: { padding: "9px" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.createPost(_vm.post, _vm.post2)
                                    }
                                  }
                                },
                                [
                                  _c("span", {
                                    staticClass: "fas fa-check-circle"
                                  })
                                ]
                              )
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "div",
                      {
                        staticStyle: {
                          display: "grid",
                          "justify-content": "end"
                        }
                      },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-outline-info del-icon",
                            staticStyle: { padding: "9px" },
                            on: {
                              click: [
                                _vm.Update,
                                function($event) {
                                  $event.preventDefault()
                                }
                              ]
                            }
                          },
                          [_c("span", { staticClass: "fas fa-pen" })]
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
              staticClass: "uk-child-width-1-3@s uk-grid-match",
              attrs: { "uk-grid": "" }
            },
            [
              _c("div", [
                _c(
                  "div",
                  { staticClass: "uk-card uk-card-default uk-width-1-1@m" },
                  [
                    _vm._m(0),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "uk-card-body uk-child-width-1-2",
                        attrs: { "uk-grid": "" }
                      },
                      [
                        _vm._m(1),
                        _vm._v(" "),
                        _c("div", [
                          _vm.customer.account_type == 3
                            ? _c(
                                "div",
                                { staticClass: "uk-card customUkCard1" },
                                [_vm._v("Store")]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.customer.account_type == 2
                            ? _c(
                                "div",
                                { staticClass: "uk-card customUkCard1" },
                                [_vm._v("User")]
                              )
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c("div", { staticClass: "uk-card customUkCard" }, [
                            _vm._v(
                              "Full name\n                                "
                            ),
                            _vm.val_errors2
                              ? _c(
                                  "div",
                                  { staticStyle: { color: "red" } },
                                  _vm._l(
                                    _vm.val_errors2.sender_full_name,
                                    function(error, index) {
                                      return _c("font", { key: error.id }, [
                                        _vm._v(" (" + _vm._s(error) + ") ")
                                      ])
                                    }
                                  ),
                                  1
                                )
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-card customUkCard1" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.post2.sender_full_name,
                                expression: "post2.sender_full_name"
                              }
                            ],
                            staticClass: "dbld form-control",
                            attrs: {
                              disabled: _vm.disabled == 1,
                              type: "text"
                            },
                            domProps: { value: _vm.post2.sender_full_name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.post2,
                                  "sender_full_name",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c("div", { staticClass: "uk-card customUkCard" }, [
                            _vm._v(
                              "Phone Number\n                                "
                            ),
                            _vm.val_errors2
                              ? _c(
                                  "div",
                                  { staticStyle: { color: "red" } },
                                  _vm._l(
                                    _vm.val_errors.sender_phone_number,
                                    function(error, index) {
                                      return _c("font", { key: error.id }, [
                                        _vm._v(" (" + _vm._s(error) + ") ")
                                      ])
                                    }
                                  ),
                                  1
                                )
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-card customUkCard1" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.customer.sender_phone_number,
                                expression: "customer.sender_phone_number"
                              }
                            ],
                            staticClass: "dbld form-control",
                            attrs: {
                              disabled: _vm.disabled == 1,
                              type: "text"
                            },
                            domProps: {
                              value: _vm.customer.sender_phone_number
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.customer,
                                  "sender_phone_number",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _vm.customer.account_type == 3
                          ? _c("div", [
                              _c(
                                "div",
                                { staticClass: "uk-card customUkCard" },
                                [_vm._v("Store name")]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.customer.account_type == 3
                          ? _c("div", [
                              _c(
                                "div",
                                { staticClass: "uk-card customUkCard1" },
                                [_vm._v(_vm._s(_vm.sender.store_name))]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("div", [
                          _c("div", { staticClass: "uk-card customUkCard" }, [
                            _vm._v("Country\n                                "),
                            _vm.val_errors2
                              ? _c(
                                  "div",
                                  { staticStyle: { color: "red" } },
                                  _vm._l(
                                    _vm.val_errors2.location_from_country,
                                    function(error, index) {
                                      return _c("font", { key: error.id }, [
                                        _vm._v(" (" + _vm._s(error) + ") ")
                                      ])
                                    }
                                  ),
                                  1
                                )
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-card customUkCard1" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.post2.location_from_country,
                                expression: "post2.location_from_country"
                              }
                            ],
                            staticClass: "dbld form-control",
                            attrs: {
                              disabled: _vm.disabled == 1,
                              type: "text"
                            },
                            domProps: {
                              value: _vm.post2.location_from_country
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.post2,
                                  "location_from_country",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c("div", { staticClass: "uk-card customUkCard" }, [
                            _vm._v("State\n                                "),
                            _vm.val_errors2
                              ? _c(
                                  "div",
                                  { staticStyle: { color: "red" } },
                                  _vm._l(
                                    _vm.val_errors2.location_from_state,
                                    function(error, index) {
                                      return _c("font", { key: error.id }, [
                                        _vm._v(" (" + _vm._s(error) + ") ")
                                      ])
                                    }
                                  ),
                                  1
                                )
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-card customUkCard1" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.post2.location_from_state,
                                expression: "post2.location_from_state"
                              }
                            ],
                            staticClass: "dbld form-control",
                            attrs: {
                              disabled: _vm.disabled == 1,
                              type: "text"
                            },
                            domProps: { value: _vm.post2.location_from_state },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.post2,
                                  "location_from_state",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c("div", { staticClass: "uk-card customUkCard" }, [
                            _vm._v("Region\n                                "),
                            _vm.val_errors2
                              ? _c(
                                  "div",
                                  { staticStyle: { color: "red" } },
                                  _vm._l(
                                    _vm.val_errors.location_from_region,
                                    function(error, index) {
                                      return _c("font", { key: error.id }, [
                                        _vm._v(" (" + _vm._s(error) + ") ")
                                      ])
                                    }
                                  ),
                                  1
                                )
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-card customUkCard1" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.customer.location_from_region,
                                expression: "customer.location_from_region"
                              }
                            ],
                            staticClass: "dbld form-control",
                            attrs: {
                              disabled: _vm.disabled == 1,
                              type: "text"
                            },
                            domProps: {
                              value: _vm.customer.location_from_region
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.customer,
                                  "location_from_region",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("hr", { staticClass: "uk-divider-icon" }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "uk-card-body uk-child-width-1-2",
                        attrs: { "uk-grid": "" }
                      },
                      [
                        _vm._m(2),
                        _vm._v(" "),
                        _c("div", [
                          _vm.updatecheck
                            ? _c("div", [
                                _c(
                                  "div",
                                  { staticClass: "uk-card customUkCard2" },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value:
                                            _vm.post2.product_breakable_factor,
                                          expression:
                                            "post2.product_breakable_factor"
                                        }
                                      ],
                                      staticClass: "dbld uk-checkbox",
                                      attrs: {
                                        disabled: _vm.disabled == 1,
                                        type: "checkbox"
                                      },
                                      domProps: {
                                        checked: Array.isArray(
                                          _vm.post2.product_breakable_factor
                                        )
                                          ? _vm._i(
                                              _vm.post2
                                                .product_breakable_factor,
                                              null
                                            ) > -1
                                          : _vm.post2.product_breakable_factor
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$a =
                                              _vm.post2
                                                .product_breakable_factor,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = null,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  _vm.post2,
                                                  "product_breakable_factor",
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  _vm.post2,
                                                  "product_breakable_factor",
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(
                                              _vm.post2,
                                              "product_breakable_factor",
                                              $$c
                                            )
                                          }
                                        }
                                      }
                                    })
                                  ]
                                )
                              ])
                            : _c("div", [
                                _vm.post2.product_breakable_factor == 1
                                  ? _c(
                                      "div",
                                      { staticClass: "uk-card customUkCard2" },
                                      [_vm._v(" YES ")]
                                    )
                                  : _c(
                                      "div",
                                      { staticClass: "uk-card customUkCard3" },
                                      [_vm._v(" NO ")]
                                    )
                              ])
                        ]),
                        _vm._v(" "),
                        _vm._m(3),
                        _vm._v(" "),
                        _c("div", [
                          _vm.updatecheck
                            ? _c("div", [
                                _c(
                                  "div",
                                  { staticClass: "uk-card customUkCard2" },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.post2.product_pets_factor,
                                          expression:
                                            "post2.product_pets_factor"
                                        }
                                      ],
                                      staticClass: "dbld uk-checkbox",
                                      attrs: {
                                        disabled: _vm.disabled == 1,
                                        type: "checkbox"
                                      },
                                      domProps: {
                                        checked: Array.isArray(
                                          _vm.post2.product_pets_factor
                                        )
                                          ? _vm._i(
                                              _vm.post2.product_pets_factor,
                                              null
                                            ) > -1
                                          : _vm.post2.product_pets_factor
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$a =
                                              _vm.post2.product_pets_factor,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = null,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  _vm.post2,
                                                  "product_pets_factor",
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  _vm.post2,
                                                  "product_pets_factor",
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(
                                              _vm.post2,
                                              "product_pets_factor",
                                              $$c
                                            )
                                          }
                                        }
                                      }
                                    })
                                  ]
                                )
                              ])
                            : _c("div", [
                                _vm.post2.product_pets_factor == 1
                                  ? _c(
                                      "div",
                                      { staticClass: "uk-card customUkCard2" },
                                      [_vm._v(" YES ")]
                                    )
                                  : _c(
                                      "div",
                                      { staticClass: "uk-card customUkCard3" },
                                      [_vm._v(" NO ")]
                                    )
                              ])
                        ]),
                        _vm._v(" "),
                        _vm._m(4),
                        _vm._v(" "),
                        _c("div", [
                          _vm.updatecheck
                            ? _c("div", [
                                _c(
                                  "div",
                                  { staticClass: "uk-card customUkCard2" },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.post2.product_heat_factor,
                                          expression:
                                            "post2.product_heat_factor"
                                        }
                                      ],
                                      staticClass: "dbld uk-checkbox",
                                      attrs: {
                                        disabled: _vm.disabled == 1,
                                        type: "checkbox"
                                      },
                                      domProps: {
                                        checked: Array.isArray(
                                          _vm.post2.product_heat_factor
                                        )
                                          ? _vm._i(
                                              _vm.post2.product_heat_factor,
                                              null
                                            ) > -1
                                          : _vm.post2.product_heat_factor
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$a =
                                              _vm.post2.product_heat_factor,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = null,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  _vm.post2,
                                                  "product_heat_factor",
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  _vm.post2,
                                                  "product_heat_factor",
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(
                                              _vm.post2,
                                              "product_heat_factor",
                                              $$c
                                            )
                                          }
                                        }
                                      }
                                    })
                                  ]
                                )
                              ])
                            : _c("div", [
                                _vm.post2.product_heat_factor == 1
                                  ? _c(
                                      "div",
                                      { staticClass: "uk-card customUkCard2" },
                                      [_vm._v(" YES ")]
                                    )
                                  : _c(
                                      "div",
                                      { staticClass: "uk-card customUkCard3" },
                                      [_vm._v(" NO ")]
                                    )
                              ])
                        ]),
                        _vm._v(" "),
                        _vm._m(5),
                        _vm._v(" "),
                        _c("div", [
                          _vm.updatecheck
                            ? _c("div", [
                                _c(
                                  "div",
                                  { staticClass: "uk-card customUkCard2" },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.post2.product_plant_factor,
                                          expression:
                                            "post2.product_plant_factor"
                                        }
                                      ],
                                      staticClass: "dbld uk-checkbox",
                                      attrs: {
                                        disabled: _vm.disabled == 1,
                                        type: "checkbox"
                                      },
                                      domProps: {
                                        checked: Array.isArray(
                                          _vm.post2.product_plant_factor
                                        )
                                          ? _vm._i(
                                              _vm.post2.product_plant_factor,
                                              null
                                            ) > -1
                                          : _vm.post2.product_plant_factor
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$a =
                                              _vm.post2.product_plant_factor,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = null,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  _vm.post2,
                                                  "product_plant_factor",
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  _vm.post2,
                                                  "product_plant_factor",
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(
                                              _vm.post2,
                                              "product_plant_factor",
                                              $$c
                                            )
                                          }
                                        }
                                      }
                                    })
                                  ]
                                )
                              ])
                            : _c("div", [
                                _vm.post2.product_plant_factor == 1
                                  ? _c(
                                      "div",
                                      { staticClass: "uk-card customUkCard2" },
                                      [_vm._v(" YES ")]
                                    )
                                  : _c(
                                      "div",
                                      { staticClass: "uk-card customUkCard3" },
                                      [_vm._v(" NO ")]
                                    )
                              ])
                        ]),
                        _vm._v(" "),
                        _vm._m(6),
                        _vm._v(" "),
                        _c("div", [
                          _vm.updatecheck
                            ? _c("div", [
                                _c(
                                  "div",
                                  { staticClass: "uk-card customUkCard2" },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.post2.product_food_factor,
                                          expression:
                                            "post2.product_food_factor"
                                        }
                                      ],
                                      staticClass: "dbld uk-checkbox",
                                      attrs: {
                                        disabled: _vm.disabled == 1,
                                        type: "checkbox"
                                      },
                                      domProps: {
                                        checked: Array.isArray(
                                          _vm.post2.product_food_factor
                                        )
                                          ? _vm._i(
                                              _vm.post2.product_food_factor,
                                              null
                                            ) > -1
                                          : _vm.post2.product_food_factor
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$a =
                                              _vm.post2.product_food_factor,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = null,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  _vm.post2,
                                                  "product_food_factor",
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  _vm.post2,
                                                  "product_food_factor",
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(
                                              _vm.post2,
                                              "product_food_factor",
                                              $$c
                                            )
                                          }
                                        }
                                      }
                                    })
                                  ]
                                )
                              ])
                            : _c("div", [
                                _vm.post2.product_food_factor == 1
                                  ? _c(
                                      "div",
                                      { staticClass: "uk-card customUkCard2" },
                                      [_vm._v(" YES ")]
                                    )
                                  : _c(
                                      "div",
                                      { staticClass: "uk-card customUkCard3" },
                                      [_vm._v(" NO ")]
                                    )
                              ])
                        ]),
                        _vm._v(" "),
                        _vm._m(7),
                        _vm._v(" "),
                        _c("div", [
                          _vm.updatecheck
                            ? _c("div", [
                                _c(
                                  "div",
                                  { staticClass: "uk-card customUkCard2" },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value:
                                            _vm.post2.product_documents_factor,
                                          expression:
                                            "post2.product_documents_factor"
                                        }
                                      ],
                                      staticClass: "dbld uk-checkbox",
                                      attrs: {
                                        disabled: _vm.disabled == 1,
                                        type: "checkbox"
                                      },
                                      domProps: {
                                        checked: Array.isArray(
                                          _vm.post2.product_documents_factor
                                        )
                                          ? _vm._i(
                                              _vm.post2
                                                .product_documents_factor,
                                              null
                                            ) > -1
                                          : _vm.post2.product_documents_factor
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$a =
                                              _vm.post2
                                                .product_documents_factor,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = null,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  _vm.post2,
                                                  "product_documents_factor",
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  _vm.post2,
                                                  "product_documents_factor",
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(
                                              _vm.post2,
                                              "product_documents_factor",
                                              $$c
                                            )
                                          }
                                        }
                                      }
                                    })
                                  ]
                                )
                              ])
                            : _c("div", [
                                _vm.post2.product_documents_factor == 1
                                  ? _c(
                                      "div",
                                      { staticClass: "uk-card customUkCard2" },
                                      [_vm._v(" YES ")]
                                    )
                                  : _c(
                                      "div",
                                      { staticClass: "uk-card customUkCard3" },
                                      [_vm._v(" NO ")]
                                    )
                              ])
                        ]),
                        _vm._v(" "),
                        _vm._m(8),
                        _vm._v(" "),
                        _c("div", [
                          _vm.updatecheck
                            ? _c("div", [
                                _c(
                                  "div",
                                  { staticClass: "uk-card customUkCard2" },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value:
                                            _vm.post2.product_storable_factor,
                                          expression:
                                            "post2.product_storable_factor"
                                        }
                                      ],
                                      staticClass: "dbld uk-checkbox",
                                      attrs: {
                                        disabled: _vm.disabled == 1,
                                        type: "checkbox"
                                      },
                                      domProps: {
                                        checked: Array.isArray(
                                          _vm.post2.product_storable_factor
                                        )
                                          ? _vm._i(
                                              _vm.post2.product_storable_factor,
                                              null
                                            ) > -1
                                          : _vm.post2.product_storable_factor
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$a =
                                              _vm.post2.product_storable_factor,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = null,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  _vm.post2,
                                                  "product_storable_factor",
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  _vm.post2,
                                                  "product_storable_factor",
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(
                                              _vm.post2,
                                              "product_storable_factor",
                                              $$c
                                            )
                                          }
                                        }
                                      }
                                    })
                                  ]
                                )
                              ])
                            : _c("div", [
                                _vm.post2.product_storable_factor == 1
                                  ? _c(
                                      "div",
                                      { staticClass: "uk-card customUkCard2" },
                                      [_vm._v(" YES ")]
                                    )
                                  : _c(
                                      "div",
                                      { staticClass: "uk-card customUkCard3" },
                                      [_vm._v(" NO ")]
                                    )
                              ])
                        ])
                      ]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _c(
                  "div",
                  { staticClass: "uk-card uk-card-default uk-width-1-1@m" },
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
                              [_vm._v("ORDER")]
                            ),
                            _vm._v(" "),
                            _c(
                              "p",
                              {
                                staticClass: "uk-text-meta uk-margin-remove-top"
                              },
                              [
                                _c(
                                  "time",
                                  { attrs: { datetime: "2016-04-01T19:00" } },
                                  [_vm._v(_vm._s(_vm.customer.created_at))]
                                )
                              ]
                            )
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "uk-card-body uk-child-width-1-2",
                        attrs: { "uk-grid": "" }
                      },
                      [
                        _c("div", [
                          _c("div", { staticClass: "uk-card customUkCard" }, [
                            _vm._v("Product\n                                "),
                            _vm.val_errors
                              ? _c(
                                  "div",
                                  { staticStyle: { color: "red" } },
                                  _vm._l(_vm.val_errors.product_name, function(
                                    error,
                                    index
                                  ) {
                                    return _c("font", { key: error.id }, [
                                      _vm._v(" (" + _vm._s(error) + ") ")
                                    ])
                                  }),
                                  1
                                )
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-card customUkCard1" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.post.product_name,
                                expression: "post.product_name"
                              }
                            ],
                            staticClass: "dbld form-control",
                            attrs: {
                              disabled: _vm.disabled == 1,
                              type: "text"
                            },
                            domProps: { value: _vm.post.product_name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.post,
                                  "product_name",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c("div", { staticClass: "uk-card customUkCard" }, [
                            _vm._v("Price\n                                "),
                            _vm.val_errors
                              ? _c(
                                  "div",
                                  { staticStyle: { color: "red" } },
                                  _vm._l(
                                    _vm.val_errors.recieved_price,
                                    function(error, index) {
                                      return _c("font", { key: error.id }, [
                                        _vm._v(" (" + _vm._s(error) + ") ")
                                      ])
                                    }
                                  ),
                                  1
                                )
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-card customUkCard1" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.post.recieved_price,
                                expression: "post.recieved_price"
                              }
                            ],
                            staticClass: "dbld form-control",
                            attrs: {
                              disabled: _vm.disabled == 1,
                              type: "text"
                            },
                            domProps: { value: _vm.post.recieved_price },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.post,
                                  "recieved_price",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c("div", { staticClass: "uk-card customUkCard" }, [
                            _vm._v(
                              "Shipping type\n                                "
                            ),
                            _vm.val_errors
                              ? _c(
                                  "div",
                                  { staticStyle: { color: "red" } },
                                  _vm._l(_vm.val_errors.shipping_type, function(
                                    error,
                                    index
                                  ) {
                                    return _c("font", { key: error.id }, [
                                      _vm._v(" (" + _vm._s(error) + ") ")
                                    ])
                                  }),
                                  1
                                )
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-card customUkCard1" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.post.shipping_type,
                                expression: "post.shipping_type"
                              }
                            ],
                            staticClass: "dbld form-control",
                            attrs: {
                              disabled: _vm.disabled == 1,
                              type: "text"
                            },
                            domProps: { value: _vm.post.shipping_type },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.post,
                                  "shipping_type",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c("div", { staticClass: "uk-card customUkCard" }, [
                            _vm._v(
                              "Delivery type\n                                "
                            ),
                            _vm.val_errors2
                              ? _c(
                                  "div",
                                  { staticStyle: { color: "red" } },
                                  _vm._l(
                                    _vm.val_errors2.delivery_type,
                                    function(error, index) {
                                      return _c("font", { key: error.id }, [
                                        _vm._v(" (" + _vm._s(error) + ") ")
                                      ])
                                    }
                                  ),
                                  1
                                )
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-card customUkCard1" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.post2.delivery_type,
                                expression: "post2.delivery_type"
                              }
                            ],
                            staticClass: "dbld form-control",
                            attrs: {
                              disabled: _vm.disabled == 1,
                              type: "text"
                            },
                            domProps: { value: _vm.post2.delivery_type },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.post2,
                                  "delivery_type",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c("div", { staticClass: "uk-card customUkCard" }, [
                            _vm._v(
                              "Distance (km)\n                                "
                            ),
                            _vm.val_errors
                              ? _c(
                                  "div",
                                  { staticStyle: { color: "red" } },
                                  _vm._l(_vm.val_errors.distance, function(
                                    error,
                                    index
                                  ) {
                                    return _c("font", { key: error.id }, [
                                      _vm._v(" (" + _vm._s(error) + ") ")
                                    ])
                                  }),
                                  1
                                )
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-card customUkCard1" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.post.distance,
                                expression: "post.distance"
                              }
                            ],
                            staticClass: "dbld form-control",
                            attrs: {
                              disabled: _vm.disabled == 1,
                              type: "text"
                            },
                            domProps: { value: _vm.post.distance },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.post,
                                  "distance",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c("div", { staticClass: "uk-card customUkCard" }, [
                            _vm._v(
                              "Weight (kg)\n                                "
                            ),
                            _vm.val_errors2
                              ? _c(
                                  "div",
                                  { staticStyle: { color: "red" } },
                                  _vm._l(_vm.val_errors2.weight, function(
                                    error,
                                    index
                                  ) {
                                    return _c("font", { key: error.id }, [
                                      _vm._v(" (" + _vm._s(error) + ") ")
                                    ])
                                  }),
                                  1
                                )
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-card customUkCard1" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.post2.weight,
                                expression: "post2.weight"
                              }
                            ],
                            staticClass: "dbld form-control",
                            attrs: {
                              disabled: _vm.disabled == 1,
                              type: "text"
                            },
                            domProps: { value: _vm.post2.weight },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.post2,
                                  "weight",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c("div", { staticClass: "uk-card customUkCard" }, [
                            _vm._v(
                              "Length (Cm)\n                                "
                            ),
                            _vm.val_errors2
                              ? _c(
                                  "div",
                                  { staticStyle: { color: "red" } },
                                  _vm._l(_vm.val_errors2.length, function(
                                    error,
                                    index
                                  ) {
                                    return _c("font", { key: error.id }, [
                                      _vm._v(" (" + _vm._s(error) + ") ")
                                    ])
                                  }),
                                  1
                                )
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-card customUkCard1" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.post2.length,
                                expression: "post2.length"
                              }
                            ],
                            staticClass: "dbld form-control",
                            attrs: {
                              disabled: _vm.disabled == 1,
                              type: "text"
                            },
                            domProps: { value: _vm.post2.length },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.post2,
                                  "length",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c("div", { staticClass: "uk-card customUkCard" }, [
                            _vm._v(
                              "Payment method\n                                "
                            ),
                            _vm.val_errors
                              ? _c(
                                  "div",
                                  { staticStyle: { color: "red" } },
                                  _vm._l(
                                    _vm.val_errors.payment_method,
                                    function(error, index) {
                                      return _c("font", { key: error.id }, [
                                        _vm._v(" (" + _vm._s(error) + ") ")
                                      ])
                                    }
                                  ),
                                  1
                                )
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-card customUkCard1" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.post.payment_method,
                                expression: "post.payment_method"
                              }
                            ],
                            staticClass: "dbld form-control",
                            attrs: {
                              disabled: _vm.disabled == 1,
                              type: "text"
                            },
                            domProps: { value: _vm.post.payment_method },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.post,
                                  "payment_method",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-card customUkCard" }, [
                          _vm._v("Rate\n                                "),
                          _vm.val_errors
                            ? _c(
                                "div",
                                { staticStyle: { color: "red" } },
                                _vm._l(_vm.val_errors.rate, function(
                                  error,
                                  index
                                ) {
                                  return _c("font", { key: error.id }, [
                                    _vm._v(" (" + _vm._s(error) + ") ")
                                  ])
                                }),
                                1
                              )
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-card customUkCard1" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.post.rate,
                                expression: "post.rate"
                              }
                            ],
                            staticClass: "dbld form-control",
                            attrs: {
                              disabled: _vm.disabled == 1,
                              type: "text"
                            },
                            domProps: { value: _vm.post.rate },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.post, "rate", $event.target.value)
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c("div", { staticClass: "uk-card customUkCard" }, [
                            _vm._v(
                              "Order Status\n                                "
                            ),
                            _vm.val_errors
                              ? _c(
                                  "div",
                                  { staticStyle: { color: "red" } },
                                  _vm._l(_vm.val_errors.status, function(
                                    error,
                                    index
                                  ) {
                                    return _c("font", { key: error.id }, [
                                      _vm._v(" (" + _vm._s(error) + ") ")
                                    ])
                                  }),
                                  1
                                )
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-card customUkCard1" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.post.status,
                                expression: "post.status"
                              }
                            ],
                            staticClass: "dbld form-control",
                            attrs: {
                              disabled: _vm.disabled == 1,
                              type: "text"
                            },
                            domProps: { value: _vm.post.status },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.post,
                                  "status",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-card customUkCard" }, [
                          _vm._v(
                            "Issued order description\n                                "
                          ),
                          _vm.val_errors
                            ? _c(
                                "div",
                                { staticStyle: { color: "red" } },
                                _vm._l(_vm.val_errors.case_details, function(
                                  error,
                                  index
                                ) {
                                  return _c("font", { key: error.id }, [
                                    _vm._v(" (" + _vm._s(error) + ") ")
                                  ])
                                }),
                                1
                              )
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-card customUkCard1" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.post.case_details,
                                expression: "post.case_details"
                              }
                            ],
                            staticClass: "dbld form-control",
                            attrs: {
                              disabled: _vm.disabled == 1,
                              type: "text"
                            },
                            domProps: { value: _vm.post.case_details },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.post,
                                  "case_details",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c("div", { staticClass: "uk-card customUkCard" }, [
                            _vm._v(
                              "Track code\n                                "
                            ),
                            _vm.val_errors
                              ? _c(
                                  "div",
                                  { staticStyle: { color: "red" } },
                                  _vm._l(_vm.val_errors.track_code, function(
                                    error,
                                    index
                                  ) {
                                    return _c("font", { key: error.id }, [
                                      _vm._v(" (" + _vm._s(error) + ") ")
                                    ])
                                  }),
                                  1
                                )
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-card customUkCard1" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.post.track_code,
                                expression: "post.track_code"
                              }
                            ],
                            staticClass: "dbld form-control",
                            attrs: {
                              disabled: _vm.disabled == 1,
                              type: "text"
                            },
                            domProps: { value: _vm.post.track_code },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.post,
                                  "track_code",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _vm._m(10),
                        _vm._v(" "),
                        _vm._m(11)
                      ]
                    ),
                    _vm._v(" "),
                    _c("hr", { staticClass: "uk-divider-icon" }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "uk-card-body uk-child-width-1-3",
                        attrs: { "uk-grid": "" }
                      },
                      [
                        _vm._m(12),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-card customUkCard1" }, [
                          _vm._v(_vm._s(_vm.customer.Deliver_Fee))
                        ]),
                        _vm._v(" "),
                        _vm._m(13),
                        _vm._v(" "),
                        _vm._m(14),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-card customUkCard1" }, [
                          _vm._v(" " + _vm._s(_vm.customer.App_Fee) + " ")
                        ]),
                        _vm._v(" "),
                        _vm._m(15),
                        _vm._v(" "),
                        _vm._m(16),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-card customUkCard1" }, [
                          _vm._v(
                            " " + _vm._s(_vm.customer.Credit_Invoice) + " "
                          )
                        ]),
                        _vm._v(" "),
                        _vm._m(17)
                      ]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _c(
                  "div",
                  { staticClass: "uk-card uk-card-default uk-width-1-1@m" },
                  [
                    _vm._m(18),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-card-body" }, [
                      _c(
                        "div",
                        {
                          staticClass: "uk-card-body uk-child-width-1-2",
                          attrs: { "uk-grid": "" }
                        },
                        [
                          _c("div", [
                            _c("div", { staticClass: "uk-card customUkCard" }, [
                              _vm._v(
                                "Full name\n                                "
                              ),
                              _vm.val_errors
                                ? _c(
                                    "div",
                                    { staticStyle: { color: "red" } },
                                    _vm._l(
                                      _vm.val_errors.receiver_full_name,
                                      function(error, index) {
                                        return _c("font", { key: error.id }, [
                                          _vm._v(" (" + _vm._s(error) + ") ")
                                        ])
                                      }
                                    ),
                                    1
                                  )
                                : _vm._e()
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "div",
                              { staticClass: "uk-card customUkCard1" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.post.receiver_full_name,
                                      expression: "post.receiver_full_name"
                                    }
                                  ],
                                  staticClass: "dbld form-control",
                                  attrs: {
                                    disabled: _vm.disabled == 1,
                                    type: "text"
                                  },
                                  domProps: {
                                    value: _vm.post.receiver_full_name
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.post,
                                        "receiver_full_name",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _c("div", { staticClass: "uk-card customUkCard" }, [
                              _vm._v(
                                "Phone Number\n                                "
                              ),
                              _vm.val_errors
                                ? _c(
                                    "div",
                                    { staticStyle: { color: "red" } },
                                    _vm._l(
                                      _vm.val_errors.reciever_phone_number,
                                      function(error, index) {
                                        return _c("font", { key: error.id }, [
                                          _vm._v(" (" + _vm._s(error) + ") ")
                                        ])
                                      }
                                    ),
                                    1
                                  )
                                : _vm._e()
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "div",
                              { staticClass: "uk-card customUkCard1" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.post.reciever_phone_number,
                                      expression: "post.reciever_phone_number"
                                    }
                                  ],
                                  staticClass: "dbld form-control",
                                  attrs: {
                                    disabled: _vm.disabled == 1,
                                    type: "text"
                                  },
                                  domProps: {
                                    value: _vm.post.reciever_phone_number
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.post,
                                        "reciever_phone_number",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _c("div", { staticClass: "uk-card customUkCard" }, [
                              _vm._v(
                                "Country\n                                "
                              ),
                              _vm.val_errors
                                ? _c(
                                    "div",
                                    { staticStyle: { color: "red" } },
                                    _vm._l(
                                      _vm.val_errors.location_to_country,
                                      function(error, index) {
                                        return _c("font", { key: error.id }, [
                                          _vm._v(" (" + _vm._s(error) + ") ")
                                        ])
                                      }
                                    ),
                                    1
                                  )
                                : _vm._e()
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "div",
                              { staticClass: "uk-card customUkCard1" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.post.location_to_country,
                                      expression: "post.location_to_country"
                                    }
                                  ],
                                  staticClass: "dbld form-control",
                                  attrs: {
                                    disabled: _vm.disabled == 1,
                                    type: "text"
                                  },
                                  domProps: {
                                    value: _vm.post.location_to_country
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.post,
                                        "location_to_country",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _c("div", { staticClass: "uk-card customUkCard" }, [
                              _vm._v("State\n                                "),
                              _vm.val_errors
                                ? _c(
                                    "div",
                                    { staticStyle: { color: "red" } },
                                    _vm._l(
                                      _vm.val_errors.location_to_state,
                                      function(error, index) {
                                        return _c("font", { key: error.id }, [
                                          _vm._v(" (" + _vm._s(error) + ") ")
                                        ])
                                      }
                                    ),
                                    1
                                  )
                                : _vm._e()
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "div",
                              { staticClass: "uk-card customUkCard1" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.post.location_to_state,
                                      expression: "post.location_to_state"
                                    }
                                  ],
                                  staticClass: "dbld form-control",
                                  attrs: {
                                    disabled: _vm.disabled == 1,
                                    type: "text"
                                  },
                                  domProps: {
                                    value: _vm.post.location_to_state
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.post,
                                        "location_to_state",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _c("div", { staticClass: "uk-card customUkCard" }, [
                              _vm._v(
                                "Region\n                                "
                              ),
                              _vm.val_errors
                                ? _c(
                                    "div",
                                    { staticStyle: { color: "red" } },
                                    _vm._l(
                                      _vm.val_errors.location_to_region,
                                      function(error, index) {
                                        return _c("font", { key: error.id }, [
                                          _vm._v(" (" + _vm._s(error) + ") ")
                                        ])
                                      }
                                    ),
                                    1
                                  )
                                : _vm._e()
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "div",
                              { staticClass: "uk-card customUkCard1" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.post.location_to_region,
                                      expression: "post.location_to_region"
                                    }
                                  ],
                                  staticClass: "dbld form-control",
                                  attrs: {
                                    disabled: _vm.disabled == 1,
                                    type: "text"
                                  },
                                  domProps: {
                                    value: _vm.post.location_to_region
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.post,
                                        "location_to_region",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _c("div", { staticClass: "uk-card customUkCard" }, [
                              _vm._v(
                                "Receive Date\n                                "
                              ),
                              _vm.val_errors
                                ? _c(
                                    "div",
                                    { staticStyle: { color: "red" } },
                                    _vm._l(
                                      _vm.val_errors.recieve_date,
                                      function(error, index) {
                                        return _c("font", { key: error.id }, [
                                          _vm._v(" (" + _vm._s(error) + ") ")
                                        ])
                                      }
                                    ),
                                    1
                                  )
                                : _vm._e()
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "div",
                              { staticClass: "uk-card customUkCard1" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.post.recieve_date,
                                      expression: "post.recieve_date"
                                    }
                                  ],
                                  staticClass: "dbld form-control",
                                  attrs: {
                                    disabled: _vm.disabled == 1,
                                    type: "text"
                                  },
                                  domProps: { value: _vm.post.recieve_date },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.post,
                                        "recieve_date",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "uk-card-body uk-child-width-1-1",
                          staticStyle: { padding: "0px" },
                          attrs: { "uk-grid": "" }
                        },
                        [
                          _c(
                            "div",
                            [
                              _c(
                                "GmapMap",
                                {
                                  ref: "map",
                                  staticStyle: {
                                    width: "100%",
                                    height: "287px",
                                    "box-shadow": "0px 0px 6px #919191"
                                  },
                                  attrs: {
                                    options: {
                                      mapTypeControl: false,
                                      streetViewControl: false
                                    },
                                    center: { lat: 33.3152, lng: 44.3661 },
                                    zoom: 5,
                                    "map-type-id": "terrain"
                                  }
                                },
                                [
                                  _c("gmap-polyline", {
                                    attrs: {
                                      options: { strokeColor: "#FF0000" },
                                      path: [_vm.markerFrom, _vm.markerTo]
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "gmap-custom-marker",
                                    { attrs: { marker: _vm.markerFrom } },
                                    [
                                      _c("img", {
                                        attrs: {
                                          src: "/images/OrderLogo.jfif",
                                          width: "30"
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "gmap-custom-marker",
                                    { attrs: { marker: _vm.current } },
                                    [
                                      _c("img", {
                                        attrs: {
                                          src: "/images/DeliverLogo.jfif",
                                          width: "30"
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "gmap-custom-marker",
                                    { attrs: { marker: _vm.markerTo } },
                                    [
                                      _c("img", {
                                        attrs: {
                                          src: "/images/ReceiverLogo.jfif",
                                          width: "30"
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
                        ]
                      )
                    ])
                  ]
                )
              ])
            ]
          )
        ]
      )
    : _c("div", { staticClass: "roo row Departmain" }, [_vm._m(19)])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "uk-card-header" }, [
      _c(
        "div",
        {
          staticClass: "uk-grid-small uk-flex-middle",
          attrs: { "uk-grid": "" }
        },
        [
          _c("div", { staticClass: "uk-width-auto" }, [
            _c("i", {
              staticClass: "fas fa-user",
              staticStyle: { "font-size": "2rem", color: "rgb(255, 85, 147)" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "uk-width-expand" }, [
            _c("h3", { staticClass: "uk-card-title uk-margin-remove-bottom" }, [
              _vm._v("SENDER")
            ])
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "uk-card customUkCard" }, [
        _vm._v("Account Type")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "uk-card customUkCard4" }, [
        _vm._v("Is breakable delivering available ?")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "uk-card customUkCard4" }, [
        _vm._v("Is pets delivering available ?")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "uk-card customUkCard4" }, [
        _vm._v("Is hot stuff delivering available ?")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "uk-card customUkCard4" }, [
        _vm._v("Is plant delivering available ?")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "uk-card customUkCard4" }, [
        _vm._v("Is food delivering available ?")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "uk-card customUkCard4" }, [
        _vm._v("Is documents delivering available ?")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "uk-card customUkCard4" }, [
        _vm._v("Is storable stuff delivering available ?")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "uk-width-auto" }, [
      _c("i", {
        staticClass: "fas fa-box",
        staticStyle: { "font-size": "2rem", color: "rgb(115, 166, 228)" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "uk-card customUkCard" }, [
        _vm._v("Current location on map")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "uk-card customUkCard2" }, [_vm._v("SOON")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "uk-card customUkCard" }, [
        _vm._v("Deliver Fee")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "div",
        {
          staticClass: "uk-card customUkCard",
          staticStyle: { color: "green" }
        },
        [_vm._v("IQD")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "uk-card customUkCard" }, [_vm._v("App Fee")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "div",
        {
          staticClass: "uk-card customUkCard",
          staticStyle: { color: "green" }
        },
        [_vm._v("IQD")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "uk-card customUkCard" }, [
        _vm._v("Credit Invoice")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "div",
        {
          staticClass: "uk-card customUkCard",
          staticStyle: { color: "green" }
        },
        [_vm._v("IQD")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "uk-card-header" }, [
      _c(
        "div",
        {
          staticClass: "uk-grid-small uk-flex-middle",
          attrs: { "uk-grid": "" }
        },
        [
          _c("div", { staticClass: "uk-width-auto" }, [
            _c("i", {
              staticClass: "fas fa-user",
              staticStyle: { "font-size": "2rem", color: "rgb(47, 206, 36)" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "uk-width-expand" }, [
            _c("h3", { staticClass: "uk-card-title uk-margin-remove-bottom" }, [
              _vm._v("RECEIVER")
            ])
          ])
        ]
      )
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

/***/ "./resources/assets/js/components/Admin/AdminShowOrderByID.vue":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/components/Admin/AdminShowOrderByID.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminShowOrderByID_vue_vue_type_template_id_4c200aab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminShowOrderByID.vue?vue&type=template&id=4c200aab& */ "./resources/assets/js/components/Admin/AdminShowOrderByID.vue?vue&type=template&id=4c200aab&");
/* harmony import */ var _AdminShowOrderByID_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminShowOrderByID.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/Admin/AdminShowOrderByID.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminShowOrderByID_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminShowOrderByID_vue_vue_type_template_id_4c200aab___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminShowOrderByID_vue_vue_type_template_id_4c200aab___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/Admin/AdminShowOrderByID.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Admin/AdminShowOrderByID.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/components/Admin/AdminShowOrderByID.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminShowOrderByID_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminShowOrderByID.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/AdminShowOrderByID.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminShowOrderByID_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Admin/AdminShowOrderByID.vue?vue&type=template&id=4c200aab&":
/*!****************************************************************************************************!*\
  !*** ./resources/assets/js/components/Admin/AdminShowOrderByID.vue?vue&type=template&id=4c200aab& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminShowOrderByID_vue_vue_type_template_id_4c200aab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminShowOrderByID.vue?vue&type=template&id=4c200aab& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/AdminShowOrderByID.vue?vue&type=template&id=4c200aab&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminShowOrderByID_vue_vue_type_template_id_4c200aab___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminShowOrderByID_vue_vue_type_template_id_4c200aab___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);