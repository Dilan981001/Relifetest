<template>
  <q-layout>
    <div class="grid-container">
      <NavBar />
      <Carousel />
      <ProductFilter />
      <ProductsContainer/>
     </div>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Carousel from "../components/Marketplace/Carousel.vue";
import NavBar from "../components/Marketplace/NavBar.vue";
import ProductFilter from "../components/Marketplace/ProductFilter.vue";
import ProductsContainer from "../components/Marketplace/ProductsContainer.vue";

export default {
  name: "IndexPage",
  components: {
    Carousel,
    NavBar,
    ProductFilter,
    ProductsContainer,
  },
  
};
</script>

<style scoped>

</style>
