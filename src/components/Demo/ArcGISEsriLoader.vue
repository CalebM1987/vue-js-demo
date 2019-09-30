<template>
  
  <demo-content :lang="'javascript'" :code="code" :templateCode="tempCode">
   
    <div id="arcgis-esri-loader" class="mt-4">
      <arcgis-map-view />
    </div>
    
  </demo-content>
  
</template>

<script>
import DemoContent from '../helpers/DemoContent';
import ArcGISMapView from './ArcGISMapView';
import { esriLoaderTemplate, esriLoaderCode } from '../../data/snippets';

console.log('DEMO COMPONENT: ', DemoContent)
console.log('MAP VIEW COMPONENT: ', ArcGISMapView)

export default {
  name: 'arcgis-esri-loader',
  components: { 
    'arcgis-map-view': ArcGISMapView,
    DemoContent
  },

  mounted(){
    console.log('mounted esri-loader example')
  },

  data(){
    return {
      code: esriLoaderCode,
      tempCode: esriLoaderTemplate
    }
  }
}
</script>

