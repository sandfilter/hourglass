import Button, { ButtonSize, ButtonType }from './components/Button/buttonm';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';

function App() {
return (
<div className="App">
  <header className="App-header">
    <Menu defaultIndex={'0'} onSelect = {(index) => { alert(index) }} mode="vertical" defaultOpenSubMenus={['2']}>
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

    <Button> Hello </Button>
    <Button disabled> Hello </Button>
    <Button btnType={ButtonType.Primary} size={ButtonSize.Large}> Hello </Button>
    <Button btnType={ButtonType.Danger} size={ButtonSize.Smail}> Hello </Button>
    <Button btnType={ButtonType.Link} href='https://www.google.com'> google link </Button>
    <Button btnType={ButtonType.Link} href='https://www.baidu.com' disabled> baidu link </Button>
    <p>
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
  </header>
</div>
);
}

export default App;
