<template>
<div>
  <h3>레스토랑 메뉴</h3>
  <course :menu="menu1"></course>
  <course :menu="menu2"></course>
  <pre>부모 템플릿의 내용은 부모 컴포넌트 범위 내에서 컴파일 되고<br>자식 템플릿의 내용은 자식 컴포넌트 범위에서 컴파일된다.</pre>
</div>
</template>

<script>
import Course from "./Course.vue";

export default {
  name: "restaurantMenu",
  data () {
    return {
      menu1: ["사과", "배", "귤", "포도"],
      menu2: ["햄버거", "감튀", "핫도그", "케밥"]
    };
  },
  components: { Course }
}
</script>
