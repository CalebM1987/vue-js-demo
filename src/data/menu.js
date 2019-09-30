// include routes with lazy loader
export const menu = [
  {
    "name": "Vue Demos",
    "children": [
      {
        "name": "Introduction",
        "route": "/home",
        "component": ()=> import("../components/Demo/HelloWorld")
      }, {
        "name": "Getting Started",
        "route": "/getting-started",
        "component": ()=> import("../components/Demo/GettingStarted"),
        "children": [
          {
            "name": "Modeling Data",
            "route": "/modeling-data",
            "component": ()=> import("../components/Demo/Examples/ModelingData")
          }
        ]
      }, { 
        name: "Directives",
        route: "/directives",
        component: ()=> import('../components/Demo/Directives'),
        children: [
          {
            "name": "Directives Example",
            "route": "/directives-example",
            "component": ()=> import("../components/Demo/Examples/RenderingWithDirectives")
          }
        ]

      }, {
        "name": "Components",
        "route": "/components",
        "component": ()=> import("../components/Demo/Examples/Components"),
        "children": [
          {
            "name": "Counter Example",
            "route": "/counter-example",
            "component": ()=> import("../components/Demo/Examples/CounterExample")
          }
        ]
      }, {
        "name": "Single File Components",
        "route": "/single-file-components",
        "component": ()=> import("../components/Demo/SingleFileDescription"),
        "children": [
          {
            "name": "Single Vile Example",
            "route": "/single-file-example",
            "component": ()=> import("../components/Demo/Examples/SingleFileExample")
          }
        ]
      }, {
        "name": "Vue Router",
        "route": "/vue-router",
        "children": [
          {
            "name": "Router Example",
            "route": "/router-example",
            "component": ()=> import("../components/Demo/Examples/VueRouterExample")
          }
        ]
      }, {
        "name": "The Vue Instance",
        "route": "/the-vue-instance",
        "component": ()=> import("../components/Demo/TheVueInstance")
      }
    ]
  }, {
    "name": "Mapping",
    "children": [
      {
        "name": "Mapping Demos",
        "route": "mapping-examples",
        "component": ()=> import("../components/Demo/Examples/MappingExample")
      }, {
        "name": "ArcGIS esri-loader",
        "route": "/arcgis-esri-loader",
        "component": ()=> import("../components/Demo/Examples/ArcGISEsriLoader")
      }
    ]
  }
]