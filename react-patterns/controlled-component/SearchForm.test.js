import React from "react";
import toJSON from "enzyme-to-json";
import SearchForm from "./SearchForm";
import { shallow } from "enzyme";

describe("<SearchForm />", () => {
  it("renders and displays properly", () => {
    const wrapper = shallow(<SearchForm />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
