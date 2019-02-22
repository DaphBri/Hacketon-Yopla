<template>
   <div class="restoMenu">
     <!-- <h3 class="sans medium light mb">Spécialités du restaurant</h3> -->
     <!-- boucle ici -->
     <OneDish
        v-for="(dish, index) in dishes" 
        v-bind:key="index" 
        v-bind:dishName="dish.name"
        v-bind:dishPrice="dish.price"
     />
   </div>
</template>

<script>
import OneDish from './OneDish.vue'

export default {
    name:'RestoMenu',
    props:['dishes'],
    components:{
        OneDish
  },
}
</script>

<style lang="scss">
 .restoMenu {
   .dishName-and-dishPrice {
     display: flex;
     justify-content: space-between;
     margin-bottom: 24px;
     padding-bottom: 8px;
     border-bottom: 1px dotted #ccc;
     .dishPrice {
       .euro {
       position: relative;
       top: -16px;
      }
    }
   }
 }
</style>