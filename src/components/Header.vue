<template>
  <div class="header">
    <div class="logo">
      <router-link to="/"><img src="../assets/img/yoplats.svg"></router-link>
    </div>
    <SearchBar @recherche="searcher($event)"/>
    <div class="login">
      <router-link to='/adminpage' class="sans light medium login--btn">Login</router-link>
    </div>
  </div>
</template>

<script>  
import SearchBar from "@/components/SearchBar.vue";
export default {
  name: "Header",
  components: {
    SearchBar
  },
  methods: {
    searcher(inputFromSearchBar) {
      this.$emit("recherche", inputFromSearchBar);
    }
  }
}
</script>

<style lang="scss">
.header {
  background: #333;
  box-shadow: 0 0 16px #CCC;
  width: 100%;
  height: 80px;
  top: 0px;
  transform: translate(0, 0);
  z-index: 12;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 32px;
  @media screen and (max-width: 940px) {
    padding: 0 16px;
  }
  .logo {
    img {
      height: 40px;
    }
  }
  .login {
    .login--btn {
      margin: 8px;
      padding: 8px 16px;
      border: none;
      border: 1px solid #666;
      border-radius: 4px;
      background: none;
      color: #fff;
      &:hover {
        background: #666
      }
    }
  }
}
</style>
      