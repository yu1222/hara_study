<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Example</h2>
    <ul>
      <li @click="chapter=4">2.4 필터로 통화 서식 지정</li>
      <li @click="chapter=5">2.5 필터로 날짜 서식 지정</li>
      <li @click="chapter=6">2.6 조건부로 엘리먼트 표시 및 숨기기</li>
    </ul>
    <currency-filter v-if="chapter == 4"></currency-filter>
    <date-filter v-if="chapter == 5"></date-filter>
    <element-condition v-if="chapter == 6"></element-condition>
  </div>
</template>

<script>
import CurrencyFilter from "./components/CurrencyFilter.vue";
import DateFilter from "./components/DateFilter.vue";
import ElementCondition from "./components/ElementCondition.vue";

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      chapter: 0
    }
  },
  components: { CurrencyFilter, DateFilter, ElementCondition }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
