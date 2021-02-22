<template>
  <div class="addProduct">
    <topBar type="creating" />
    <detailsform @modifiedProduct="add" @cancel="cancel" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import topBar from "@/components/topBar.vue";
import detailsform from "@/components/detailsForm.vue";
import { productTemplate } from "@/types/productData.interface";
import { productList, getURL } from "@/utils";
import { authPlans } from "@/constants";

export default Vue.extend({
  name: "addProduct",
  components: {
    topBar,
    detailsform,
  },
  methods: {
    add(data: {
      name: string;
      description: string;
      cardNetwork: string;
      version: string;
      bin: string;
    }) {
      const newProduct: productTemplate = {
        id: "",
        name: data.name,
        bin: data.bin,
        cardNetwork: data.cardNetwork,
        config: {
          connectorURL: "",
        },
        description: data.description,
        version: data.version,
        authPlans: authPlans,
      };
      newProduct.config.connectorURL = getURL(newProduct.cardNetwork);
      productList.addItem(newProduct);
      this.$router.push("/");
    },
    cancel() {
      this.$router.push("/");
    },
  },
});
</script>

<style scoped>
.addProduct {
  margin-top: 80px;
  width: 100%;
  background-color: white;
}
</style>