(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a54ae"],{"09a0":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-v-column",{staticClass:"mt-3"},[a("b-card",{staticClass:"mt-2 mb-4",attrs:{title:"The Vue Instance","img-src":"./assets/vue-reactivity.png"}},[a("p",{staticClass:"card-text"},[e._v("Properties stored in Vue.js are "),a("i",[e._v("reactive")]),e._v(", meaning that whenever the "),a("code",[e._v("'msg'")]),e._v(" property in the "),a("router-link",{attrs:{tag:"a",to:"/getting-started"}},[e._v("Getting Started")]),e._v(" example is changed, the DOM will automatically update by following the "),a("a",{attrs:{href:"https://pawelgrzybek.com/the-observer-pattern-in-javascript-explained/",target:"_blank"}},[e._v("Observer")]),e._v(" Pattern.")],1),a("p",{staticClass:"card-text"},[e._v("Aside from the "),a("code",[e._v("data")]),e._v(" property that we have seen in all the prior examples, there are many other properties that can be set in a Vue Instance such as:")]),a("ul",[a("li",[a("code",[e._v("data")]),e._v(" - this must be a function so that each instance can maintain its own copy of the underlying data")]),a("li",[a("code",[e._v("methods")]),e._v(" - functions that handle logic for working with data")]),a("li",[a("code",[e._v("computed")]),e._v(" - properties are functions that dynamically update based in changes to the data or other computed properties.  Whenever properties used in the computed property are changed, the function will automatically recalculate the appropriate value.")]),a("li",[a("code",[e._v("watch")]),e._v(" - properties can also be "),a("strong",[e._v("watched")]),e._v(" to assign callback functions to handle any necessary logic when something changes.")]),a("li",[a("code",[e._v("filters")]),e._v(" - will take raw data values and format them for a nicer display where the syntax is "),a("code",[e._v(e._s(e.filterSyntax))]),e._v(".  An example would be to take raw milliseconds and format it as a human readable date string:")]),a("ul",[a("li",{staticStyle:{"font-size":"90%"}},[a("code",[e._v(e._s(e.filterString))])])])]),a("h4",{staticClass:"mt-4"},[e._v("Lifecycle Hooks")]),a("hr"),a("p",{staticClass:"card-text mt-3"},[e._v("In addition to the above properties, each instance also has Lifecycle hooks where code can be executed for custom behavior for the various stages of the instance creation and destruction. See the image below:")]),a("div",{staticClass:"text-center"},[a("b-img",{attrs:{src:"./assets/lifecycle.png",width:"650"}})],1)])],1)},s=[],n={name:"the-vue-instance",data:function(){return{filterString:"<h4>Current Time: {{ dateInMilliseconds | prettyDateTime }}</h4>;",filterSyntax:"{{ dataProperty | filterFunction }}"}}},r=n,o=a("2877"),c=Object(o["a"])(r,i,s,!1,null,null,null);t["default"]=c.exports}}]);