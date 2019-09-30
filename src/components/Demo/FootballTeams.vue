<template>
  <div>
    <div class="conditional-section">
      <h2 class="mb-3">What is you favorite NFC North Team?</h2>
      <!-- use v-for to loop through teams array -->
      <div v-for="team in teams" :key="team" style="font-size: 1.2rem;">
        <input type="radio" :value="team" v-model="selectedTeam">
        <span class="ml-2">{{ team || "I don't like any of these teams" }}</span>
      </div>
    </div>

    <!-- only show this section if a team has been selected -->
    <div class="display mt-5 font-weight-bold" v-if="selectedTeam">

      <!-- only show if bears or vikings -->
      <h3 v-if="['Bears', 'Vikings'].includes(selectedTeam)">Go {{ selectedTeam }}!!!</h3>

      <!-- boo for packers -->
      <h3 v-else-if="selectedTeam === 'Packers'">&#128078; Boo {{ selectedTeam }}! &#x1F44E;</h3>

      <!-- there are actually lions fans out there? -->
      <h3 v-else>The {{ selectedTeam }} actually have fans?</h3>

    </div>

    <div v-show="selectedTeam" class="mt-4 text-secondary">
      <p>Your favorite NFC North team is the <strong>{{ selectedTeam }}</strong> <span v-if="selectedTeam === 'Bears'">, Great Choice!</span></p>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'football-teams',

    data(){
      return {
        teams: [null, 'Vikings', 'Bears', 'Packers', 'Lions'],
        selectedTeam: null
      }
    },

    methods: {

    }

  }

</script>

<style>

</style>