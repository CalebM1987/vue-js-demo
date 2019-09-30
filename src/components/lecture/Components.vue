<template>
  <b-container fluid class="components-overview">
    <b-row>
      <b-col class="mx-auto" md="12" xl="10">

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
          <p>An Application can be made up of multiple components and they can even be nested inside other components.</p>
          <b-img src="../../../assets/nested-components.png" height="300" />
        </div>

      </b-col>
    </b-row>

    <b-row class="mt-5">
      <b-col class="mx-auto" md="12" xl="10">
        <info-group title="Props and Events" :info="propsAndEvents"></info-group>
      </b-col>
    </b-row>
    
    
  </b-container>
  
</template>

<script>
import DemoContent from '../helpers/DemoContent';
import ButtonCounter from '../Demo/ButtonCounter';
import InfoGroup from '../helpers/InfoGroup';
import { componentsTemplate, componentsCode } from '../../data/snippets';
import { propsAndEvents } from '../../data/lecture';


export default {
  name: 'components',

  components: {
    DemoContent,
    ButtonCounter,
    InfoGroup
  },

  data(){
    return {
      components_src: 'https://vuejs.org/v2/guide/components.html',
      propsAndEvents
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

