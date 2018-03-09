<template>
<div>
  <div v-for="(message, index) in messages"> 
    <p style="cursor:pointer">{{message}}
      <span @click="close(index)">[x]</span>
    </p>
  </div>
  <input v-model="newMessage" @keyup.enter="broadcast">
  <button @click="broadcast">Broadcast</button>
</div>
</template>

<script>
import Vuex from "vuex";

export default {
  name: "broadcast",
  data: function () {
    return {
      newMessage: ''
    };
  },
  computed: Vuex.mapState(['messages']),
  methods: {
    broadcast () {
      // 뮤테이션 이름은 show/hide 로 하지는 않음
      // 그리고 Vue 개발자도구에서 time-travel debug 가능
      this.$store.commit('pushMessage', this.newMessage)
      this.newMessage = ''
    },
    close (index) {
      this.$store.commit('removeMessage', index)
    }
  }
}
</script>