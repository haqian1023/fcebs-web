<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <button v-on:click="test">测试</button>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  methods:{
    test:function(event) {
      this.$axios.get('/test')
      .then(successResponse=>{
        console.log('请求成功');
        console.log(this);

      })

      
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
