<template>
  <demo-content :lang="'javascript'" :code="renderingCode" :templateCode="renderingTemplate">
   
    <div id="components-demo" class="mt-4">
      <football-teams></football-teams>
    </div>
    
  </demo-content>
  
</template>

<script>
import DemoContent from '../DemoContent';
import FootballTeams from './FootballTeams';
import { renderingTemplate, renderingCode } from '../../../data/snippets';

export default {
  name: 'rendering-with-directives',

  components: {
    DemoContent,
    FootballTeams
  },

  data(){
    return {
      renderingCode,
      renderingTemplate
    }
  },

}
</script>

