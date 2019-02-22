<template>
  <div class="resultList" id="container">
    <ResultSingle
      v-for="(r, index) in restoList"
      :key="index"
      :thumbnail="r.urlthumbnail"
      :rating="r.rating"
      :name="r.name"
      :adress="r.adress"
      :city="r.city"
      :postalcode="r.postalcode"
      :idrestaurant="r.idrestaurant"
    />
  </div>
</template>

<script>
import ResultSingle from "@/components/ResultSingle.vue";

export default {
  name: "ResultList",
  props:['restoList'],
  components: {
    ResultSingle
  }
};
</script>

<style lang="scss">

.resultList {
  margin: 0 auto;
  margin-top: 112px;
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
}


</style>
