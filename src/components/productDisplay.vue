<template>
  <div class="productList">
    <div
      class="productDetail"
      v-for="product in currentProducts"
      :key="product.id"
      ref="products"
    >
      <productBox :product="product" />
    </div>
    <i aria-hidden="true"></i>
    <i aria-hidden="true"></i>
    <i aria-hidden="true"></i>

    <div class="pagination">
      <h4>Showing {{ startIdx + 1 }} - {{ endIdx }} of {{ totalProducts }}</h4>
      <button :disabled="firstPage" @click="prvPage">&#60;</button>
      <button :disabled="lastPage" @click="nxtPage">&#62;</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { productList } from "@/utils";
import productBox from "@/components/productBox.vue";
import { perPageProductCnt } from "@/constants";
import { productTemplate } from "@/types/productData.interface";

export default Vue.extend({
  name: "productDisplay",
  data() {
    return {
      perPageProductCnt,
      products: productList.getList(),
      currentPageNumber: -1,
      currentProducts: new Array<productTemplate>(),
      totalProducts: productList.getLength(),
      startIdx: 0,
      endIdx: 0,
    };
  },
  components: {
    productBox,
  },
  created() {
    this.currentPageNumber = 0;
  },
  methods: {
    prvPage() {
      this.currentPageNumber--;
    },
    nxtPage() {
      this.currentPageNumber++;
    },
  },
  computed: {
    lastPage(): boolean {
      return (
        (this.currentPageNumber + 1) * this.perPageProductCnt >=
        this.totalProducts
      );
    },
    firstPage(): boolean {
      return this.currentPageNumber === 0;
    },
  },
  watch: {
    currentPageNumber() {
      this.startIdx = this.currentPageNumber * perPageProductCnt;
      this.endIdx = Math.min(
        this.totalProducts,
        this.startIdx + perPageProductCnt
      );
      this.currentProducts = this.products.slice(this.startIdx, this.endIdx);
    },
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

.productDetail {
  width: 23%;
  margin-bottom: 2%;
}

i {
  width: 23%;
}

button {
  cursor: pointer;
  font-size: 40px;
  border: 0;
  background-color: white;
}

button:disabled {
  cursor: not-allowed;
  color: gainsboro;
}

.pagination h4 {
  padding-top: 10px;
  margin: 0;
}

.pagination {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0% 2%;
  padding-top: 0;
  font-size: 20px;
  align-items: center;
}
</style>
