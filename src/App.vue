<template>
  <div id="app">
    <Home :brief="brief" :loop="loop" :step="step" />
  </div>
</template>

<script>
import Home from "@/components/Home.vue"

export default {
  name: "App",
  components: {
    Home,
  },
  data() {
    return {
      brief: `Create a Tabs component, that has several tab buttons. Each button
      toggles active tab content. Add a text input with a button. User can enter any tab
      index in the input and toggle it by clicking the button. Indexes in this task are not the
      same as they are used in JS, so by entering 1 - first tab should be shown, not 0.
      If invalid index is entered - browser must show an alert.`,
      loop: 1,
      step: 2,
    }
  },
}
</script>
