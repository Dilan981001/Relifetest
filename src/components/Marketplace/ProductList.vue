<template>

<div v-for="product in productState.products" :key="product.id" class="cursor-pointer image-container q-ma-sm bg-white">
        <q-img
          :src='product.thumbnail'
          style="height: 200px; width: 200px"
          @click="ClickProduct(product.id)"
        />
        <div class="product-details text-center">
          <p class="text-weight-bold text-black text-center" >{{product.title}}</p>
          <p style=" color: black;" >RS {{product.price}}.00</p>
          <q-btn
            color="primary"
            icon="add_circle"
            label="ADD TO CART"
          
          />
        </div>
      </div>
</template>


<script>
import { mapGetters } from 'vuex';
export default {

name : 'ProductList',
data(){
  return{
 
  }
},
methods:{
  ClickProduct(id){
    this.$router.push({ name: 'ViewProduct', params: {productId: id }})
  }
},
mounted(){
  //this.getProducts();
  this.$store.dispatch("productModule/getProducts")
},
computed: mapGetters({
  productState:"getProdutsState"
})
// addToCart() {
//     const product = {
//       id: 1,
//       name: "Product Name",
//       price: 19.99,
//       image: "product-image.jpg",
//     };
//     this.$emit("add-to-cart", product);
//   },


}

</script>

<style>

.image-container {
border: 10px solid white;
width:220px
}
</style>