export const gettingStartedTemplate = `<div id="app" class="text-center">
  <button class="btn mt-4" @click="reset">Clear Content</b-button>
  <input type="text" v-model="message" class="mt-3 mb-3" placeholder="enter message here"/>
  <div>Your message is: "{{ message }}"</div>
</div>`


export const gettingStartedCode = `const app = new Vue({
  el: '#app', // selector for vue instance to mount

  data(){
    return {
      message: ''
    }
  },

  methods: {
    reset(){
      this.message = '';
    }
  }
})`

export const componentsTemplate = `<div id="components-demo">
<button-counter></button-counter>
</div>`


export const componentsCode = `// Define a new component called button-counter
Vue.component('button-counter', {
  data() {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

// now initialize vue instance 
const app =  new Vue({ el: '#components-demo' })`