var svgService = require("./service");
var getSvgTemplate = (currentDate) => {
  var svg = {
    name: "svg",
    type: "element",
    value: "",
    parent: null,
    attributes: {
      fill: "none",
      viewBox: "0 0 600 291",
      width: "600",
      height: "291",
      xmlns: "http://www.w3.org/2000/svg",
    },
    children: [
      {
        name: "foreignObject",
        type: "element",
        value: "",
        parent: null,
        attributes: {
          width: "100%",
          height: "100%",
        },
        children: [
          {
            name: "div",
            type: "element",
            value: "",
            parent: null,
            attributes: {
              xmlns: "http://www.w3.org/1999/xhtml",
            },
            children: [
              {
                name: "style",
                type: "element",
                value: "",
                parent: null,
                attributes: {},
                children: [
                  {
                    name: "",
                    type: "text",
                    value:
                      '\n\t\t\t\t* {\n\t\t\t\t\tmargin: 0;\n\t\t\t\t\tpadding: 0;\n\t\t\t\t\tcolor: inherit;\n\t\t\t\t\ttext-decoration: none;\n\t\t\t\t\tlist-style: none;\n\t\t\t\t\toutline: none;\n\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t}\n\n\t\t\t\t.body {\n\t\t\t\t\t--color-default-bg: #EEE;\n\t\t\t\t\t--color-reply-bg: #ddd;\n\t\t\t\t\t--color-title: #004A99;\n\t\t\t\t\t--color-primary: #333;\n\t\t\t\t\t--color-secondary: #5d5d5d;\n\t\t\t\t\t--color-link: #789922;\n\t\t\t\t\t--color-link-active: #f60;\n\t\t\t\t\t--color-icon: #8c8c8c;\n\t\t\t\t\theight: 600px;\n\t\t\t\t\twidth: 100%;\n\n\t\t\t\t\tfont-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";\n\n\t\t\t\t\tfont-size: 10px;\n\t\t\t\t\tline-height: 1.1;\n\t\t\t\t}\n\n\t\t\t\t.container {\n\t\t\t\t\tbackground-color: var(--color-default-bg)\n\t\t\t\t}\n\n\t\t\t\t.link {\n\t\t\t\t\tcolor: var(--color-link)\n\t\t\t\t}\n\n\t\t\t\t.link__active {\n\t\t\t\t\tcolor: var(--color-link-active);\n\t\t\t\t}\n\n\n\t\t\t\t.op__detail {\n\t\t\t\t\tfont-size: 0.9em;\n\t\t\t\t\tcolor: var(--color-secondary);\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\talign-items: center;\n\t\t\t\t\tgap: 6px;\n\t\t\t\t}\n\n\t\t\t\t.op__title h1 {\n\t\t\t\t\tfont-size: 1.1em;\n\t\t\t\t\tcolor: var(--color-title);\n\t\t\t\t\tfont-weight: 700;\n\t\t\t\t}\n\n\t\t\t\t.op__number {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tgap: 6px;\n\t\t\t\t}\n\n\t\t\t\t.image {\n\t\t\t\t\tfont-size: 70%;\n\t\t\t\t}\n\n\t\t\t\t.image__descr {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tgap:5px;\n\t\t\t\t\talign-items: end;\n\t\t\t\t\tmargin-bottom: 0.1rem;\n\t\t\t\t}\n\n\t\t\t\t.image__img {\n\t\t\t\t\tborder: 1px solid var(--color-secondary);\n\t\t\t\t}\n\n\t\t\t\t.op__images {\n\t\t\t\t\tpadding-left: 16px;\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tfont-size: 0.8em;\n\t\t\t\t\tgap: 15px;\n\t\t\t\t\tcolor: var(--color-secondary);\n\t\t\t\t}\n\n\n\t\t\t\t.op__article {\n\t\t\t\t\tpadding: 0.25rem 2rem;\n\t\t\t\t}\n\n\t\t\t\t.op__icons {\n\t\t\t\t\tdisplay: grid;\n\t\t\t\t\tgrid-template-columns: 1fr 1fr;\n\t\t\t\t\tgap: 3px;\n\t\t\t\t}\n\n\t\t\t\tfooter {\n\t\t\t\t\tfont-size: 70%;\n\t\t\t\t\tpadding: 0 0 0.25rem 1.25rem;\n\t\t\t\t}\n\n\t\t\t\tfooter span:nth-child(even) {\n\t\t\t\t\tmargin-left: 5px;\n\t\t\t\t}\n\n\t\t\t\t.reply {\n\t\t\t\t\tposition: relative;\n\t\t\t\t\tmax-width: 20rem;\n\t\t\t\t\tbackground-color: var(--color-reply-bg);\n\t\t\t\t\tmargin: 2px 0 4px 20px;\n\t\t\t\t\tborder-radius: 3px;\n\t\t\t\t}\n\n\t\t\t\t.reply::before {\n\t\t\t\t\tcontent: \'...\';\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\tfont-weight: 600;\n\t\t\t\t\tcolor: var(--color-icon);\n\t\t\t\t\ttop: -5px;\n\t\t\t\t\tleft: -16px;\n\t\t\t\t}\n\n\t\t\t\t.reply__detail {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tgap: 6px;\n\t\t\t\t\tfont-size: 0.9em;\n\t\t\t\t\tpadding-left: 0.5rem;\n\t\t\t\t\tpadding-top: 0.25rem;\n\t\t\t\t\tcolor: var(--color-secondary);\n\t\t\t\t\talign-items: center;\n\t\t\t\t}\n\n\t\t\t\t.reply__post {\n\t\t\t\t\tpadding: 0.45rem 0 0.35rem 0.45rem;\n\t\t\t\t\tline-height: 13px;\n\t\t\t\t}\n\n\t\t\t\t.reply__to {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\tmargin-bottom: 0.2rem;\n\t\t\t\t\tcolor: var(--color-link-active)\n\t\t\t\t}\n\t\t\t',
                    parent: null,
                    attributes: {},
                    children: [],
                  },
                ],
              },
              {
                name: "div",
                type: "element",
                value: "",
                parent: null,
                attributes: {
                  class: "body",
                },
                children: [
                  {
                    name: "div",
                    type: "element",
                    value: "",
                    parent: null,
                    attributes: {
                      class: "container",
                    },
                    children: [
                      {
                        name: "section",
                        type: "element",
                        value: "",
                        parent: null,
                        attributes: {
                          class: "op",
                        },
                        children: [
                          {
                            name: "div",
                            type: "element",
                            value: "",
                            parent: null,
                            attributes: {
                              class: "op__detail",
                            },
                            children: [
                              {
                                name: "div",
                                type: "element",
                                value: "",
                                parent: null,
                                attributes: {
                                  class: "op__title",
                                },
                                children: [
                                  {
                                    name: "h1",
                                    type: "element",
                                    value: "",
                                    parent: null,
                                    attributes: {},
                                    children: [
                                      {
                                        name: "",
                                        type: "text",
                                        value: "Hello world #1",
                                        parent: null,
                                        attributes: {},
                                        children: [],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                name: "div",
                                type: "element",
                                value: "",
                                parent: null,
                                attributes: {
                                  class: "op__status",
                                },
                                children: [
                                  {
                                    name: "span",
                                    type: "element",
                                    value: "",
                                    parent: null,
                                    attributes: {},
                                    children: [
                                      {
                                        name: "",
                                        type: "text",
                                        value: "Dev",
                                        parent: null,
                                        attributes: {},
                                        children: [],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                name: "div",
                                type: "element",
                                value: "",
                                parent: null,
                                attributes: {
                                  class: "op__date",
                                },
                                children: [
                                  {
                                    name: "span",
                                    type: "element",
                                    value: "",
                                    parent: null,
                                    attributes: {},
                                    children: [
                                      {
                                        name: "",
                                        type: "text",
                                        value:
                                          svgService.getLocaleDate(currentDate),
                                        parent: null,
                                        attributes: {},
                                        children: [],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                name: "div",
                                type: "element",
                                value: "",
                                parent: null,
                                attributes: {
                                  class: "op__date",
                                },
                                children: [
                                  {
                                    name: "span",
                                    type: "element",
                                    value: "",
                                    parent: null,
                                    attributes: {},
                                    children: [
                                      {
                                        name: "",
                                        type: "text",
                                        value: svgService.getDay(currentDate),
                                        parent: null,
                                        attributes: {},
                                        children: [],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                name: "div",
                                type: "element",
                                value: "",
                                parent: null,
                                attributes: {
                                  class: "op__date",
                                },
                                children: [
                                  {
                                    name: "span",
                                    type: "element",
                                    value: "",
                                    parent: null,
                                    attributes: {},
                                    children: [
                                      {
                                        name: "",
                                        type: "text",
                                        value:
                                          svgService.getLocaleTime(currentDate),
                                        parent: null,
                                        attributes: {},
                                        children: [],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                name: "div",
                                type: "element",
                                value: "",
                                parent: null,
                                attributes: {
                                  class: "op__number",
                                },
                                children: [
                                  {
                                    name: "span",
                                    type: "element",
                                    value: "",
                                    parent: null,
                                    attributes: {},
                                    children: [
                                      {
                                        name: "",
                                        type: "text",
                                        value: "№41795612",
                                        parent: null,
                                        attributes: {},
                                        children: [],
                                      },
                                    ],
                                  },
                                  {
                                    name: "span",
                                    type: "element",
                                    value: "",
                                    parent: null,
                                    attributes: {
                                      class: "link",
                                    },
                                    children: [
                                      {
                                        name: "",
                                        type: "text",
                                        value: "1",
                                        parent: null,
                                        attributes: {},
                                        children: [],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                name: "div",
                                type: "element",
                                value: "",
                                parent: null,
                                attributes: {
                                  class: "op__icons",
                                },
                                children: [
                                  {
                                    name: "svg",
                                    type: "element",
                                    value: "",
                                    parent: null,
                                    attributes: {
                                      fill: "#9e9e9e",
                                      height: "10px",
                                      width: "10px",
                                      version: "1.1",
                                      id: "Layer_1",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      "xmlns:xlink":
                                        "http://www.w3.org/1999/xlink",
                                      viewBox: "0 0 512 512",
                                      "xml:space": "preserve",
                                      stroke: "#9e9e9e",
                                    },
                                    children: [
                                      {
                                        name: "g",
                                        type: "element",
                                        value: "",
                                        parent: null,
                                        attributes: {
                                          id: "SVGRepo_bgCarrier",
                                          "stroke-width": "0",
                                        },
                                        children: [],
                                      },
                                      {
                                        name: "g",
                                        type: "element",
                                        value: "",
                                        parent: null,
                                        attributes: {
                                          id: "SVGRepo_tracerCarrier",
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                        },
                                        children: [],
                                      },
                                      {
                                        name: "g",
                                        type: "element",
                                        value: "",
                                        parent: null,
                                        attributes: {
                                          id: "SVGRepo_iconCarrier",
                                        },
                                        children: [
                                          {
                                            name: "g",
                                            type: "element",
                                            value: "",
                                            parent: null,
                                            attributes: {},
                                            children: [
                                              {
                                                name: "g",
                                                type: "element",
                                                value: "",
                                                parent: null,
                                                attributes: {},
                                                children: [
                                                  {
                                                    name: "path",
                                                    type: "element",
                                                    value: "",
                                                    parent: null,
                                                    attributes: {
                                                      d: "M0,0v512h512V0H0z M327.296,365.714L256,328.232l-71.298,37.482l13.617-79.389l-57.68-56.225l79.711-11.582L256,146.286 l35.648,72.232l79.711,11.582l-57.68,56.225L327.296,365.714z",
                                                    },
                                                    children: [],
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    name: "svg",
                                    type: "element",
                                    value: "",
                                    parent: null,
                                    attributes: {
                                      fill: "#9e9e9e",
                                      height: "10px",
                                      width: "10px",
                                      version: "1.1",
                                      id: "Layer_1",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      "xmlns:xlink":
                                        "http://www.w3.org/1999/xlink",
                                      viewBox: "0 0 512 512",
                                      "xml:space": "preserve",
                                    },
                                    children: [
                                      {
                                        name: "g",
                                        type: "element",
                                        value: "",
                                        parent: null,
                                        attributes: {
                                          id: "SVGRepo_bgCarrier",
                                          "stroke-width": "0",
                                        },
                                        children: [],
                                      },
                                      {
                                        name: "g",
                                        type: "element",
                                        value: "",
                                        parent: null,
                                        attributes: {
                                          id: "SVGRepo_tracerCarrier",
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                        },
                                        children: [],
                                      },
                                      {
                                        name: "g",
                                        type: "element",
                                        value: "",
                                        parent: null,
                                        attributes: {
                                          id: "SVGRepo_iconCarrier",
                                        },
                                        children: [
                                          {
                                            name: "g",
                                            type: "element",
                                            value: "",
                                            parent: null,
                                            attributes: {},
                                            children: [
                                              {
                                                name: "g",
                                                type: "element",
                                                value: "",
                                                parent: null,
                                                attributes: {},
                                                children: [
                                                  {
                                                    name: "path",
                                                    type: "element",
                                                    value: "",
                                                    parent: null,
                                                    attributes: {
                                                      d: "M0,0v512h512V0H0z M384,283.429H283.429V384h-54.857V283.429H128v-54.857h100.571V128h54.857v100.571H384V283.429z",
                                                    },
                                                    children: [],
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            name: "div",
                            type: "element",
                            value: "",
                            parent: null,
                            attributes: {
                              class: "op__images",
                            },
                            children: [
                              {
                                name: "figure",
                                type: "element",
                                value: "",
                                parent: null,
                                attributes: {
                                  class: "image",
                                },
                                children: [
                                  {
                                    name: "figcaption",
                                    type: "element",
                                    value: "",
                                    parent: null,
                                    attributes: {},
                                    children: [
                                      {
                                        name: "div",
                                        type: "element",
                                        value: "",
                                        parent: null,
                                        attributes: {
                                          class: "image__descr",
                                        },
                                        children: [
                                          {
                                            name: "span",
                                            type: "element",
                                            value: "",
                                            parent: null,
                                            attributes: {
                                              class: "link__active",
                                            },
                                            children: [
                                              {
                                                name: "",
                                                type: "text",
                                                value: "mood.jpg",
                                                parent: null,
                                                attributes: {},
                                                children: [],
                                              },
                                            ],
                                          },
                                          {
                                            name: "span",
                                            type: "element",
                                            value: "",
                                            parent: null,
                                            attributes: {},
                                            children: [
                                              {
                                                name: "",
                                                type: "text",
                                                value: "140x140",
                                                parent: null,
                                                attributes: {},
                                                children: [],
                                              },
                                            ],
                                          },
                                          {
                                            name: "svg",
                                            type: "element",
                                            value: "",
                                            parent: null,
                                            attributes: {
                                              fill: "#9e9e9e",
                                              height: "10px",
                                              width: "10px",
                                              version: "1.1",
                                              id: "Layer_1",
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              "xmlns:xlink":
                                                "http://www.w3.org/1999/xlink",
                                              viewBox: "0 0 512 512",
                                              "xml:space": "preserve",
                                            },
                                            children: [
                                              {
                                                name: "g",
                                                type: "element",
                                                value: "",
                                                parent: null,
                                                attributes: {
                                                  id: "SVGRepo_bgCarrier",
                                                  "stroke-width": "0",
                                                },
                                                children: [],
                                              },
                                              {
                                                name: "g",
                                                type: "element",
                                                value: "",
                                                parent: null,
                                                attributes: {
                                                  id: "SVGRepo_tracerCarrier",
                                                  "stroke-linecap": "round",
                                                  "stroke-linejoin": "round",
                                                },
                                                children: [],
                                              },
                                              {
                                                name: "g",
                                                type: "element",
                                                value: "",
                                                parent: null,
                                                attributes: {
                                                  id: "SVGRepo_iconCarrier",
                                                },
                                                children: [
                                                  {
                                                    name: "g",
                                                    type: "element",
                                                    value: "",
                                                    parent: null,
                                                    attributes: {},
                                                    children: [
                                                      {
                                                        name: "g",
                                                        type: "element",
                                                        value: "",
                                                        parent: null,
                                                        attributes: {},
                                                        children: [
                                                          {
                                                            name: "path",
                                                            type: "element",
                                                            value: "",
                                                            parent: null,
                                                            attributes: {
                                                              d: "M0,68.267v375.467h512V68.267H0z M307.2,136.533c18.821,0,34.133,15.312,34.133,34.133S326.021,204.8,307.2,204.8 s-34.133-15.312-34.133-34.133S288.379,136.533,307.2,136.533z M460.8,392.533H51.2V307.2l136.533-136.533L307.2,290.133 l68.267-68.267L460.8,307.2V392.533z",
                                                            },
                                                            children: [],
                                                          },
                                                        ],
                                                      },
                                                    ],
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    name: "div",
                                    type: "element",
                                    value: "",
                                    parent: null,
                                    attributes: {
                                      class: "image__img",
                                    },
                                    children: [
                                      {
                                        name: "svg",
                                        type: "element",
                                        value: "",
                                        parent: null,
                                        attributes: {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          fill: "none",
                                          viewBox: "0 0 140 140",
                                          height: "140",
                                          width: "140",
                                        },
                                        children: [
                                          {
                                            name: "path",
                                            type: "element",
                                            value: "",
                                            parent: null,
                                            attributes: {
                                              stroke: "#000000",
                                              "stroke-linecap": "round",
                                              d: "M47.985 80.10041666666666c0 28.7525 32.63458333333333 43.773333333333326 48.69375 44.2925 28.037916666666664 0 30.304166666666667 -42.670833333333334 30.304166666666667 -70.71166666666666C126.98291666666665 25.646249999999995 102.4975 2.9166666666666665 74.4625 2.9166666666666665 46.42458333333333 2.9166666666666665 23.695 25.646249999999995 23.695 53.68125c0 12.687499999999998 4.652083333333333 24.284166666666668 12.343333333333334 33.182916666666664 1.56625 8.020833333333332 2.7241666666666666 26.389999999999997 -5.147916666666666 35.71458333333333 -7.875 9.324583333333333 -16.23125 13.55375 -19.425 14.504583333333333",
                                              "stroke-width":
                                                "2.9166666666666665",
                                            },
                                            children: [],
                                          },
                                          {
                                            name: "path",
                                            type: "element",
                                            value: "",
                                            parent: null,
                                            attributes: {
                                              stroke: "#000000",
                                              d: "M96.67875 124.39291666666666c-0.6037499999999999 2.674583333333333 2.59 8.44375 5.69625 9.065 3.109166666666667 0.62125 17.529166666666665 2.245833333333333 26.1625 3.1062499999999997",
                                              "stroke-width":
                                                "2.9166666666666665",
                                            },
                                            children: [],
                                          },
                                          {
                                            name: "path",
                                            type: "element",
                                            value: "",
                                            parent: null,
                                            attributes: {
                                              stroke: "#000000",
                                              "stroke-linecap": "round",
                                              d: "M67.25833333333333 31.806249999999995c20.055 3.432916666666667 14.075833333333332 -6.617916666666667 36.971666666666664 -0.4841666666666667",
                                              "stroke-width":
                                                "2.9166666666666665",
                                            },
                                            children: [],
                                          },
                                          {
                                            name: "path",
                                            type: "element",
                                            value: "",
                                            parent: null,
                                            attributes: {
                                              stroke: "#000000",
                                              "stroke-linecap": "round",
                                              d: "M61.454166666666666 41.387499999999996c26.352083333333333 3.432916666666667 18.491666666666664 -6.614999999999999 48.58291666666666 -0.4841666666666667",
                                              "stroke-width":
                                                "2.9166666666666665",
                                            },
                                            children: [],
                                          },
                                          {
                                            name: "path",
                                            type: "element",
                                            value: "",
                                            parent: null,
                                            attributes: {
                                              stroke: "#000000",
                                              "stroke-linecap": "round",
                                              d: "M65.73291666666665 53.26416666666667c2.3916666666666666 -3.138333333333333 9.38 -4.96125 16.499583333333334 -2.9487499999999995",
                                              "stroke-width":
                                                "2.9166666666666665",
                                            },
                                            children: [],
                                          },
                                          {
                                            name: "path",
                                            type: "element",
                                            value: "",
                                            parent: null,
                                            attributes: {
                                              stroke: "#000000",
                                              "stroke-linecap": "round",
                                              d: "M113.80833333333334 53.26416666666667c-2.4791666666666665 -2.762083333333333 -9.4675 -4.54125 -16.499583333333334 -2.9487499999999995",
                                              "stroke-width":
                                                "2.9166666666666665",
                                            },
                                            children: [],
                                          },
                                          {
                                            name: "path",
                                            type: "element",
                                            value: "",
                                            parent: null,
                                            attributes: {
                                              stroke: "#000000",
                                              "stroke-linecap": "round",
                                              d: "M80.02749999999999 104.3175c9.123333333333333 0 13.480833333333333 0.25375 20.959166666666665 0.08166666666666667a5.915 5.915 0 0 1 4.6375 2.0591666666666666l0.4695833333333333 0.5483333333333333",
                                              "stroke-width":
                                                "2.9166666666666665",
                                            },
                                            children: [],
                                          },
                                          {
                                            name: "path",
                                            type: "element",
                                            value: "",
                                            parent: null,
                                            attributes: {
                                              stroke: "#000000",
                                              d: "M83.5975 68.18583333333333c0 2.79125 -7.329583333333333 2.4616666666666664 -12.693333333333333 2.4616666666666664 -5.36375 0 -7.1225000000000005 -4.141666666666667 -6.4750000000000005 -6.346666666666667 2.17875 -7.399583333333332 19.168333333333333 -3.768333333333333 19.168333333333333 3.8850000000000002Z",
                                              "stroke-width":
                                                "2.9166666666666665",
                                            },
                                            children: [],
                                          },
                                          {
                                            name: "path",
                                            type: "element",
                                            value: "",
                                            parent: null,
                                            attributes: {
                                              stroke: "#000000",
                                              d: "M98.07291666666666 68.18583333333333c0 2.79125 7.326666666666666 2.4616666666666664 12.690416666666666 2.4616666666666664 5.366666666666666 0 7.1225000000000005 -4.141666666666667 6.4750000000000005 -6.346666666666667 -2.1758333333333333 -7.399583333333332 -19.165416666666665 -3.768333333333333 -19.165416666666665 3.8850000000000002Z",
                                              "stroke-width":
                                                "2.9166666666666665",
                                            },
                                            children: [],
                                          },
                                          {
                                            name: "path",
                                            type: "element",
                                            value: "",
                                            parent: null,
                                            attributes: {
                                              stroke: "#000000",
                                              "stroke-linecap": "round",
                                              d: "M92.27458333333333 76.08125c3.365833333333333 5.18 10.879166666666666 6.673333333333332 10.879166666666666 10.616666666666667 0 4.800833333333332 -3.8850000000000002 7.647499999999999 -7.7700000000000005 6.095833333333332",
                                              "stroke-width":
                                                "2.9166666666666665",
                                            },
                                            children: [],
                                          },
                                          {
                                            name: "path",
                                            type: "element",
                                            value: "",
                                            parent: null,
                                            attributes: {
                                              stroke: "#000000",
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                              d: "M86.17291666666667 89.14208333333333c-1.0033333333333332 1.9191666666666667 -1.2745833333333332 2.9575 0 4.0775",
                                              "stroke-width":
                                                "2.9166666666666665",
                                            },
                                            children: [],
                                          },
                                          {
                                            name: "path",
                                            type: "element",
                                            value: "",
                                            parent: null,
                                            attributes: {
                                              fill: "#000000",
                                              "fill-rule": "evenodd",
                                              d: "M77.02041666666666 61.76333333333333a4.447916666666666 4.447916666666666 0 1 0 0 8.895833333333332 4.447916666666666 4.447916666666666 0 0 0 0 -8.895833333333332Z",
                                              "clip-rule": "evenodd",
                                              "stroke-width":
                                                "2.9166666666666665",
                                            },
                                            children: [],
                                          },
                                          {
                                            name: "path",
                                            type: "element",
                                            value: "",
                                            parent: null,
                                            attributes: {
                                              fill: "#000000",
                                              "fill-rule": "evenodd",
                                              d: "M110.03708333333331 61.01083333333333a4.447916666666666 4.447916666666666 0 1 0 0 8.895833333333332 4.447916666666666 4.447916666666666 0 0 0 0 -8.895833333333332Z",
                                              "clip-rule": "evenodd",
                                              "stroke-width":
                                                "2.9166666666666665",
                                            },
                                            children: [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            name: "article",
                            type: "element",
                            value: "",
                            parent: null,
                            attributes: {
                              class: "op__article",
                            },
                            children: [
                              {
                                name: "",
                                type: "text",
                                value: "\n\t\t\t\t\t\t\t▲",
                                parent: null,
                                attributes: {},
                                children: [],
                              },
                              {
                                name: "br",
                                type: "element",
                                value: "",
                                parent: null,
                                attributes: {},
                                children: [],
                              },
                              {
                                name: "",
                                type: "text",
                                value: "▲ ▲\n\t\t\t\t\t\t",
                                parent: null,
                                attributes: {},
                                children: [],
                              },
                            ],
                          },
                          {
                            name: "footer",
                            type: "element",
                            value: "",
                            parent: null,
                            attributes: {
                              class: "link__active",
                            },
                            children: [
                              {
                                name: "span",
                                type: "element",
                                value: "",
                                parent: null,
                                attributes: {},
                                children: [
                                  {
                                    name: "",
                                    type: "text",
                                    value: ">>41795613",
                                    parent: null,
                                    attributes: {},
                                    children: [],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        name: "section",
                        type: "element",
                        value: "",
                        parent: null,
                        attributes: {
                          class: "reply",
                        },
                        children: [
                          {
                            name: "div",
                            type: "element",
                            value: "",
                            parent: null,
                            attributes: {
                              class: "reply__detail",
                            },
                            children: [
                              {
                                name: "span",
                                type: "element",
                                value: "",
                                parent: null,
                                attributes: {},
                                children: [
                                  {
                                    name: "",
                                    type: "text",
                                    value: "Info",
                                    parent: null,
                                    attributes: {},
                                    children: [],
                                  },
                                ],
                              },
                              {
                                name: "span",
                                type: "element",
                                value: "",
                                parent: null,
                                attributes: {},
                                children: [
                                  {
                                    name: "",
                                    type: "text",
                                    value:
                                      svgService.getLocaleDate(currentDate),
                                    parent: null,
                                    attributes: {},
                                    children: [],
                                  },
                                ],
                              },
                              {
                                name: "span",
                                type: "element",
                                value: "",
                                parent: null,
                                attributes: {},
                                children: [
                                  {
                                    name: "",
                                    type: "text",
                                    value:
                                      svgService.getSubLocaleTime(currentDate),
                                    parent: null,
                                    attributes: {},
                                    children: [],
                                  },
                                ],
                              },
                              {
                                name: "span",
                                type: "element",
                                value: "",
                                parent: null,
                                attributes: {},
                                children: [
                                  {
                                    name: "",
                                    type: "text",
                                    value: "№41795613",
                                    parent: null,
                                    attributes: {},
                                    children: [],
                                  },
                                ],
                              },
                              {
                                name: "span",
                                type: "element",
                                value: "",
                                parent: null,
                                attributes: {
                                  class: "link",
                                },
                                children: [
                                  {
                                    name: "",
                                    type: "text",
                                    value: "2",
                                    parent: null,
                                    attributes: {},
                                    children: [],
                                  },
                                ],
                              },
                              {
                                name: "svg",
                                type: "element",
                                value: "",
                                parent: null,
                                attributes: {
                                  fill: "#9e9e9e",
                                  height: "10px",
                                  width: "10px",
                                  version: "1.1",
                                  id: "Layer_1",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                  viewBox: "0 0 512 512",
                                  "xml:space": "preserve",
                                },
                                children: [
                                  {
                                    name: "g",
                                    type: "element",
                                    value: "",
                                    parent: null,
                                    attributes: {
                                      id: "SVGRepo_bgCarrier",
                                      "stroke-width": "0",
                                    },
                                    children: [],
                                  },
                                  {
                                    name: "g",
                                    type: "element",
                                    value: "",
                                    parent: null,
                                    attributes: {
                                      id: "SVGRepo_tracerCarrier",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                    },
                                    children: [],
                                  },
                                  {
                                    name: "g",
                                    type: "element",
                                    value: "",
                                    parent: null,
                                    attributes: {
                                      id: "SVGRepo_iconCarrier",
                                    },
                                    children: [
                                      {
                                        name: "g",
                                        type: "element",
                                        value: "",
                                        parent: null,
                                        attributes: {},
                                        children: [
                                          {
                                            name: "g",
                                            type: "element",
                                            value: "",
                                            parent: null,
                                            attributes: {},
                                            children: [
                                              {
                                                name: "path",
                                                type: "element",
                                                value: "",
                                                parent: null,
                                                attributes: {
                                                  d: "M0,0v512h512V0H0z M365.714,356.571H146.286v-18.286c0-50.494,40.934-91.429,91.429-91.429H256 c-30.296,0-54.857-24.56-54.857-54.857c0-30.296,24.561-54.857,54.857-54.857s54.857,24.561,54.857,54.857 c0,30.298-24.561,54.857-54.857,54.857h18.286c50.494,0,91.429,40.934,91.429,91.429V356.571z",
                                                },
                                                children: [],
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            name: "article",
                            type: "element",
                            value: "",
                            parent: null,
                            attributes: {
                              class: "reply__post",
                            },
                            children: [
                              {
                                name: "span",
                                type: "element",
                                value: "",
                                parent: null,
                                attributes: {
                                  class: "reply__to",
                                },
                                children: [
                                  {
                                    name: "",
                                    type: "text",
                                    value:
                                      "\n\t\t\t\t\t\t\t\t>>41795612\n\t\t\t\t\t\t\t",
                                    parent: null,
                                    attributes: {},
                                    children: [],
                                  },
                                ],
                              },
                              {
                                name: "",
                                type: "text",
                                value:
                                  "\n\t\t\t\t\t\t\tStack: JS, TS, HTML/CSS, React,\n\t\t\t\t\t\t\tVue. ",
                                parent: null,
                                attributes: {},
                                children: [],
                              },
                              {
                                name: "br",
                                type: "element",
                                value: "",
                                parent: null,
                                attributes: {},
                                children: [],
                              },
                              {
                                name: "",
                                type: "text",
                                value: "\n\t\t\t\t\t\t\tcontact: ",
                                parent: null,
                                attributes: {},
                                children: [],
                              },
                              {
                                name: "span",
                                type: "element",
                                value: "",
                                parent: null,
                                attributes: {
                                  class: "link__active",
                                },
                                children: [
                                  {
                                    name: "",
                                    type: "text",
                                    value: "yl29qtw6e@mozmail.com",
                                    parent: null,
                                    attributes: {},
                                    children: [],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  return svg;
};

module.exports = getSvgTemplate;
