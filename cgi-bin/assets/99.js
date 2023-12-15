(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[99],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/Offers.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Admin/Offers.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var v_viewer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! v-viewer */ "./node_modules/v-viewer/dist/v-viewer.js");
/* harmony import */ var v_viewer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(v_viewer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var viewerjs_dist_viewer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! viewerjs/dist/viewer.css */ "./node_modules/viewerjs/dist/viewer.css");
/* harmony import */ var viewerjs_dist_viewer_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(viewerjs_dist_viewer_css__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


Vue.use(v_viewer__WEBPACK_IMPORTED_MODULE_0___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      orders: {},
      seccus: false,
      post: {},
      branche: '',
      brancheImage: '',
      brancheId: '',
      EditModel: '',
      AddOfferModels: {
        id: '',
        brache_id: '',
        product_name: '',
        price: '',
        describtion: '',
        free_shipping: true,
        media: '',
        media2: '',
        media3: ''
      },
      admin: false,
      receiver: false,
      isHidden: false,
      miniload: false,
      loading: false
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

      axios.get("/api/Admin/GetBranche").then(function (res) {
        console.log(res.data);
        _this.orders = res.data;
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
    //Next() { this.$router.push({path: `/Offers/${this.current_page+1}` }); },
    //Previous() { this.$router.push({path: `/Offers/${this.current_page-1}` }); },
    //-------------------------------------------- Branches
    AddBranche: function AddBranche() {
      var _this2 = this;

      var formData = new FormData();
      formData.append('branche', this.branche);
      formData.append('image', this.brancheImage);
      axios.post("/api/Admin/AddBranche", formData).then(function (res) {
        if (res.status == 200) {
          var toast = _this2.$toasted.show("Added", {
            type: 'success',
            theme: "bubble",
            position: "bottom-right",
            duration: 2000
          });

          _this2.fetchArticles();

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
    },
    BeforeEditBranche: function BeforeEditBranche(order_id, branch) {
      this.brancheId = order_id;
      this.EditModel = branch;
    },
    EditBranche: function EditBranche() {
      var _this3 = this;

      var formData = new FormData();
      formData.append('id', this.brancheId);
      formData.append('branche', this.EditModel);
      axios.post("/api/Admin/EditBranche", formData).then(function (res) {
        if (res.status == 200) {
          var toast = _this3.$toasted.show("Added", {
            type: 'success',
            theme: "bubble",
            position: "bottom-right",
            duration: 2000
          });

          _this3.fetchArticles();

          UIkit.modal('#modal-example').hide();
        } else {
          var _toast = _this3.$toasted.show("Error", {
            type: 'error',
            theme: "bubble",
            position: "bottom-right",
            duration: 2000
          });
        }
      })["catch"](function (res) {
        var toast = _this3.$toasted.show("Error 500", {
          type: 'error',
          theme: "bubble",
          position: "bottom-right",
          duration: 2000
        });
      });
    },
    deleteBranche: function deleteBranche(order_id) {
      var _this4 = this;

      this.miniload = true;
      var formData = new FormData();
      formData.append('id', order_id);
      axios.post("/api/Admin/deleteBranche", formData).then(function (res) {
        if (res.status == 200) {
          var toast = _this4.$toasted.show("Deleted", {
            type: 'success',
            theme: "bubble",
            position: "bottom-right",
            duration: 2000
          });

          _this4.fetchArticles();

          _this4.miniload = false;
        } else {
          var _toast2 = _this4.$toasted.show("Error", {
            type: 'error',
            theme: "bubble",
            position: "bottom-right",
            duration: 2000
          });

          _this4.miniload = false;
        }
      })["catch"](function (res) {
        var toast = _this4.$toasted.show("Error 500", {
          type: 'error',
          theme: "bubble",
          position: "bottom-right",
          duration: 2000
        });
      });
    },
    //-------------------------------------------- Offers
    BeforeAddOffer: function BeforeAddOffer(order_id) {
      this.AddOfferModels.brache_id = order_id;
    },
    onImageChange1: function onImageChange1(e) {
      this.AddOfferModels.media = e.target.files[0];
    },
    onImageChange2: function onImageChange2(e) {
      this.AddOfferModels.media2 = e.target.files[0];
    },
    onImageChange3: function onImageChange3(e) {
      this.AddOfferModels.media3 = e.target.files[0];
    },
    onImageBrancheChange: function onImageBrancheChange(e) {
      this.brancheImage = e.target.files[0];
    },
    AddOffer: function AddOffer() {
      var _this5 = this;

      var config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      };
      var formData = new FormData();
      formData.append('brache_id', this.AddOfferModels.brache_id);
      formData.append('product_name', this.AddOfferModels.product_name);
      formData.append('describtion', this.AddOfferModels.describtion);
      formData.append('price', this.AddOfferModels.price);
      formData.append('free_shipping', this.AddOfferModels.free_shipping);
      formData.append('media', this.AddOfferModels.media);
      formData.append('media2', this.AddOfferModels.media2);
      formData.append('media3', this.AddOfferModels.media3);
      axios.post("/api/Admin/AddOffer", formData, config).then(function (res) {
        console.log(res.data);

        if (res.status == 200) {
          var toast = _this5.$toasted.show("Added", {
            type: 'success',
            theme: "bubble",
            position: "bottom-right",
            duration: 2000
          });

          _this5.fetchArticles();

          _this5.miniload = false;
        }
      })["catch"](function (res) {
        var toast = _this5.$toasted.show("Check Fields and try again", {
          type: 'error',
          theme: "bubble",
          position: "bottom-center",
          duration: 2000
        });
      });
    },
    deleteOffer: function deleteOffer(order_id) {
      var _this6 = this;

      this.miniload = true;
      var formData = new FormData();
      formData.append('id', order_id);
      axios.post("/api/Admin/deleteOffer", formData).then(function (res) {
        if (res.status == 200) {
          var toast = _this6.$toasted.show("Deleted", {
            type: 'success',
            theme: "bubble",
            position: "bottom-right",
            duration: 2000
          });

          _this6.fetchArticles();

          _this6.miniload = false;
        } else {
          var _toast3 = _this6.$toasted.show("Error", {
            type: 'error',
            theme: "bubble",
            position: "bottom-right",
            duration: 2000
          });

          _this6.miniload = false;
        }
      })["catch"](function (res) {
        var toast = _this6.$toasted.show("Error 500", {
          type: 'error',
          theme: "bubble",
          position: "bottom-right",
          duration: 2000
        });
      });
    },
    BeforeEditOffer: function BeforeEditOffer(Offer) {
      this.AddOfferModels.id = Offer.id;
      this.AddOfferModels.price = Offer.price;
      this.AddOfferModels.product_name = Offer.product_name;
      this.AddOfferModels.describtion = Offer.describtion;
      this.AddOfferModels.free_shipping = Offer.free_shipping;
    },
    EditOffer: function EditOffer() {
      var _this7 = this;

      var formData = new FormData();
      formData.append('id', this.AddOfferModels.id);
      formData.append('product_name', this.AddOfferModels.product_name);
      formData.append('price', this.AddOfferModels.price);
      formData.append('describtion', this.AddOfferModels.describtion);
      formData.append('free_shipping', this.AddOfferModels.free_shipping);
      axios.post("/api/Admin/EditOffer", formData).then(function (res) {
        if (res.status == 200) {
          var toast = _this7.$toasted.show("Added", {
            type: 'success',
            theme: "bubble",
            position: "bottom-right",
            duration: 2000
          });

          _this7.fetchArticles();

          UIkit.modal('#EditOffer').hide();
        }
      })["catch"](function (res) {
        var toast = _this7.$toasted.show("Error 500", {
          type: 'error',
          theme: "bubble",
          position: "bottom-right",
          duration: 2000
        });
      });
    }
  },
  computed: {
    Valid: function Valid() {
      return this.branche !== '' && this.brancheImage !== '';
    },
    EditIsValid: function EditIsValid() {
      return this.EditModel !== '';
    },
    AddIsValid: function AddIsValid() {
      return this.AddOfferModels.brache_id !== '' && this.AddOfferModels.product_name !== '' && this.AddOfferModels.price !== '' && this.AddOfferModels.describtion !== '' && this.AddOfferModels.free_shipping !== '' && this.AddOfferModels.media !== '' && this.AddOfferModels.media2 !== '' && this.AddOfferModels.media3 !== '';
    },
    EditOfferIsValid: function EditOfferIsValid() {
      return this.AddOfferModels.product_name !== '' && this.AddOfferModels.price !== '' && this.AddOfferModels.describtion !== '' && this.AddOfferModels.free_shipping !== '';
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/Offers.vue?vue&type=template&id=86291aa4&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Admin/Offers.vue?vue&type=template&id=86291aa4& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
              _c("div", { staticClass: "uk-margin" }, [
                !_vm.miniload
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-success",
                        staticStyle: { float: "right", margin: "0px 10px" },
                        attrs: { disabled: !_vm.Valid, type: "button" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.AddBranche()
                          }
                        }
                      },
                      [
                        _c("i", {
                          staticClass: "fas fa-plus",
                          staticStyle: { "margin-right": "0" }
                        })
                      ]
                    )
                  : _c("i", { staticClass: "fa fa-refresh fa-spin" })
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("div", { staticClass: "uk-margin" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.branche,
                      expression: "branche"
                    }
                  ],
                  staticClass: "uk-input uk-form-width-medium",
                  attrs: { type: "text", placeholder: "Add New Branche" },
                  domProps: { value: _vm.branche },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.branche = $event.target.value
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("div", { staticClass: "uk-margin" }, [
                _c("div", { attrs: { "uk-form-custom": "target: true" } }, [
                  _c("input", {
                    attrs: { type: "file" },
                    on: { change: _vm.onImageBrancheChange }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "uk-input uk-form-width-medium",
                    attrs: { type: "text", placeholder: "Image", disabled: "" }
                  })
                ])
              ])
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
        staticStyle: { background: "#f7f7f7", "box-shadow": "initial" },
        attrs: { border: "0" }
      },
      [
        !_vm.isLoaded
          ? _c("tbody", { staticClass: "tbdy" }, [_vm._m(0)])
          : _vm._e(),
        _vm._v(" "),
        _vm._l(_vm.orders, function(order, index) {
          return _c(
            "tbody",
            { key: order.id, staticStyle: { margin: "20px 0px" } },
            [
              _c(
                "tr",
                {
                  staticStyle: {
                    "font-size": "27px",
                    margin: "9px 0px",
                    background: "white",
                    border: "1px solid #d9d9d9"
                  }
                },
                [
                  _c(
                    "td",
                    { staticStyle: { width: "5%", "text-align": "left" } },
                    [
                      _c("viewer", [
                        _c("img", {
                          staticStyle: {
                            width: "40px",
                            "border-radius": "7px",
                            cursor: "pointer",
                            border: "1px solid #9f9f9f"
                          },
                          attrs: { src: "/images/Offers/" + order.image }
                        })
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    { staticStyle: { width: "25%", "text-align": "left" } },
                    [_vm._v(_vm._s(order.branche))]
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    {
                      staticClass: "uk-flex uk-flex-center@m uk-flex-right@l",
                      staticStyle: { width: "70%" }
                    },
                    [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-danger",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.deleteBranche(order.id)
                            }
                          }
                        },
                        [_c("span", { staticClass: "fa fa-trash-o" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-info",
                          attrs: {
                            type: "button",
                            "uk-toggle": "target: #modal-example"
                          },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.BeforeEditBranche(
                                order.id,
                                order.branche
                              )
                            }
                          }
                        },
                        [_c("span", { staticClass: "fas fa-pencil-alt" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-success",
                          attrs: {
                            type: "button",
                            "uk-toggle": "target: #AddOffer"
                          },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.BeforeAddOffer(order.id)
                            }
                          }
                        },
                        [_c("span", { staticClass: "fas fa-plus" })]
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _vm._m(1, true),
              _vm._v(" "),
              _vm._l(order.Offers, function(Offers, index) {
                return _c(
                  "tr",
                  {
                    key: order.id,
                    staticStyle: {
                      background: "white",
                      border: "1px solid #d9d9d9"
                    }
                  },
                  [
                    _c("th", { staticStyle: { width: "10%" } }, [
                      _vm._v(_vm._s(Offers.product_name))
                    ]),
                    _vm._v(" "),
                    _c("th", { staticStyle: { width: "10%" } }, [
                      _vm._v(_vm._s(Offers.price))
                    ]),
                    _vm._v(" "),
                    _c("th", { staticStyle: { width: "10%" } }, [
                      Offers.free_shipping
                        ? _c("span", [_vm._v("YES")])
                        : _c("span", [_vm._v("NO")])
                    ]),
                    _vm._v(" "),
                    _c("th", { staticStyle: { width: "30%" } }, [
                      _vm._v(_vm._s(Offers.describtion))
                    ]),
                    _vm._v(" "),
                    _c(
                      "th",
                      { staticStyle: { width: "30%" } },
                      [
                        _c("viewer", [
                          _c("img", {
                            staticStyle: {
                              width: "40px",
                              "border-radius": "7px",
                              cursor: "pointer",
                              border: "1px solid #9f9f9f"
                            },
                            attrs: { src: "/images/Offers/" + Offers.media }
                          }),
                          _vm._v(" "),
                          _c("img", {
                            staticStyle: {
                              width: "40px",
                              "border-radius": "7px",
                              cursor: "pointer",
                              border: "1px solid #9f9f9f"
                            },
                            attrs: { src: "/images/Offers/" + Offers.media2 }
                          }),
                          _vm._v(" "),
                          _c("img", {
                            staticStyle: {
                              width: "40px",
                              "border-radius": "7px",
                              cursor: "pointer",
                              border: "1px solid #9f9f9f"
                            },
                            attrs: { src: "/images/Offers/" + Offers.media3 }
                          })
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticClass: "uk-flex uk-flex-center@m uk-flex-right@l",
                        staticStyle: { width: "10%" }
                      },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-outline-danger del-icon",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.deleteOffer(Offers.id)
                              }
                            }
                          },
                          [_c("span", { staticClass: "fa fa-trash-o" })]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-outline-info",
                            attrs: {
                              type: "button",
                              "uk-toggle": "target: #EditOffer"
                            },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.BeforeEditOffer(Offers)
                              }
                            }
                          },
                          [_c("span", { staticClass: "fas fa-pencil-alt" })]
                        )
                      ]
                    )
                  ]
                )
              })
            ],
            2
          )
        })
      ],
      2
    ),
    _vm._v(" "),
    _c("div", { attrs: { id: "modal-example", "uk-modal": "" } }, [
      _c("div", { staticClass: "uk-modal-dialog uk-modal-body" }, [
        _c(
          "div",
          {
            staticClass: "uk-child-width-1-1@m",
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
                    value: _vm.EditModel,
                    expression: "EditModel"
                  }
                ],
                staticClass: "uk-input",
                staticStyle: { "text-align": "center" },
                attrs: { type: "text", placeholder: "New Name" },
                domProps: { value: _vm.EditModel },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.EditModel = $event.target.value
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
            [_vm._v("Cancel")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "uk-button uk-button-primary",
              attrs: { disabled: !_vm.EditIsValid, type: "button" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.EditBranche()
                }
              }
            },
            [
              _vm.miniload
                ? _c("i", { staticClass: "fa fa-refresh fa-spin" })
                : _c("span", [_vm._v("Edit")])
            ]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { attrs: { id: "AddOffer", "uk-modal": "" } }, [
      _c("div", { staticClass: "uk-modal-dialog uk-modal-body" }, [
        _c(
          "div",
          {
            staticClass: "uk-child-width-1-1@m",
            staticStyle: {
              background: "white",
              "margin-left": "0px",
              padding: "10px",
              "border-radius": "45px"
            },
            attrs: { "uk-grid": "", "uk-scrollspy": "cls:  " }
          },
          [
            _c(
              "form",
              { staticClass: "uk-grid-small", attrs: { "uk-grid": "" } },
              [
                _c("div", { staticClass: "uk-width-1-2@s" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.AddOfferModels.product_name,
                        expression: "AddOfferModels.product_name"
                      }
                    ],
                    staticClass: "uk-input",
                    attrs: { type: "text", placeholder: "Offer Name" },
                    domProps: { value: _vm.AddOfferModels.product_name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.AddOfferModels,
                          "product_name",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "uk-width-1-4@s" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.AddOfferModels.price,
                        expression: "AddOfferModels.price"
                      }
                    ],
                    staticClass: "uk-input",
                    attrs: { type: "number", placeholder: "price" },
                    domProps: { value: _vm.AddOfferModels.price },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.AddOfferModels,
                          "price",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "uk-width-1-4@s" }, [
                  _c("label", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.AddOfferModels.free_shipping,
                          expression: "AddOfferModels.free_shipping"
                        }
                      ],
                      staticClass: "uk-checkbox",
                      attrs: { type: "checkbox", checked: "" },
                      domProps: {
                        checked: Array.isArray(_vm.AddOfferModels.free_shipping)
                          ? _vm._i(_vm.AddOfferModels.free_shipping, null) > -1
                          : _vm.AddOfferModels.free_shipping
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.AddOfferModels.free_shipping,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                _vm.$set(
                                  _vm.AddOfferModels,
                                  "free_shipping",
                                  $$a.concat([$$v])
                                )
                            } else {
                              $$i > -1 &&
                                _vm.$set(
                                  _vm.AddOfferModels,
                                  "free_shipping",
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                )
                            }
                          } else {
                            _vm.$set(_vm.AddOfferModels, "free_shipping", $$c)
                          }
                        }
                      }
                    }),
                    _vm._v(" Free Shipping")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "uk-width-1-3@s" }, [
                  _c(
                    "div",
                    { staticClass: "uk-margin", attrs: { "uk-margin": "" } },
                    [
                      _c(
                        "div",
                        { attrs: { "uk-form-custom": "target: true" } },
                        [
                          _c("input", {
                            attrs: { type: "file" },
                            on: { change: _vm.onImageChange1 }
                          }),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "uk-input uk-form-width-medium",
                            attrs: {
                              type: "text",
                              placeholder: "Image",
                              disabled: ""
                            }
                          })
                        ]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "uk-width-1-3@s" }, [
                  _c(
                    "div",
                    { staticClass: "uk-margin", attrs: { "uk-margin": "" } },
                    [
                      _c(
                        "div",
                        { attrs: { "uk-form-custom": "target: true" } },
                        [
                          _c("input", {
                            attrs: { type: "file" },
                            on: { change: _vm.onImageChange2 }
                          }),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "uk-input uk-form-width-medium",
                            attrs: {
                              type: "text",
                              placeholder: "Image",
                              disabled: ""
                            }
                          })
                        ]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "uk-width-1-3@s" }, [
                  _c(
                    "div",
                    { staticClass: "uk-margin", attrs: { "uk-margin": "" } },
                    [
                      _c(
                        "div",
                        { attrs: { "uk-form-custom": "target: true" } },
                        [
                          _c("input", {
                            attrs: { type: "file" },
                            on: { change: _vm.onImageChange3 }
                          }),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "uk-input uk-form-width-medium",
                            attrs: {
                              type: "text",
                              placeholder: "Image",
                              disabled: ""
                            }
                          })
                        ]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "uk-width-1-1" }, [
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.AddOfferModels.describtion,
                        expression: "AddOfferModels.describtion"
                      }
                    ],
                    staticClass: "uk-input",
                    staticStyle: { height: "135px" },
                    attrs: { type: "text", placeholder: "Describtion" },
                    domProps: { value: _vm.AddOfferModels.describtion },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.AddOfferModels,
                          "describtion",
                          $event.target.value
                        )
                      }
                    }
                  })
                ])
              ]
            )
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
            [_vm._v("Cancel")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "uk-button uk-button-primary",
              attrs: { disabled: !_vm.AddIsValid, type: "button" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.AddOffer()
                }
              }
            },
            [
              _vm.miniload
                ? _c("i", { staticClass: "fa fa-refresh fa-spin" })
                : _c("span", [_vm._v("Add")])
            ]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { attrs: { id: "EditOffer", "uk-modal": "" } }, [
      _c("div", { staticClass: "uk-modal-dialog uk-modal-body" }, [
        _c(
          "div",
          {
            staticClass: "uk-child-width-1-1@m",
            staticStyle: {
              background: "white",
              "margin-left": "0px",
              padding: "10px",
              "border-radius": "45px"
            },
            attrs: { "uk-grid": "", "uk-scrollspy": "cls:  " }
          },
          [
            _c(
              "form",
              { staticClass: "uk-grid-small", attrs: { "uk-grid": "" } },
              [
                _c("div", { staticClass: "uk-width-1-2@s" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.AddOfferModels.product_name,
                        expression: "AddOfferModels.product_name"
                      }
                    ],
                    staticClass: "uk-input",
                    attrs: { type: "text", placeholder: "Offer Name" },
                    domProps: { value: _vm.AddOfferModels.product_name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.AddOfferModels,
                          "product_name",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "uk-width-1-4@s" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.AddOfferModels.price,
                        expression: "AddOfferModels.price"
                      }
                    ],
                    staticClass: "uk-input",
                    attrs: { type: "number", placeholder: "price" },
                    domProps: { value: _vm.AddOfferModels.price },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.AddOfferModels,
                          "price",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "uk-width-1-4@s" }, [
                  _c("label", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.AddOfferModels.free_shipping,
                          expression: "AddOfferModels.free_shipping"
                        }
                      ],
                      staticClass: "uk-checkbox",
                      attrs: { type: "checkbox" },
                      domProps: {
                        checked: Array.isArray(_vm.AddOfferModels.free_shipping)
                          ? _vm._i(_vm.AddOfferModels.free_shipping, null) > -1
                          : _vm.AddOfferModels.free_shipping
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.AddOfferModels.free_shipping,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                _vm.$set(
                                  _vm.AddOfferModels,
                                  "free_shipping",
                                  $$a.concat([$$v])
                                )
                            } else {
                              $$i > -1 &&
                                _vm.$set(
                                  _vm.AddOfferModels,
                                  "free_shipping",
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                )
                            }
                          } else {
                            _vm.$set(_vm.AddOfferModels, "free_shipping", $$c)
                          }
                        }
                      }
                    }),
                    _vm._v(" Free Shipping")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "uk-width-1-1" }, [
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.AddOfferModels.describtion,
                        expression: "AddOfferModels.describtion"
                      }
                    ],
                    staticClass: "uk-input",
                    staticStyle: { height: "135px" },
                    attrs: { type: "text", placeholder: "Describtion" },
                    domProps: { value: _vm.AddOfferModels.describtion },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.AddOfferModels,
                          "describtion",
                          $event.target.value
                        )
                      }
                    }
                  })
                ])
              ]
            )
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
            [_vm._v("Cancel")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "uk-button uk-button-primary",
              attrs: { disabled: !_vm.EditOfferIsValid, type: "button" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.EditOffer()
                }
              }
            },
            [
              _vm.miniload
                ? _c("i", { staticClass: "fa fa-refresh fa-spin" })
                : _c("span", [_vm._v("Edit")])
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { staticStyle: { width: "30%", "text-align": "left" } }, [
        _c("i", { staticClass: "fa fa-refresh fa-spin" })
      ]),
      _vm._v(" "),
      _c("td", { staticStyle: { width: "70%" } }, [
        _c("i", { staticClass: "fa fa-refresh fa-spin" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "tr",
      { staticStyle: { background: "white", border: "1px solid #d9d9d9" } },
      [
        _c("th", { staticStyle: { width: "10%" } }, [_vm._v("Offer Title")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "10%" } }, [_vm._v("Price")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "10%" } }, [_vm._v("Free Shipping")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "30%" } }, [_vm._v("Describtion")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "30%" } }, [_vm._v("Images")]),
        _vm._v(" "),
        _c(
          "td",
          { staticClass: "text-center", staticStyle: { width: "10%" } },
          [_c("li", { staticClass: "fa fa-gear" })]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/Admin/Offers.vue":
/*!*********************************************************!*\
  !*** ./resources/assets/js/components/Admin/Offers.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Offers_vue_vue_type_template_id_86291aa4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Offers.vue?vue&type=template&id=86291aa4& */ "./resources/assets/js/components/Admin/Offers.vue?vue&type=template&id=86291aa4&");
/* harmony import */ var _Offers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Offers.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/Admin/Offers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Offers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Offers_vue_vue_type_template_id_86291aa4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Offers_vue_vue_type_template_id_86291aa4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/Admin/Offers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Admin/Offers.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/assets/js/components/Admin/Offers.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Offers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Offers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/Offers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Offers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Admin/Offers.vue?vue&type=template&id=86291aa4&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/components/Admin/Offers.vue?vue&type=template&id=86291aa4& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Offers_vue_vue_type_template_id_86291aa4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Offers.vue?vue&type=template&id=86291aa4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Admin/Offers.vue?vue&type=template&id=86291aa4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Offers_vue_vue_type_template_id_86291aa4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Offers_vue_vue_type_template_id_86291aa4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);