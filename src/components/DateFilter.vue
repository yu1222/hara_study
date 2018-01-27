<template>
<div>
  <h3>The Storming of the Bastille, happened on {{bsDate | date}}.</h3>
  <h3>프랑스 혁명은 {{bsDate | date("ko")}}에 일어났다.</h3>
</div>
</template>

<script>
import moment from "moment";

// Vue 전체에서 사용할 필터로 정의한 거
import Vue from "vue";

Vue.filter("date", function (date, locale = "en") {
  moment.locale(locale);
  return moment(date).format("LL");
});

export default {
  name: "dateFilter",
  data () {
    return {
      // 프랑스혁명 날짜라고 함
      bsDate: "1789-07-14"
    }
  }
}
</script>
