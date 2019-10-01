<template>
  <!--<div class="sidebar-container" md="3" xl="2">-->
    <b-col :cols="cols" class="sidebar-container mb-4">
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

  props: {
    cols: {
      type: Number,
      default: 3
    }
  }
};
</script>

<style scoped>
.sidebar-container {
  order: 0;
  /* flex: 0 1 320px; */
  position: sticky;
  position: -webkit-sticky;
  margin-top: 1rem;
  z-index: 1000;
  height: calc(100vh - 72px);
  overflow-y: auto;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.sidebar-body {
  overflow-y: auto;
}
</style>