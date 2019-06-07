<template>
  <div>
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/shared/Header.vue";
import Footer from "./components/shared/Footer.vue";
export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style>
.pb70 {
  padding-bottom: 70px;
}
</style>
