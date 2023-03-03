import React from "react";
import Button from "./button";
// import mdx from './button.mdx';

import { ComponentMeta, ComponentStory } from "@storybook/react";


const buttonMeta : ComponentMeta< typeof Button > ={
  title : 'Button',
  component : Button,
  // parameters : {
  //   doce : {
  //     page : mdx
  //   }
  // }
};

export default buttonMeta;

const Template : ComponentStory< typeof Button > = (args) => (
  <Button {...args}></Button>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Default Button'
}
Default.storyName = '默认按钮样式';
Default.decorators = [
  (Story) => (
    <div style={{margin:'50px'}}><Story /></div>
  )
];
export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  children: 'Large Button',
};
export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  children: 'Small Button',
};
export const Primary = Template.bind({});
Primary.args = {
  btnType: 'primary',
  children: 'Primary Button',
}
export const Danger = Template.bind({});
Danger.args = {
  btnType: 'danger',
  children: 'Danger Button',
};
export const Link = Template.bind({});
Link.args = {
  btnType: 'link',
  children: 'Link Button',
  href: 'https://google.com'
};

// export const Default : ComponentStory< typeof Button > = () => (
//   <Button>Default Button</Button>
// )
// Default.storyName = '默认按钮样式'

// export const ButtonWithSize : ComponentStory< typeof Button > = () => (
//   <>
//     <Button size="lg">large Button</Button>
//     <Button size="sm">small Button</Button>
//   </>
// )
// ButtonWithSize.storyName = '不同尺寸按钮样式'

// export const ButtonWithType : ComponentStory< typeof Button > = () => (
//   <>
//     <Button btnType="primary">primary Button</Button>
//     <Button btnType="danger">danger Button</Button>
//     <Button btnType="link" href="https://google.com">link Button</Button>
//   </>
// )
// ButtonWithType.storyName = '不同类型按钮样式'