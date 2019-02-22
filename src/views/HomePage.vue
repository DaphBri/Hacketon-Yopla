<template>
  <section class="homepage">
    <Header/>
    <ResultList :restoList="restoList"/>
    <div class="loader" v-if="isLoading">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import Header from "@/components/Header.vue";
import ResultList from "@/components/ResultList.vue";

export default {
  name: "homepage",
  components: {
    Header,
    ResultList
  },
  data() {
    return {
      restoList: [],
      isLoading: true
    };
  },
  methods: {
    searcher() {
      let name = "";
      let cuisine = "";

      if (this.$route.query.name != undefined) {
        name = this.$route.query.name;
      }

      if (this.$route.query.cuisineType != undefined) {
        cuisine = this.$route.query.cuisineType;
      }

      axios
        .get(
          "http://feedme-bf.azurewebsites.net/api/restaurants/getrestaurants?name=" +
            name +
            "&cuisineType=" +
            cuisine
        )
        .then(response => {
          this.restoList = response.data;
          this.isLoading = false;
        });
    }
  },
  //rooter: depuis le "GO" : récuperation de contenu avec les input.restoName et restoType
  created() {
    this.searcher(); //voir fonction du export axios > searcher()
  },
  watch: {
    //on doit "observer" le changement de route et rafraichir le composant
    $route() {
      this.searcher();
    }
  }
};
</script>

<style lang="scss">
.homepage {
  min-height: 100vh;
  width: 100%;
  .loader {
    position: absolute;
    top: calc(100% / 3);
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    display: flex;
    .dot {
      height: 32px;
      width: 32px;
      margin: 8px;
      border-radius: 50%;
      background: #c00;
      position: relative;
      &:nth-child(1){
        animation: dot1 .4s ease infinite alternate;
      }
      &:nth-child(2){
        animation: dot1 .4s ease infinite alternate .2s;
      }
      &:nth-child(3){
        animation: dot1 .4s ease infinite alternate .4s;
      }
    }
    @keyframes dot1 {
      0% {
        top: 0px;
      } 50% {
        top: 20px;
      } 100% {
        top: 0px;
      }
    }
  }
}
</style>

