// include routes with lazy loader
export const menu = [
  {
    name: "Vue Demos",
    children: [
      {
        name: "Introduction",
        route: "/home",
        component: ()=> import("../components/lecture/Home")
      }, {
        name: "Getting Started",
        route: "/getting-started",
        component: ()=> import("../components/lecture/GettingStarted"),
        children: [
          {
            name: "Modeling Data",
            route: "/modeling-data",
            component: ()=> import("../components/Demo/ModelingData")
          }
        ]
      }, { 
        name: "Directives",
        route: "/directives",
        component: ()=> import('../components/lecture/Directives'),
        children: [
          {
            name: "Directives Example",
            route: "/directives-example",
            component: ()=> import("../components/Demo/RenderingWithDirectives")
          }
        ]

      }, {
        name: "The Vue Instance",
        route: "/the-vue-instance",
        component: ()=> import("../components/lecture/TheVueInstance")
      }, {
        name: "Components",
        route: "/components",
        component: ()=> import("../components/lecture/Components"),
        children: [
          {
            name: "Counter Example",
            route: "/counter-example",
            component: ()=> import("../components/Demo/CounterExample")
          }
        ]
      }, {
        name: "Single File Components",
        route: "/single-file-components",
        component: ()=> import("../components/lecture/SingleFileDescription"),
        children: [
          {
            name: "Single Vile Example",
            route: "/single-file-example",
            component: ()=> import("../components/Demo/SingleFileExample")
          }
        ]
      }, {
        name: "Vue Router",
        route: "/vue-router",
        component: ()=> import('../components/lecture/VueRouterInfo'),
        children: [
          {
            name: "Router Example",
            route: "/router-example",
            component: ()=> import("../components/Demo/VueRouterExample")
          }
        ]
      }
    ]
  }, {
    name: "Mapping",
    children: [
      {
        name: "Using Maps",
        route: "/using-maps",
        component: ()=> import("../components/lecture//UsingMaps")
      }, {
        name: "ArcGIS esri-loader",
        route: "/arcgis-esri-loader",
        component: ()=> import("../components/Demo/ArcGISEsriLoader")
      }
    ]
  }
]