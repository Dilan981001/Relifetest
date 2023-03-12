<template>
  <q-header  class="header-container bg-primary text-white row no-wrap">
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
    <q-toolbar class="col-1  ">
      <q-toolbar-title class="text-weight-bold text-h5"> Relife </q-toolbar-title>
    </q-toolbar>
    <div class="col-7">
      <ul class="my-list  text-weight-bold">
        <li><a href="https://www.google.com" target="_blank">Home</a></li>
        <li>
          <a href="https://www.google.com" target="_blank">Childrens Home</a>
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
    <div class="col-4 self-center">
      <div class="col-2  ">
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
          size="70%"
          class="text-weight-bold q-ml-md"
        />
      </div>
      <div class="col-2"></div>
    </div>
  </q-header>
</template>

<style scoped>
.header-container {
  padding: 0;
  margin: 0;
  top:0;
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
}

.my-list li {
  margin: 0 auto;
}

.my-list li a {
  text-decoration: none;
  color: white;
}
</style>
