<template>
  <div class="page">
    <HeroBanner :slide="0" />
    <test-item
      :name.sync="name"
    ></test-item>
    {{ name }}
  </div>
</template>

<script>
import TestItem from '@/components/TestItem'
export default {
  name: "home",
  components: {
    TestItem
  },
  data() {
    return {
      obj: {
        color: '#fff',
        width: '100px'
      }
    }
  },
};
</script>
