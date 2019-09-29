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

    templateLabel: {
      type: String,
      default: 'template'
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