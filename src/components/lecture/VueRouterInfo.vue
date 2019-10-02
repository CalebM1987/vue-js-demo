<template>
  <b-container fluid>
    <b-v-column class="mt-3">
      <info-group title="The Vue Router" :info="vueRouterNotes">

        <template slot="content">
          <p class="card-text">Because the <code>VueRouter</code> is a plugin, it must be registered like this:</p>
          <code-container :code="routerSetup" lang="javascript" label="router.js"></code-container>

          <p class="card-text mt-2">And when you instantiate Vue:</p>
          <code-container :code="mainVueRouter" lang="javascript" label="main.js" class="mb-3"></code-container>

          <h5 class="mt-3">Lazy Loading Routes</h5>
          <hr>
          <info-content :info="lazyLoadRoutes"></info-content>

          <code-container :code="lazyLoadRoute" lang="javascript"></code-container>
        </template>
      </info-group>
    </b-v-column>

    <b-v-column class="mt-3">
       <info-group title="Navigation Guards" :info="navigationGuardNotes"></info-group>
    </b-v-column>
  </b-container>
</template>

<script>
  import CodeContainer from '../helpers/CodeContainer';
  import InfoGroup from '../helpers/InfoGroup';
  import InfoContent from '../helpers/InfoContent';
  import { vueRouterNotes, navigationGuardNotes, lazyLoadRoutes } from '../../data/lecture';
  import { routerSetup, mainVueRouter, lazyLoadRoute } from '../../data/snippets';
  console.log(lazyLoadRoutes)
  export default {
    name: 'vue-router-info',

    components: {
      CodeContainer,
      InfoGroup,
      InfoContent
    },

    data(){
      return {
        vueRouterNotes,
        routerSetup,
        mainVueRouter,
        navigationGuardNotes,
        lazyLoadRoute,
        lazyLoadRoutes
      }
    },

    methods: {

    }

  }

</script>

<style>

</style>