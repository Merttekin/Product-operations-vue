<template>
  <div class="container pb70">
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Ürün Çıkışı</h3>
          <hr>
          <div class="form-group">
            <label>Ürün Adı</label>
            <select class="form-control" v-model="selectedProduct" @change="productSelected">
              <option disabled selected>Bir ürün seçiniz..</option>
              <option
              :disabled="product.count == 0"
                v-for="product in getProducts"
                :key="product.key"
                :value="product.key"
              >{{product.title}}</option>
            </select>
          </div>
          <div class="card mb-2 border border-danger" v-if="product !== null">
            <div class="card-body">
              <div class="row">
                <div class="col-12 text-center">
                  <div class="mb-3">
                    <span class="badge badge-info">Stok : {{product.count}}</span>
                    <span class="badge badge-primary">Fiyat : {{product.purchase | currency}}</span>
                  </div>
                  <p class="border border-warning p-2 text-secondary">
                    {{product.description}}
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
import { mapGetters } from "vuex";
export default {
  data(){
    return{
      selectedProduct: null,
      product: null
    }
  },
  computed: {
    ...mapGetters(["getProducts"])
  },
  methods: {
    productSelected(){
      console.log(this.selectedProduct);
      this.product = this.$store.getters.getProduct(this.selectedProduct)[0];
    }
  }
};
</script>

<style scoped>
.border-danger {
  border-style: dashed !important;
}
</style>
