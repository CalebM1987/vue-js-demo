<template>
  <b-container fluid>
    <b-v-column class="mt-3">
      <info-group :title="'Hello World Example'" :info="helloWorld">
        <code-container :code="helloWorldExample" :label="'HelloWorld.html'"></code-container>
      </info-group>
    </b-v-column>

    <b-v-column class="mt-3">
        <info-group :title="'Modeling Data'" :info="modelingData">
          <code-container :code="modelExampleTemplate"></code-container>
          <code-container :code="modelExampleCode" :lang="'javascript'"></code-container>
          <p class="mt-3 card-text">Vue also supports more complex data binding out of the box for elements like <code>&lt;select&gt;</code>, <code>checkbox</code>, and <code>radio</code> inputs to name a few.  If the <code>multiple</code> attribute is set, it will also automatically bind to an <code>array</code>.</p>
        </info-group>
    </b-v-column>

  </b-container>
</template>

<script>
  import CodeContainer from '../helpers/CodeContainer';
  import { helloWorldExample, modelExampleTemplate, modelExampleCode } from '../../data/snippets';
  import { helloWorld, modelingData } from "../../data/lecture";
  import InfoGroup from '../helpers/InfoGroup';

  export default {
    name: 'getting-started',

    components: {
      CodeContainer,
      InfoGroup
    },

    data(){
      return {
        helloWorldExample,
        helloWorld,
        modelingData,
        modelExampleTemplate,
        modelExampleCode
      }
    },

    methods: {

    }

  }

</script>

<style>

</style>