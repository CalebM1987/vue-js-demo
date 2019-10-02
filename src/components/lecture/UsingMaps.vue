<template>
  <b-container fluid>

    <b-v-column>
      <info-group title="Using Maps in Vue" :info="mappingInfo">

      </info-group>

    </b-v-column>

    <b-v-column class="mt-3">
      <info-group title="Mapbox-GL" :info="mapboxGLNotes">
        <template slot="content">
          <code-container label="vue.config.js" :code="vueConfigMapbox" lang="javascript"></code-container>
        </template>
      </info-group>

    </b-v-column>

    <b-v-column class="mt-3">
      <info-group title="ArcGIS JavaScript API" :info="arcgisNotes">

        <template slot="content">
          <p class="mt-3">Using the <code>esri-loader</code> has a familiar syntax to the normal AMD loader:</p>
          <code-container :code="esriLoaderPromise" lang="javascript"></code-container>

          <p class="mt-3">However, a cleaner syntax can be achived by using <code>async</code>/<code>await</code>:</p>
          <code-container :code="esriLoaderAsync" lang="javascript"></code-container>
        </template>
      </info-group>
    </b-v-column>

  </b-container>
  
</template>
  

<script>
import CodeContainer from '../helpers/CodeContainer';
import InfoGroup from '../helpers/InfoGroup';
import InfoContent from '../helpers/InfoContent';
import { mappingInfo, mapboxGLNotes, arcgisNotes } from '../../data/lecture';
import { vueConfigMapbox, esriLoaderPromise, esriLoaderAsync } from '../../data/snippets';

export default {
  name: 'using-maps',

  components: {
    CodeContainer,
    InfoGroup,
    InfoContent
  },
  mounted(){
    console.log('mounted using maps')
  },

  data(){
    return {
      mappingInfo,
      mapboxGLNotes,
      arcgisNotes,
      vueConfigMapbox,
      esriLoaderPromise,
      esriLoaderAsync
    }
  }
}
</script>

