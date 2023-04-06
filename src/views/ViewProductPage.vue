<template>
 
<div>
    <div class="q-pa-md">
      <div class="row items-start">
        <div class="col-12 col-md-6">
          <q-img :src="product.images[0]" />
        </div>
        <div class="column items-center justify-center col-12 col-md-6  ">
          <h2 class="text-h5">{{ product.title }}</h2>
          <div class="text-subtitle1">{{ product.description }}</div>
          <div class="text-subtitle1">Stock : {{ product.stock }}</div>
          <div class="text-subtitle1">Brand : {{ product.brand }}</div>
          <div class="text-subtitle1">Category : {{ product.category }}</div>
          <div class="text-h6 font-weight-bold">{{ product.price }}</div>
          <q-rating
            v-model="product.rating"
            color="orange"
            icon="star"
            readonly
          />
          <q-btn
            class="q-mt-md"
            color="primary"
            label="ADD TO CART"
            @click="addToCart(product.id,product.name,product.thumbnail,product.price)"
          />
          
        </div>
      </div>
    </div>
</div>

</template>


<script>
import  {ProductService}  from "@/services/ProductService"
export default{
    name :"ViewProductPage",
    data(){
        return {
            productId :this.$route.params.productId,
            product:{}
        }
    },
    created: async function(){
      try {
        let response = await ProductService.getProduct(this.productId)
        this.product = response.data;
     
      } catch (error) {
        console.log(error);
      }
    },
    methods:{
      addToCart(id,title,image,price){
    const product = {
            id: id,
            title :title,
            img:image,
            price:price,
        } ;
     this.$store.dispatch('cartModule/setCart',product)
  }
    }
}
</script>

