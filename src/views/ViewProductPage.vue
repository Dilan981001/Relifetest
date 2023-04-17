<template>
 
<div>
    <div class="q-pa-md">
      <div class="row items-start">
        <div class="col-12 col-md-6">
          <q-img :src="product.imageURL" />
        </div>
        <div class="column items-center justify-center col-12 col-md-6  ">
          <h2 class="text-h5">{{ this.product.name }}</h2>
          <div class="text-subtitle1">{{ product.description }}</div>
          <div class="text-subtitle1">Category : {{ product.category }}</div>
          <div class="text-h6 font-weight-bold">{{ product.price }}</div>
          <!-- <q-rating
            v-model="product.rating"
            color="orange"
            icon="star"
            readonly
          /> -->
          <q-btn
            class="q-mt-md"
            color="white"
            text-color="black"
            label="ADD TO CART"
            @click="addToCart(product.id,product.name,product.imageURL,product.price)"
          />

        </div>
      </div>
    </div>
</div>

</template>


<script>
import { mapGetters } from 'vuex';
export default{
    name :"ViewProductPage",
    data(){
        return {
            productId :this.$route.params.productId,
            product:{},
        }
    },
   
    methods:{
      addToCart(id,name,image,price){
    const product = {
            id: id,
            name :name,
            img:image,
            price:price,
        } ;
     this.$store.dispatch('cartModule/setCart',product)
  }
    },
    
    mounted(){
  //this.getProducts();
  this.$store.dispatch("productModule/getProducts")
  this.product= this.productState.products.find(product=>product.id == this.productId)

},
computed: mapGetters({
  productState:"getProdutsState"
})

}
</script>

