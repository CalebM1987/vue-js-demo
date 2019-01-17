<template>
  <div>
    <b-list-group class="toc">
      <b-list-group-item v-for="section in sections" :key="section.name">
        <h4><strong>{{ section.name }}</strong></h4>

        <!-- NESTED LIST (CHILDREN) -->
        <b-list-group>
          <b-list-group-item v-for="child in section.children" class="menu-item" :key="child.name">
            <slot :name="`${section}-${child}`">
              <b-link :to="child.route" :href="child.route" :name="child.label">{{ child.label }}</b-link>
            </slot>
          </b-list-group-item>

        </b-list-group>
      </b-list-group-item>


    </b-list-group>
  </div>
</template>

<script>

  import sections from '../data/menu.json';
  export default {
    name: "sidebar-menu",
    data() {
      return {
        sections: sections
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

</style>