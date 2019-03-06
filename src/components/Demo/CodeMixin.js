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

    codeLabel: {
      type: String,
      default: "javascript"
    }

  },

  data(){
    return {
      markedTemplate: {},
      marked: {}
    }
  }
}