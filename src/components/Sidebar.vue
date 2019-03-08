<template>
  <!--<div class="sidebar-container">-->
    <b-col col md="3" class="sidebar-container mb-4">
      <div class="sidebar-body">
        <slot name="sidebar-body">
          <p>test sidebar</p>
        </slot>
      </div>
    </b-col>


  <!--</div>-->
</template>

<script>
  export default {
    name: "sidebar",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>

  .sidebar-container {
    flex: 0 1 320px;
    position: sticky;
    position: -webkit-sticky;
    top: 4px;
    z-index: 1000;
    height: calc(100vh - 6rem);
    border-right: 1px solid rgba(0,0,0,.1);
  }

  .sidebar-body {
    overflow-y: auto;
  }

</style>