import { Component } from 'react'
import { internalEventEmitter } from './internalEventEmitter'
import { AppBar, Box, Drawer, IconButton, List, Toolbar } from '@mui/material'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { styled } from '@mui/material/styles'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import MenuIcon from '@mui/icons-material/Menu'
import { Button } from 'evergreen-ui'


const drawerWidth = 240

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))


export class Sidebar extends Component<{}, { isSidebarOpen: boolean, open: boolean, boxMarginLeftPx: number }> {
  constructor(props: {}) {
    super(props)
    this.state = {
      isSidebarOpen: false,
      open: false,
      boxMarginLeftPx: 0
    }
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this)
    this.handleDrawerClose = this.handleDrawerClose.bind(this)
  }

  componentDidMount() {
    internalEventEmitter.removeAllListeners('accountSidebarClose')
    internalEventEmitter.on('accountSidebarClose', () => {
      this.setState({ ...this.state, isSidebarOpen: false })
    })
  }

  handleDrawerOpen() {
    this.setState({ ...this.state, isSidebarOpen: true, boxMarginLeftPx: drawerWidth })
  };

  handleDrawerClose() {
    this.setState({ ...this.state, isSidebarOpen: false, boxMarginLeftPx: -drawerWidth })
  };

  componentWillUnmount() {
    internalEventEmitter.removeAllListeners('accountSidebarClose')
  }

  render() {
    return (
      <div className={'card flex justify-content-center'}>
        <Button
          onClick={() => this.setState({ ...this.state, isSidebarOpen: !this.state.isSidebarOpen })}>Open/Close</Button>
        <Box sx={{ display: 'flex', marginLeft: this.state.boxMarginLeftPx }}>
          <AppBar sx={{ backgroundColor: '#FAFBFF' }}>
            <Toolbar>
              <IconButton onClick={() => this.setState({ ...this.state, isSidebarOpen: !this.state.isSidebarOpen })}>
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
              },
            }}
            variant="persistent"
            anchor="left"
            // open={true}
            open={this.state.isSidebarOpen}
          >
            <DrawerHeader>
              {this.state.isSidebarOpen ?
                (<IconButton onClick={this.handleDrawerClose}>
                  {this.state.isSidebarOpen ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>) :
                (<IconButton onClick={this.handleDrawerOpen}>
                  {this.state.isSidebarOpen ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>)
              }
            </DrawerHeader>
            <List>
              {['Chameleon', 'AppCues'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Box>
      </div>
    )
  }

}

export default Sidebar
