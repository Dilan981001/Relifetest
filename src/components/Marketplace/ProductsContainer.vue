<template>
  <div class="row justify-center  q-pt-lg ">
    <div class="col-3 ">
      <ProductList/>
      <ProductList/>
    </div>
    <div class=" col-3">
        <ProductList/>
        <ProductList/>
    </div>
    <div class=" col-3">
        <ProductList/>
        <ProductList/>
        </div>
    <div class="col-3">
        <ProductList/>
        <ProductList/>
    </div>
  </div>
</template>

<script>
import ProductList from './ProductList.vue';

export default {
  name: "ProductsContainer",
  components :{
    ProductList
  },
 
};
</script>

<style scoped>
.col-3 {
max-width: 250px;

}

</style>
