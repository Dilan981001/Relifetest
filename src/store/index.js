import {createStore} from "vuex"
// import state from './state'
// import * as actions from './actions'
// import * as mutations from './mutations'
// import * as getters from './getters'
import productModule from "@/store/modules/products.module"

export default createStore({
    state:{
        productState: productModule.state
    },
    actions:{},
    mutations:{},
    modules:{
        productModule
    },
    getters:{
        getProdutsState: function(state){
            return state.productState.productsList;
        }
    }
})

