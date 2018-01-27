<template>
<table>
  <thead>
    <tr>
      <th>아이템</th>
      <th>가격</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in inventory">
      <td>{{item.name}}</td>
      <td>{{item.price | currency}}</td>
    </tr>
  </tbody>
</table>
</template>

<script>
import accounting from "accounting";

// Vue 전체에서 사용할 필터로 정의한 거
import Vue from "vue";

Vue.filter("currency", function (money) {
  return accounting.formatMoney(money);
});

export default {
  name: "currencyFilter",
  data () {
    return {
      inventory: [{
        name: "테이프",
        price: "7"
      }, {
        name: "도장",
        price: "0.01"
      }, {
        name: "상어이빨",
        price: "1.5"
      }, {
        name: "아이폰",
        price: "999"
      }]
    }
  // },
  // filters: {
  // 해당 컴포넌트에서만 사용할 필터 정의
  //   currency(money) {
  //     return accounting.formatMoney(money);
  //   }
  }
}
</script>
<style>
.price { text-align: right }
</style>