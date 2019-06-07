<template>
  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #563F7A">
    <router-link to="/" tag="a" class="navbar-brand">Ürün Listesi</router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link active-class="active" to="/urun-islemleri" tag="li" class="nav-item">
          <a class="nav-link">Ürün İşlemleri</a>
        </router-link>

        <router-link active-class="active" to="/urun-cikisi" tag="li" class="nav-item">
          <a class="nav-link">Ürün Çıkışı</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>
