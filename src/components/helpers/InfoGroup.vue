<template>
  <div class="info-group mb-4 mr-5">
      <h3 v-html="title"></h3>
      <hr>

      <b-card>
        <info-content :info="info"></info-content>
        <slot name="content"></slot> 
      </b-card>

      <slot></slot>
    </div>
</template>

<script>

  import InfoContent from './InfoContent';
  import InfoMixin from './InfoMixin';

  export default {
    name: 'info-group',

    mixins: [InfoMixin],

    components: {
      InfoContent
    },

    props: {
      title: {
        type: String
      }
      
    }

  }

</script>
