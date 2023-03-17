import { CpButton } from "./CpButton";

export default {
  bgColor: "gray",
  padding: "15",
  size: "small",
  hasDropDown: false,
  icon: <h5>Hello</h5>,
  btnName: "Save",
};

const Template = (args) => <CpButton {...args} />;

export const Small = Template.bind({});
Small.args = {
  bgColor: "gray",
  padding: "5",
  size: "small",
  hasDropDown: false,
  icon: <h5>Small</h5>,
  btnName: "Console",
};

export const Medium = Template.bind({});
Medium.args = {
  bgColor: "gray",
  padding: "5",
  size: "medium",
  hasDropDown: false,
  icon: <h5>Small</h5>,
  btnName: "Console",
};

export const Large = Template.bind({});
Large.args = {
  bgColor: "gray",
  padding: "15",
  size: "large",
  hasDropDown: false,
  icon: <h5>Hello</h5>,
  btnName: "Save",
};
