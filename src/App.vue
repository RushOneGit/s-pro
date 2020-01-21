<template>
  <div id="app">
    <aside class="navbar">
      <div class="logo">
        <router-link to="/"><img src="" alt="logo"></router-link>
      </div>
      <nav class="nav-holder">
        <div class="menu-btn"></div>
        <div class="nav">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/work">Work</router-link>
          <router-link to="/process">Process</router-link>
          <router-link to="/contact">Contact</router-link>
        </div>
      </nav>
      <div class="nav-hint">Scroll to explore</div>
    </aside>
    <router-view />
  </div>
</template>

<style>
</style>
