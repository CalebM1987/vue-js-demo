<template>
  <div>
    <div class="conditional-section">
      <h4>What is you favorite NFC North Team?</h4>
      <!-- use v-for to loop through teams array -->
      <div v-for="team in teams" :key="team">
        <input type="radio" :value="team" v-model="selectedTeam">
        {{ team }}
      </div>
    </div>

    <!-- only show this section if a team has been selected -->
    <div class="display mt-5 font-weight-bold" v-if="selectedTeam">

      <!-- only show if bears or vikings -->
      <h3 v-if="['Bears', 'Vikings'].includes(selectedTeam)">Go {{ selectedTeam }}!!!</h3>

      <!-- boo for packers -->
      <h3 v-else-if="selectedTeam === 'Packers'">&#128078; Boo {{ selectedTeam }}! &#x1F44E;</h3>

      <!-- there are actually lions fans out there? -->
      <h3 v-else>Really, the {{ selectedTeam }} have fans?</h3>

    </div>

  </div>
</template>

<script>

  export default {
    name: 'football-teams',

    data(){
      return {
        teams: ['Vikings', 'Bears', 'Packers', 'Lions'],
        selectedTeam: null
      }
    },

    methods: {

    }

  }

</script>

<style>

</style>