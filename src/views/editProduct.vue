<template>
  <div class="editProduct">
    <topBar type="editing" :id="id" />
    <detailsform
      @modifiedProduct="edit"
      @cancel="cancel"
      :name="product.name"
      :description="product.description"
      :cardNetwork="product.cardNetwork"
      :version="product.version"
      :bin="product.bin"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import topBar from "@/components/topBar.vue";
import detailsform from "@/components/detailsForm.vue";
import { productList, getId } from "@/utils";

export default Vue.extend({
  name: "editProduct",
  components: {
    topBar,
    detailsform,
  },
  props: {
    productId: {
      type: String,
      required: true,
      default: function () {
        return "PRO00001";
      },
    },
  },
  data() {
    return {
      product: productList.getProduct(),
      id: 1,
    };
  },
  created() {
    this.id = getId(this.productId);
    this.product = productList.getProduct(this.id);
  },
  methods: {
    getId,
    cancel() {
      const link = "/products/" + this.product.id;
      this.$router.push(link);
    },
    edit(data: {
      name: string;
      description: string;
      cardNetwork: string;
      version: string;
      bin: string;
    }) {
      this.product.name = data.name;
      this.product.description = data.description;
      this.product.version = data.version;
      productList.editItem(this.id, this.product);
      this.$router.push("/");
    },
  },
});
</script>

<style scoped>
.editProduct {
  margin-top: 80px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
}
</style>