<template>
  <div class="stargazers-container">
    <!-- <div class="header-container d-flex justify-content-between"> -->
      <div>
        <div><b-img :src="`./assets/logos/${label}.png`" width="96"></b-img></div>
      <!-- <p>{{ repo }}</p> -->
      <b-input-group class="stargazers-group mx-auto mt-4 mb-4">
        <b-input-group-prepend>
          <b-button class="stars" @click="viewStargazers" title="view stargazers in github repo">
            <font-awesome-icon :icon="['fas', 'star']"></font-awesome-icon>
            <span class="ml-2">Stars</span>
          </b-button>
        </b-input-group-prepend>
        <!-- <big-number-input :value="stargazers" :cls="'stars-text font-weight-bold align-middle h-100'"></big-number-input> -->
        <!-- <p class="stars-text font-weight-bold align-middle h-100">{{ $data.stargazers | bigNumber }}</p> -->
        <b-form-input class="stars-text font-weight-bold align-middle" type="text"
        :title="`${label} currently has ${stargazer_label} stars`"
        v-model="stargazer_label" 
        readonly ></b-form-input>
      </b-input-group>
      
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "stargazers",


  props: {

    repo: {
      type: String,
      required: true
    },

    owner: {
      type: String,
      required: true
    },

    refreshInterval: {
      type: Number,
      default: 360000 // every 2 min
    }
  },

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
      stargazers: 0,
      stargazers_service: null,
    };
  },

  filters: {
    bigNumber(n) {
      return Number(n).toLocaleString();
    }
  },

  methods: {
    viewStargazers() {
      window.open(`https://github.com/${owner}/${repo}/stargazers`, "_blank");
    },

    startStargazers() {
      if (!this.stargazers_service) {
        this.stargazers_service = setInterval(
          this.fetchStargazers,
          this.refresh_interval || 120000
        );
      }
    },

    stopStargazers() {
      clearInterval(this.stargazers_service);
      this.stargazers_service = null;
    },

    async fetchStargazers() {
      console.log("fetching stargazers...");
      const { data } = await axios({
        url: "https://api.github.com/graphql",
        method: "post",
        data: {
          query:
            `query { repository(owner: "${this.owner}", name: "${this.repo}"){ stargazers { totalCount } } }`
        },
        headers: {
          Authorization: `bearer ${this.$root.config.github_graphql_token}`
        }
      });
      console.log('DATA IS: ', this.repo, data.data.repository.stargazers.totalCount)
      this.stargazers = data.data.repository.stargazers.totalCount;
      console.log('stargazers for this is: ', this.stargazers)
    }
  },

  computed: {
    stargazer_label() {
      return Number(this.stargazers || 0).toLocaleString();
      // return this.stargazers
      //   ? Number(this.stargazers).toLocaleString()
      //   : "";
    },

    label(){
      const str = this.repo.split('.')[0];
      return str[0].toUpperCase() + str.slice(1, str.length);
    }
  },

  watch: {
    stargazers(newVal, oldVal){
      console.log('stargazers chagned: ', oldVal, ' -> ', newVal)
    }
  }
};
</script>

<style>

.stargazers-container {
  
}
.stargazers-group {
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