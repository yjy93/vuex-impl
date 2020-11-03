<template>
    <div id="app">
        <h1>Vuex 手写实现!</h1>
        <!--        我的名字: {{$store.state.name}}-->
        <!--        <br>-->
        我的年龄: {{$store.getters.myAge}}
                <br>
                <button @click="handAdd">同步修改年龄</button>
                <button @click="handAddAsync">异步修改年龄</button>
    </div>
</template>

<script>

  export default {
    name: 'App',
    components: {},
    methods: {
      handAdd() {
        this.$store.commit('changeAge', 10)
      },
      handAddAsync() {
        this.$store.dispatch('changeAgeAsync', 20)
      }
    },
    mounted() {
    }
  }
</script>

<style>
</style>
