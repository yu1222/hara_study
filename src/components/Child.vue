<template>
<p>Child {{num}}: {{mouth}}</p>
</template>

<script>
export default {
  name: "child",
  props: ["num"],
  data () {
    return {
      mouth: "쿠키 안 먹었어요",
      stomach: `냠냠 맛있어. 그 쿠키는 ${this.num} 배 더 맛있었어.`
    };
  }
}
</script>
