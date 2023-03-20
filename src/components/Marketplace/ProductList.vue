<template>
<div class="image-container bg-white q-pb-sm q-mb-lg">
        <q-img
          src="../../assets/dmat.jpeg"
          style="height: 200px; max-width: 200px"
          class="q-mt-sm"
        />
        <div class="product-details text-center">
          <text-subtitle2 class="text-weight-bold text-black">Product Name</text-subtitle2>
          <p style="margin-bottom: 0; color: black;" >$19.99</p>
          <q-btn
            class=""
            @click="addToCart"
            color="primary"
            icon="add_circle"
            label="ADD TO CART"
          />
        </div>
      </div>
</template>


<script>

export default {

name : 'ProductList',
addToCart() {
    const product = {
      id: 1,
      name: "Product Name",
      price: 19.99,
      image: "product-image.jpg",
    };
    this.$emit("add-to-cart", product);
  },


}

</script>

<style>

.image-container {
  max-width: 220px;
  justify-content: center;
  text-align: center;
  margin: 25px auto;
}
</style>