<template>
  <div >
    <h5>这是注册页面</h5>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  created(){
    // console.log(this.$parent.name);
    this.$parent.name = '注册';
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
