<template>
  <section class="detailspage">
    <Header @recherche="searcher($event)"/>
    <DetailedResto
      :imageBig="id.urlthumbnail"
      :rating="id.rating"
      :name="id.name"
      :adress="id.adress"
      :city="id.city"
      :postalcode="id.postalcode"
      :phone="id.phone"
      :dishesList="id.dishes"
    />
  </section>
</template>

<script>
import Header from "@/components/Header.vue";
import DetailedResto from "@/components/DetailedResto.vue";
import axios from "axios";

export default {
  name: "detailspage",
  components: {
    DetailedResto,
    Header
  },
  data() {
    return {
      id: []
    };
  },
  //alert(this.$route.params.id)
  //je dois faire un appel ajax avec axios vers 'http://feedme-bf.azurewebsites.net/api/restaurants/' + this.$route.params.id
  // et je mettrai response.data dans une data de ma vue et je passerai ça aux props de DetailedResto
  //response.data sera un objet
  created() {
    axios
      .get(
        "http://feedme-bf.azurewebsites.net/api/restaurants/getrestaurantsdetails?id=" +
          this.$route.params.id
      )
      .then(response => {
        this.id = response.data;
      });
  }
};
</script>

<style lang="scss">
.detailspage {
  min-height: 100vh;
  width: 100%;
}
</style>