import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MenuList from '../components/MenuList';

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios.get('/api/menu-items')
      .then(response => setMenuItems(response.data))
      .catch(error => console.error('Error fetching menu items:', error));
  }, []);

  return (
    <div>
      <MenuList menuItems={menuItems} />
    </div>
  );
};

export default MenuPage;