const state = {
    products: []
}

const getters = {
    getProducts(state) {
        return state.products;
    },
    getProduct(state) {

    }
}

const mutations = {
    updateProductList(state, payload) {
        state.products.push(payload);
    }
}

const actions = {
    initApp({ commit }){
        //Vue Resource
    },
    saveProduct({ commit }, payload){

    },
    sellProduct({ commit }, payload){

    }
}

export default {
    state,
    getters,
    mutations,
    actions
}