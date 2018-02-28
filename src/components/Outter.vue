<template>
  <div >
    <h3 v-bind:class="style">欢迎{{name}}</h3>
    <p v-show="b">这是一段文字{{reverseInfo}}</p>
    <p>{{fullName}}</p>
    
    <p>我点击了{{count}}次</p>
    <input type="text" v-model="phone" @input="checkPhone"><span>{{phoneMessage}}</span>
    <button @click="register">注册</button>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      info:'注册',
      style:'test',
      n:1,
      b:1,
      fristName:'文飞',
      lastName:'胡',
      count:0,
      phone:'',
      phoneMessage:'',
      name:''
    }
  },//data:function(){return ....}
  methods:{
    foo:function(event){
        // this.info = '登录';
        this.fullName = '振华 梁';
        this.b = false;
        console.log(event.target);
      },
      checkPhone(){
        var regexp = /^1\d{10}$/;
        if(!regexp.test(this.phone)){
          this.phoneMessage = '请输入正确的手机号';
          return false;
        }else{
          this.phoneMessage = '';
          return true;
        }
      },
      register(){
        if(this.checkPhone()){
          //调用注册接口
        }
      }
  },
  computed:{
    reverseInfo(){
      console.log('run in this');
      return this.info.split('').reverse().join('');
    },
    fullName:{
      get(){
        return this.fristName+' '+this.lastName;
      },
      set(newValue){
        var names = newValue.split(' ');
        this.fristName = names[0];
        this.lastName = names[names.length-1];
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .test{
    color:red;
  }
</style>
