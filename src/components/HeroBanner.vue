<template>
  <div class="hero-banner">
    <hooper :transition="1000" :initialSlide="slide" @afterSlide="updateSlider">
      <slide>
        <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, ad!</h2>
      </slide>
      <slide>
        <h2>Lorem ipsum dolor sit amet consectetur</h2>
        <button>down</button>
      </slide>
      <slide>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, officiis necessitatibus?</h2>
      </slide>
      <slide>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing officiis necessitatibus?</h2>
      </slide>
      <slide>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus</h2>
      </slide>
    </hooper>
  </div>
</template>

<script>
import { Hooper, Slide } from 'hooper';

export default {
  name: "HeroBanner",
  components: {
      Hooper,
      Slide
  },
  props: {
    slide: {
      type: Number
    }
  },
  data() {
    return {
      routes: {
        0: '/',
        1: 'about',
        2: 'work',
        3: 'process',
        4: 'contact',
      }
    }
  },
  methods: {
    updateSlider(slider) {
      this.$router.push({ path: this.routes[slider.currentSlide] })

    }
  }
};
</script>

<style lang='scss' scoped>
  .hooper-slide {
    height: 100vh;
  }

  .hooper {
    height: auto;
  }
</style>
