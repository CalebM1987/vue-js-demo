<template>
  <b-container fluid>

    <b-row>
      <b-col class="mx-auto" md="12" xl="10">
        <info-group title="Using Maps in Vue" :info="mappingInfo">

        </info-group>

      </b-col>
    </b-row>

    <b-row>
      <b-col class="mx-auto" md="12" xl="10">
        <info-group title="Mapbox-GL" :info="mapboxGLNotes">
          <template slot="content">
            <code-container label="vue.config.js" :code="vueConfigMapbox" lang="javascript"></code-container>
          </template>
        </info-group>

      </b-col>
    </b-row>

    <b-row>
      <b-col class="mx-auto" md="12" xl="10">
        <info-group title="ArcGIS JavaScript API" :info="arcgisNotes">

        </info-group>

      </b-col>
    </b-row>
  </b-container>
  
</template>
  

<script>
import CodeContainer from '../helpers/CodeContainer';
import InfoGroup from '../helpers/InfoGroup';
import InfoContent from '../helpers/InfoContent';
import { mappingInfo, mapboxGLNotes, arcgisNotes } from '../../data/lecture';
import { vueConfigMapbox } from '../../data/snippets';

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
      vueConfigMapbox
    }
  }
}
</script>

