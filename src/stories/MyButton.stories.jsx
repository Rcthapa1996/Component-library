import { MyButton } from "./MyButton";

export default {
  color: "red",
};

const Templeate = (args) => <MyButton {...args} />;

export const Primary = Templeate.bind({});

Primary.args = {
  color: "blue",
};

export const Secondary = Templeate.bind({});

Secondary.args = {
  color: "green",
};

export const Default = Templeate.bind({});
