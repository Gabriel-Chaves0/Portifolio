import { AppBar, Grid, MenuItem, styled } from '@mui/material';
import { IconButton, Toolbar, Typography } from '@mui/material';

const NavBar = () => {

const StyledToolBar = styled(Toolbar)(({theme}) => ({
    display: "flex",
    justifyContent: "space-evenly",
}));
  return (
    <AppBar position="absolute" color="secondary">
        <StyledToolBar>
            <MenuItem>About</MenuItem>
            <MenuItem onClick={() => {
                const section = document.getElementById("projects-section");
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                }
            }}>Projects</MenuItem>
            <MenuItem>Skills</MenuItem>
        </StyledToolBar>
    </AppBar>
  );
}

export default NavBar;