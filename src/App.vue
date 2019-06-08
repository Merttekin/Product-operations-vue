<template>
  <div>
    <Header/>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/shared/Header.vue";
import Footer from "./components/shared/Footer.vue";
import './assets/css/loading.css';
export default {
  components: {
    Header,
    Footer
  },
  created() {
    this.$store.dispatch("getTradeResult");
    this.$store.dispatch("initApp");
  }
};
</script>

<style>
body{
  background-color: #a7a0bb5c;
}
.pb70 {
  padding-bottom: 70px;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.3s ease-out;
}
.fade-leave {
}
.fade-leave-active {
  transition: opacity 0.3s ease-out;
  opacity: 0;
}
</style>
