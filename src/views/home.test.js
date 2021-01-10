jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve({})),
}));

import { mount } from "@vue/test-utils";
import Home from "./Home";
import axios from "axios";

describe("Home", () => {
  it("should get todos from JSON Placeholder when mounted", () => {
    mount(Home);

    expect(axios.get).toBeCalledWith(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
  });
});
