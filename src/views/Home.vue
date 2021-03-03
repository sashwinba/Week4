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
  data() {
    return {
      show: false,
      content: "",
    };
  },
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
  border-radius: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>