import { STATUS_CODES } from "http";

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

export const vFor = {
  text: [
    `By modeling data to form inputs, we have already used <a href="https://012.vuejs.org/guide/directives.html" target="_blank">directives</a>, namely the <code>v-model</code> directive.  However, Vue has many builtin directives that can make your life easier.  These are prefixed with <code>'v-'</code> to help identify Vue specific attributes. One is the <code>v-for</code> directive.`,
    `Any time an element needs to be repeated by an <code>array</code> within the data, the <code>v-for</code> directive can be used to render a list.`  
  ],
  bullets: [
    `<strong>tip</strong> - you can set a unique <code>key</code> attribute for each element, which are set to keep track of the elements so they can be reused or reordered.`
  ]

}

export const vIf = {
  text: [
    `Elements can also be conditionally rendered with the following directives:`,
  ],
  bullets: [
    `<code>v-if</code> - block will only be rendered if the directive's expression returns a truthy value.`,
    `<code>v-else-if</code> - creates an <code>else if</code> block that is displayed if the directive's expression returns a truthy value.`,
    `<code>v-else</code> - block will only be rendered if none of the prior <code>v-if</code> or <code>v-else-if</code> expressions are truthy, good for setting default content.`,
    `<code>v-show</code> - block will only show when condition is met, different from <code>v-if</code> in that a <code>v-show</code> element exists in the DOM, but its visibility is controlled by css.`
  ]
}

export const vBind = {
  text: [
    `The <code>v-bind</code> directive can be used to add dynamic behavior to your markup for common html attributes.  Some examples are:`
  ],
  bullets: [
    `<strong>href</strong> - <code>v-bind:href="url"</code> or you can use the shorthand <code>:href="url"</code>`,
    `<strong>class</strong> - <code>v-bind:class="{ 'active': isActive, 'text-danger': hasError }"</code> or shorthand <code>:class="dynamicClass"</code>`,
    `<strong>disabled</strong> - <code>&lt;button :disabled="someCondition"&gt;Click Me&lt;/button&gt;</code>`,
    `<strong>innerHTML</strong> - <code>v-html="dynamicHtml"</code> will render dynamic html as the <code>innerHTML</code>`
  ]
}

export const propsAndEvents = {
  text: [
    `Data can easily be passed to and from components.  The rule of thumb with Vue, is pass data down to child components through <code>props</code>, and send data back up to the parent via <code>events</code>.`

  ],
  bullets: [

  ]
}
