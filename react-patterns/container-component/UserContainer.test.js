import React from "react";
import toJSON from "enzyme-to-json";
import { shallow } from "enzyme";
import UserContainer from "./UserContainer";
import axios from "axios";

jest.mock("axios");

describe("<UserContainer />", () => {
  it("should fetch user data", async () => {
    const data = {};

    axios.get.mockImplementationOnce(() => Promise.resolve(data));
  });

  it("renders and displays properly", () => {
    const wrapper = shallow(<UserContainer />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
