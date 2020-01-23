<template>
  <div class="page">
    <HeroBanner :slide="0" />
    <!-- <test-item link="google\.com"></test-item> -->
    <base-layout>
      <template v-slot:header>
        <div class="logo"><a href="#">logo</a></div>
      </template>
      <main>
        some main
      </main>
      <template v-slot:footer>
        <p>copyright 2020</p>
      </template>
    </base-layout>
  </div>
</template>

<script>
// import TestItem from '@/components/TestItem'
import BaseLayout from '@/components/BaseLayout'
export default {
  name: "home",
  components: {
    // TestItem,
    BaseLayout
  },
  data() {
    return {
      name: 'Default'
    }
  }
};
</script>
