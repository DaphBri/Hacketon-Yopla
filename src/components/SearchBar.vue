<template>
  <div class="searchBar">
    <form class="searchBar--form">
      <!-- Name -->
      <input
        class="inputName medium sans light"
        type="text"
        id="myInputName"
        v-model="input.restoName"
        placeholder="Nom du restaurant"
      >
      <!-- Type -->
      <input
        class="inputType medium sans light"
        list="cuisines"
        name="cuisine"
        placeholder="Type de cuisine"
        v-model="input.restoType"
      >
      <datalist id="cuisines">
        <OneType v-for="(t, index) in TypeList" v-bind:key="index" v-bind:type="t.cuisineType"/>
      </datalist>
      <!-- Submit -->
      <!-- <router-link :to="'/'+ input.restoName + input.restoType"> -->
      <router-link
        class="inputSubmit medium sans light"
        :to="'/?name='+ input.restoName + '&cuisineType=' + input.restoType"
      >Go</router-link>
      <!-- <button class="inputSubmit medium sans light" type="submit" value="Search">Go</button> -->
      <!-- </router-link> -->
    </form>
  </div>
</template>

<script>
import OneType from "./OneType.vue";

export default {
  name: "SearchBar",

  components: {
    OneType
  },
  data() {
    return {
      input: {
        restoName: "",
        restoType: ""
      },
      TypeList: [
        { cuisineType: "Thai" },
        { cuisineType: "Vietnamien" },
        { cuisineType: "Chinois" },
        { cuisineType: "Japonais" },
        { cuisineType: "Americain" },
        { cuisineType: "Belge" },
        { cuisineType: "Francais" },
        { cuisineType: "Mexicain" },
        { cuisineType: "Italien" },
        { cuisineType: "Indien" }
      ]
    };
  },
  methods: {
    searcher() {
      this.$emit("recherche", this.input);
    }
  }
};
</script>

<style lang="scss">
.searchBar {
  padding: 16px;
  margin: 0 auto;
  max-width: 1000px;
  @media screen and (max-width: 640px) {
    padding: 0;
    width: 0;
    overflow: hidden;
  }
  .searchBar--form {
    width: 100%;
    height: 48px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    border-radius: 4px;
    background: #fff;
    .inputName {
      color: #666;
      border: none;
      width: 50%;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      padding: 8px 16px;
      &::placeholder {
        color: #ccc;
        opacity: 1;
      }
    }
    .inputType {
      color: #666;
      &::placeholder {
        color: #ccc;
        opacity: 1;
      }
      width: 50%;
      border: none;
      border-left: 2px solid #ccc;
      margin: 8px 0;
      padding: 0px 8px;
      background: transparent;
      &:focus {
        outline: none;
      }
    }
    .inputSubmit {
      cursor: pointer;
      background: #c00;
      color: white;
      border: none;
      margin: 0;
      padding: 0;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      padding: 8px 16px;
      &:hover {
        background: #a00;
      }
    }
  }
}
</style>