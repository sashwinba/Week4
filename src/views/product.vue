<template>
  <div class="product">
    <topBar type="edit" :id="id" @edit="editProduct" />
    <div class="text">
      <h2>Basic Information</h2>
      <table class="infoTable">
        <tr>
          <td>Product Name:</td>
          <td>{{ productInfo.name }}</td>
        </tr>

        <tr>
          <td>Product ID:</td>
          <td>{{ productInfo.id }}</td>
        </tr>

        <tr>
          <td>Description:</td>
          <td>{{ productInfo.description }}</td>
        </tr>

        <tr>
          <td>BIN Number :</td>
          <td>{{ productInfo.bin }}</td>
        </tr>

        <tr>
          <td>Connector URL:</td>
          <td>
            <a :href="productInfo.config.connectorURL">
              {{ productInfo.config.connectorURL }}
            </a>
          </td>
        </tr>

        <tr>
          <td>Card Network</td>
          <td>
            <div class="cardNetwork">
              <img
                :src="cardNetworkLogos[productInfo.cardNetwork].logoURL"
                class="logo"
                alt="productInfo.cardNetwork"
                :style="{
                  'background-color':
                    cardNetworkLogos[productInfo.cardNetwork].logoBgColor,
                }"
              />
              <p>{{ productInfo.cardNetwork }}</p>
            </div>
          </td>
        </tr>

        <tr>
          <td>Protocol Version:</td>
          <td>{{ getVersion(productInfo.version) }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import topBar from "@/components/topBar.vue";
import { productList, getLogos, getVersion, getId } from "@/utils";

export default Vue.extend({
  name: "product",
  data() {
    return {
      products: productList.getList(),
      productInfo: productList.getProduct(),
      cardNetworkLogos: getLogos(),
      id: 1,
    };
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
  created() {
    this.id = getId(this.productId);
    this.productInfo = productList.getProduct(this.id);
  },
  methods: {
    getVersion,
    getId,
    editProduct() {
      this.$router.push({
        name: "EditProduct",
        params: {
          id: this.productInfo.id,
        },
      });
    },
  },
  components: {
    topBar,
  },
});
</script>

<style scoped>
.product {
  margin-top: 80px;
  width: 100%;
  background-color: white;
}

.logo {
  height: 50px;
  margin-right: 20px;
}
.text {
  margin-left: 5%;
  text-align: left;
}
.infoTable {
  width: 100%;
}

.cardNetwork {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>