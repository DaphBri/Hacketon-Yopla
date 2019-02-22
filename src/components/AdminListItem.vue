<template >
  <transition name="fade">
    <div v-if="!isHidden" class="adminListItem sans medium light">
      <div class="col">{{itemName}}</div>
      <div class="col">{{itemType}}</div>
      <div class="col">{{itemPostalCode}} {{itemCity}}</div>
      <div class="col edit-and-remove">
        <div class="btn edit--btn">
          <img src="../assets/img/edit.svg" alt>
        </div>
        <div @click="deleteItem(itemId, isHidden = true)" class="btn remove--btn">
          <img src="../assets/img/remove.svg" alt>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "AdminListItem",
  props: [
    "isHidden",
    "itemId",
    "itemName",
    "itemType",
    "itemPostalCode",
    "itemCity"
  ],

  methods: {
    deleteItem(itemId) {
      console.log("test", itemId);
      this.$emit("delItem", itemId);
    }
  }
};
</script>

<style lang="scss">
.adminListItem {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background: #eee;
  margin-bottom: 16px;
  border-radius: 4px;
  .col {
    height: 48px;
    padding: 8px 16px;
    overflow: hidden;
    // display: flex;
    // align-items: center;
  }
  .col:nth-child(1) {
    flex: 5;
    @media screen and (max-width: 640px) {
      flex: none;
      width: 70%;
    }
  }
  .col:nth-child(2) {
    flex: 3;
    @media screen and (max-width: 640px) {
      flex: none;
      width: 30%;
    }
  }
  .col:nth-child(3) {
    flex: 4;
    @media screen and (max-width: 640px) {
      flex: none;
      width: 70%;
    }
  }
  .col:nth-child(4) {
    width: 120px;
    @media screen and (max-width: 640px) {
      flex: none;
      width: 30%;
    }
  }
  .edit-and-remove {
    display: flex;
    justify-content: flex-end;
    .btn {
      cursor: pointer;
      background: white;
      height: 32px;
      width: 32px;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 24px;
        height: 24px;
      }
      &:hover {
        box-shadow: 0 0 4px #aaa;
        animation: shake 0.2s ease alternate infinite;
        @keyframes shake {
          from {
            transform: rotate(5deg);
          }
          to {
            transform: rotate(-5deg);
          }
        }
      }
    }
    .btn + .btn {
      margin-left: 16px;
    }
  }
}
.adminListItem:nth-of-type(odd) {
  background: #ddd;
}
</style>
