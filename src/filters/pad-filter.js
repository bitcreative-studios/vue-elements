export default {
  filters: {
    pad(number) {
      const val = parseInt(number)
      return val < 10 ? `0${val}` : val
    },
  },
}
