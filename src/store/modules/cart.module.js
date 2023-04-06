export default {
    namespaced:true,
    state:{
        cart:[]
    },
    mutations:{
        SET_ITEM: (state, item) => {
            let result = state.cart;
                
            let resObj = result.find(resObj => resObj.id === item.id);
            resObj ? resObj.count++ : result.push({'id':item.id, 'title': item.title, 'img':item.img, "price":item.price, 'count': 1});
            state.cart = result
        },
        DEL_ITEM:(state,id)=>{
          state.cart.forEach((element,index) => {
                element.id===id ? state.cart.splice(index,1) : ''
          })
        },
       
    },
    actions:{
       setCart:function({commit},payload){
        return commit("SET_ITEM",payload);
       }
    }
}