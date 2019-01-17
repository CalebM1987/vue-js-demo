<template>
  <b-container class="components-overview">
    <h2>Vue Components</h2>
    <hr>

    <div class="content">
      <p class="mt-3 mb-3">Vue <a :href="components_src" target="_blank">Components</a> provide a way to create reusable pieces of UI that can have their own built in behavior.  Data can be passed down from parent components to child components, and events can be emitted from the child to the parent.</p>

      <p class="mt-4">From the docs:</p>
      <blockquote :cite="components_src" class="quote">
        <p>Since components are reusable Vue instances, they accept the same options as <code>new Vue</code>, such as <code>data</code>, <code>computed</code>, <code>watch</code>, <code>methods</code>, and lifecycle hooks. The only exceptions are a few root-specific options like <code>el</code>.</p>
      </blockquote>

      <h3 class="mt-4">Organizing Components</h3>
      <hr>
      <p>An Application can be made up of multiple components and they can even be nested</p>
      <b-img src="../../../assets/nested-components.png" height="350" />
    </div>
    
  </b-container>
  
</template>

<script>
import DemoContent from '../DemoContent';
import ButtonCounter from './ButtonCounter';
import { componentsTemplate, componentsCode } from '../../../data/snippets';


export default {
  name: 'components',

  components: {
    DemoContent,
    ButtonCounter
  },

  data(){
    return {
      components_src: 'https://vuejs.org/v2/guide/components.html',
    }
  },

}
</script>

<style>
.quote p {
  padding: 1rem;
  background-color: #F8F8F8;
  color: #787878;
}
</style>


