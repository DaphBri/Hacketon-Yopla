<template>
  <transition name="fade">
    <router-link :to="'/detailspage/'+ idrestaurant" class="resultSingle">
      <!-- un resto -->
      <div class="image">
        <img :src="thumbnail" alt>
      </div>
      <div class="note sans normal">
        <span>{{rating}}</span>
        <span class="extra-small">/ 10</span>
      </div>
      <div class="text">
        <div class="title slab normal">{{name}}</div>
        <div class="tag sans light small">{{adress}}, {{postalcode}} {{city}}</div>
      </div>
    </router-link>
  </transition>
</template>

<script>
export default {
  name: "ResultSingle",
  props: [
    "idrestaurant",
    "thumbnail",
    "rating",
    "name",
    "adress",
    "postalcode",
    "city"
  ]
};
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.resultSingle {
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 8px #ccc;
  }
  border-radius: 4px;
  position: relative;
  margin: 16px;
  width: calc((100% / 3) - 32px);
  @media screen and (max-width: 940px) {
    width: calc((100% / 2) - 32px);
  }
  @media screen and (max-width: 640px) {
    width: calc(100% - 32px);
  }
  .image,
  .text {
    background-color: #fff;
    // box-shadow: 0 2px 4px #ccc;
  }
  .image {
    // margin-bottom: 2px;
    // height: 200px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    img {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      width: 100%;
    }
  }
  .note {
    position: absolute;
    right: 16px;
    background-color: #fff;
    color: #333;
    padding: 8px 16px;
    border-radius: 32px;
    transform: translateY(-50%);
  }
  .text {
    padding: 16px;
    color: #333;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .tag {
    height: 18px;
    overflow: hidden;
  }
}
</style>
