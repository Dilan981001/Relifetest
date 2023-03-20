<template>
  <div class="row justify-center q-pt-lg">
    <div class="col-lg-3">
      <ProductList />
      <ProductList />
    </div>
    <div class="col-lg-3">
      <ProductList />
      <ProductList />
    </div>
    <div class="col-lg-3">
      <ProductList />
      <ProductList />
    </div>
    <div class="col-lg-3">
      <ProductList />
      <ProductList />
    </div>
  </div>

  <div class="row mobile-only q-pt-lg">
    <div class="col-xs-12">
      <ProductList />
      <ProductList />
      <ProductList />
      <ProductList />
      <ProductList />
      <ProductList />
      <ProductList />
    </div>
  </div>
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
.col-lg-3 {
  max-width: 250px;
  width: 100%;
}
</style>
