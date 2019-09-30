<template>
  <div class="info-group mb-4 mr-5">
      <h3 v-html="title"></h3>
      <hr>

      <b-card>
        <div class="text-left">
          <p v-for="(p,i) in (info.text || [])" :key="i" :style="contentStyle" v-html="p"></p>
          <ul>
            <li v-for="(bullet,idx) in (info.bullets || [])" :key="idx" v-html="bullet" :style="listStyle"></li>
          </ul>
        </div>
      </b-card>

      <slot></slot>
    </div>
</template>

<script>

  export default {
    name: 'info-group',

    props: {
      title: {
        type: String
      },

      info: {
        type: Object,
        default() {
          return {
            text: [],
            bullets: []
          }
        }
      },

      contentStyle: {
        type: Object,
        default(){
          return {
            'font-size': '1.15rem'
          }
        }
      },

      listStyle: {
        type: Object,
        default(){
          return {};
        }
      }
    }

  }

</script>
