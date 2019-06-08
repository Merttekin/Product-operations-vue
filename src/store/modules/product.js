/* eslint-disable no-console */
import Vue from 'vue'
import { router } from "../../router";

const state = {
    products: []
}

const getters = {
    getProducts(state) {
        return state.products;
    },
    getProduct(state) {
        return key => state.products.filter(element => {
            return element.key == key;
        })
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
        Vue.http.get('https://urun-islemleri-ce787.firebaseio.com/products.json')
        .then(resp => {
            console.log(resp);
            let data = resp.body;
            for(let key in data){
                data[key].key = key;
                commit('updateProductList', data[key]);
            }
        })
    },
    saveProduct({ dispatch, commit, state }, payload){
        Vue.http.post('https://urun-islemleri-ce787.firebaseio.com/products.json', payload)
        .then((resp) => {
            //Ürün listesinin güncellenmesi
            payload.key = resp.body.name;
            commit('updateProductList', payload);
            //Alış, Satış bakiyelerinin güncellenmesi
            let tradeResult = {
                purchase: payload.purchase,
                sale: 0,
                count: payload.count
            }
            dispatch('setTradeResult', tradeResult);
            router.replace('/');
            
        })
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