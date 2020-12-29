<template>
  <div class="form-wrapper">
    <form @submit="addTodo">
      <input
        type="text"
        v-model="title"
        name="title"
        placeholder="Add Todo..."
      />
      <input type="submit" value="Submit" class="btn" />
    </form>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      const newTodo = {
        title: this.title,
        completed: false,
      };
      this.$emit("add-todo", newTodo);

      this.title = "";
    },
  },
};
</script>

<style scoped>
.form-wrapper {
  margin: 0.5em;
}

form {
  display: flex;
  flex-direction: column;
}

input[type="text"] {
  background-color: #effffb;
  border: solid #effffb;
  color: #272727;
  outline: none;
  padding: 0.5em;
}

.btn {
  background: #4f98ca;
  border: none;
  color: #effffb;
  cursor: pointer;
  margin-top: 0.5em;
  padding: 0.5em;
}

.btn:hover {
  background: #50d890;
}
</style>
