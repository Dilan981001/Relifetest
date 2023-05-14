<template>
  <div>
    <app-nav></app-nav>
    <app-home></app-home>
    <app-intro></app-intro>
    <app-children></app-children>
    <app-join></app-join>
    <LayoutPage />
    <app-footer></app-footer>
</div>

</template>

<script>
import Home from './components/Home.vue'
import intro from './components/intro.vue'
import children from './components/children.vue'
import join from './components/join.vue'
import  LayoutPage  from "./views/LayoutPage";
import store from "./store";
import { provide } from "vue";
export default {
  setup(){
    provide('store',store)
  },
  name: 'App',
  components: {
    'app-home': Home,
    'app-intro': intro,
    'app-children' : children,
    'app-join' : join,
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
