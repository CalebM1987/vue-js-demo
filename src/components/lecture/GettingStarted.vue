<template>
  <b-container fluid class="mt-5">
    <b-row>
      <b-col md="12" xl="10" class="mx-auto">
        <info-group :title="'Hello World Example'" :info="helloWorld">
          <code-container :code="helloWorldExample" :label="'HelloWorld.html'"></code-container>
        </info-group>
      </b-col>

    </b-row>

     <b-row class="mt-5">
      <b-col md="12" xl="10" class="mx-auto">
        <info-group :title="'Modeling Data'" :info="modelingData">
          <code-container :code="modelExampleTemplate"></code-container>
          <code-container :code="modelExampleCode" :lang="'javascript'"></code-container>
        </info-group>
      </b-col>
     </b-row>

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