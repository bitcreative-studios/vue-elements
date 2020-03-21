<template>
  <div class="hello">
    <main class="container text-gray-800">
      <h1 class="text-6xl text-white center font-bold">
        Loop {{ loop | pad }} Step {{ step | pad }}
      </h1>

      <div class="my-5">
        <h2 class="text-4xl font-bold capitalize">design brief</h2>
        <p class="max-w-2xl leading-relaxed text-xl">
          {{ brief }}
        </p>
      </div>
      <tab-component :tabs="tabs" />
    </main>
  </div>
</template>

<script>
import TabComponent from "./TabbedContent"
import filters from "@/filters"

console.log(filters)
export default {
  name: "home",
  ...filters,
  components: { TabComponent },
  props: {
    brief: String,
    loop: {
      type: Number,
      required: true,
      default: null,
    },
    step: {
      type: Number,
      required: true,
      default: null,
    },
  },
  data() {
    return {
      tabs: [
        {
          name: "positive",
          value: "positive",
          content: {
            props: ["content"],
            name: "positive-content",
            ...filters,
            template: "<div>{{content | capitalize}} content </div>",
          },
        },
        {
          name: "negative",
          value: "negative",
          content: {
            name: "negative-content",
            props: ["content"],
            ...filters,
            template: "<div>{{content | capitalize}} content </div>",
          },
        },
        {
          name: "neutral",
          value: "neutral",
          content: {
            name: "neutral-content",
            props: ["content"],
            ...filters,
            template: "<div>{{content | capitalize}} content </div>",
          },
        },
      ],
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  @apply min-h-screen bg-blue-500 grid justify-center items-center;
}
</style>
