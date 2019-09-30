export const intro = {
    "text": [
      "Vue.js is a progressive JavaScript Framework that is approachable, versatile, and performant. Using frameworks make building web applications easier than the traditional development process.  The benefits of choosing Vue over other frameworks are:"
    ],
    "bullets": [
      "<strong>Small Footprint</strong> - The size of the library has varied between 18-21 KB",
      "<strong>Flexible</strong> - Can create components via html, pug, jsx, or in pure JS with render functions.  Vue also supports a rich plugin ecosystem.",
      "<strong>Great Tooling</strong> - The CLI that will help scaffold a project, create a local dev server, and abstracts the webpack build process.",
      "<strong>Two Way Data Binding</strong> - uses MVVM architecture, so when the data updates the UI will automatically re-render based on the Virtual DOM.  Conversely, data can be modeled to html inputs to update the data behind the scenes.",
      `<strong>Great Support Libraries</strong> - <code>Vuex</code> for state management, <code>Vue-Router</code> for Single Page App (SPA) support, and <code>Bootstrap-Vue</code> for a Vue implementation of Bootstrap 4 Components.`
    ]
  }

  
export const helloWorld = {
  "text": [
    `To initialize a <code>Vue</code> instance, a root element is passed in to attach Vue to that domNode.  Because Vue.js is data driven, in almost all Vue or Component instances a <code>data</code> property.`,
    `Once the Vue Instance has been attached, anything within the domNode will become reactive.  In the example below, we will see how the <a href="https://vuejs.org/v2/guide/syntax.html" target="_blank">Template Syntax</a> can be used to dynamically display data.`,
    `Inside the <code>data</code> property, a <code>msg</code> attribute is set.  This will get rendered in the template syntax:<br/><code>&lt;h1&gt;{{ msg }}&lt;/h1&gt;</code>`
  ],
  "bullets": [

  ]
}

export const modelingData = {
  text: [
    `In addition to modeling data to be rendered in the Vue instance, <code>data</code> can also be modeled to <code>input</code> elements.  Because the data binding is two-way, user input will automatically update the <code>data</code> properties.`,
    `To set up the data binding, you must use the <code>v-model</code> <a href="https://012.vuejs.org/guide/directives.html" target="_blank">directive</a>:<br/><code>&lt;input type="text"&gt;`
  ]
}
