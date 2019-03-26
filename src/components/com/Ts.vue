<template>
   <div class="Ts">
    <Button class="primarybtn" type="primary">
      <router-link :to="'/'+title">
                    <span style="color: #fff;">点我</span>
                </router-link>
    </Button>
    <p>{{ title }}</p>

   </div>
   
</template>

<script>
export default {
  name: 'Ts',
  data () {
    return {  
    }
  },
  props: ['title'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
.Ts{
   padding-top: 10px;
}
.primarybtn{
  padding-bottom: 5px;
}

</style>
