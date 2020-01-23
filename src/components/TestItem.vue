<template>
  <div class="wrap">
    <p>
      {{ color }}
      {{ width }}
    </p>

    <input type="text" @input="$emit('update:width', $event.target.value)">
    <input type="text" @input="$emit('update:color', $event.target.value)">
  </div>
</template>
<script>
export default {
  name: 'TestItem',
  props: {
    color: String,
    width: String,
  },
  methods: {
  }
}
</script>