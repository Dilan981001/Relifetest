<template>
 
  <q-header
    class="header-container full-width items-center justify-around bg-primary text-white row q-pt-sm q-pb-sm"
  >
    <div class="logo">
      <q-btn
        class="btn"
        dense
        flat
        round
        icon="menu"
        @click="toggleList()"
      />
      <router-link to="/" class="text-weight-bold title text-h5 text-left"
        >Relife</router-link
      >
    </div>
    
      <ul v-bind:class="{hide:hide}" class="my-list text-weight-bold">
        <li><router-link to="/">Home</router-link></li>
        <li>
          <router-link to="/about">Childrens Home</router-link>
        </li>
        <li>
          <router-link to="/about">Elders Home</router-link>
        </li>
        <li>
          <router-link to="/about">Notifications</router-link>
        </li>
        <li><router-link to="/about">Donate</router-link></li>
      </ul>
   
    <div class="btn-main self-center">
      <div v-bind:class="{hide:hide}">
        <q-btn
          color="white"
          text-color="black"
          label="Buy Products"
          size="70%"
          class="text-weight-bold q-ml-md"
        />
        <q-btn
          color="white"
          text-color="black"
          label="Log in / Sign Up"
          to="/signup"
          size="70%"
          class="text-weight-bold q-ml-md"
        />
      </div>
      <div class=""></div>
    </div>
  </q-header>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
      hide: true
    };
  },
  methods:{
    toggleList(){
      this.hide=!this.hide;
    }
}}
</script>

<style scoped>
.header-container {
  top: 0;
  left: 0;
  right:0;
  position: sticky;
}

.button-container {
  display: inline-block;
  padding: 0 100px;
}

.my-list li {
  display: inline-block;
  margin: 0 10px;
}

a {
  text-decoration: none;
  color: white;
}
.my-list a {
  text-decoration: none;
  color: white;
  border-bottom: 2px solid transparent;
}

.my-list a:hover {
  border-bottom: 2px solid white;
}
.logo .btn {
  display: none;
}

@media all and (max-width: 864px) {
  .header-container {
    flex-direction: column;
  }
  ul, .btn-main {
    display: block;
  }
  .my-list li {
    display: block;
    padding: 5px 0;
    text-align: center;
  }
  .logo {
    align-self: flex-start;
    margin-left: 20px;
  }
  .logo .btn {
    display: inline-block;
    margin-right: 5px;
  }
  .hide{
    display: none;
  }
}
</style>
