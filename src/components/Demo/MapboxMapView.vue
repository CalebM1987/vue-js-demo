<template>
  <div class="mapbox-container">
    <mapbox
      access-token="pk.eyJ1IjoiZ2lzLWxpcyIsImEiOiJjam02Zmw2cDAzeGNjM3FsaTd0NmlzYTdvIn0.WCNnv0GbbVy624j8Dejs1A"
      :map-options="{
        style: 'mapbox://styles/mapbox/streets-v10',
        zoom: 15,
        center: [-93.265, 44.9778]
      }"

      :scale-control="{
        show: true,
        position: 'top-left',
      }"
      @map-init="mapInitialized"
    />
  </div>
  
</template>

<script>
  import Mapbox from 'mapbox-gl-vue'

  export default {
    name: 'mapbox-map-view',
    components: { Mapbox },

    methods: {
      mapInitialized(map){
        console.log('map initialized: ', map);
        this.map = map;
      }
    }
  }
</script>

<style>
#map {
  width: 100%;
  height: 450px;
}
</style>