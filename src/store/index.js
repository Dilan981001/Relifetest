import {createStore} from "vuex"
// import state from './state'
// import * as actions from './actions'
// import * as mutations from './mutations'
// import * as getters from './getters'
import productModule from "@/store/modules/products.module"
import cartModule from "./modules/cart.module";

export default createStore({
    state:{
        productState: productModule.state,
        cartState:cartModule.state
    },
    actions:{},
    mutations:{},
    modules:{
        productModule,
        cartModule
    },
    getters:{
        getProdutsState: function(state){
            return state.productState.productsList;
        },
        getCartState :function(state){
            return state.cartState.cart;
        }
    }
})

