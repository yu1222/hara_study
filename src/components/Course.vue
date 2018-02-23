<template>
<section class="course">
  <dish v-for="(ham, index) in menu" :class="index" :key="index" :ham="ham" />
</section>
</template>

<script>
import Dish from "./Dish.vue";

export default {
  name: "course",
  components: { Dish },
  props: {
    menu: {
      type: Array,
      required: true,
      validator (foodArray) {
        return foodArray.every(food => typeof food === "string") &&
          foodArray.length === 4;
      }
    }
  }
}
</script>
<style scoped>
.course {
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
}
</style>