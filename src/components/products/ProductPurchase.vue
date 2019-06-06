<template>
  <div class="container pb70">
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Ürün İşlemleri</h3>
          <hr>
          <div class="form-group">
            <label>Ürün Adı</label>
            <input type="text" class="form-control" placeholder="Ürün adını giriniz..">
          </div>
          <div class="form-group">
            <label>Adet</label>
            <input type="text" class="form-control" placeholder="Ürün adetini giriniz..">
          </div>
          <div class="form-group">
            <label>Fiyat</label>
            <input type="text" class="form-control" placeholder="Ürün fiyatı giriniz..">
          </div>
          <div class="form-group">
            <label>Açıklama</label>
            <textarea
              cols="30"
              rows="5"
              placeholder="Ürüne ait bir açıklama giriniz..."
              class="form-control"
            ></textarea>
          </div>
          <hr>
          <button class="btn btn-primary">Kaydet</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
