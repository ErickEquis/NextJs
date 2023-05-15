import { Box, Drawer, List, ListItem, Typography, ListItemIcon, ListItemButton, ListItemText } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts']

export const SideBar = () => {
  return (
    <Drawer
        anchor="left"
        open= { true }
        onClose={ () => console.log('Cerrando') }
    >
        <Box sx={{ width: 250}}>
            <Box sx={{ padding: '5px 10px'}}>
                <Typography variant="h4">Menú</Typography>
            </Box>

            <List>
                {
                    menuItems.map( (text, index) =>(
                        <ListItemButton key={ text }>
                            <ListItemIcon>
                                { index % 2 ? <InboxOutlinedIcon/> : <EmailOutlinedIcon/> }                                
                            </ListItemIcon>
                            <ListItemText>{ text }</ListItemText>
                        </ListItemButton>
                    ))
                }
            </List>
        </Box>

    </Drawer>
  )
}
