<template>
    <div id="app">
        <h1>Vuex 手写实现!</h1>
        <!--        我的名字: {{$store.state.name}}-->
        <!--        <br>-->
        我的年龄: {{$store.getters.myAge}}
        <br>
        <button @click="handAdd">同步修改年龄</button>
        <button @click="handAddAsync">异步修改年龄</button>
        <hr>
        模块A {{$store.state.a.name}}
        <br>
        模块A年龄 {{$store.state.a.age}}
        <br>
        <br>
        模块B {{$store.state.b.name}}
        <br>
        模块B年龄 {{$store.state.b.age}}
    </div>
</template>

<script>

  export default {
    name: 'App',
    components: {},
    methods: {
      handAdd() {
        this.$store.commit('b/changeAge', 10)
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
