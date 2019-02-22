<template>
  <section class="adminpage">
    <Header />
    <div class="adminpage--wrapper">
      <h1 class="slab big mb">Créer un restaurant</h1>
      <div class="ctn adminForm--ctn">

        <AdminForm/>

      </div>
      <h1 class="slab big mb">Liste des restaurants</h1>
      <div class="ctn adminList--ctn">

        <AdminList
        v-bind:itemList="itemList"
        />

      </div>
    </div>   
  </section>
</template>

<script>
// import axios from "axios";
import AdminForm from "@/components/AdminForm.vue";
import AdminList from "@/components/AdminList.vue";
import Header from "@/components/Header.vue";
import axios from 'axios';

export default {
  name: "adminpage",

  components: {
    Header,
    AdminForm, 
    AdminList,

  },
   data() {
    return {
      isHidden: false,
      itemList: []
    }
  },
//Encore la faire :  axios this.itemList = response.data
  created(){
    axios
    .get(
      "http://feedme-bf.azurewebsites.net/api/restaurants/getrestaurants"
    )
    .then(response => {
      this.itemList = response.data;
    });
  }
};
</script>

<style lang="scss">
.isHidden{
  display: none
}
.adminpage {
  min-height: 100vh;
  width: 100%;
  color: #666;
  .adminpage--wrapper {
    max-width: 1000px;
    padding: 32px;
    @media screen and (max-width: 940px){
        padding: 16px;
      }
    margin: 0 auto;
    margin-top: 80px;
    .ctn {
      border-radius: 4px;
      background: #fff;
      padding: 32px;
      @media screen and (max-width: 940px){
        padding: 16px;
      }
      margin-bottom: 64px;
    }
    .adminForm--ctn{
      padding-top: 16px;
    }
  }
  
}
</style>

