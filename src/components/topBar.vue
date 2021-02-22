<template>
  <div class="top">
    <transition name="fade" appear>
      <div class="content" v-if="type === 'create'">
        <div class="text">
          <router-link tag="h2" class="link" to="/">Products</router-link>
          <p>
            An overview of all your products available in the Authentication
            Center
          </p>
        </div>
        <button @click="addProduct">+ Create Product</button>
      </div>

      <div class="content" v-else-if="type === 'creating'">
        <div class="text">
          <router-link tag="p" class="link" to="/">Products/</router-link>
          <h2>Create Product</h2>
        </div>
      </div>

      <div class="content" v-else-if="type === 'edit'">
        <div class="text">
          <router-link tag="p" class="link" to="/">Products/</router-link>
          <h2>{{ getName() }}</h2>
          <p>{{ getDescription() }}</p>
        </div>
        <button @click="editProduct">Edit Product</button>
      </div>

      <div class="content" v-else-if="type === 'editing'">
        <div class="text">
          <p>
            <router-link tag="span" class="link" to="/">Products/</router-link>
            <router-link tag="span" class="link" :to="getLink()"
              >Product Details/</router-link
            >
          </p>
          <h2>Edit Product</h2>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { productList } from "@/utils";

export default Vue.extend({
  name: "topBar",
  props: {
    type: {
      type: String,
      default: function () {
        return "create";
      },
    },
    id: {
      type: Number,
      default: function () {
        return 1;
      },
    },
  },
  methods: {
    addProduct() {
      this.$router.push("/addProduct");
    },
    editProduct() {
      this.$emit("edit", true);
    },
    getName() {
      return productList.getEntity(this.id, "name");
    },
    getDescription() {
      return productList.getEntity(this.id, "description");
    },
    getLink() {
      const link = "/products/" + productList.getEntity(this.id, "id");
      return link;
    },
  },
});
</script>

<style scoped>
.top {
  background-color: #34568b;
  margin: 1% 0;
  padding: 1px;
  color: white;
}

.link:hover {
  transform: scale(1.01);
  cursor: pointer;
  text-decoration: underline;
}
.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
}

.text {
  width: 60%;
}

h2,
p {
  margin: 1%;
}

button {
  cursor: pointer;
  border: 1px solid black;
  text-align: center;
  font-size: 18px;
  border-radius: 5px;
  padding: 15px 30px;
  margin: 2px 10px;
}

button:hover {
  transform: scale(1.1);
  text-decoration: underline;
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
