<template>
  <div class="home">
    <topBar type="create" />
    <productDisplay />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import productDisplay from "@/components/productDisplay.vue";
import topBar from "@/components/topBar.vue";

export default Vue.extend({
  name: "Home",
  components: {
    topBar,
    productDisplay,
  },
});
</script>

<style scoped>
.home {
  margin-top: 80px;
  width: 100%;
  background-color: white;
}
</style>