<template>

    <div class="grid-container">
      
      <Carousel />
      <ProductFilter />
      <ProductsContainer/>
     </div>
    

</template>

<script>
import Carousel from "../components/Marketplace/Carousel.vue";
import ProductFilter from "../components/Marketplace/ProductFilter.vue";
import ProductsContainer from "../components/Marketplace/ProductsContainer.vue";

export default {
  name: "IndexPage",
  components: {
    Carousel,
    ProductFilter,
    ProductsContainer,
  },
  
};
</script>

<style scoped>

</style>
