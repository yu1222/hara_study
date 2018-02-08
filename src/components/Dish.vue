<template>
<p class="dish">{{ham}}&lt;-맛있어요!</p>
</template>

<script>
import Dish from "./Dish.vue";

export default {
  name: "dish",
  props: ["ham"]
}
</script>
