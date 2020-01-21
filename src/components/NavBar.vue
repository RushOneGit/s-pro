<template>
  <aside class="navbar">
    <div class="logo">
      <router-link to="/">
        <img src alt="logo" />
      </router-link>
    </div>
    <nav class="nav-holder">
      <div class="menu-btn"></div>
      <div class="menu-nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/work">Work</router-link>
        <router-link to="/process">Process</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </nav>
    <div class="nav-hint">Scroll to explore</div>
  </aside>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style lang="scss" scoped>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 200px;
    background: #888;
  }

  .menu-nav {
    display: none;
  }


</style>
