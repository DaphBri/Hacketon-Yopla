<template>
    <div class="detailedResto">
      <div class="restoProfil">
        <div class="title">
          <h3 class="slab big">{{name}}</h3>
          <span class="slab small bold">Adresse : </span>
          <span class="sans small">{{adress}}, {{postalcode}} {{city}}</span> |
          <span class="slab small bold">Téléphone : </span>
          <span class="sans small">{{phone}}</span>
        </div>
        <div class="note">
          <span class="big sans">{{rating}}</span>
          <span class="small sans"> / 10</span>
        </div>
      </div>
      <div class="restoImage-and-restoForm">
        <div class="restoImage--ctn ctn">
          <div class="image">
            <img :src="imageBig">
          </div>
        </div>
        <div class="restoForm--ctn ctn ctn--white">
          <div class="title bb">
            <h3 class="slab big light">Réservation</h3>
          </div>
          <restoForm/>
        </div>
      </div>
      <div class="restoMenu-and-restoNote">
        <div class="restoMenu--ctn ctn ctn--white">
          <div class="title bb">
            <h3 class="slab big light">La carte</h3>
          </div>
          <RestoMenu :dishes="dishesList"/>
        </div>

        <div class="restoNote--ctn ctn ctn--white">
          <div class="title bb">
            <h3 class="slab big light">Notes</h3>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import RestoForm from "@/components/RestoForm.vue";
import RestoMenu from "@/components/RestoMenu.vue";

export default {
  name: "DetailedResto",
  props: [
    "dishesList",
    "name",
    "adress",
    "postalcode",
    "city",
    "phone",
    "rating",
    "imageBig"
  ],

  components: {
    RestoForm,
    RestoMenu
  }
};
</script>

<style lang="scss">
.ctn--white {
  background-color: #fff;
  border-radius: 4px;
  padding: 16px;
}
.ctn + .ctn {
  margin-left: 16px;
  @media screen and (max-width: 940px) {
    margin-left: 0;
  }
}

.detailedResto {
  color: #666;
  display: flex;
  max-width: 1000px;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 64px;
  // justify-content: center;
  padding: 32px;
  @media screen and (max-width: 940px) {
    padding: 16px;
  }
  .restoProfil,
  .restoImage-and-restoForm,
  .restoMenu-and-restoNote {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 16px;
  }
  .restoProfil {
    width: calc((100% / 1.5) - 8px);
    justify-content: space-between;
    @media screen and (max-width: 940px) {
      width: 100%;
    }
  }
  .restoImage-and-restoForm {
    .restoImage--ctn {
      width: calc((100% / 1.5) - 8px);
      border-radius: 4px;
      @media screen and (max-width: 940px) {
        width: 100%;
        margin-bottom: 16px;
      }
      background-color: #ccc;
      .image {
        img {
          width: 100%;
          display: block;
          border-radius: 4px;
        }
      }
    }
    .restoForm--ctn {
      width: calc((100% / 3) - 8px);
      @media screen and (max-width: 940px) {
        width: 100%;
      }
    }
  }
  .restoMenu-and-restoNote {
    .restoMenu--ctn {
      width: calc((100% / 1.5) - 8px);
      @media screen and (max-width: 940px) {
        width: 100%;
        margin-bottom: 16px;
      }
    }
    .restoNote--ctn {
      width: calc((100% / 3) - 8px);
      @media screen and (max-width: 940px) {
        width: 100%;
      }
    }
  }
}
</style>
