<template>
  <div class="hero-banner">
    <hooper :transition="1000" :initialSlide="slide" @afterSlide="updateSlider">
      <slide>
        <h2>asds asd asdsd sad </h2>
      </slide>
      <slide>slide 2</slide>
      <slide>slide 3</slide>
      <slide>slide 4</slide>
      <slide>slide 5</slide>
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
