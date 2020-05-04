import React from "react";
import toJSON from "enzyme-to-json";
import { shallow } from "enzyme";

import TestComponentButton from "./test-component-button";
import * as TestContext from "./test-context-provider";

describe("<TestComponentButton />", () => {
  test("shows and displays properly", () => {
    const contextValues = { setData: jest.fn(), data: [] };
    jest
      .spyOn(TestContext, "useTestContext")
      .mockImplementation(() => contextValues);
    const wrapper = shallow(<TestComponentButton />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
