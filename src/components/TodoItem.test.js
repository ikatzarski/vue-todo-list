import { mount } from "@vue/test-utils";
import TodoItem from "./TodoItem";

describe("TodoItem", () => {
  it("should mark an incomplete todo as incomplete", () => {
    const testTodo = {
      id: 1,
      title: "Eat many cookies",
      completed: false,
    };

    const wrapper = mount(TodoItem, {
      propsData: {
        todo: testTodo,
      },
    });

    expect(wrapper.find("p").element.className).toBe("");
  });

  it("should mark a complete todo as complete", () => {
    const testTodo = {
      id: 1,
      title: "Eat many cookies",
      completed: true,
    };

    const wrapper = mount(TodoItem, {
      propsData: {
        todo: testTodo,
      },
    });

    expect(wrapper.find("p").element.className).toBe("is-complete");
  });
});
