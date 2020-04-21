import React from "react";
import toJSON from "enzyme-to-json";
import { shallow } from "enzyme";
import RenderList, { UserList } from "./RenderList";

describe("<RenderList />", () => {
  it("renders and displays properly", () => {
    const HOC = RenderList(UserList);
    const wrapper = shallow(<HOC />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
