<template>
  <div class="about">
    <h2>About</h2>
    <p>This is the To Do List app v{{ version }}.</p>
  </div>
</template>

<script>
import { version } from "../../package.json";

export default {
  data() {
    return {
      version,
    };
  },
};
</script>

<style scoped>
.about {
  color: #effffb;
  margin: 0.5em;
}

h2 {
  color: #50d890;
}
</style>
