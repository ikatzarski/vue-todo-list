import { mount } from "@vue/test-utils";
import Home from "./Home";
import axios from "axios";

describe("Home", () => {
  it("should get todos when mounted", () => {
    axios.get = jest.fn(() => Promise.resolve({ data: {} }));

    mount(Home);

    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
