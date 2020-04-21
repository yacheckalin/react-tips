import React from "react";
import toJSON from "enzyme-to-json";
import { shallow } from "enzyme";
import UserContainer from "./UserContainer";

describe("<UserContainer />", () => {
  it("<UserContainer></UserContainer> renders and displays properly", () => {
    const wrapper = shallow(<UserContainer />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
