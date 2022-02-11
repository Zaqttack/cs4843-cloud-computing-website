import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from "react-router-dom";

export default function NavBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', backgroundColor: 'cadetblue' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example" textColor="secondary" indicatorColor="secondary">
        <Tab label="Ketchup" to="/" component={Link} />
        <Tab label="Mustard" to="/mustard" component={Link} />
        <Tab label="Ad" to="/addog" component={Link} />
        <Tab label="K n M" to="/knm" component={Link} />
        <Tab label="Relish" to="/relish" component={Link} />
      </Tabs>
    </Box>
  );
}
