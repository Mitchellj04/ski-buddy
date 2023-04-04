import { AppBar, Toolbar, Typography} from '@mui/material'
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";
import '../App.css'

function Header({setCurrentUser}) {
  const [auth, setAuth] = useState(true);
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null);
  

  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  //Delete currentUser (session/user)
  function handleLogout (){
    setAnchorEl(null)
    fetch('/logout', 
     { method: "DELETE"})
     .then((resp) => {
      if (resp.ok){
        setCurrentUser(null)
      }
     })

  }

  function handleHome(){
    navigate('/')
  }

  const handleClose = () => {
    setAnchorEl(null);
    navigate('/profile')
  };

  return (
    <div className='navBar'>
     <AppBar position="static" style={{textAlign: "center", alignItems: "center", width: "100%", backgroundColor: 'inherit', color: 'black'}} >
        <Toolbar>
          <div className='home'>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 8 }}
              onClick={handleHome}
            >  <HomeIcon />
            </IconButton>
          </div>
          <Typography variant='h4' style={{}}>Ski Buddy</Typography>
          {auth && (
            <div className='menu'>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                style={{align:"right"}}
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircleIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Sign Out</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default Header;