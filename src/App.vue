<template>
  <div id="app">
    <header>
      <router-link
        :to="{
          name: 'Home',
        }"
        tag="h1"
      >
        <a>Zeta</a>
      </router-link>
      <h2>Cipher - Authentication Center</h2>
    </header>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { productList } from "@/utils";
export default Vue.extend({
  name: "app",
  created() {
    productList.initialise();
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html {
  background-color: gainsboro;
}

header {
  top: 0;
  left: 0;
  position: fixed;
  padding-left: 3%;
  width: 100%;
  height: 70px;
  background: #0d0d0d;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 2;
}

header a {
  color: #f2f2f2;
  text-decoration: none;
}

header a:hover {
  text-decoration: underline;
}

header h1,
header h2 {
  margin: 10px;
}

header h2 {
  color: #999999;
}
</style>

