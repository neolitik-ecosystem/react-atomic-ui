import React from "react";
import { mount } from "enzyme";
import Button from "./index";

describe("HelloWorld", () => {
  test("renders without crashing", () => {
    mount(<Button />);
  });

  test("renders default prop values", () => {
    const wrapper = mount(<Button />);
    // Test default values
  });

  test("renders props values", () => {
    const wrapper = mount(<Button />);
    // Test values pass as props
  });

  test("renders children", () => {
    const wrapper = mount(
      <Button>
        <p className="test">Testing</p>
      </Button>
    );

    expect(wrapper.find("p.test").text()).toEqual("Testing");
  });
});
