<template>
  <div
    class="container max-w-2xl p-8 bg-white text-gray-800
      border-2 border-gray-400 shadow-md rounded-lg flex flex-col"
  >
    <div class="controls">
      <form @submit.prevent="handleSubmit" class="row flex justify-between">
        <input
          v-model.lazy="currentIndex"
          id="index"
          type="number"
          placeholder="Enter tab index"
          name="index"
          class="py-2 bg-transparent border-b-2 placeholder-gray-600
          focus:border-gray-500 w-full  text-2xl transition duration-200"
        />
        <button
          class="ml-4 py-4 px-6 whitespace-no-wrap bg-gray-200 rounded text-xl
          outline-none focus:outline-none border border-transparent
          focus:border-gray-500 transition duration-200  hover:bg-gray-300"
        >
          Change tab
        </button>
      </form>
      <div class="row tabs flex ">
        <div v-for="(tab, i) in tabs" :key="i" class="tab">
          <input
            type="radio"
            name="currentTab"
            :id="tab.name"
            :value="tab"
            v-model="currentTab"
            class="absolute left-0"
          />
          <label
            :for="tab.name"
            class="transition duration-200"
            :class="{ active: tab.name === currentTab.name }"
          >
            {{ tab.name }}
          </label>
        </div>
      </div>
    </div>
    <component
      :is="currentTab.content"
      :content="currentTab.name"
      class="row content"
    />
  </div>
</template>

<script>
import defaultMixins from "@/mixins"

export default {
  name: "tabbed-content",
  mixins: [defaultMixins],
  props: {
    tabs: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentTab: this.tabs[0],
      currentIndex: null,
    }
  },
  methods: {
    handleSubmit() {
      let { tabs, currentIndex } = this
      if (this.validateIndex(currentIndex)) {
        this.currentTab = tabs[currentIndex - 1]
        this.currentIndex = ""
      } else {
        alert(`invalid index`)
        this.currentIndex = ""
      }
    },
    validateIndex(number) {
      return number >= 1 && number <= 3
    },
  },
}
</script>

<style scoped>
.row {
  @apply w-full;
}
.row + .row {
  @apply mt-6;
}

[type="radio"] {
  visibility: hidden;
}
.active {
  @apply text-gray-800;
}
.content {
  @apply text-2xl;
}
.tab {
  @apply relative py-2 uppercase text-xl font-bold text-gray-400 cursor-pointer;
}
.tab input,
.tab label {
  @apply cursor-pointer;
}
.tab + .tab {
  @apply ml-4;
}
.tab:hover {
  @apply text-gray-700;
}
</style>
