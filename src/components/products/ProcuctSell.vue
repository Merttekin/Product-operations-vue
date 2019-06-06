<template>
  <div class="container pb70">
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Ürün Çıkışı</h3>
          <hr>
          <div class="form-group">
            <label>Ürün Adı</label>
            <select class="form-control">
              <option value="1">Ürün 1</option>
              <option value="1">Ürün 2</option>
              <option value="1">Ürün 3</option>
              <option value="1">Ürün 4</option>
              <option value="1">Ürün 5</option>
            </select>
          </div>
          <div class="card mb-2 border border-danger">
            <div class="card-body">
              <div class="row">
                <div class="col-12 text-center">
                  <div class="mb-3">
                    <span class="badge badge-info">Stok : 4</span>
                    <span class="badge badge-primary">Fiyat : 100,5 TL</span>
                  </div>
                  <p class="border border-warning p-2 text-secondary">
                    Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Assumenda debitis deleniti eos impedit iste numquam quos sit.
                    Dignissimos, mollitia nemo officia reiciendis repellendus rerum velit. Eos libero magnam
                    quas tempore!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label>Adet</label>
            <input type="text" class="form-control" placeholder="Ürün adetini giriniz..">
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

<style scoped>
.border-danger {
  border-style: dashed !important;
}
</style>
