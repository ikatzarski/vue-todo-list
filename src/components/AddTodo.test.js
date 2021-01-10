import { mount } from "@vue/test-utils";
import AddTodo from "./AddTodo";

describe("AddTodo", () => {
  it("should fill in the todo title with the correct input", async () => {
    const wrapper = mount(AddTodo);
    const input = wrapper.find("input");
    const todoTitle = "test todo";

    await input.setValue(todoTitle);

    expect(input.element.value).toBe(todoTitle);
  });

  it("should emit and event with the entered todo title", async () => {
    const wrapper = mount(AddTodo);
    const todoTitle = "test todo";
    const newTodo = {
      title: todoTitle,
      completed: false,
    };

    await wrapper.find("input").setValue(todoTitle);
    await wrapper.find("form").trigger("submit");

    expect(wrapper.emitted("add-todo")).toStrictEqual([[newTodo]]);
  });
});
