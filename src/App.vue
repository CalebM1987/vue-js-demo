<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark" sticky>
      <b-navbar-brand href="#">Vue.js Demo</b-navbar-brand>

      <b-navbar-nav class="ml-auto">
      </b-navbar-nav>
    </b-navbar>

    <b-container fluid style="margin-top: 1.5rem;">
      <b-row class="flex-xl-nowrap2">

        <!-- SIDEBAR-->
        <sidebar>
          <template slot="sidebar-body">
            <sidebar-menu></sidebar-menu>
          </template>
        </sidebar>

        <b-col lg="9" md="8">
          <div class="scrollable bd-content">
            <keep-alive :exclude="excludeAlive">
              <router-view class="view" />
            </keep-alive>
          </div>
          
        </b-col>
      </b-row>

    </b-container>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";
import SidebarMenu from "./components/Menu";

export default {
  name: "app",
  components: {
    Sidebar,
    SidebarMenu
  },

  data() {
    return {
      excludeAlive: []
    };
  },

  mounted() {
    hook.app = this;
  }
};
</script>

<style>
.bd-content {
  order: 1;
}

/* .scrollable {
  height: calc(100vh-60px);
  overflow-y: auto;
} */

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}

.fa-btn {
  font-size: 1.5rem;
  cursor: pointer;
}
</style>
