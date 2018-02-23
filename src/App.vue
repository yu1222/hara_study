<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Example</h2>
    <ul>
      <li @click="chapter='2.4'">2.4 필터로 통화 서식 지정</li>
      <li @click="chapter='2.5'">2.5 필터로 날짜 서식 지정</li>
      <li @click="chapter='2.6'">2.6 조건부로 엘리먼트 표시 및 숨기기</li><br>
      <li @click="chapter='4.5'">4.5 자식 컴포넌트 상태 읽기</li>
      <li @click="chapter='4.6'">4.6 컴포넌트에서 다른 컴포넌트 사용하기</li><br>
      <li @click="chapter='6.3'">6.3 이름을 가진 동적 라우트 사용하기</li>
      <router-link to="list" @click.native="chapter='6.4'">6.4 페이지에 router-view 하나 이상 배치하기</router-link>
    </ul>
    <currency-filter v-if="chapter == '2.4'"></currency-filter>
    <date-filter v-if="chapter == '2.5'"></date-filter>
    <element-condition v-if="chapter == '2.6'"></element-condition>
    <child-stomach v-if="chapter == '4.5'" />
    <restaurant-menu v-if="chapter == '4.6'" />
    <chapter-six v-if="chapter == '6.3'" />
    <hardware v-if="chapter == '6.4'" />
  </div>
</template>

<script>
import CurrencyFilter from "./components/CurrencyFilter.vue";
import DateFilter from "./components/DateFilter.vue";
import ElementCondition from "./components/ElementCondition.vue";

import ChildStomach from "./components/ChildStomach.vue";
import RestaurantMenu from "./components/RestaurantMenu.vue";

import ChapterSix from "./components/chapter6/Chapter6.vue";
import Hardware from "./components/chapter6/Hardware.vue";

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      chapter: ""
    }
  },
  components: {
    CurrencyFilter,
    DateFilter,
    ElementCondition,
    ChildStomach,
    RestaurantMenu,
    ChapterSix,
    Hardware
  }
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
