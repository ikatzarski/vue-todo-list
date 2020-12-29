<template>
  <header class="header">
    <h1>Todo List</h1>
    <div id="nav">
      <router-link to="/">Home |</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  color: #50d890;
  margin: 0.5em;
  padding: 1em;
  text-align: center;
}

.header a {
  color: #effffb;
  padding-right: 0.5em;
  text-decoration: none;
}
</style>
