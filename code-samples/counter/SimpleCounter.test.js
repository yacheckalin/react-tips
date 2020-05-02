import React from "react";
import toJSON from "enzyme-to-json";
import { shallow } from "enzyme";
import SimpleCounter from "./SimpleCounter";

describe("<SimpleCounter />", () => {
  test("displays and renders properly", () => {
    const wrapper = shallow(<SimpleCounter initial={0} />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test("initial value shows properly", () => {
    const wrapper = shallow(<SimpleCounter initial={0} />);

    expect(wrapper.find("#counter_value").text()).toBe("0");
    wrapper.unmount();
  });

  test("ascending properly", () => {
    const wrapper = shallow(<SimpleCounter initial={0} />);

    wrapper.find("#asc_counter").simulate("click");
    expect(wrapper.find("#counter_value").text()).toBe("1");
    wrapper.unmount();
  });

  test("descending properly", () => {
    const wrapper = shallow(<SimpleCounter initial={10} />);

    wrapper.find("#desc_counter").simulate("click");
    expect(wrapper.find("#counter_value").text()).toBe("9");
    wrapper.unmount();
  });
});
