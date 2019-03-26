<template>
  <div>
    <Input v-model="data" placeholder="Enter something..." clearable style="width: 200px" />
    <Ts :title="data"></Ts> 
  </div>
</template>

<script>
import Ts from "@/components/com/Ts";

export default {
    name: "HelloWorld",
    data() {
        return {
            msg: "Welcome to Your Vue.js App",
            data:"",
            
        };
    },
    components: {
        Ts
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
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
