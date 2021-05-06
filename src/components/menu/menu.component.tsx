import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { Link, useLocation } from 'react-router-dom';
import './menu.styles';
import { MenuContainer, MenuList } from './menu.styles';
import Button from '../button/button.component';


const MenuComponent = () => {
  const location = useLocation();

  return (
    <MenuContainer>
      <MenuList>
        { [1,2,3].map((value, index) => <MenuItem
          key={index}
          url={`/pages/${value}`}
          title={`Pages ${value}`}
        /> )}
      </MenuList>
    </MenuContainer>
  )
}

export default MenuComponent;
