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
  const testTodo = () => ({
    title: "Eat many cookies",
    completed: false,
  });
  const testTodos = [
    testTodo(),
    testTodo(),
    testTodo(),
    testTodo(),
    testTodo(),
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
