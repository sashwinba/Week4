<template>
  <div class="productList">
    <div class="productDetail" v-for="product in products" :key="product.id">
      <productBox :product="product" />
    </div>
    <i aria-hidden="true"></i>
    <i aria-hidden="true"></i>
    <i aria-hidden="true"></i>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { productList } from "@/utils";
import productBox from "@/components/productBox.vue";

export default Vue.extend({
  name: "productDisplay",
  data() {
    return {
      products: productList.getList(),
    };
  },
  components: {
    productBox,
  },
});
</script>

<style scoped>
.productList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.productDetail {
  border: 1px solid black;
  border-radius: 2%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
}

i,
.productDetail {
  width: 23%;
  margin-bottom: 2%;
}
</style>
