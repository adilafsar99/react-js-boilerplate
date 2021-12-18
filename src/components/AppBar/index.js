import * as React from 'react';
import {Link} from "react-router-dom";
import {
  styled,
  useTheme
} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import PsychologyIcon from "@mui/icons-material/Psychology";
import EngineeringIcon from "@mui/icons-material/Engineering";
import ContactPageIcon from "@mui/icons-material/ContactPage";

function AppDrawer() {
const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});
const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});
const DrawerHeader = styled('div')(({
  theme
}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({
    theme, open
  }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open'
})(
  ({
    theme, open
  }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);
  const theme = useTheme();
  const [open,
    setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={ { display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={ {
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
            >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap component="div">
My Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon />: <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <Link to="/">
             <ListItem button key='Home'>
               <ListItemIcon>
                 <HomeIcon />
               </ListItemIcon>
               <ListItemText primary='Home' />
             </ListItem>
          </Link>
          <Link to="/skills">
             <ListItem button key='Skills'>
               <ListItemIcon>
                 <BuildIcon />
               </ListItemIcon>
               <ListItemText primary='Skills' />
             </ListItem>
          </Link>
          <Link to="/experience">
             <ListItem button key='Experience'>
               <ListItemIcon>
                 <PsychologyIcon />
               </ListItemIcon>
               <ListItemText primary='Experience' />
             </ListItem>
          </Link>
          <Link to="/projects">
             <ListItem button key='My Projects'>
               <ListItemIcon>
                 <EngineeringIcon />
               </ListItemIcon>
               <ListItemText primary='My Projects' />
             </ListItem>
          </Link>
          <Link to="/contact">
             <ListItem button key='Contact Me'>
               <ListItemIcon>
                 <ContactPageIcon />
               </ListItemIcon>
               <ListItemText primary='Contact Me' />
             </ListItem>
          </Link>
        </List>
      </Drawer>
     </Box>
  );
}

export default AppDrawer;