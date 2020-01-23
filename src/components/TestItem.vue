<template>
  <div class="wrap">
    <a :href="link">Link to ...</a>
    <header>header component</header>
    <slot>Default slot value</slot>
    <footer>footer component</footer>
  </div>
</template>
<script>
export default {
  name: 'TestItem',
  data() {
    return {
      name: 'John'
    }
  },
  props: {
    link: String
  },
  methods: {
  }
}
</script>