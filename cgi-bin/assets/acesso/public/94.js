(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[94],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Delivers/Gd_orders.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Delivers/Gd_orders.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_simple_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-simple-alert */ "./node_modules/vue-simple-alert/lib/index.js");
/* harmony import */ var vuejs_datepicker_dist_vuejs_datepicker_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuejs-datepicker/dist/vuejs-datepicker.esm.js */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 //import moment from "moment"


Vue.use(vue_simple_alert__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Datepicker: vuejs_datepicker_dist_vuejs_datepicker_esm_js__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      orders: {},
      post: {},
      notifications: {},
      admin: false,
      nextpage: false,
      dateFrom: 'All',
      dateTo: 'All',
      State: 'Baghdad',
      current_page: 1,
      Cancle: false,
      prevpage: false,
      status: 'pending',
      miniload: false,
      receiver: false,
      date: false
    };
  },
  created: function created() {
    //console.log(this.$route.params.status);
    if (this.$router.resolve('status').resolved.name !== '404') {
      this.status = this.$route.params.status;
    }

    this.fetchArticles(this.status, 1, this.dateFrom, this.dateTo);

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

      axios.get("/api/GDV_MyCarsOrders/".concat(Status, "/").concat(dateFrom, "/").concat(dateto, "/").concat(this.State, "?page=").concat(Page)).then(function (res) {
        _this.isLoaded = true;
        _this.orders = res.data;
        _this.current_page = res.data.current_page;
        _this.nextpage = res.data.next_page_url;
        _this.prevpage = res.data.prev_page_url;
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
        path: "/serach_for_orders/".concat(this.post.phone_number),
        params: {
          post: post
        }
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
    },
    Next: function Next() {
      this.fetchArticles(this.status, this.current_page + 1, this.dateFrom, this.dateTo);
    },
    Previous: function Previous() {
      this.fetchArticles(this.status, this.current_page - 1, this.dateFrom, this.dateTo);
    },
    onChange: function onChange(event) {
      this.isLoaded = false;
      this.status = event.target.value;
      this.fetchArticles(event.target.value, 1, this.dateFrom, this.dateTo);
    },
    onChangeState: function onChangeState(event) {
      this.isLoaded = false;
      this.State = event.target.value;
      this.fetchArticles(this.status, 1, this.dateFrom, this.dateTo);
    },
    onChangeDateFrom: function onChangeDateFrom(event) {
      this.dateFrom = event.toISOString().substr(0, 10);

      if (this.dateFrom !== 'All' && this.dateTo !== 'All') {
        this.fetchArticles(this.status, 1, this.dateFrom, this.dateTo);
        this.Cancle = true;
      }
    },
    onChangeDateTo: function onChangeDateTo(event) {
      this.dateTo = event.toISOString().substr(0, 10);

      if (this.dateFrom !== 'All' && this.dateTo !== 'All') {
        this.fetchArticles(this.status, 1, this.dateFrom, this.dateTo);
        this.Cancle = true;
      }
    },
    CancleDateFilter: function CancleDateFilter() {
      this.dateFrom = 'All';
      this.dateTo = 'All';
      this.Cancle = false;
      this.fetchArticles(this.status, 1, this.dateFrom, this.dateTo);
    },
    Download: function Download(Order_id) {
      axios({
        url: "/api/DownloadOrderExcel/".concat(Order_id),
        method: 'GET',
        responseType: 'blob'
      }).then(function (response) {
        var fileURL = window.URL.createObjectURL(new Blob([response.data]));
        var fileLink = document.createElement('a');
        fileLink.href = fileURL;
        fileLink.setAttribute('download', Date() + '.xlsx');
        document.body.appendChild(fileLink);
        fileLink.click();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Delivers/Gd_orders.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Delivers/Gd_orders.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.uk-navbar-nav li{\n    padding: 0px 9px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Delivers/Gd_orders.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Delivers/Gd_orders.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Gd_orders.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Delivers/Gd_orders.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Delivers/Gd_orders.vue?vue&type=template&id=16ec6a06&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Delivers/Gd_orders.vue?vue&type=template&id=16ec6a06& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "uk-margin", staticStyle: { "margin-bottom": "0px" } },
    [
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
                    },
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
                    },
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
              _vm.Cancle
                ? _c(
                    "li",
                    {
                      staticStyle: { color: "red", cursor: "pointer" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.CancleDateFilter()
                        }
                      }
                    },
                    [_vm._v("X")]
                  )
                : _vm._e()
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "uk-navbar-right" }, [
            _c("ul", { staticClass: "uk-navbar-nav" }, [
              _c("li", [
                _c("a", {
                  staticClass: "uk-navbar-toggle",
                  staticStyle: { "min-height": "0px" },
                  attrs: { "uk-search-icon": "", href: "#" }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "uk-drop",
                    attrs: {
                      "uk-drop": "mode: click; pos: left-center; offset: 0"
                    }
                  },
                  [
                    _c(
                      "form",
                      {
                        staticClass: "uk-search uk-search-navbar uk-width-1-1",
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.createPost(_vm.post)
                          }
                        }
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.post.phone_number,
                              expression: "post.phone_number"
                            }
                          ],
                          staticClass: "uk-search-input",
                          staticStyle: {
                            border: "1px solid #d9d9d9",
                            background: "white",
                            padding: "0px 5px",
                            "border-radius": "5px"
                          },
                          attrs: {
                            type: "search",
                            placeholder: "بحث عن طلب",
                            autofocus: ""
                          },
                          domProps: { value: _vm.post.phone_number },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.post,
                                "phone_number",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.State,
                        expression: "State"
                      }
                    ],
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
                          _vm.State = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        },
                        function($event) {
                          return _vm.onChangeState($event)
                        }
                      ]
                    }
                  },
                  [
                    _c(
                      "option",
                      { attrs: { value: "default", disabled: "" } },
                      [_vm._v("اختر مدينة")]
                    ),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Erbil" } }, [
                      _vm._v("أربيل")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "AlAnbar" } }, [
                      _vm._v("الأنبار")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Babil" } }, [
                      _vm._v("بابل")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Baghdad" } }, [
                      _vm._v("بغداد")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Basra" } }, [
                      _vm._v("البصرة")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Dahuk" } }, [
                      _vm._v("دهوك")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "AlDiwaniyah" } }, [
                      _vm._v("الديوانية")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Diyala" } }, [
                      _vm._v("ديالي")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Dhi Qar" } }, [
                      _vm._v("ذي قار")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "AsSulaymaniyah" } }, [
                      _vm._v("السليمانية")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Saladin" } }, [
                      _vm._v("صلاح الدّين")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Kirkuk" } }, [
                      _vm._v("كركوك")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Karbala" } }, [
                      _vm._v("كربلاء")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "AlMuthana" } }, [
                      _vm._v("المثنى")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Maysan" } }, [
                      _vm._v("ميسان")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Najaf" } }, [
                      _vm._v("النجف")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Nineveh" } }, [
                      _vm._v("نينوى")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Wasit" } }, [
                      _vm._v("واسط")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Zakho" } }, [
                      _vm._v("زاخو")
                    ])
                  ]
                )
              ]),
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
                      _vm._v("مقبوول")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "pending" } }, [
                      _vm._v("قيد التوصيل")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "delivered" } }, [
                      _vm._v("مكتمل")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "issued" } }, [
                      _vm._v("غير مكتمل")
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
                    _c("td", { staticStyle: { width: "100px" } }, [
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
                      _vm._v(
                        "\n                " +
                          _vm._s(order.Acceptor_first_name) +
                          " " +
                          _vm._s(order.Acceptor_last_name) +
                          "\n            "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { staticStyle: { width: "150px" } }, [
                      _vm._v(_vm._s(order.recieved_price))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticStyle: { width: "150px" } }, [
                      _vm._v(_vm._s(order.track_code))
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
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticStyle: { width: "100px", overflow: "hidden" } },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-outline-success",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.Download(order.id)
                              }
                            }
                          },
                          [_c("span", { staticClass: "fas fa-download" })]
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
        _c(
          "div",
          { staticClass: "col-sm-6 Next", attrs: { align: "center" } },
          [
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
          ]
        )
      ]),
      _vm._v(" "),
      _c("br")
    ]
  )
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
        _c("th", { staticStyle: { width: "200px" } }, [_vm._v("البريد")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "200px" } }, [_vm._v("اسم المرسل")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "200px" } }, [_vm._v("رقم المرسل")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "200px" } }, [_vm._v("عنوان المرسل")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "100px" } }, [_vm._v("اسم المستلم")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "200px" } }, [_vm._v("رقم المستلم")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "200px" } }, [
          _vm._v("عنوان المستلم")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "150px" } }, [_vm._v("مقبول من طرف")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "150px" } }, [_vm._v("سعر البريد")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "150px" } }, [_vm._v("رمز البريد")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "100px" } }, [_vm._v("التاريخ")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "100px" } }, [
          _c("i", { staticClass: "fas fa-download" })
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
      _c("td", { staticStyle: { width: "100px" } }, [
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
      _c("td", { staticStyle: { width: "150px" } }, [
        _c("i", { staticClass: "fa fa-refresh fa-spin" })
      ]),
      _vm._v(" "),
      _c("td", { staticStyle: { width: "150px" } }, [
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/Delivers/Gd_orders.vue":
/*!***************************************************************!*\
  !*** ./resources/assets/js/components/Delivers/Gd_orders.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Gd_orders_vue_vue_type_template_id_16ec6a06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gd_orders.vue?vue&type=template&id=16ec6a06& */ "./resources/assets/js/components/Delivers/Gd_orders.vue?vue&type=template&id=16ec6a06&");
/* harmony import */ var _Gd_orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gd_orders.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/Delivers/Gd_orders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Gd_orders_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Gd_orders.vue?vue&type=style&index=0&lang=css& */ "./resources/assets/js/components/Delivers/Gd_orders.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Gd_orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Gd_orders_vue_vue_type_template_id_16ec6a06___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Gd_orders_vue_vue_type_template_id_16ec6a06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/Delivers/Gd_orders.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Delivers/Gd_orders.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/components/Delivers/Gd_orders.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gd_orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Gd_orders.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Delivers/Gd_orders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gd_orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Delivers/Gd_orders.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/components/Delivers/Gd_orders.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Gd_orders_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Gd_orders.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Delivers/Gd_orders.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Gd_orders_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Gd_orders_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Gd_orders_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Gd_orders_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Gd_orders_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/components/Delivers/Gd_orders.vue?vue&type=template&id=16ec6a06&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/components/Delivers/Gd_orders.vue?vue&type=template&id=16ec6a06& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gd_orders_vue_vue_type_template_id_16ec6a06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Gd_orders.vue?vue&type=template&id=16ec6a06& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Delivers/Gd_orders.vue?vue&type=template&id=16ec6a06&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gd_orders_vue_vue_type_template_id_16ec6a06___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gd_orders_vue_vue_type_template_id_16ec6a06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);