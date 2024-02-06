import React from 'react';
import { Layout, Menu } from 'antd';
import SearchBar from './SearchBar';
const { Header } = Layout;

const Navbar = () => {
    return (
      <Header>
        <div className="navbar-container">
          <div className="logo" />
          <div className="menu-container">
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">About</Menu.Item>
              <Menu.Item key="3">Contact</Menu.Item>
            </Menu>
          </div>
          <div className='search-bar'><SearchBar /></div>
        </div>
      </Header>
    );
  };

export default Navbar;
