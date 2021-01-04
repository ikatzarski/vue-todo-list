import { mount } from "@vue/test-utils";
import Todos from "./Todos";

describe("Todos", () => {
  it("should contain the number of todos provided", () => {
    const testTodos = [
      {
        id: 1,
        title: "Eat many cookies",
        completed: true,
      },
      {
        id: 2,
        title: "Eat even more cookies",
        completed: false,
      },
    ];
    const wrapper = mount(Todos, {
      propsData: {
        todos: testTodos,
      },
    });

    expect(wrapper.findAll(".todo-item").length).toBe(2);
  });
});
