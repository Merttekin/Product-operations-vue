export const updateTradeResult = (state, payload) => {
    if (payload.count) {
        state.purchase += parseFloat(payload.purchase) * parseInt(payload.count);
        state.sale += parseFloat(payload.sale) * parseInt(payload.count);
    } else {
        state.purchase += parseFloat(payload.purchase);
        state.sale += parseFloat(payload.sale);
    }
    state.balance = parseFloat(payload.sale) - parseFloat(payload.purchase);
}