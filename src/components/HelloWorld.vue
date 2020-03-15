<template>
  <div class="hello">
    <main class="">
      <h1 class="text-6xl center">Vue Playground Boilerplate</h1>
      <p>
        For a guide and recipes on how to configure / customize this project,<br />
        check out the
        <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
          >vue-cli documentation</a
        >.
      </p>
      <div>
        <button
          class="icon icon-arrow-up focus:outline-none
          text-xl bg-teal-300 hover:bg-teal-400
          text-teal-800 font-bold py-2 px-4 rounded
          inline-flex items-center transition duration-200"
        >
          <span class="ml-2">Click Me</span>
        </button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  @apply min-h-screen bg-teal-100 grid justify-center items-center;
}
</style>
