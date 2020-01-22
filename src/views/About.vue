<template>
  <div class="page">
    <HeroBanner :slide="1" />
    <section class="skill-section">
      <h2>Skill Passion</h2>
    </section>
  </div>
</template>

<script>
export default {
  name: "about",

  mounted () {
    this.$scrollmagic.scene({
      triggerElement: '#app',
      triggerHook: 0.15,
      duration: '50%'
    })
    .addIndicators()
  }




};
</script>
