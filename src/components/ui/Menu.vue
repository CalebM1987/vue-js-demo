<template>
  <div>
    <b-list-group class="toc">
      <b-list-group-item v-for="section in sections" :key="section.name">
        <h4><strong>{{ section.name }}</strong></h4>

        <!-- NESTED LIST (CHILDREN) -->
        <b-list-group>
          <b-list-group-item v-for="child in section.children" class="menu-item" :key="child.name">
            <slot :name="`${section}-${child}`">
              <b-link :to="child.route" 
                  @click="activeLink=child.name" 
                  :active="activeLink===child.name"
                  :href="child.route" 
                  :name="child.name">{{ child.name }}</b-link>
            </slot>

            <!-- recursive nesting? -->
            <b-list-group v-if="(child.children || []).length">
              <b-list-group-item v-for="nc in child.children" class="menu-item" :key="nc.name">
                <slot :name="`${section}-${child}-${nc}`">
                  <b-link :to="nc.route" 
                      :href="nc.route" 
                      :name="nc.name" 
                      class="menu-link"
                      @click="activeLink=nc.name" 
                      :active="activeLink===nc.name">
                    {{ nc.name }}
                    </b-link>
                </slot>
              </b-list-group-item>

            </b-list-group>
          </b-list-group-item>

        </b-list-group>
      </b-list-group-item>

    </b-list-group>
  </div>
</template>

<script>

  import { menu } from '../../data/menu';
  export default {
    name: "sidebar-menu",
    data() {
      return {
        sections: menu,
        activeLink: null
      }
    },
    methods: {}
  }
</script>

<style scoped>

  .active {
    font-weight: bold;
    color: white;
    text-shadow: lightgray 0.1em 0.1em 0.2em;
    text-decoration: underline;
  }

  .toc {
    text-align: left;
    font-color: black;
  }

  .menu-item {
    border: none !important;
  }

  .menu-item > a {
    color: gray;
  }

  /* .router-link-active{
    font-weight: bold;
  } */

  .router-link-exact-active {
    font-weight: bold;
    color: blue !important
  }

</style>