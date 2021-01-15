import { mount } from "@vue/test-utils";
import Todos from "@/components/Todos";

describe("Todos", () => {
  const testTodo = (todoId, isComplete) => ({
    id: todoId,
    title: "Eat many cookies",
    completed: isComplete,
  });

  const todoId1 = 1;
  const todoId2 = 2;
  const testTodos = [testTodo(todoId1, true), testTodo(todoId2, false)];

  it("should contain the number of todos provided", () => {
    const wrapper = mount(Todos, {
      propsData: {
        todos: testTodos,
      },
    });

    expect(wrapper.findAll(".todo-item").length).toBe(2);
  });

  it("should not emit a delete event", () => {
    const wrapper = mount(Todos, {
      propsData: {
        todos: testTodos,
      },
    });

    expect(wrapper.emitted("del-todo")).toBeUndefined();
  });

  it("should emit a delete event with the todo id triggered from the TodoItem", () => {
    const wrapper = mount(Todos, {
      propsData: {
        todos: testTodos,
      },
    });

    const todoItemButton = wrapper.find(".del");
    todoItemButton.element.click();

    expect(wrapper.emitted("del-todo")).toStrictEqual([[todoId1]]);
  });
});
