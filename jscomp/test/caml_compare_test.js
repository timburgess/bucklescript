'use strict';

var Mt = require("./mt.js");
var Block = require("../../lib/js/block.js");
var Js_exn = require("../../lib/js/js_exn.js");
var Caml_obj = require("../../lib/js/caml_obj.js");
var Caml_builtin_exceptions = require("../../lib/js/caml_builtin_exceptions.js");

var function_equal_test;

try {
  function_equal_test = Caml_obj.caml_equal((function (x) {
          return x + 1 | 0;
        }), (function (x) {
          return x + 2 | 0;
        }));
}
catch (raw_exn){
  var exn = Js_exn.internalToOCamlException(raw_exn);
  function_equal_test = exn[0] === Caml_builtin_exceptions.invalid_argument && exn[1] === "equal: functional value" ? true : false;
}

var suites_000 = /* tuple */[
  "option",
  (function (param) {
      return /* Eq */Block.__(0, [
                true,
                Caml_obj.caml_lessthan(undefined, 1)
              ]);
    })
];

var suites_001 = /* :: */[
  /* tuple */[
    "option2",
    (function (param) {
        return /* Eq */Block.__(0, [
                  true,
                  Caml_obj.caml_lessthan(1, 2)
                ]);
      })
  ],
  /* :: */[
    /* tuple */[
      "list0",
      (function (param) {
          return /* Eq */Block.__(0, [
                    true,
                    Caml_obj.caml_greaterthan(/* :: */[
                          1,
                          /* [] */0
                        ], /* [] */0)
                  ]);
        })
    ],
    /* :: */[
      /* tuple */[
        "listeq",
        (function (param) {
            return /* Eq */Block.__(0, [
                      true,
                      Caml_obj.caml_equal(/* :: */[
                            1,
                            /* :: */[
                              2,
                              /* :: */[
                                3,
                                /* [] */0
                              ]
                            ]
                          ], /* :: */[
                            1,
                            /* :: */[
                              2,
                              /* :: */[
                                3,
                                /* [] */0
                              ]
                            ]
                          ])
                    ]);
          })
      ],
      /* :: */[
        /* tuple */[
          "listneq",
          (function (param) {
              return /* Eq */Block.__(0, [
                        true,
                        Caml_obj.caml_greaterthan(/* :: */[
                              1,
                              /* :: */[
                                2,
                                /* :: */[
                                  3,
                                  /* [] */0
                                ]
                              ]
                            ], /* :: */[
                              1,
                              /* :: */[
                                2,
                                /* :: */[
                                  2,
                                  /* [] */0
                                ]
                              ]
                            ])
                      ]);
            })
        ],
        /* :: */[
          /* tuple */[
            "custom_u",
            (function (param) {
                return /* Eq */Block.__(0, [
                          true,
                          Caml_obj.caml_greaterthan(/* tuple */[
                                /* A */Block.__(0, [3]),
                                /* B */Block.__(1, [
                                    2,
                                    false
                                  ]),
                                /* C */Block.__(2, [1])
                              ], /* tuple */[
                                /* A */Block.__(0, [3]),
                                /* B */Block.__(1, [
                                    2,
                                    false
                                  ]),
                                /* C */Block.__(2, [0])
                              ])
                        ]);
              })
          ],
          /* :: */[
            /* tuple */[
              "custom_u2",
              (function (param) {
                  return /* Eq */Block.__(0, [
                            true,
                            Caml_obj.caml_equal(/* tuple */[
                                  /* A */Block.__(0, [3]),
                                  /* B */Block.__(1, [
                                      2,
                                      false
                                    ]),
                                  /* C */Block.__(2, [1])
                                ], /* tuple */[
                                  /* A */Block.__(0, [3]),
                                  /* B */Block.__(1, [
                                      2,
                                      false
                                    ]),
                                  /* C */Block.__(2, [1])
                                ])
                          ]);
                })
            ],
            /* :: */[
              /* tuple */[
                "function",
                (function (param) {
                    return /* Eq */Block.__(0, [
                              true,
                              function_equal_test
                            ]);
                  })
              ],
              /* :: */[
                /* tuple */[
                  "File \"caml_compare_test.ml\", line 17, characters 4-11",
                  (function (param) {
                      return /* Eq */Block.__(0, [
                                true,
                                Caml_obj.caml_lessthan(undefined, 1)
                              ]);
                    })
                ],
                /* :: */[
                  /* tuple */[
                    "File \"caml_compare_test.ml\", line 28, characters 4-11",
                    (function (param) {
                        return /* Eq */Block.__(0, [
                                  true,
                                  Caml_obj.caml_lessthan(undefined, /* array */[
                                        1,
                                        30
                                      ])
                                ]);
                      })
                  ],
                  /* :: */[
                    /* tuple */[
                      "File \"caml_compare_test.ml\", line 31, characters 4-11",
                      (function (param) {
                          return /* Eq */Block.__(0, [
                                    true,
                                    Caml_obj.caml_greaterthan(/* array */[
                                          1,
                                          30
                                        ], undefined)
                                  ]);
                        })
                    ],
                    /* :: */[
                      /* tuple */[
                        "File \"caml_compare_test.ml\", line 34, characters 4-11",
                        (function (param) {
                            return /* Eq */Block.__(0, [
                                      true,
                                      Caml_obj.caml_lessthan(/* :: */[
                                            2,
                                            /* :: */[
                                              6,
                                              /* :: */[
                                                1,
                                                /* :: */[
                                                  1,
                                                  /* :: */[
                                                    2,
                                                    /* :: */[
                                                      1,
                                                      /* :: */[
                                                        4,
                                                        /* :: */[
                                                          2,
                                                          /* :: */[
                                                            1,
                                                            /* [] */0
                                                          ]
                                                        ]
                                                      ]
                                                    ]
                                                  ]
                                                ]
                                              ]
                                            ]
                                          ], /* :: */[
                                            2,
                                            /* :: */[
                                              6,
                                              /* :: */[
                                                1,
                                                /* :: */[
                                                  1,
                                                  /* :: */[
                                                    2,
                                                    /* :: */[
                                                      1,
                                                      /* :: */[
                                                        4,
                                                        /* :: */[
                                                          2,
                                                          /* :: */[
                                                            1,
                                                            /* :: */[
                                                              409,
                                                              /* [] */0
                                                            ]
                                                          ]
                                                        ]
                                                      ]
                                                    ]
                                                  ]
                                                ]
                                              ]
                                            ]
                                          ])
                                    ]);
                          })
                      ],
                      /* :: */[
                        /* tuple */[
                          "File \"caml_compare_test.ml\", line 37, characters 4-11",
                          (function (param) {
                              return /* Eq */Block.__(0, [
                                        true,
                                        Caml_obj.caml_lessthan(/* :: */[
                                              1,
                                              /* [] */0
                                            ], /* :: */[
                                              1,
                                              /* :: */[
                                                409,
                                                /* [] */0
                                              ]
                                            ])
                                      ]);
                            })
                        ],
                        /* :: */[
                          /* tuple */[
                            "File \"caml_compare_test.ml\", line 40, characters 4-11",
                            (function (param) {
                                return /* Eq */Block.__(0, [
                                          true,
                                          Caml_obj.caml_lessthan(/* [] */0, /* :: */[
                                                409,
                                                /* [] */0
                                              ])
                                        ]);
                              })
                          ],
                          /* :: */[
                            /* tuple */[
                              "File \"caml_compare_test.ml\", line 43, characters 4-11",
                              (function (param) {
                                  return /* Eq */Block.__(0, [
                                            true,
                                            Caml_obj.caml_greaterthan(/* :: */[
                                                  2,
                                                  /* :: */[
                                                    6,
                                                    /* :: */[
                                                      1,
                                                      /* :: */[
                                                        1,
                                                        /* :: */[
                                                          2,
                                                          /* :: */[
                                                            1,
                                                            /* :: */[
                                                              4,
                                                              /* :: */[
                                                                2,
                                                                /* :: */[
                                                                  1,
                                                                  /* :: */[
                                                                    409,
                                                                    /* [] */0
                                                                  ]
                                                                ]
                                                              ]
                                                            ]
                                                          ]
                                                        ]
                                                      ]
                                                    ]
                                                  ]
                                                ], /* :: */[
                                                  2,
                                                  /* :: */[
                                                    6,
                                                    /* :: */[
                                                      1,
                                                      /* :: */[
                                                        1,
                                                        /* :: */[
                                                          2,
                                                          /* :: */[
                                                            1,
                                                            /* :: */[
                                                              4,
                                                              /* :: */[
                                                                2,
                                                                /* :: */[
                                                                  1,
                                                                  /* [] */0
                                                                ]
                                                              ]
                                                            ]
                                                          ]
                                                        ]
                                                      ]
                                                    ]
                                                  ]
                                                ])
                                          ]);
                                })
                            ],
                            /* :: */[
                              /* tuple */[
                                "File \"caml_compare_test.ml\", line 47, characters 4-11",
                                (function (param) {
                                    return /* Eq */Block.__(0, [
                                              false,
                                              false
                                            ]);
                                  })
                              ],
                              /* :: */[
                                /* tuple */[
                                  "File \"caml_compare_test.ml\", line 50, characters 4-11",
                                  (function (param) {
                                      return /* Eq */Block.__(0, [
                                                false,
                                                false
                                              ]);
                                    })
                                ],
                                /* :: */[
                                  /* tuple */[
                                    "File \"caml_compare_test.ml\", line 53, characters 4-11",
                                    (function (param) {
                                        return /* Eq */Block.__(0, [
                                                  false,
                                                  Caml_obj.caml_equal(/* :: */[
                                                        2,
                                                        /* :: */[
                                                          6,
                                                          /* :: */[
                                                            1,
                                                            /* :: */[
                                                              1,
                                                              /* :: */[
                                                                2,
                                                                /* :: */[
                                                                  1,
                                                                  /* :: */[
                                                                    4,
                                                                    /* :: */[
                                                                      2,
                                                                      /* :: */[
                                                                        1,
                                                                        /* [] */0
                                                                      ]
                                                                    ]
                                                                  ]
                                                                ]
                                                              ]
                                                            ]
                                                          ]
                                                        ]
                                                      ], /* :: */[
                                                        2,
                                                        /* :: */[
                                                          6,
                                                          /* :: */[
                                                            1,
                                                            /* :: */[
                                                              1,
                                                              /* :: */[
                                                                2,
                                                                /* :: */[
                                                                  1,
                                                                  /* :: */[
                                                                    4,
                                                                    /* :: */[
                                                                      2,
                                                                      /* :: */[
                                                                        1,
                                                                        /* :: */[
                                                                          409,
                                                                          /* [] */0
                                                                        ]
                                                                      ]
                                                                    ]
                                                                  ]
                                                                ]
                                                              ]
                                                            ]
                                                          ]
                                                        ]
                                                      ])
                                                ]);
                                      })
                                  ],
                                  /* :: */[
                                    /* tuple */[
                                      "File \"caml_compare_test.ml\", line 56, characters 4-11",
                                      (function (param) {
                                          return /* Eq */Block.__(0, [
                                                    false,
                                                    Caml_obj.caml_equal(/* :: */[
                                                          2,
                                                          /* :: */[
                                                            6,
                                                            /* :: */[
                                                              1,
                                                              /* :: */[
                                                                1,
                                                                /* :: */[
                                                                  2,
                                                                  /* :: */[
                                                                    1,
                                                                    /* :: */[
                                                                      4,
                                                                      /* :: */[
                                                                        2,
                                                                        /* :: */[
                                                                          1,
                                                                          /* :: */[
                                                                            409,
                                                                            /* [] */0
                                                                          ]
                                                                        ]
                                                                      ]
                                                                    ]
                                                                  ]
                                                                ]
                                                              ]
                                                            ]
                                                          ]
                                                        ], /* :: */[
                                                          2,
                                                          /* :: */[
                                                            6,
                                                            /* :: */[
                                                              1,
                                                              /* :: */[
                                                                1,
                                                                /* :: */[
                                                                  2,
                                                                  /* :: */[
                                                                    1,
                                                                    /* :: */[
                                                                      4,
                                                                      /* :: */[
                                                                        2,
                                                                        /* :: */[
                                                                          1,
                                                                          /* [] */0
                                                                        ]
                                                                      ]
                                                                    ]
                                                                  ]
                                                                ]
                                                              ]
                                                            ]
                                                          ]
                                                        ])
                                                  ]);
                                        })
                                    ],
                                    /* :: */[
                                      /* tuple */[
                                        "cmp_id",
                                        (function (param) {
                                            return /* Eq */Block.__(0, [
                                                      Caml_obj.caml_compare({
                                                            x: 1,
                                                            y: 2
                                                          }, {
                                                            x: 1,
                                                            y: 2
                                                          }),
                                                      0
                                                    ]);
                                          })
                                      ],
                                      /* :: */[
                                        /* tuple */[
                                          "cmp_val",
                                          (function (param) {
                                              return /* Eq */Block.__(0, [
                                                        Caml_obj.caml_compare({
                                                              x: 1
                                                            }, {
                                                              x: 2
                                                            }),
                                                        -1
                                                      ]);
                                            })
                                        ],
                                        /* :: */[
                                          /* tuple */[
                                            "cmp_val2",
                                            (function (param) {
                                                return /* Eq */Block.__(0, [
                                                          Caml_obj.caml_compare({
                                                                x: 2
                                                              }, {
                                                                x: 1
                                                              }),
                                                          1
                                                        ]);
                                              })
                                          ],
                                          /* :: */[
                                            /* tuple */[
                                              "cmp_empty",
                                              (function (param) {
                                                  return /* Eq */Block.__(0, [
                                                            Caml_obj.caml_compare(({}), ({})),
                                                            0
                                                          ]);
                                                })
                                            ],
                                            /* :: */[
                                              /* tuple */[
                                                "cmp_empty2",
                                                (function (param) {
                                                    return /* Eq */Block.__(0, [
                                                              Caml_obj.caml_compare(({}), ({x:1})),
                                                              -1
                                                            ]);
                                                  })
                                              ],
                                              /* :: */[
                                                /* tuple */[
                                                  "cmp_swap",
                                                  (function (param) {
                                                      return /* Eq */Block.__(0, [
                                                                Caml_obj.caml_compare({
                                                                      x: 1,
                                                                      y: 2
                                                                    }, {
                                                                      y: 2,
                                                                      x: 1
                                                                    }),
                                                                0
                                                              ]);
                                                    })
                                                ],
                                                /* :: */[
                                                  /* tuple */[
                                                    "cmp_size",
                                                    (function (param) {
                                                        return /* Eq */Block.__(0, [
                                                                  Caml_obj.caml_compare(({x:1}), ({x:1, y:2})),
                                                                  -1
                                                                ]);
                                                      })
                                                  ],
                                                  /* :: */[
                                                    /* tuple */[
                                                      "cmp_size2",
                                                      (function (param) {
                                                          return /* Eq */Block.__(0, [
                                                                    Caml_obj.caml_compare(({x:1, y:2}), ({x:1})),
                                                                    1
                                                                  ]);
                                                        })
                                                    ],
                                                    /* :: */[
                                                      /* tuple */[
                                                        "cmp_order",
                                                        (function (param) {
                                                            return /* Eq */Block.__(0, [
                                                                      Caml_obj.caml_compare({
                                                                            x: 0,
                                                                            y: 1
                                                                          }, {
                                                                            x: 1,
                                                                            y: 0
                                                                          }),
                                                                      -1
                                                                    ]);
                                                          })
                                                      ],
                                                      /* :: */[
                                                        /* tuple */[
                                                          "cmp_order2",
                                                          (function (param) {
                                                              return /* Eq */Block.__(0, [
                                                                        Caml_obj.caml_compare({
                                                                              x: 1,
                                                                              y: 0
                                                                            }, {
                                                                              x: 0,
                                                                              y: 1
                                                                            }),
                                                                        1
                                                                      ]);
                                                            })
                                                        ],
                                                        /* :: */[
                                                          /* tuple */[
                                                            "cmp_in_list",
                                                            (function (param) {
                                                                return /* Eq */Block.__(0, [
                                                                          Caml_obj.caml_compare(/* :: */[
                                                                                {
                                                                                  x: 1
                                                                                },
                                                                                /* [] */0
                                                                              ], /* :: */[
                                                                                {
                                                                                  x: 2
                                                                                },
                                                                                /* [] */0
                                                                              ]),
                                                                          -1
                                                                        ]);
                                                              })
                                                          ],
                                                          /* :: */[
                                                            /* tuple */[
                                                              "cmp_in_list2",
                                                              (function (param) {
                                                                  return /* Eq */Block.__(0, [
                                                                            Caml_obj.caml_compare(/* :: */[
                                                                                  {
                                                                                    x: 2
                                                                                  },
                                                                                  /* [] */0
                                                                                ], /* :: */[
                                                                                  {
                                                                                    x: 1
                                                                                  },
                                                                                  /* [] */0
                                                                                ]),
                                                                            1
                                                                          ]);
                                                                })
                                                            ],
                                                            /* :: */[
                                                              /* tuple */[
                                                                "cmp_with_list",
                                                                (function (param) {
                                                                    return /* Eq */Block.__(0, [
                                                                              Caml_obj.caml_compare({
                                                                                    x: /* :: */[
                                                                                      0,
                                                                                      /* [] */0
                                                                                    ]
                                                                                  }, {
                                                                                    x: /* :: */[
                                                                                      1,
                                                                                      /* [] */0
                                                                                    ]
                                                                                  }),
                                                                              -1
                                                                            ]);
                                                                  })
                                                              ],
                                                              /* :: */[
                                                                /* tuple */[
                                                                  "cmp_with_list2",
                                                                  (function (param) {
                                                                      return /* Eq */Block.__(0, [
                                                                                Caml_obj.caml_compare({
                                                                                      x: /* :: */[
                                                                                        1,
                                                                                        /* [] */0
                                                                                      ]
                                                                                    }, {
                                                                                      x: /* :: */[
                                                                                        0,
                                                                                        /* [] */0
                                                                                      ]
                                                                                    }),
                                                                                1
                                                                              ]);
                                                                    })
                                                                ],
                                                                /* :: */[
                                                                  /* tuple */[
                                                                    "eq_id",
                                                                    (function (param) {
                                                                        return /* Ok */Block.__(4, [Caml_obj.caml_equal({
                                                                                        x: 1,
                                                                                        y: 2
                                                                                      }, {
                                                                                        x: 1,
                                                                                        y: 2
                                                                                      })]);
                                                                      })
                                                                  ],
                                                                  /* :: */[
                                                                    /* tuple */[
                                                                      "eq_val",
                                                                      (function (param) {
                                                                          return /* Eq */Block.__(0, [
                                                                                    Caml_obj.caml_equal({
                                                                                          x: 1
                                                                                        }, {
                                                                                          x: 2
                                                                                        }),
                                                                                    false
                                                                                  ]);
                                                                        })
                                                                    ],
                                                                    /* :: */[
                                                                      /* tuple */[
                                                                        "eq_val2",
                                                                        (function (param) {
                                                                            return /* Eq */Block.__(0, [
                                                                                      Caml_obj.caml_equal({
                                                                                            x: 2
                                                                                          }, {
                                                                                            x: 1
                                                                                          }),
                                                                                      false
                                                                                    ]);
                                                                          })
                                                                      ],
                                                                      /* :: */[
                                                                        /* tuple */[
                                                                          "eq_empty",
                                                                          (function (param) {
                                                                              return /* Eq */Block.__(0, [
                                                                                        Caml_obj.caml_equal(({}), ({})),
                                                                                        true
                                                                                      ]);
                                                                            })
                                                                        ],
                                                                        /* :: */[
                                                                          /* tuple */[
                                                                            "eq_empty2",
                                                                            (function (param) {
                                                                                return /* Eq */Block.__(0, [
                                                                                          Caml_obj.caml_equal(({}), ({x:1})),
                                                                                          false
                                                                                        ]);
                                                                              })
                                                                          ],
                                                                          /* :: */[
                                                                            /* tuple */[
                                                                              "eq_swap",
                                                                              (function (param) {
                                                                                  return /* Ok */Block.__(4, [Caml_obj.caml_equal({
                                                                                                  x: 1,
                                                                                                  y: 2
                                                                                                }, {
                                                                                                  y: 2,
                                                                                                  x: 1
                                                                                                })]);
                                                                                })
                                                                            ],
                                                                            /* :: */[
                                                                              /* tuple */[
                                                                                "eq_size",
                                                                                (function (param) {
                                                                                    return /* Eq */Block.__(0, [
                                                                                              Caml_obj.caml_equal(({x:1}), ({x:1, y:2})),
                                                                                              false
                                                                                            ]);
                                                                                  })
                                                                              ],
                                                                              /* :: */[
                                                                                /* tuple */[
                                                                                  "eq_size2",
                                                                                  (function (param) {
                                                                                      return /* Eq */Block.__(0, [
                                                                                                Caml_obj.caml_equal(({x:1, y:2}), ({x:1})),
                                                                                                false
                                                                                              ]);
                                                                                    })
                                                                                ],
                                                                                /* :: */[
                                                                                  /* tuple */[
                                                                                    "eq_in_list",
                                                                                    (function (param) {
                                                                                        return /* Eq */Block.__(0, [
                                                                                                  Caml_obj.caml_equal(/* :: */[
                                                                                                        {
                                                                                                          x: 1
                                                                                                        },
                                                                                                        /* [] */0
                                                                                                      ], /* :: */[
                                                                                                        {
                                                                                                          x: 2
                                                                                                        },
                                                                                                        /* [] */0
                                                                                                      ]),
                                                                                                  false
                                                                                                ]);
                                                                                      })
                                                                                  ],
                                                                                  /* :: */[
                                                                                    /* tuple */[
                                                                                      "eq_in_list2",
                                                                                      (function (param) {
                                                                                          return /* Eq */Block.__(0, [
                                                                                                    Caml_obj.caml_equal(/* :: */[
                                                                                                          {
                                                                                                            x: 2
                                                                                                          },
                                                                                                          /* [] */0
                                                                                                        ], /* :: */[
                                                                                                          {
                                                                                                            x: 2
                                                                                                          },
                                                                                                          /* [] */0
                                                                                                        ]),
                                                                                                    true
                                                                                                  ]);
                                                                                        })
                                                                                    ],
                                                                                    /* :: */[
                                                                                      /* tuple */[
                                                                                        "eq_with_list",
                                                                                        (function (param) {
                                                                                            return /* Eq */Block.__(0, [
                                                                                                      Caml_obj.caml_equal({
                                                                                                            x: /* :: */[
                                                                                                              0,
                                                                                                              /* [] */0
                                                                                                            ]
                                                                                                          }, {
                                                                                                            x: /* :: */[
                                                                                                              0,
                                                                                                              /* [] */0
                                                                                                            ]
                                                                                                          }),
                                                                                                      true
                                                                                                    ]);
                                                                                          })
                                                                                      ],
                                                                                      /* :: */[
                                                                                        /* tuple */[
                                                                                          "eq_with_list2",
                                                                                          (function (param) {
                                                                                              return /* Eq */Block.__(0, [
                                                                                                        Caml_obj.caml_equal({
                                                                                                              x: /* :: */[
                                                                                                                0,
                                                                                                                /* [] */0
                                                                                                              ]
                                                                                                            }, {
                                                                                                              x: /* :: */[
                                                                                                                1,
                                                                                                                /* [] */0
                                                                                                              ]
                                                                                                            }),
                                                                                                        false
                                                                                                      ]);
                                                                                            })
                                                                                        ],
                                                                                        /* :: */[
                                                                                          /* tuple */[
                                                                                            "File \"caml_compare_test.ml\", line 87, characters 4-11",
                                                                                            (function (param) {
                                                                                                return /* Eq */Block.__(0, [
                                                                                                          Caml_obj.caml_compare(null, /* :: */[
                                                                                                                3,
                                                                                                                /* [] */0
                                                                                                              ]),
                                                                                                          -1
                                                                                                        ]);
                                                                                              })
                                                                                          ],
                                                                                          /* :: */[
                                                                                            /* tuple */[
                                                                                              "File \"caml_compare_test.ml\", line 90, characters 4-11",
                                                                                              (function (param) {
                                                                                                  return /* Eq */Block.__(0, [
                                                                                                            Caml_obj.caml_compare(/* :: */[
                                                                                                                  3,
                                                                                                                  /* [] */0
                                                                                                                ], null),
                                                                                                            1
                                                                                                          ]);
                                                                                                })
                                                                                            ],
                                                                                            /* :: */[
                                                                                              /* tuple */[
                                                                                                "File \"caml_compare_test.ml\", line 93, characters 4-11",
                                                                                                (function (param) {
                                                                                                    return /* Eq */Block.__(0, [
                                                                                                              Caml_obj.caml_compare(null, 0),
                                                                                                              -1
                                                                                                            ]);
                                                                                                  })
                                                                                              ],
                                                                                              /* :: */[
                                                                                                /* tuple */[
                                                                                                  "File \"caml_compare_test.ml\", line 96, characters 4-11",
                                                                                                  (function (param) {
                                                                                                      return /* Eq */Block.__(0, [
                                                                                                                Caml_obj.caml_compare(0, null),
                                                                                                                1
                                                                                                              ]);
                                                                                                    })
                                                                                                ],
                                                                                                /* :: */[
                                                                                                  /* tuple */[
                                                                                                    "File \"caml_compare_test.ml\", line 99, characters 4-11",
                                                                                                    (function (param) {
                                                                                                        return /* Eq */Block.__(0, [
                                                                                                                  Caml_obj.caml_compare(undefined, 0),
                                                                                                                  -1
                                                                                                                ]);
                                                                                                      })
                                                                                                  ],
                                                                                                  /* :: */[
                                                                                                    /* tuple */[
                                                                                                      "File \"caml_compare_test.ml\", line 102, characters 4-11",
                                                                                                      (function (param) {
                                                                                                          return /* Eq */Block.__(0, [
                                                                                                                    Caml_obj.caml_compare(0, undefined),
                                                                                                                    1
                                                                                                                  ]);
                                                                                                        })
                                                                                                    ],
                                                                                                    /* [] */0
                                                                                                  ]
                                                                                                ]
                                                                                              ]
                                                                                            ]
                                                                                          ]
                                                                                        ]
                                                                                      ]
                                                                                    ]
                                                                                  ]
                                                                                ]
                                                                              ]
                                                                            ]
                                                                          ]
                                                                        ]
                                                                      ]
                                                                    ]
                                                                  ]
                                                                ]
                                                              ]
                                                            ]
                                                          ]
                                                        ]
                                                      ]
                                                    ]
                                                  ]
                                                ]
                                              ]
                                            ]
                                          ]
                                        ]
                                      ]
                                    ]
                                  ]
                                ]
                              ]
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]
  ]
];

var suites = /* :: */[
  suites_000,
  suites_001
];

Mt.from_pair_suites("caml_compare_test.ml", suites);

exports.function_equal_test = function_equal_test;
exports.suites = suites;
/* function_equal_test Not a pure module */
