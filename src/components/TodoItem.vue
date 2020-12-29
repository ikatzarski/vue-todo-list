<template>
  <div class="todo-item">
    <p v-bind:class="{ 'is-complete': todo.completed }">
      <input type="checkbox" v-on:change="markComplete" />
      {{ todo.title }}
    </p>
    <button @click="$emit('del-todo', todo.id)" class="del">x</button>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;
    },
  },
};
</script>

<style scoped>
.del {
  background: #4f98ca;
  border: none;
  color: #effffb;
  cursor: pointer;
  padding: 0.5em 1em;
}

.del:hover {
  background: #50d890;
}

.is-complete {
  text-decoration: line-through;
}

.todo-item {
  border: solid #50d890;
  color: #effffb;
  display: flex;
  flex-direction: column;
  margin: 0.2em 0 0.2em 0;
  padding: 1em;
}

input[type="checkbox"] {
  background: #effffb;
}
</style>
