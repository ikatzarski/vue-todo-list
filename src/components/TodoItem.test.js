import { mount } from "@vue/test-utils";
import TodoItem from "./TodoItem";

describe("TodoItem", () => {
  const todoId = 1;
  const testTodo = (isComplete) => ({
    id: todoId,
    title: "Eat many cookies",
    completed: isComplete,
  });

  it("should not cross out an incomplete todo", () => {
    const wrapper = mount(TodoItem, {
      propsData: {
        todo: testTodo(false),
      },
    });

    expect(wrapper.find("p").element.className).toBe("");
  });

  it("should should cross out a complete todo", () => {
    const wrapper = mount(TodoItem, {
      propsData: {
        todo: testTodo(true),
      },
    });

    expect(wrapper.find("p").element.className).toBe("is-complete");
  });

  it("should mark an incomplete todo as complete", async () => {
    const wrapper = mount(TodoItem, {
      propsData: {
        todo: testTodo(false),
      },
    });

    const checkbox = wrapper.find("input[type='checkbox']");
    await checkbox.setChecked();

    expect(wrapper.props().todo.completed).toBeTruthy();
  });

  it("should mark a complete todo as incomplete", async () => {
    const wrapper = mount(TodoItem, {
      propsData: {
        todo: testTodo(true),
      },
    });

    const checkbox = wrapper.find("input[type='checkbox']");
    await checkbox.setChecked();

    expect(wrapper.props().todo.completed).toBeFalsy();
  });

  it("should not emit a delete event", () => {
    const wrapper = mount(TodoItem, {
      propsData: {
        todo: testTodo(true),
      },
    });

    expect(wrapper.emitted("del-todo")).toBeUndefined();
  });

  it("should emit a delete event with the todo id", () => {
    const wrapper = mount(TodoItem, {
      propsData: {
        todo: testTodo(true),
      },
    });

    const button = wrapper.find(".del");
    button.element.click();

    expect(wrapper.emitted("del-todo")).toStrictEqual([[todoId]]);
  });
});
