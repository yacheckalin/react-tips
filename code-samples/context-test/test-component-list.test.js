import React from "react";
import toJSON from "enzyme-to-json";
import { shallow } from "enzyme";

import TestComponentList from "./test-component-list";
import * as TestContext from "./test-context-provider";

describe("<TestComponentList />", () => {
  test("shows and displays properly", () => {
    const contextValues = { setData: jest.fn(), data: [] };
    jest
      .spyOn(TestContext, "useTestContext")
      .mockImplementation(() => contextValues);
    const wrapper = shallow(<TestComponentList />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
