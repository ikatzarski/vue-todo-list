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
});
