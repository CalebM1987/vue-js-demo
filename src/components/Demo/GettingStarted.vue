<template>
  <div class="mt-5">

    <info-group :title="'Hello World Example'" :info="helloWorld">
      <code-container :code="helloWorldExample" :label="'HelloWorld.html'"></code-container>
    </info-group>

    <info-group :title="'Modeling Data'" :info="modelingData" class="mt-5">
      <code-container :code="modelExampleTemplate"></code-container>
      <code-container :code="modelExampleCode" :lang="'javascript'"></code-container>
    </info-group>

  </div>
</template>

<script>
  import CodeContainer from './CodeContainer';
  import { helloWorldExample, modelExampleTemplate, modelExampleCode } from '../../data/snippets';
  import { helloWorld, modelingData } from "../../data/lecture";
  import InfoGroup from '../InfoGroup';
  console.log('hello world lecture: ', helloWorld)

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