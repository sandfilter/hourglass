import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Button, { ButtonSize, ButtonType }from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import Icon from './components/icon/icon';
import Trensition from './components/Transition/transition';
import { useState,useRef } from 'react';
library.add( fas );

function App() {
const [show, setShow] = useState(false);
const nodeRef = useRef(null);
const btnRef = useRef(null);
return (
<div className="App">
  <header className="App-header">
  <Icon icon='star' size="8x" />
    <Menu defaultIndex={'0'} onSelect = {(index) => { alert(index) }} defaultOpenSubMenus={['2']}>
      <MenuItem>
        cool link
      </MenuItem>
      <MenuItem disabled>
        cool link 2
      </MenuItem>
      <SubMenu title='dropdown-new'>
        <MenuItem>
          dropdown 1
        </MenuItem>
        <MenuItem>
          dropdown 2
        </MenuItem>
      </SubMenu>
      <MenuItem>
        cool link 3
      </MenuItem>
    </Menu>

    <Button> Vince </Button>
    <Button disabled> Vince </Button>
    <Button btnType={'primary'} size={'lg'}> Vince </Button>
    <Button btnType={'danger'} size={'sm'}> Vince </Button>
    <Button btnType={'link'} href='https://www.google.com'> google link </Button>
    <Button btnType={'link'} href='https://www.baidu.com' disabled> baidu link </Button>



    <div><Button size='lg' onClick={() => {setShow(!show)}}> Toggle </Button></div>
    <Trensition 
      in={show}
      timeout={300}
      animation='zoom-in-left'
      nodeRef={nodeRef} 
    >
      <div ref={nodeRef}>
        <p >
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
      </div>
  </Trensition>
  <Trensition 
      in={show}
      timeout={300}
      animation='zoom-in-top'
      // wrapper
      nodeRef={btnRef} 
    ><div ref={btnRef}><Button btnType='primary' size='lg'>A large Button</Button></div></Trensition>
  </header>
</div>
);
};

export default App;
