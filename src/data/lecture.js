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
    `href - <code>&lt;a v-bind:href="url"&gt;Dynamic Link&lt;/a&gt;</code> or you can use the shorthand <code>:href="url"</code>`,
    `class - <code>&lt;button v-bind:class="{ 'active': isActive, 'text-danger': hasError }"&gt;Click Me&lt;/button&gt;</code> or shorthand <code>:class="dynamicClass"</code>`,
    `disabled - <code>&lt;button :disabled="someCondition"&gt;Click Me&lt;/button&gt;</code>, using shorthand <code>:disabled</code>`,
    `innerHTML - <code>&lt;div v-html="dynamicHtml"&gt;&lt;/div&gt;</code> will render dynamic html as the <code>innerHTML</code>`
  ]
}

export const vOn = {
  text: [
    `Native html events also use directives to handle events that are propogated from user interaction.  The <code>v-on</code> directive accepts an event name to capture along with a callback to handle the event.  The event handler callback will take the event as the first parameter.`,
    `The syntax is either <code>v-bind:event="eventHandler"</code> or the shorthand <code>@event="eventHandler"</code>.  Some examples can be found below:`
  ],

  bullets: [
    `click - <code>&lt;button v-on:click="clickHandler"&gt;Click Me&lt;/button&gt;</code>. Note, you can also use the shorthand <code>@click="clickHandler"</code>`,
    `keydown - <code>&lt;input type="text" @keydown="handleKeydown"&gt;</code>`,
    `submit - <code>&lt;form @submit="submitForm"&gt;</code>`,
  ]
}

export const eventModifiers = {
  text: [
    'While Vue provides some very convenient event handling through the <code>v-on</code> directive, there are times where the events need to be modified to prevent default behavior or stop an event from bubbling up or going down domNodes.  For these cases, Vue provides <a href="https://vuejs.org/v2/guide/events.html#Event-Modifiers" target="_blank">Event Modifiers</a>.'
  ],
  bullets: [
    `<code>.stop</code> - same as <code>event.stopPropogation()</code>`,
    `<code>.prevent</code> - same as <code>event.preventDefault()</code>`,
    `<code>.capture</code> - handle event here before inner elements`,
    `<code>.self</code> - only trigger if event.target is element itself`,
    `<code>.once</code> - only handle event the first time`,
    `<code>.passive</code> - indicates that the event handler will never call <code>preventDefault()</code>`
  ]
}

export const keyModifiers = {
  text: [
    `There are other modifiers too that come out of the box with vue, such as <a href="https://vuejs.org/v2/guide/events.html#Key-Modifiers" target="_blank">key modifiers</a>, which have helpers for when the user hits certain keys on the keyboard.  Below are some <code>keyup</code> modifiers:`
  ],

  bullets: [
    `<code>.enter</code>`,
    `<code>.tab</code>`,
    `<code>.esc</code>`,
    `<code>.space</code>`,
    `<code>.up</code> - up arrow key`,
    `<code>.down</code> - down arrow key`,
    `<code>.left</code> - left arrow key`,
    `<code>.right</code> - right arrow key`,
  ]
}

export const propsAndEvents = {
  text: [
    `Data can easily be passed to and from components.  The basic rule of thumb with Vue, is pass data down to child components through <code>props</code>, and send data back up to the parent via <code>events</code>.`

  ],
  bullets: [
   
  ]
}

export const vueRouterNotes = {
  text: [
    `The <a href="https://router.vuejs.org/" target="_blank">Vue-Router</a> is a plugin that assists with setting up Single Page Applications (SPA's).  The plugin includes a <code>&lt;router-view/&gt;</code> component where all routes will be rendered and navigated programmatically, or you can use <code>&lt;router-link&gt;</code> components to create clickable links that will navitage to different routes.  It allows for:`
  ],

  bullets: [
    'nested route/view mapping',
    'component based router config - a route will render a single component',
    'can pass params, uri query, or wildcards to match routes',
    'navigation can use transitions',
    `HTML5 history mode - uses the <a href="https://developer.mozilla.org/en-US/docs/Web/API/History_API" target="_blank">History API</a>`,
    'can specify a default route when no matching route is found (i.e. page not found content)'
  ]
}


export const navigationGuardNotes = {
  text: [
    `<a href="https://router.vuejs.org/guide/advanced/navigation-guards.html" target="_blank">Navigation Gaurds</a> are an extremely useful feature that will prevent or redirect navigation between routes.  One example is if the user is filling out form based data and attempts to navigate away via the back button or another link, a navigation guard can pause navigation and ask if the user wants to save their progress before leaving the page. The in-component guards that you can hook into within a component are:`
  ],

  bullets: [
    `<code>beforeRouteEnter</code> - called before the route renders the component, do <strong>not</strong> have scope to component via <code>this</code> because it hasn't been created yet`,
    `<code>beforeRouteUpdate</code> - called when the component that renders this component has changed, such as a dynamic route with path being <code>'/users/:id'</code> changes from <code>'/users/1'</code> to <code>'/users/2'</code>`,
    `<code>beforeRouteLeave</code> - called before navigating away from this route, here is where you could prompt a user to save their progress before moving on`
  ]
}

export const mappingInfo = {
  text: [
    `There are numerous JavaScript libraries for viewing data in maps.  Some have more powerful capabilities beyond just displaying data.  Some examples are:`
  ],

  bullets: [
    `<a href="https://docs.mapbox.com/mapbox-gl-js/api/" target="_blank">Mapbox-GL</a>`,
    `<a href="https://developers.arcgis.com/javascript/" target="_blank">ArcGIS JavaScript API</a>`,
    `<a href="https://developers.google.com/maps/documentation/javascript/tutorial" target="_blank">Google Maps</a>`,
    `<a href="https://leafletjs.com/" target="_blank">Leaflet</a>`,
    'and many more...'
  ]
}

export const mapboxGLNotes = {
  text: [
    `<code>Mapbox-GL JS</code> is a JavaScript API that supports very rich data rendering capabilities, and also supports vector tiles. As the name suggests, it is built with <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API" target="_blank">WebGL</a>.`,
    `For Vue.js, you can use <a href="https://github.com/phegman/vue-mapbox-gl" target="_blank">mapbox-gl-vue</a> available, which includes methods to get hooks into the map object's lifecycle. The only extra thing you need to do to get it to work when building Vue apps with Node.js is to shim <code>mapbox-gl</code> as a <a href="https://webpack.js.org/" target="_blank">Webpack</a> Plugin</a></code>).  This can be done in a <code>webpack.config.js</code> file, or the <code>vue.config.js</code> file if using the <code>@vue/cli</code>:`
  ]
}

export const arcgisNotes = {
  text: [

  ]
}