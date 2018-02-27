<template>
  <div id="app">
    <h1>这是公共顶部</h1>
    <router-link to="/outter/register">注册</router-link>
    <router-view/>
    <h1>这是公共底部</h1>
  </div>
</template>

<script>
export default {
  name: 'App'
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
</style>
