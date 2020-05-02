import React from "react";
import toJSON from "enzyme-to-json";
import { shallow } from "enzyme";

import SimpleToggler from "./SimpleToggler";

describe("<SimpleToggler />", () => {
  test("displays and renders properly", () => {
    const wrapper = shallow(<SimpleToggler value={false} />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test("initialily renders off", () => {
    const wrapper = shallow(<SimpleToggler value={false} />);

    expect(wrapper.find("input").props().value).toBe(false);
  });
});
