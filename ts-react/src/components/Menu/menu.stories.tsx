import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Menu from "./menu";
import SubMenu from "./subMenu";
import Item from "./menuItem";

const menuMeta : ComponentMeta< typeof Menu > = {
  title : 'Menu',
  id : 'Menu',
  component : Menu,
  subcomponents : {
    'SubMenu' : SubMenu,
    'Item' : Item,
    // SubMenu,
    // Item,
  },
  args : {
    defaultIndex : '1',
  },
  // parameters : {
  //   controls : {
  //     mathcers : {
  //       date : /mode$/,
  //     },
  //   },
  // },
  // argTypes : {
  //   defaultIndex : {
  //     control : 'color',
  //     description : 'mormal test'
  //   },
  // },
};

export default menuMeta;

const Template : ComponentStory< typeof Menu > = ( args ) => (
  <Menu { ...args }>
    <Item>
      link 01
    </Item>
    <Item>
      link 02
    </Item>
    <Item disabled>
      link 03
    </Item>
    <SubMenu title="link more">
      <Item>
        SubMenu 01
      </Item>
      <Item>
        SubMenu 02
      </Item>
    </SubMenu>
  </Menu>
);

export const DefaultMenu = Template.bind({});
DefaultMenu.storyName = "默认Menu";

export const ClickMenu = Template.bind({});
ClickMenu.args = {
  defaultIndex : '0',
  mode : 'vertical',
};
// ClickMenu.parameters = {
//   backgrounds: {
//     values: [
//       { name : 'red', value : '#f00' },
//       { name : 'green', value : '#0f0' }
//     ],
//   },
// };
// ClickMenu.argTypes ={
//   defaultIndex : {
//     control: 'color',
//   },
// };
ClickMenu.storyName = '纵向的 Menu';