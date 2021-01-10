import { mount } from "@vue/test-utils";
import About from "./About";
import { version } from "../../package.json";

describe("About", () => {
  it("should display the correct project version", () => {
    const wrapper = mount(About);

    expect(wrapper.find("p").text()).toContain(version);
  });
});
