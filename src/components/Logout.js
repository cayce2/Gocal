  // Import necessary dependencies
  import React from 'react';
  import Button from '@mui/material/Button';
  import { MdOutlineLogout } from 'react-icons/md';

  // Define the LogoutButton component
  const Logout = () => {
    // Define a function to handle the logout action
    const handleLogout = () => {
      // Implement your logout logic here
      console.log('Logout clicked');
      // For example, you could clear the user session, redirect to a login page, etc.
    };

    // Render the button with the icon and label
    return (
      <Button
        variant="contained" // Choose the variant of the button (e.g., "text", "contained", "outlined")
        color="primary" // Choose the color of the button
        startIcon={<MdOutlineLogout />} // Set the start icon
        onClick={handleLogout} // Set the click handler
      >
        Logout
      </Button>
    );
  };
  export default Logout;