<template>
  <div id="viewDiv"></div>
</template>

<script>
import { loadModules, loadCss } from 'esri-loader';

// load the css from the esri loader;
loadCss('https://js.arcgis.com/4.10/esri/css/main.css');

export default {
  name: 'arcgis-map-view',

  data(){
    return {
      map: null,
      view: null
    }
  },

  async mounted(){
    console.log('mounted map view')
    try {
      const [esriMap, MapView] = await loadModules(['esri/Map', 'esri/views/MapView']);

      // initialize map and view
      this.map = new esriMap({
        basemap: "topo"
      });

      this.view = new MapView({
        container: "viewDiv",
        map: this.map,
        zoom: 16,
        center: [-93.265, 44.9778]
      });

      this.view.when(()=>{
        console.log('map view has loaded');
      })

    } catch(err){
      alert('Could not load the ArcGIS JavaScript api!');
    };
    
  }
  
}
</script>

<style>
  #viewDiv{
    height: 400px;
    width: 100%;
  }
</style>


