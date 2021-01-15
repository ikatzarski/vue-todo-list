<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/layout/Header";

export default {
  name: "app",
  components: {
    Header,
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
}

body {
  background-color: #272727;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.8em;
}

::-moz-selection {
  background: #4f98ca;
}

::selection {
  background: #4f98ca;
}
</style>
