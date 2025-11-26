import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

// 🔹 আলাদা component তৈরি করে নিচ্ছি
function ComponentOne() {
  return <div style={{ padding: 20 }}>🟢 This is Component One</div>;
}

function ComponentTwo() {
  return <div style={{ padding: 20 }}>🔵 This is Component Two</div>;
}

function ComponentThree() {
  return <div style={{ padding: 20 }}>🟣 This is Component Three</div>;
}

export default function HeroSliderOne() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '80%', margin:"auto",height:"400px",backgroundColor:"gray"}}>
      {/* Tabs */}
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Item One" />
        <Tab value="two" label="Item Two" />
        <Tab value="three" label="Item Three" />
      </Tabs>

      {/* Conditional Rendering */}
      {value === 'one' && <ComponentOne />}
      {value === 'two' && <ComponentTwo />}
      {value === 'three' && <ComponentThree />}
    </Box>
  );
}
