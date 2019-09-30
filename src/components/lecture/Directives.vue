<template>
  <b-container fluid>
    <b-row class="mt-3">
      <b-col md="12" xl="10" class="mx-auto">
        <h2>Using Vue Directives</h2>
        <hr>
        <info-group :info="vFor" :title="'List Rendering (<code>v-for</code>)'" class="mt-5">
          <code-container :code="listExample" :lang="'javascript'"></code-container>

          <div class="list-preview mt-4" style="font-size: 1.15rem;">
            <p>the above code will render the following:</p>
            <ul>
              <li v-for="fruit in fruits" :key="fruit">{{ fruit }}</li>
            </ul>
          </div>
        </info-group>

      </b-col>
    </b-row>

    <b-row class="mt-3">
      <b-col md="12" xl="10" class="mx-auto">
        <info-group title="Conditional Rendering" :info="vIf"></info-group>
      </b-col>
    </b-row>

    <b-row class="mt-3">
      <b-col md="12" xl="10" class="mx-auto">
        <info-group title="The <code>v-bind</code> Directive" :info="vBind"></info-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import InfoGroup from '../helpers/InfoGroup';
  import CodeContainer from '../helpers/CodeContainer';
  import { vFor, vIf, vBind } from '../../data/lecture';
  import { listExample } from '../../data/snippets';

  export default {
    name: 'directives',

    components: {
      InfoGroup,
      CodeContainer
    },

    data(){
      return {
        vFor,
        vIf,
        vBind,
        listExample,
        fruits: ['Apple', 'Banana', 'Orange', 'Strawberry']
      }
    },

    methods: {

    }

  }

</script>

<style>

</style>