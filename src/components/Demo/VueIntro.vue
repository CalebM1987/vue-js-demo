<template>
  <div class="intro">
    <div class="header-container d-flex justify-content-between">
      <span></span>
      <h3>What is Vue.js?</h3>
      <b-input-group class="vue-stargazers">
        <b-input-group-prepend>
          <b-button class="stars" @click="viewStargazers" title="view stargazers in github repo">
            <font-awesome-icon :icon="['fas', 'star']"></font-awesome-icon>
            <span class="ml-2">Stars</span>
          </b-button>
        </b-input-group-prepend>
        <b-form-input class="stars-text font-weight-bold align-middle h-100" v-model="stargazers" readonly :title="`Vue.js currently has ${stargazers} stars`"></b-form-input>
      </b-input-group>
      
    </div>
    

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "vue-intro",

  async created() {
    console.log("called created");
    this.fetchStargazers();
    this.startStargazers();
    hook.i = this;
  },

  beforeDestroy() {
    this.stopStargazers();
  },

  data() {
    return {
      vue_stargazers: 0,
      _stargazers_service: null,
      _stargazers_refresh_interval: 60000
    };
  },

  filters: {
    bigNumber(n) {
      return Number(n).toLocaleString();
    }
  },

  methods: {
    viewStargazers() {
      window.open("https://github.com/vuejs/vue/stargazers", "_blank");
    },

    startStargazers() {
      if (!this._stargazers_service) {
        this._stargazers_service = setInterval(
          this.fetchStargazers,
          this._stargazers_refresh_interval || 120000
        );
      }
    },

    stopStargazers() {
      clearInterval(this._stargazers_service);
      this._stargazers_service = null;
    },

    async fetchStargazers() {
      console.log("fetching stargazers...");
      const resp = await axios({
        url: "https://api.github.com/graphql",
        method: "post",
        data: {
          query:
            "query { repository(owner: vuejs, name: vue){ stargazers { totalCount } } }"
        },
        headers: {
          Authorization: `bearer ${this.$root.config.github_graphql_token}`
        }
      });
      this.vue_stargazers = resp.data.data.repository.stargazers.totalCount;
      // this.vue_stargazers = 137568;
    }
  },

  computed: {
    stargazers() {
      return this.vue_stargazers
        ? Number(this.vue_stargazers).toLocaleString()
        : "";
    }
  }
};
</script>

<style>
.vue-stargazers {
  max-width: 210px;
}
.stars,
.stars:hover {
  background-color: #eff3f6 !important;
  background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);
  color: #24292e;
  /* color: black; */
}

.stars-text {
  background-color: white !important;
}
</style>