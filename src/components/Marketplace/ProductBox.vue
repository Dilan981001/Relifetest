<template>
  <div
    v-for="product in productState.products"
    :key="product.id"
    class="cursor-pointer image-container q-ma-sm bg-white"
  >
    <q-img
      :src="product.imageURL"
      style="height: 200px; width: 200px"
      @click="ClickProduct(product.id)"
    />
    <div class="product-details text-center">
      <p class="text-weight-bold text-black text-center">{{ product.name }}</p>
      <p style="color: black">RS {{ product.price }}.00</p>
      
   
      <q-btn
      v-if="$route.name === 'AdminProduct'"
        color="primary"
        icon="add_circle"
        label="Edit"
        @click="EditProduct(product.id)"
      />
    
      <q-btn
      v-if="$route.name === 'home'"
            color="primary"
            icon="add_circle"
            label="ADD TO CART"
            @click="addToCart(product.id,product.name,product.imageURL,product.price)"
          />
   

  
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ProductList",
  data() {
    return {};
  },
  methods: {
    ClickProduct(id) {
      this.$router.push({ name: "ViewProduct", params: { productId: id } });
    },
    EditProduct(id) {
      this.$router.push({ name: "AdminEditProduct", params: { id: id } });
    },
    addToCart(id, name, image, price) {
      const product = {
        id: id,
        name: name,
        img: image,
        price: price,
      };
      this.$store.dispatch("cartModule/setCart", product);
    },
    isHome(){
      return this.$route.name==='home'
      
    },
    isAdminProduct(){
      return this.$route.name==='AdminProduct'
    }
  },
  mounted() {
    //this.getProducts();
    this.$store.dispatch("productModule/getProducts");
  },
  computed: mapGetters({
    productState: "getProdutsState",
  }),
};
</script>

<style>
.image-container {
  border: 10px solid white;
  width: 220px;
}
</style>
