<template>
  <div>
    <Header/>
    <appContainer/>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/shared/Header.vue";
import Footer from "./components/shared/Footer.vue";
import ProductPurchase from "./components/products/ProductPurchase.vue";
import ProductSell from "./components/products/ProcuctSell.vue";
import ProductList from './components/products/ProductList.vue';
export default {
  components: {
    Header,
    Footer,
    appContainer: ProductList
  }
};
</script>

<style>
.pb70 {
  padding-bottom: 70px;
}
</style>
