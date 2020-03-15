<template>
  <div
    class="bg-white border-2 shadow-md border-gray-400
      rounded max-w-3xl mx-auto p-8 transition-all duration-200"
  >
    <div
      v-if="!isMobile"
      class="controls inline-block
        border-4 max-w-full  rounded-lg border-blue-500"
    >
      <button
        v-for="(option, i) in options"
        :key="i"
        @click="active = option"
        :class="{ active: option === active }"
      >
        Sort by {{ option }}
      </button>
    </div>
    <select name="" id="sort" v-else v-model="active">
      <option v-for="(option, i) in options" :value="option" :key="i">
        Sort by {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "segmented-controls",
  props: {
    breakpoint: {
      type: Number,
      default: 768,
    },
    unit: {
      type: String,
      default: "px",
    },
  },
  data() {
    return {
      active: "price",
      options: ["price", "name", "relevance"],
      query: null,
      isMobile: false,
    }
  },
  mounted() {
    //  set MediaQueryList
    this.query = window.matchMedia(
      `(max-width: ${this.breakpoint}${this.unit})`
    )
    this.query.addListener(this.screenTest)
  },
  beforeDestroy() {
    this.query.removeListener(this.screenTest)
  },
  methods: {
    screenTest(e) {
      this.isMobile = e.matches
    },
  },
}
</script>

<style scoped>
button {
  @apply p-4 font-normal text-xl transition duration-200;
  font-weight: 600;
}

button + button {
  @apply border-l-4 border-blue-500;
}

button:hover:not(.active) {
  @apply bg-blue-100;
}

.active {
  @apply shadow-outline bg-blue-500 text-white outline-none;
}

select {
  @apply w-full bg-white text-xl p-3 border-4 border-blue-500 rounded-md;
  font-weight: 600;
}
</style>
