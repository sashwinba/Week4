<template>
  <div class="productBox">
    <transition name="slide-fade" appear>
      <div
        class="card"
        :style="{
          'background-color': cardNetworkLogos[product.cardNetwork].logoBgColor,
        }"
      >
        <img
          class="logo"
          :src="cardNetworkLogos[product.cardNetwork].logoURL"
          :alt="product.cardNetwork"
        />
      </div>
    </transition>
    <div class="productDetails">
      <h1 @click="redirect">{{ product.name }}</h1>
      <h2>{{ product.id }}</h2>
      <h3>BIN - {{ product.bin }}</h3>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { productTemplate } from "@/types/productData.interface";
import { getLogos } from "@/utils";

export default Vue.extend({
  name: "productBox",
  props: {
    product: {
      type: Object as () => productTemplate,
    },
  },
  data() {
    return {
      cardNetworkLogos: getLogos(),
    };
  },
  methods: {
    redirect() {
      this.$router.push(`products/${this.product.id}`);
    },
  },
});
</script>

<style scoped>
.productBox {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.productDetails {
  text-align: left;
  padding-left: 5%;
  text-decoration: none;
}

h1 {
  cursor: pointer;
}

h1:hover {
  transform: scale(1.05);
  text-decoration: underline;
}

h2 {
  background-color: gainsboro;
  width: 40%;
}

.logo {
  float: left;
  height: 50px;
}

.card {
  width: 100%;
  padding: 4%;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
