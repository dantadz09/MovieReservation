import React from 'react';
import { Layout, Menu } from 'antd';
import SearchBar from './SearchBar';
const { Header } = Layout;

const Navbar = () => {
  const handleHomeClick = () => {
    window.location.href = 'http://localhost:3000/';
  };
  const handleCanelClick = () => {
    window.location.href = 'http://localhost:3000/cancel';
  };
  return (
    <Header>
      <div className="navbar-container">
        <div className="menu-container">
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            {/* Attach onClick event to the "Home" Menu.Item */}
            <Menu.Item key="1" onClick={handleHomeClick}>Home</Menu.Item>
            <Menu.Item key="2">About</Menu.Item>
            <Menu.Item key="3" onClick={handleCanelClick}>Cancel</Menu.Item>
          </Menu>
        </div>  
        <div className='search-bar'><SearchBar /></div>
      </div>
    </Header>
  );
};

export default Navbar;
