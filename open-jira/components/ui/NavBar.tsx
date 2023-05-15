import { MenuOutlined } from "@mui/icons-material"
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"


export const NavBar = () => {
  return (
    <AppBar position="sticky" elevation={ 0 }>
        <Toolbar>
            <IconButton
                size="large"
                edge="start"
            >
                <MenuOutlined/>
            </IconButton>
            <Typography variant="h6">Open-Jira</Typography>
        </Toolbar>
    </AppBar>
  )
}

export default NavBar