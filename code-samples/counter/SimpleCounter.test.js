import React from "react";
import toJSON from "enzyme-to-json";
import { shallow } from "enzyme";
import SimpleCounter from "./SimpleCounter";

describe("<SimpleCounter />", () => {
  test("displays and renders properly", () => {
    const wrapper = shallow(<SimpleCounter initial={0} />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
