export default {
   props: {
    lang: {
      type: String,
      default: 'html'
    },

    code: {
      type: String,
      default: ''
    },

    templateCode: {
      type: String,
      default: ''
    },

  },

  data(){
    return {
      markedTemplate: {},
      marked: {}
    }
  }
}