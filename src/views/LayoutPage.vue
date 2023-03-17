<template>
    <q-layout view="hHh lpR fFf">
  
    <NavBar @toggle:LeftDrawer="toggleLeftDrawer()"/>
  
      <q-drawer class="mobile-only"  v-model="leftDrawerOpen"  side="left" bordered>
        <q-btn class="mobile-only row" color="black"  flat round icon="menu" @click="toggleLeftDrawer()" />
        <ul class="my-list column text-weight-bold">
        <li><router-link to="/">Home</router-link></li>
        <li>
          <router-link to="/about">Childrens Home</router-link>
        </li>
        <li>
          <a href="https://www.google.com" target="_blank">Elders Home</a>
        </li>
        <li>
          <a href="https://www.google.com" target="_blank">Notifications</a>
        </li>
        <li><a href="https://www.google.com" target="_blank">Donate</a></li>
      </ul>
      </q-drawer>
  
      <q-page-container style="padding-top: 0;">
        <router-view/>
      </q-page-container>
  
    </q-layout>
  </template>
  
  
<script>
import { ref } from 'vue';
import NavBar from '.././components/Marketplace/NavBar.vue';

export default {
name: 'LayoutPage',
components:{
    NavBar
},
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>

<style>
.my-list {
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
  .my-list a {
    text-decoration: none;
    color: black;
    border-bottom: 2px solid transparent;
  }
  .my-list a:hover{
    border-bottom: 2px solid black;
  }
</style>
