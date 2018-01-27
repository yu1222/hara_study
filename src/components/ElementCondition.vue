<template>
<div>
  <h3>랜덤으로 현재 시각은 {{ hour }} 시이다.</h3>
  <div><button @click.prevent="hour -= 1">시간 줄이기</button><button @click.prevent="hour += 1">시간 늘리기</button></div>
  <div v-show="isNight">
    유령이다! Boo!
  </div>
  <div v-if="!isNight">
    얜 그럼 사람인걸로! Boo!
  </div>
</div>
</template>

<script>
export default {
  name: "elementCondition",
  data () {
    return {
      hour: Math.floor(Math.random() * 24)
    }
  },
  computed: {
    isNight() {
      return this.hour < 7;
    }
  }
}
</script>
