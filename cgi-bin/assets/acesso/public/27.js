(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/auth/Delivers_Docs_Registration.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/auth/Delivers_Docs_Registration.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      color: 'Bike',
      //colors: [],
      Slctd: 'سائق دراجة',
      type: 'Bike',
      phone_number: '',
      image1: '',
      image2: '',
      image3: '',
      image4: '',
      image5: '',
      image6: '',
      image7: '',
      image8: '',
      customer: null,
      post: {},
      Car: false,
      Bike: false,
      RegisteredCompany: false,
      UnregisteredCompany: false,
      val_errors: null,
      Code: {},
      notFound: false,
      seccus: false,
      seccus2: false,
      sentmsg: false,
      wrongcode: false,
      miniload: false,
      token: {},
      main: true,
      Done: false,
      codesent: false,
      loading: false
    };
  },
  created: function created() {
    var vm = this;
    setTimeout(function () {
      vm.colors = [{
        text: 'سائق سيارة',
        optionId: 'Car'
      }, {
        text: 'سائق دراجة',
        optionId: 'Bike'
      }, {
        text: 'شركة توصيل',
        optionId: 'RegisteredCompany'
      }, {
        text: 'مندوب',
        optionId: 'RegisteredCompany'
      }];
    }, 1000);
  },
  methods: {
    onChange: function onChange(event) {
      this.type = event.target.value;

      if (event.target.value == "Car") {
        this.Car = true;
        this.Bike = false;
        this.RegisteredCompany = false;
        this.UnregisteredCompany = false;
      }

      if (event.target.value == "Bike") {
        this.Car = false;
        this.Bike = true;
        this.RegisteredCompany = false;
        this.UnregisteredCompany = false;
      }

      if (event.target.value == "RegisteredCompany") {
        this.Car = false;
        this.Bike = false;
        this.RegisteredCompany = true;
        this.UnregisteredCompany = false;
      }

      if (event.target.value == "UnregisteredCompany") {
        this.Car = false;
        this.Bike = false;
        this.RegisteredCompany = false;
        this.UnregisteredCompany = true;
      }
    },
    PhoneNumber: function PhoneNumber(e) {
      this.phone_number = e.target.value;
    },
    onImageChange1: function onImageChange1(e) {
      this.image1 = e.target.files[0];
    },
    onImageChange2: function onImageChange2(e) {
      this.image2 = e.target.files[0];
    },
    onImageChange3: function onImageChange3(e) {
      this.image3 = e.target.files[0];
    },
    onImageChange4: function onImageChange4(e) {
      this.image4 = e.target.files[0];
    },
    onImageChange5: function onImageChange5(e) {
      this.image5 = e.target.files[0];
    },
    onImageChange6: function onImageChange6(e) {
      this.image6 = e.target.files[0];
    },
    onImageChange7: function onImageChange7(e) {
      this.image7 = e.target.files[0];
    },
    onImageChange8: function onImageChange8(e) {
      this.image8 = e.target.files[0];
    },
    createPost: function createPost(e) {
      var _this = this;

      this.val_errors = false;
      this.miniload = true;
      e.preventDefault();
      var currentObj = this;
      var config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      };
      var formData = new FormData();
      formData.append('type', this.type);
      formData.append('phone_number', this.phone_number);
      formData.append('image1', this.image1);

      if (this.type == "Car" || this.type == "RegisteredCompany") {
        formData.append('requiredimg', true);
        formData.append('image2', this.image2);
        formData.append('image3', this.image3);
        formData.append('image4', this.image4);
      } else {
        formData.append('requiredimg', false);
      }

      formData.append('image5', this.image5);
      formData.append('image6', this.image6);
      formData.append('image7', this.image7);
      formData.append('image8', this.image8);
      axios.post('/api/car_doc_register', formData, config).then(function (res) {
        if (res.status == 202) {
          _this.val_errors = res.data;

          var toast = _this.$toasted.show("Error", {
            type: 'error',
            theme: "bubble",
            position: "bottom-right",
            duration: 2000
          });

          _this.miniload = false;
        }

        if (res.status == 200) {
          var _toast = _this.$toasted.show("Registered", {
            type: 'success',
            theme: "bubble",
            position: "bottom-right",
            duration: 2000
          });

          _this.miniload = false;
          _this.main = false;
          _this.Done = true;
        }

        if (res.status == 203) {
          var _toast2 = _this.$toasted.show("Phone Number Doens't Match", {
            type: 'error',
            theme: "bubble",
            position: "bottom-right",
            duration: 2000
          });

          _this.miniload = false;
        }

        if (res.status == 204) {
          var _toast3 = _this.$toasted.show("Phone Number Already Registered", {
            type: 'error',
            theme: "bubble",
            position: "bottom-right",
            duration: 2000
          });

          _this.miniload = false;
        }
      })["catch"](function (res) {
        var toast = _this.$toasted.show("Error 500", {
          type: 'error',
          theme: "bubble",
          position: "bottom-right",
          duration: 2000
        });

        currentObj.output = res;
        _this.miniload = false;
      }); //let posts = {phone_number:post['phone_number'],image1:this.image1,image2:this.image2,image3:this.image3,image4:this.image4,image5:this.image5};
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/auth/Delivers_Docs_Registration.vue?vue&type=style&index=0&id=3a5b4acc&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/auth/Delivers_Docs_Registration.vue?vue&type=style&index=0&id=3a5b4acc&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.customer-view[data-v-3a5b4acc] {\n    display: flex;\n    align-items: center;\n}\n.user-img[data-v-3a5b4acc] {\n    flex: 1;\n}\n.user-img img[data-v-3a5b4acc] {\n    max-width: 160px;\n}\n.user-info[data-v-3a5b4acc] {\n    flex: 3;\n    overflow-x: scroll;\n}\n#map-layer[data-v-3a5b4acc] {\n    margin: 20px 0px;\n    max-width: 600px;\n    min-height: 400;\n}\n#btnAction[data-v-3a5b4acc] {\n    background: #3878c7;\n    padding: 10px 40px;\n    border: #3672bb 1px solid;\n    border-radius: 2px;\n    color: #FFF;\n    font-size: 0.9em;\n    cursor: pointer;\n    display: block;\n}\n#btnAction[data-v-3a5b4acc]:disabled {\n    background: #6c99d2;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/auth/Delivers_Docs_Registration.vue?vue&type=style&index=0&id=3a5b4acc&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/auth/Delivers_Docs_Registration.vue?vue&type=style&index=0&id=3a5b4acc&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Delivers_Docs_Registration.vue?vue&type=style&index=0&id=3a5b4acc&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/auth/Delivers_Docs_Registration.vue?vue&type=style&index=0&id=3a5b4acc&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/auth/Delivers_Docs_Registration.vue?vue&type=template&id=3a5b4acc&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/auth/Delivers_Docs_Registration.vue?vue&type=template&id=3a5b4acc&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
    { staticStyle: { height: "800px" }, attrs: { "uk-grid": "" } },
    [
      _c(
        "div",
        { staticClass: "uk-width-1-2@s", staticStyle: { padding: "5%" } },
        [
          _vm.main
            ? _c("div", [
                _c("div", { staticClass: "container" }, [
                  _c("div", { staticClass: "cont1" }, [
                    _c(
                      "form",
                      {
                        staticClass: "uk-grid-small",
                        attrs: {
                          action: "",
                          enctype: "multipart/form-data",
                          "uk-grid": ""
                        },
                        on: { submit: _vm.createPost }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "uk-width-1-1@s lbl" },
                          [
                            _vm.val_errors
                              ? _c("font", { staticClass: "val_errors" }, [
                                  _vm._v(_vm._s(_vm.val_errors.type))
                                ])
                              : _vm._e()
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-width-1-1@s lbl" }, [
                          _vm._v("اختر نوع الحساب")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-width-1-1@s" }, [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.color,
                                  expression: "color"
                                }
                              ],
                              staticClass: "form-control",
                              staticStyle: { padding: "0px" },
                              on: {
                                change: [
                                  function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.color = $event.target.multiple
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
                              _c("option", { attrs: { value: "Car" } }, [
                                _vm._v("سائق سيارة")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "Bike" } }, [
                                _vm._v("سائق دراجة")
                              ]),
                              _vm._v(" "),
                              _c(
                                "option",
                                { attrs: { value: "RegisteredCompany" } },
                                [_vm._v("شركة توصيل")]
                              ),
                              _vm._v(" "),
                              _c(
                                "option",
                                { attrs: { value: "UnregisteredCompany" } },
                                [_vm._v("مندوب")]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "uk-width-1-1@s lbl" },
                          [
                            _vm.val_errors
                              ? _c("font", { staticClass: "val_errors" }, [
                                  _vm._v(_vm._s(_vm.val_errors.phone_number))
                                ])
                              : _vm._e()
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-width-1-1@s" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.phone_number,
                                expression: "phone_number"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "tel", placeholder: "phone number" },
                            domProps: { value: _vm.phone_number },
                            on: {
                              change: _vm.PhoneNumber,
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.phone_number = $event.target.value
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "uk-width-1-1@s lbl" },
                          [
                            _vm.val_errors
                              ? _c("font", { staticClass: "val_errors" }, [
                                  _vm._v(_vm._s(_vm.val_errors.image1))
                                ])
                              : _vm._e()
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-width-1-2@s lbl" }, [
                          _vm._v(" صورة شخصية ")
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "uk-width-1-2@s",
                            attrs: { align: "center" }
                          },
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
                                    placeholder: "Select file"
                                  }
                                })
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _vm.RegisteredCompany
                          ? _c(
                              "div",
                              { staticClass: "uk-width-1-1@s lbl" },
                              [
                                _vm.val_errors
                                  ? _c("font", { staticClass: "val_errors" }, [
                                      _vm._v(_vm._s(_vm.val_errors.image2))
                                    ])
                                  : _vm._e()
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.RegisteredCompany
                          ? _c("div", { staticClass: "uk-width-1-2@s lbl" }, [
                              _vm._v(" عقد تأسيس الشركة ")
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.RegisteredCompany
                          ? _c(
                              "div",
                              {
                                staticClass: "uk-width-1-2@s",
                                attrs: { align: "center" }
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    attrs: { "uk-form-custom": "target: true" }
                                  },
                                  [
                                    _c("input", {
                                      attrs: { type: "file" },
                                      on: { change: _vm.onImageChange2 }
                                    }),
                                    _vm._v(" "),
                                    _c("input", {
                                      staticClass:
                                        "uk-input uk-form-width-medium",
                                      attrs: {
                                        type: "text",
                                        placeholder: "Select file"
                                      }
                                    })
                                  ]
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.RegisteredCompany
                          ? _c(
                              "div",
                              { staticClass: "uk-width-1-1@s lbl" },
                              [
                                _vm.val_errors
                                  ? _c("font", { staticClass: "val_errors" }, [
                                      _vm._v(_vm._s(_vm.val_errors.image3))
                                    ])
                                  : _vm._e()
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.RegisteredCompany
                          ? _c("div", { staticClass: "uk-width-1-2@s lbl" }, [
                              _vm._v(" محضر اجتماع ")
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.RegisteredCompany
                          ? _c(
                              "div",
                              {
                                staticClass: "uk-width-1-2@s",
                                attrs: { align: "center" }
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    attrs: { "uk-form-custom": "target: true" }
                                  },
                                  [
                                    _c("input", {
                                      attrs: { type: "file" },
                                      on: { change: _vm.onImageChange3 }
                                    }),
                                    _vm._v(" "),
                                    _c("input", {
                                      staticClass:
                                        "uk-input uk-form-width-medium",
                                      attrs: {
                                        type: "text",
                                        placeholder: "Select file"
                                      }
                                    })
                                  ]
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.RegisteredCompany
                          ? _c(
                              "div",
                              { staticClass: "uk-width-1-1@s lbl" },
                              [
                                _vm.val_errors
                                  ? _c("font", { staticClass: "val_errors" }, [
                                      _vm._v(_vm._s(_vm.val_errors.image4))
                                    ])
                                  : _vm._e()
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.RegisteredCompany
                          ? _c("div", { staticClass: "uk-width-1-2@s lbl" }, [
                              _vm._v(" شهادة تسجيل الشركة ")
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.RegisteredCompany
                          ? _c(
                              "div",
                              {
                                staticClass: "uk-width-1-2@s",
                                attrs: { align: "center" }
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    attrs: { "uk-form-custom": "target: true" }
                                  },
                                  [
                                    _c("input", {
                                      attrs: { type: "file" },
                                      on: { change: _vm.onImageChange4 }
                                    }),
                                    _vm._v(" "),
                                    _c("input", {
                                      staticClass:
                                        "uk-input uk-form-width-medium",
                                      attrs: {
                                        type: "text",
                                        placeholder: "Select file"
                                      }
                                    })
                                  ]
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.Car
                          ? _c(
                              "div",
                              { staticClass: "uk-width-1-1@s lbl" },
                              [
                                _vm.val_errors
                                  ? _c("font", { staticClass: "val_errors" }, [
                                      _vm._v(_vm._s(_vm.val_errors.image2))
                                    ])
                                  : _vm._e()
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.Car
                          ? _c("div", { staticClass: "uk-width-1-2@s lbl" }, [
                              _vm._v(" اجازة سوق وجه امامي ")
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.Car
                          ? _c(
                              "div",
                              {
                                staticClass: "uk-width-1-2@s",
                                attrs: { align: "center" }
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    attrs: { "uk-form-custom": "target: true" }
                                  },
                                  [
                                    _c("input", {
                                      attrs: { type: "file" },
                                      on: { change: _vm.onImageChange2 }
                                    }),
                                    _vm._v(" "),
                                    _c("input", {
                                      staticClass:
                                        "uk-input uk-form-width-medium",
                                      attrs: {
                                        type: "text",
                                        placeholder: "Select file"
                                      }
                                    })
                                  ]
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.Car
                          ? _c(
                              "div",
                              { staticClass: "uk-width-1-1@s lbl" },
                              [
                                _vm.val_errors
                                  ? _c("font", { staticClass: "val_errors" }, [
                                      _vm._v(_vm._s(_vm.val_errors.image3))
                                    ])
                                  : _vm._e()
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.Car
                          ? _c("div", { staticClass: "uk-width-1-2@s lbl" }, [
                              _vm._v(" اجازه سوق وجه خلفي ")
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.Car
                          ? _c(
                              "div",
                              {
                                staticClass: "uk-width-1-2@s",
                                attrs: { align: "center" }
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    attrs: { "uk-form-custom": "target: true" }
                                  },
                                  [
                                    _c("input", {
                                      attrs: { type: "file" },
                                      on: { change: _vm.onImageChange3 }
                                    }),
                                    _vm._v(" "),
                                    _c("input", {
                                      staticClass:
                                        "uk-input uk-form-width-medium",
                                      attrs: {
                                        type: "text",
                                        placeholder: "Select file"
                                      }
                                    })
                                  ]
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.Car
                          ? _c(
                              "div",
                              { staticClass: "uk-width-1-1@s lbl" },
                              [
                                _vm.val_errors
                                  ? _c("font", { staticClass: "val_errors" }, [
                                      _vm._v(_vm._s(_vm.val_errors.image4))
                                    ])
                                  : _vm._e()
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.Car
                          ? _c("div", { staticClass: "uk-width-1-2@s lbl" }, [
                              _vm._v(" سنوية السياره وجه الامامي فقط ")
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.Car
                          ? _c(
                              "div",
                              {
                                staticClass: "uk-width-1-2@s",
                                attrs: { align: "center" }
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    attrs: { "uk-form-custom": "target: true" }
                                  },
                                  [
                                    _c("input", {
                                      attrs: { type: "file" },
                                      on: { change: _vm.onImageChange4 }
                                    }),
                                    _vm._v(" "),
                                    _c("input", {
                                      staticClass:
                                        "uk-input uk-form-width-medium",
                                      attrs: {
                                        type: "text",
                                        placeholder: "Select file"
                                      }
                                    })
                                  ]
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "uk-width-1-1@s lbl" },
                          [
                            _vm.val_errors
                              ? _c("font", { staticClass: "val_errors" }, [
                                  _vm._v(_vm._s(_vm.val_errors.image5))
                                ])
                              : _vm._e()
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-width-1-2@s lbl" }, [
                          _vm._v(" هوية شخصية وجة امامي ")
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "uk-width-1-2@s",
                            attrs: { align: "center" }
                          },
                          [
                            _c(
                              "div",
                              { attrs: { "uk-form-custom": "target: true" } },
                              [
                                _c("input", {
                                  attrs: { type: "file" },
                                  on: { change: _vm.onImageChange5 }
                                }),
                                _vm._v(" "),
                                _c("input", {
                                  staticClass: "uk-input uk-form-width-medium",
                                  attrs: {
                                    type: "text",
                                    placeholder: "Select file"
                                  }
                                })
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "uk-width-1-1@s lbl" },
                          [
                            _vm.val_errors
                              ? _c("font", { staticClass: "val_errors" }, [
                                  _vm._v(_vm._s(_vm.val_errors.image6))
                                ])
                              : _vm._e()
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-width-1-2@s lbl" }, [
                          _vm._v(" هوية شخصية وجه خلفي ")
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "uk-width-1-2@s",
                            attrs: { align: "center" }
                          },
                          [
                            _c(
                              "div",
                              { attrs: { "uk-form-custom": "target: true" } },
                              [
                                _c("input", {
                                  attrs: { type: "file" },
                                  on: { change: _vm.onImageChange6 }
                                }),
                                _vm._v(" "),
                                _c("input", {
                                  staticClass: "uk-input uk-form-width-medium",
                                  attrs: {
                                    type: "text",
                                    placeholder: "Select file"
                                  }
                                })
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "uk-width-1-1@s lbl" },
                          [
                            _vm.val_errors
                              ? _c("font", { staticClass: "val_errors" }, [
                                  _vm._v(_vm._s(_vm.val_errors.image7))
                                ])
                              : _vm._e()
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-width-1-2@s lbl" }, [
                          _vm._v(" بطاقة سكن وجه امامي ")
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "uk-width-1-2@s",
                            attrs: { align: "center" }
                          },
                          [
                            _c(
                              "div",
                              { attrs: { "uk-form-custom": "target: true" } },
                              [
                                _c("input", {
                                  attrs: { type: "file" },
                                  on: { change: _vm.onImageChange7 }
                                }),
                                _vm._v(" "),
                                _c("input", {
                                  staticClass: "uk-input uk-form-width-medium",
                                  attrs: {
                                    type: "text",
                                    placeholder: "Select file"
                                  }
                                })
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "uk-width-1-1@s lbl" },
                          [
                            _vm.val_errors
                              ? _c("font", { staticClass: "val_errors" }, [
                                  _vm._v(_vm._s(_vm.val_errors.image8))
                                ])
                              : _vm._e()
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-width-1-2@s lbl" }, [
                          _vm._v(" بطاقة سكن وجه خلفي ")
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "uk-width-1-2@s",
                            attrs: { align: "center" }
                          },
                          [
                            _c(
                              "div",
                              { attrs: { "uk-form-custom": "target: true" } },
                              [
                                _c("input", {
                                  attrs: { type: "file" },
                                  on: { change: _vm.onImageChange8 }
                                }),
                                _vm._v(" "),
                                _c("input", {
                                  staticClass: "uk-input uk-form-width-medium",
                                  attrs: {
                                    type: "text",
                                    placeholder: "Select file"
                                  }
                                })
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "uk-width-1-1@s" }, [
                          _c(
                            "div",
                            {
                              staticClass: "uk-width-1-1@s",
                              attrs: { align: "center" }
                            },
                            [
                              _vm.miniload
                                ? _c(
                                    "button",
                                    {
                                      staticClass:
                                        "uk-button uk-button-default",
                                      attrs: { disabled: "" }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-refresh fa-spin"
                                      })
                                    ]
                                  )
                                : _c(
                                    "button",
                                    {
                                      staticClass:
                                        "uk-button uk-button-default updub uk-width-1-1@s",
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.createPost($event)
                                        }
                                      }
                                    },
                                    [_vm._v("Register")]
                                  )
                            ]
                          )
                        ])
                      ]
                    )
                  ])
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.Done
            ? _c("div", [
                _c("div", { staticClass: "container" }, [
                  _vm._v(
                    "\n                   Done ! please wait for admins to confirm your details, once your details are confirmed you'll be able to use your account\n                "
                  )
                ])
              ])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "hodhod-imag-login uk-width-1-2@s" },
        [
          _c("center", [
            _c("img", {
              staticStyle: { margin: "auto", "margin-top": "10%" },
              attrs: { src: "/images/ihodhod.png", width: "66%" }
            }),
            _vm._v(" "),
            _c("h1", { staticStyle: { color: "white" } }, [
              _vm._v("Register Car Documents")
            ])
          ])
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/auth/Delivers_Docs_Registration.vue":
/*!****************************************************************************!*\
  !*** ./resources/assets/js/components/auth/Delivers_Docs_Registration.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Delivers_Docs_Registration_vue_vue_type_template_id_3a5b4acc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Delivers_Docs_Registration.vue?vue&type=template&id=3a5b4acc&scoped=true& */ "./resources/assets/js/components/auth/Delivers_Docs_Registration.vue?vue&type=template&id=3a5b4acc&scoped=true&");
/* harmony import */ var _Delivers_Docs_Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Delivers_Docs_Registration.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/auth/Delivers_Docs_Registration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Delivers_Docs_Registration_vue_vue_type_style_index_0_id_3a5b4acc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Delivers_Docs_Registration.vue?vue&type=style&index=0&id=3a5b4acc&scoped=true&lang=css& */ "./resources/assets/js/components/auth/Delivers_Docs_Registration.vue?vue&type=style&index=0&id=3a5b4acc&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Delivers_Docs_Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Delivers_Docs_Registration_vue_vue_type_template_id_3a5b4acc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Delivers_Docs_Registration_vue_vue_type_template_id_3a5b4acc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3a5b4acc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/auth/Delivers_Docs_Registration.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/auth/Delivers_Docs_Registration.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/js/components/auth/Delivers_Docs_Registration.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Delivers_Docs_Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Delivers_Docs_Registration.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/auth/Delivers_Docs_Registration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Delivers_Docs_Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/auth/Delivers_Docs_Registration.vue?vue&type=style&index=0&id=3a5b4acc&scoped=true&lang=css&":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/auth/Delivers_Docs_Registration.vue?vue&type=style&index=0&id=3a5b4acc&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Delivers_Docs_Registration_vue_vue_type_style_index_0_id_3a5b4acc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Delivers_Docs_Registration.vue?vue&type=style&index=0&id=3a5b4acc&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/auth/Delivers_Docs_Registration.vue?vue&type=style&index=0&id=3a5b4acc&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Delivers_Docs_Registration_vue_vue_type_style_index_0_id_3a5b4acc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Delivers_Docs_Registration_vue_vue_type_style_index_0_id_3a5b4acc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Delivers_Docs_Registration_vue_vue_type_style_index_0_id_3a5b4acc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Delivers_Docs_Registration_vue_vue_type_style_index_0_id_3a5b4acc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Delivers_Docs_Registration_vue_vue_type_style_index_0_id_3a5b4acc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/components/auth/Delivers_Docs_Registration.vue?vue&type=template&id=3a5b4acc&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/assets/js/components/auth/Delivers_Docs_Registration.vue?vue&type=template&id=3a5b4acc&scoped=true& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Delivers_Docs_Registration_vue_vue_type_template_id_3a5b4acc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Delivers_Docs_Registration.vue?vue&type=template&id=3a5b4acc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/auth/Delivers_Docs_Registration.vue?vue&type=template&id=3a5b4acc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Delivers_Docs_Registration_vue_vue_type_template_id_3a5b4acc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Delivers_Docs_Registration_vue_vue_type_template_id_3a5b4acc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);