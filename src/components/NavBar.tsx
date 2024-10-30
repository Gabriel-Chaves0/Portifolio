import { AppBar, Grid, MenuItem, styled } from '@mui/material';
import { IconButton, Toolbar, Typography } from '@mui/material';
import StyledButton from './styledButton';

const NavBar = () => {

const StyledToolBar = styled(Toolbar)(({theme}) => ({
    display: "flex",
    justifyContent: "space-evenly",
}));
  return (
    <AppBar position="absolute" color="secondary">
        <StyledToolBar>
            <MenuItem>About</MenuItem>
            <MenuItem>Projects</MenuItem>
            <MenuItem>Skills</MenuItem>
        </StyledToolBar>
    </AppBar>
  );
}

export default NavBar;