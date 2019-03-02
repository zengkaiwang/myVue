<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="test">
      <el-button type="primary" round>主要按钮</el-button>
      <button @click="test">加载第三方组件</button>
      <div id="mycomponent"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  created() {

  },
  methods: {
    test() {
      const s1 = document.createElement('script');
      s1.type = 'text/javascript';
      s1.src = 'https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.2.0/webcomponents-loader.js';
      document.body.appendChild(s1);
        
      var script = document.createElement('script');
      script.src = './my-custom-element.min.js';
      script.type = 'text/javascript';
      document.body.appendChild(script);

      document.getElementById('mycomponent').innerHTML= '<my-custom-element></my-custom-element>'
    }
  }
}
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
