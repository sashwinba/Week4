<template>
  <div class="detailsForm">
    <h1>Basic Information</h1>
    <h3>Enter the basic details about your product</h3>
    <hr class="horizontalRule" />
    <transition name="fade" appear>
      <form @submit.prevent>
        <fieldset>
          <label for="name">Product Name</label>
          <input
            type="text"
            id="name"
            v-model.trim="product.name"
            placeholder="Enter Name...."
          />
        </fieldset>

        <fieldset>
          <label for="description">Description</label>
          <textarea
            id="description"
            cols="50"
            rows="5"
            v-model.trim="product.description"
            placeholder="Enter Description...."
          />
        </fieldset>

        <fieldset>
          <label for="cardNetwork">Card Network</label>
          <div class="cardNetwork">
            <div
              class="card"
              :style="{
                'background-color':
                  cardNetworkLogos[product.cardNetwork].logoBgColor,
              }"
            >
              <img
                class="logo"
                :src="cardNetworkLogos[product.cardNetwork].logoURL"
                :alt="product.cardNetwork"
              />
            </div>
            <select
              class="cardSelect"
              v-model="product.cardNetwork"
              :disabled="disabled"
            >
              <option
                v-for="cardNetwork in cardNetworks"
                :key="cardNetwork"
                :value="cardNetwork"
              >
                {{ cardNetwork }}
              </option>
            </select>
          </div>

          <div class="version">
            <label for="version">Protocol Version</label>
            <select v-model="product.version">
              <option
                v-for="version in versions"
                :key="version"
                :value="version"
              >
                {{ getVersion(version) }}
              </option>
            </select>
          </div>
        </fieldset>

        <fieldset>
          <label for="bin">BIN No.</label>
          <input
            type="text"
            id="bin"
            :disabled="disabled"
            v-model.trim="product.bin"
            placeholder="Enter BIN No..."
          />
        </fieldset>

        <button class="submit" @click="submit">Submit</button>
        <button class="cancel" @click="cancel">Cancel</button>
      </form>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { getLogos, getVersion } from "@/utils";
import { cardNetworks, versions } from "@/constants";
export default Vue.extend({
  name: "detailsForm",
  data() {
    return {
      product: {
        name: this.name,
        description: this.description,
        cardNetwork: this.cardNetwork,
        version: this.version,
        bin: this.bin,
      },
      disabled: false,
      cardNetworks: cardNetworks,
      cardNetworkLogos: getLogos(),
      versions: versions,
    };
  },
  created() {
    if (this.name !== "") {
      this.disabled = true;
    }
  },
  props: {
    name: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },

    cardNetwork: {
      type: String,
      default: "visa",
    },

    version: {
      type: String,
      default: "threeDSecure_2_0",
    },

    bin: {
      type: String,
      default: "",
    },
  },
  methods: {
    getVersion,
    submit() {
      if (this.product.name === "" || this.product.bin === "") {
        alert("Mandatory Fields Required");
      } else {
        this.$emit("modifiedProduct", this.product);
      }
    },
    cancel() {
      this.$emit("cancel");
    },
  },
});
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu&display=swap");
.detailsForm {
  font-family: "Ubuntu", sans-serif;
  text-align: left;
  border: 1px solid #2626c0;
  border-radius: 10px;
  margin: 0% auto;
  width: 80%;
}

.horizontalRule {
  border: 0.1px solid #01010c;
}
h1,
h3 {
  margin: 1%;
}

h3 {
  color: #01010c5d;
}

form {
  padding-left: 3px;
}

fieldset {
  border: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
}

label {
  padding: 2% 0%;
  font-size: 24px;
  width: 15%;
}

input,
textarea {
  width: 40%;
  font-size: 20px;
  border: 0.1px solid;
  padding: 5px;
  /* border-radius: 6px; */
}

select {
  width: 200px;
  font-size: 20px;
  height: 30%;
}

.cardSelect {
  margin: 2%;
}

.version {
  width: 20%;
  padding-right: 0;
}
.cardNetwork {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 250px;
}

.version {
  width: 40%;
  margin-left: 5%;
}

.logo {
  height: 30px;
  width: 50%;
  margin-left: 20%;
}

.card {
  width: 100%;
  padding: 2% 0%;
  border-radius: 5px;
}

button {
  cursor: pointer;
  border: 1px solid black;
  text-align: center;
  font-size: 14px;
  border-radius: 5px;
  padding: 15px 30px;
  margin: 2px 10px;
}

.submit {
  background-color: #2626c0;
  color: white;
}

.cancel {
  background-color: white;
  color: black;
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
