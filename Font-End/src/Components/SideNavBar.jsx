import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { MdMenu, MdClose } from "react-icons/md";

export default function SideNavBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Pages', path: '/pages' },
    { name: 'Blog', path: '/blog' },
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collection' },
    { name: 'Specials', path: '/specials' },
  ];

  const DrawerList = (
    <Box sx={{ width: 250, bgcolor: '#f9f9f9', height: '100vh' }} role="presentation">
      {/* Close Button */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
        <Button onClick={toggleDrawer(false)} sx={{ minWidth: 'auto', color: 'black' }}>
          <MdClose size={24} />
        </Button>
      </Box>

      <Divider />

      {/* Menu Items */}
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton component={Link} to={item.path} onClick={toggleDrawer(false)}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {/* Menu Button */}
      <Button
        onClick={toggleDrawer(true)}
        style={{
          backgroundColor: '#f4a137',
          color: 'white',
          height: '40px',
          width: '40px',
          borderRadius: '4px',
        }}
      >
        <MdMenu size={22} />
      </Button>

      {/* Drawer */}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)} // Click outside = close
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
