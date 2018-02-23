<template>
<div>
  You just ordered 
  <img :src="'https://loremflickr.com/200/200/food?lock=' + $route.params.id">
</div>
</template>

<script>
export default {
  name: "chapterSixMenu"
}
</script>
