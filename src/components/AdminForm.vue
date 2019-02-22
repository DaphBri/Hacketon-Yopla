<template>
  <form class="adminForm" @submit.prevent="postResto">
    <div class="col col--left">
      <div class="title medium sans light">Nom du restaurant</div>
      <input class="inputName medium sans light" type="text" v-model="newResto.name">
      <div class="title medium sans light">Type de cuisine</div>
      <input
        class="inputType medium sans light"
        list="cuisines"
        name="cuisine"
        placeholder="Type de cuisine"
        v-model="newResto.cuisinetype"
      >
      <datalist id="cuisines">
        <OneType v-for="(t, index) in TypeList" v-bind:key="index" v-bind:type="t.cuisineType"/>
      </datalist>
      <!-- <input class="inputType medium sans light" type="text" v-model="newResto.cuisinetype"> -->
      <div class="title medium sans light">Téléphone</div>
      <input
        class="inputPhone medium sans light"
        type="text"
        placeholder="04"
        v-model="newResto.phone"
      >
      <div class="title medium sans light">Adresse</div>
      <input
        class="inputStreet medium sans light"
        type="text"
        placeholder="Rue"
        v-model="newResto.adress"
      >
      <input
        class="inputStreet medium sans light"
        type="number"
        placeholder="Code postal"
        v-model="newResto.postalcode"
      >
      <input
        class="inputStreet medium sans light"
        type="text"
        placeholder="Ville"
        v-model="newResto.city"
      >
    </div>
    <div class="col col--right">
      <div class="title medium sans light">Photo d'un plat</div>
      <input
        class="inputStreet medium sans light"
        type="text"
        placeholder="http://"
        v-model="newResto.urlthumbnail"
      >
      <div class="title medium sans light">A la carte</div>
      <div class="dish-and-price">
        <input
          class="inputDish inputStreet medium sans light"
          type="text"
          v-model="newResto.plats[0].name"
        >
        <input
          class="inputPrice inputStreet medium sans light"
          type="number"
          v-model="newResto.plats[0].price"
        >
      </div>
      <div class="dish-and-price">
        <input
          class="inputDish inputStreet medium sans light"
          type="text"
          v-model="newResto.plats[1].name"
        >
        <input
          class="inputPrice inputStreet medium sans light"
          type="number"
          v-model="newResto.plats[1].price"
        >
      </div>
      <div class="dish-and-price">
        <input
          class="inputDish inputStreet medium sans light"
          type="text"
          v-model="newResto.plats[2].name"
        >
        <input
          class="inputPrice inputStreet medium sans light"
          type="number"
          v-model="newResto.plats[2].price"
        >
      </div>
      <div class="dish-and-price">
        <input
          class="inputDish inputStreet medium sans light"
          type="text"
          v-model="newResto.plats[3].name"
        >
        <input
          class="inputPrice inputStreet medium sans light"
          type="number"
          v-model="newResto.plats[3].price"
        >
      </div>
      <div class="dish-and-price">
        <input
          class="inputDish inputStreet medium sans light"
          type="text"
          v-model="newResto.plats[4].name"
        >
        <input
          class="inputPrice inputStreet medium sans light"
          type="number"
          v-model="newResto.plats[4].price"
        >
      </div>
      <button class="submit--btn medium sans light" type="submit">Ajouter le restaurant</button>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import OneType from "./OneType.vue";
export default {
  name: "AdminForm",
  data() {
    return {
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
      ],
      newResto: {
        name: "",
        adress: "",
        postalcode: "",
        phone: "",
        cuisinetype: "",
        urlthumbnail: "http://",
        city: "",
        plats: [
          {
            name: "",
            price: ""
          },
          {
            name: "",
            price: ""
          },
          {
            name: "",
            price: ""
          },
          {
            name: "",
            price: ""
          },
          {
            name: "",
            price: ""
          }
        ]
      }
    };
  },
  methods: {
    postResto() {
      axios.post(
        "http://feedme-bf.azurewebsites.net/api/restaurants/postrestaurant",
        this.newResto
      );

      // .then(response => {
      //   this.questions.push(response.data); // ?
      //   this.newResto.Name = "";
      //   this.newResto.CuisineType = "";
      //   this.newResto.Phone = "",
      //   this.newResto.Adress = "";
      //   this.newResto.PostalCode = "";
      //   this.newResto.City = "";
      //   this.newResto.urlThumbnail = "";
      // })
      // .catch(err => {
      //   this.error = err.response.data;
      // });
    }
  },
  components: {
    OneType
  }
};
</script>

<style lang="scss">
.adminForm {
  display: flex;
  flex-wrap: wrap;
  .col--left {
    margin-right: 16px;
  }
  .col--right {
    margin-left: 16px;
    position: relative;
    .submit--btn {
      cursor: pointer;
      position: absolute;
      width: 100%;
      bottom: 16px;
      right: 0;
      border: none;
      background: #c00;
      color: #fff;
      padding: 8px 16px;
      border-radius: 4px;
      @media screen and (max-width: 940px) {
        position: static;
        margin-top: 32px;
      }
      &:hover {
        background: #a00;
      }
    }
  }
  .col {
    width: calc(50% - 16px);
    @media screen and (max-width: 940px) {
      width: 100%;
      margin-left: 0;
      margin-right: 0;
    }
    .title {
      margin: 16px 0;
    }
    input {
      width: 100%;
      padding: 8px 16px;
      margin-bottom: 16px;
      border: none;
      border-radius: 4px;
      background: #eee;
      color: #666;
      &::placeholder {
        opacity: 1;
        color: #ccc;
      }
      &:focus {
        box-shadow: inset 0 0 8px #ccc;
      }
    }
  }
  .dish-and-price {
    display: flex;
    .inputDish {
      width: calc(75% - 16px);
      margin-right: 16px;
    }
    .inputPrice {
      width: 25%;
    }
  }
}
</style>
