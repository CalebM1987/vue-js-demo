<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark" sticky>
      <b-navbar-brand href="#">Vue.js Demo</b-navbar-brand>

      <b-navbar-nav class="ml-auto">
      </b-navbar-nav>
    </b-navbar>

    <!-- SIDEBAR-->
    <b-container fluid style="margin-top: 1.25rem;">
      <b-row>
        <sidebar ref="sidebar" :cols="sidebarCols">
          <template slot="sidebar-body">
            <sidebar-menu></sidebar-menu>
          </template>
        </sidebar>

        <!-- md="9" xl="10" -->
        <b-col :cols="12 - sidebarCols" style="order: 1;">
          <b-container fluid class="main-container">
            <b-row class="flex-xl-nowrap2">

              <b-col>
                <div class="scrollable bd-content">
                  <keep-alive :exclude="excludeAlive">
                    <router-view class="view" />
                  </keep-alive>
                </div>
                
              </b-col>
            </b-row>

          </b-container>
        </b-col>

      </b-row>
    </b-container>
    
  </div>
</template>

<script>
import Sidebar from "./components/ui/Sidebar";
import SidebarMenu from "./components/ui/Menu";

export default {
  name: "app",
  components: {
    Sidebar,
    SidebarMenu
  },

  data() {
    return {
      excludeAlive: [],
      resizer: null,
      screenSize: {
        height: window.innerHeight,
        width: window.innerWidth
      }
    };
  },

   mounted(){
    hook.app = this;
    this.resizer = window.addEventListener('resize', ()=>{
      this.screenSize = {
        height: window.innerHeight,
        width: window.innerWidth
        // height: document.body.clientHeight,
        // width: document.body.clientWidth
      }
    })
  },

  beforeDestroy(){
    if (this.resizer){
      this.resizer.remove();
    }
  },

  computed: {
    sidebarCols(){
      return this.screenSize.width >= 1300 ? 2: 3
    }
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

body{
  overflow-y: hidden !important;
}

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

.main-container {
  margin-top: 1.5rem;
  height: calc(100vh - 84px);
  overflow-y: auto;
  /* position: absolute;
  top: 72px;
  left: auto; */
}

.code-text {
  font-family: monaco, Consolas, "Lucida Console", monospace !important;
  display: inline-block !important;
  color: orange;
  font-size: 90% !important;
  background-color: #e8e8e87e;
  box-shadow: -3px 0 0 #e8e8e87e, 3px 0 0 #e8e8e87e;
}

.sa-content {
  font-size: 1.15rem;
}
</style>
