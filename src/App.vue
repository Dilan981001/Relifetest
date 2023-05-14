<template>
  <div>
    <LayoutPage />
</div>

</template>

<script>
import  LayoutPage  from "./views/LayoutPage";
import store from "./store";
import { provide } from "vue";
export default {
  setup(){
    provide('store',store)
  },
  name: 'App',
  components: {
     LayoutPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: #284B36;
  
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
