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
  

  // const handleChange = (e) => {
  //   setAuth(e.target.value);
  // };

  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

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
     <AppBar style={{textAlign: "center", alignItems: "center", width: "100%",}} >
        <Toolbar>
          <div className='home'>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 8 }}
            >  <HomeIcon onClick={handleHome}/>
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
      // {/* <h1>Ski Buddy</h1>
      // <nav>
        
      //    <h3> Home</h3>
    
       
      //     <h3>Add Trail</h3>
    
      // </nav> */}

  );
}


export default Header;