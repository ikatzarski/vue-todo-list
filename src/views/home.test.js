import { mount } from "@vue/test-utils";
import Home from "@/views/Home";
import axios from "axios";

describe("Home", () => {
  it("should get todos when mounted", () => {
    axios.get = jest.fn(() => Promise.resolve({ data: {} }));

    mount(Home);

    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});

it("should get 5 todos when mounted", async () => {
  const testTodo = (todoId, isComplete) => ({
    id: todoId,
    title: "Eat many cookies",
    completed: isComplete,
  });
  const testTodos = [
    testTodo(1, false),
    testTodo(2, false),
    testTodo(3, false),
    testTodo(4, true),
    testTodo(5, false),
  ];

  axios.get = jest.fn(() =>
    Promise.resolve({
      data: testTodos,
    })
  );

  const wrapper = mount(Home);
  await wrapper.vm.$nextTick();

  expect(wrapper.findAll(".todo-item").length).toBe(5);
});
