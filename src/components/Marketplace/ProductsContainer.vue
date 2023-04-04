<template>
  <div class="container row justify-center q-pt-lg q-mt-lg bg-blue">
    
      <ProductList />
  
  </div>

  <!-- <div class="row mobile-only q-pt-lg">
    <div class="col-xs-12">
      <ProductList />
      <ProductList />
      <ProductList />
      <ProductList />
      <ProductList />
      <ProductList />
      <ProductList />
    </div>
  </div> -->
</template>

<script>
import ProductList from "./ProductList.vue";

export default {
  name: "ProductsContainer",
  components: {
    ProductList,
  },
};
</script>

<style scoped>


.container{


}
</style>
