<template>
  <div class="container">
    <button
      :style="customStyles"
      @click="handleClick"
      class="bg-green-500 relative py-4 px-6 rounded-full focus:outline-none outline-none"
    ></button>
  </div>
</template>

<script>
import dynamics from "dynamics.js"
export default {
  name: "base-button",
  data() {
    return {
      customStyles: {
        width: "160px",
        left: "0px",
      },
      isSet: false,
    }
  },
  methods: {
    handleClick() {
      dynamics.animate(
        this.customStyles,
        {
          width: this.isSet ? "160xp" : "80px",
          left: "100px",
        },
        {
          type: dynamics.spring,
          frequency: 200,
          friction: 150,
          anticipationSize: 100,
          anticipationStrength: 100,
          complete: () => {
            this.isSet = !this.isSet
          },
        }
      )
    },
  },
}
</script>

<style scoped>
.container {
  width: 160px;
  height: 80px;
  text-align: center;
}
</style>
