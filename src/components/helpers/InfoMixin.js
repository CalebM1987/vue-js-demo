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
    }
  }
}