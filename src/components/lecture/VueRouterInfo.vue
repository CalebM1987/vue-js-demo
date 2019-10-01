<template>
  <b-container fluid>
    <b-row class="mt-3">
      <b-col md="12" xl="10" class="mx-auto">
        <info-group title="The Vue Router" :info="vueRouterNotes">

          <template slot="content">
            <p class="card-text">Because the <code>VueRouter</code> is a plugin, it must be registered like this:</p>
            <code-container :code="routerSetup" lang="javascript" label="router.js"></code-container>

            <p class="card-text mt-2">And when you instantiate Vue:</p>
            <code-container :code="mainVueRouter" lang="javascript" label="main.js"></code-container>
          </template>
        </info-group>
      </b-col>
    </b-row>

    <b-row class="mt-4">
      <b-col class="mx-auto" md="12" xl="10">
        <info-group title="Navigation Guards" :info="navigationGuardNotes"></info-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import CodeContainer from '../helpers/CodeContainer';
  import InfoGroup from '../helpers/InfoGroup';
  import { vueRouterNotes, navigationGuardNotes } from '../../data/lecture';
  import { routerSetup, mainVueRouter } from '../../data/snippets';

  export default {
    name: 'vue-router-info',

    components: {
      CodeContainer,
      InfoGroup
    },

    data(){
      return {
        vueRouterNotes,
        routerSetup,
        mainVueRouter,
        navigationGuardNotes
      }
    },

    methods: {

    }

  }

</script>

<style>

</style>