<template>
  <q-header class="header-container full-width items-center bg-primary text-white row no-wrap">
    <!-- <q-list >
        <q-item clickable v-ripple>
        <q-item-section>Image avatar</q-item-section>
        <q-item-section avatar>
          <q-avatar>
            <img src="../assets/logo.png" style="width: 100%; height: 100%;">
          </q-avatar>
        </q-item-section>
      </q-item>
    </q-list> -->
    <q-toolbar class="col-2  ">
      <q-btn class="mobile-only" dense flat round icon="menu" @click="toggleLeftDrawer()" />
      <q-toolbar-title class="text-weight-bold text-h5 text-left"> Relife </q-toolbar-title>
    </q-toolbar>
    <div class="col-6 desktop-only">
      <ul class="my-list  text-weight-bold">
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
    </div>
    <div class="col-4 desktop-only self-center">
      <div class="col-2  ">
        <q-btn color="white" text-color="black" label="Buy Products" size="70%" class="text-weight-bold q-ml-md" />
        <q-btn color="white" text-color="black" label="Log in / Sign Up" size="70%" class="text-weight-bold q-ml-md" />
      </div>
      <div class="col-2"></div>
    </div>
  </q-header>
</template>

<script>

export default {

  methods:{
    toggleLeftDrawer(){
      this.$emit('toggle:LeftDrawer');
    }
  }
}
</script>

<style scoped>
  .header-container {
    padding: 0;
    top:0;
    left:0;
    position: sticky;
  }

  .button-container {
    display: flex;
    justify-content: space-around;
    padding: 0 100px;
  }

  .my-list {
    list-style: none;
    display: flex;
    justify-content: space-between;
  }

  .my-list a {
    text-decoration: none;
    color: white;
    border-bottom: 2px solid transparent;
  }

  .my-list a:hover{
    border-bottom: 2px solid white;
  }
</style>
