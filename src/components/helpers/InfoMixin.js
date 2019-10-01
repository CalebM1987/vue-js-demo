export default {

  props: {
    info: {

      type: Object,
      default() {
        return {
          text: [],
          bullets: []
        }
      }
    },

    listStyle: {
      type: Object,
      default(){
        return {};
      }
    },

    contentStyle: {
      type: Object,
      default(){
        return {
          'font-size': '1.15rem'
        }
      }
    }
  }
}