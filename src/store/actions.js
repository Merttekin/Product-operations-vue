/* eslint-disable no-console */
import Vue from 'vue'

export const setTradeResult = ({state, commit}, payload) => {
    commit('updateTradeResult', payload);
    let tradeData = {
        purchase: state.purchase,
        sale: state.sale
    }
    Vue.http.put('https://urun-islemleri-ce787.firebaseio.com/trade-result.json', tradeData)
    .then(resp => {
        console.log(resp);
    })
}

export const getTradeResult = ({commit}) => {
    Vue.http.get('https://urun-islemleri-ce787.firebaseio.com/trade-result.json')
    .then(resp => {
        console.log(resp);
        commit('updateTradeResult', resp.body);
    })
}