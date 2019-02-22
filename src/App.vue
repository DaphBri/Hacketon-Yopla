<template>
  <div id="app">
    <!-- header -->
    <!-- <div class="header--ctn">
      <header class="header">
      <div class="logo--ctn">
        <router-link to="/"><span class="logo"><img src="./assets/img/yoplats.svg"></span></router-link>
      </div>
      <div class="log">
        <button class="sans light medium">Login</button>
      </div>
    </header>
    </div> -->
    <!-- main -->
    <main class="main">
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import url('./assets/css/style.scss');
#app {
  height: 100vh;
  position: relative;
  .header--ctn {
    position: fixed;
    top: 0;
    z-index: 11;
    height: 80px;
    width: 100%;
    background: #333;
    color: white;     
    .header {
      margin: 0 auto;
      max-width: 1500px;
      padding: 16px 32px;
      height: 80px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo--ctn {
        display: flex;
        .logo {
          img {
            height: 32px;
          }
        }
      }
      .log {
        button {
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
  }

  .main {
    width: 100%;
    min-height: 100vh;
  }
}
</style>
