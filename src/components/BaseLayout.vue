<template>
  <div class="wrap">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot>default slot</slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>