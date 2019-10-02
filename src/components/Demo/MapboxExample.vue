<template>
  <demo-content :lang="'javascript'" :code="mapboxScript" :templateCode="mapboxTemplate">
    <mapbox-map-view></mapbox-map-view>
  </demo-content>
</template>

<script>
  import DemoContent from '../helpers/DemoContent';
  import MapboxMapView from './MapboxMapView';
  import { mapboxTemplate, mapboxScript } from '../../data/snippets';

  export default {
    name: 'mapbox-example',

    components: {
      DemoContent,
      MapboxMapView
    },

    data(){
      return {
        mapboxTemplate,
        mapboxScript
      }
    },

  }

</script>

<style>

</style>