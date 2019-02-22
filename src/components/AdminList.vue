<template>
  <div class="adminList">
    <div class="legend sans small light">
      <div class="col">Nom du restaurant</div>
      <div class="col">Type de cuisine</div>
      <div class="col">Adresse</div>
      <div class="col"></div>
    </div>

    <!-- AdminListItem -->
    <AdminListItem
      v-for="(item, index) in itemList"
      v-bind:key="index"
      v-bind:itemName="item.name"
      v-bind:itemType="item.cuisinetype"
      v-bind:itemPostalCode="item.postalcode"
      v-bind:itemCity="item.city"
      v-bind:itemId="item.idrestaurant"
      v-bind:isHidden="item.isHidden"
      @delItem="deleteItem($event)"
    />
  </div>
</template>

<script>
import AdminListItem from "./AdminListItem.vue";
import axios from "axios";

export default {
  name: "AdminList",
  props: ["itemList"],
  components: {
    AdminListItem
  },
  methods: {
    //ici delete function axios.delete + idrestaurant
    deleteItem: function(itemId) {
      console.log(itemId);
      axios
        .delete(
          "//feedme-bf.azurewebsites.net/api/restaurants/deleterestaurant?id=" +
            itemId
        )
        .then(response => {
          this.item.splice(itemId, 1);
          console.log(this.itemId);
        });
    }
  }
};
</script>

<style lang="scss">
.adminList {
  .legend {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 16px;
    .col {
      padding: 8px 16px;
    }
    .col:nth-child(1) {
      flex: 5;
    }
    .col:nth-child(2) {
      flex: 3;
    }
    .col:nth-child(3) {
      flex: 4;
    }
    .col:nth-child(4) {
      width: 120px;
    }
  }
}
</style>

