import { MenuOutlined } from "@mui/icons-material"
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import { useContext } from "react"
import { UIContext } from "../../context/ui"


export const NavBar = () => {

  const { openSideMenu } = useContext( UIContext )

  return (
    <AppBar position="sticky" elevation={ 0 }>
        <Toolbar>
            <IconButton
                size="large"
                edge="start"
                onClick={ openSideMenu }
            >
                <MenuOutlined/>
            </IconButton>
            <Typography variant="h6">Open-Jira</Typography>
        </Toolbar>
    </AppBar>
  )
}

export default NavBar