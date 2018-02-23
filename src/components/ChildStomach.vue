<template>
<div>
  <child v-for="i in 10" :key="i" ref="junior" :num="i"></child>
  <p>4번째 자식: {{child4Stomach}}</p>
  <pre>ref는 스크립트단에서 참조를 얻을 때 사용하기 위해 컴포넌트나 엘리먼트에 지정할 수 있는 특수한 속성<br>ref 는 리액티브하지 않아서 변수에 바인딩 할 순 없다.<br>또한 $refs 값은 렌더링 프로세스 후에 채워진다.<br>"v-for"에서 사용해서 동일한 ref를 가진 컴포넌트들이 존재하면, 배열로 값이 지정된다.</pre>
</div>
</template>

<script>
import Child from "./Child.vue";

export default {
  name: "childStomach",
  data () {
    return {
      child4Stomach: "unknown"
    };
  },
  components: { Child },
  mounted () {
    this.child4Stomach = this.$refs.junior[3].stomach;
  }
}
</script>
