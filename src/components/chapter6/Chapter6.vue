<template>
<div id="chapter6">
  <h1>Online Restaurant</h1>
  <ul>
    <li><router-link :to="{ name: 'home' }">Home</router-link></li>
    <li v-for="i in 10">
      <router-link :to="{ name: 'menu', params: { id: i } }">Menu {{i}}</router-link>
    </li>
  </ul>
  <router-view class="view"></router-view>
</div>
</template>

<script>
export default {
  name: "chapterSix"
}
</script>
