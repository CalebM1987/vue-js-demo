<template>
  <b-container fluid>
    <b-v-column class="mt-3">
      <h2>Using Vue Directives</h2>
      <hr>
      <info-group :info="vFor" :title="'List Rendering (<code>v-for</code>)'" class="mt-5">
        <code-container :code="listExample" :lang="'javascript'" label="index.html"></code-container>

        <div class="list-preview mt-4" style="font-size: 1.15rem;">
          <p>the above code will render the following:</p>
          <ul>
            <li v-for="fruit in fruits" :key="fruit">{{ fruit }}</li>
          </ul>
        </div>
      </info-group>

    </b-v-column>

    <b-v-column class="mt-3">
      <info-group title="Conditional Rendering" :info="vIf"></info-group>
    </b-v-column>

    <b-v-column class="mt-3">
      <info-group title="The <code>v-bind</code> Directive" :info="vBind"></info-group>
    </b-v-column>

    <b-v-column class="mt-3">
        <info-group title="Events" :info="vOn">

        </info-group>
    </b-v-column>

    <b-v-column class="mt-3">
      <info-group title="Modifiers" :info="eventModifiers"></info-group>

      <p class="card-text">The below examples are taken directly from the <a href="https://vuejs.org/v2/guide/events.html#Event-Modifiers" target="_blank">vue docs</a>:</p>

      <code-container :code="eventModifiersSnippet" lang="html"></code-container>

      <info-content :info="keyModifiers" class="mt-4"></info-content>
    </b-v-column>
  </b-container>
</template>

<script>
  import InfoGroup from '../helpers/InfoGroup';
  import InfoContent from '../helpers/InfoContent';
  import CodeContainer from '../helpers/CodeContainer';
  import { vFor, vIf, vBind, vOn, eventModifiers, keyModifiers } from '../../data/lecture';
  import { listExample, eventModifiersSnippet } from '../../data/snippets';

  export default {
    name: 'directives',

    components: {
      InfoGroup,
      CodeContainer,
      InfoContent
    },

    data(){
      return {
        vFor,
        vIf,
        vOn,
        vBind,
        keyModifiers,
        eventModifiers,
        eventModifiersSnippet,
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