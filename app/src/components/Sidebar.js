import React from 'react';
import { Icon } from 'semantic-ui-react'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import { useHistory } from "react-router-dom";
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  let history = useHistory();

function goHome() {
  history.push("/home");
}

function goWeather() {
  history.push("/weather");
}


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
             Bolzano
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
       
        
        <div style={{ position: 'relative',  display: open ? '' : 'none' }}>
        
          <ListItem button key={"User Name"}>

            <img
              style={{ width: '40%', height: '40%', overflow: "hidden", display: 'block', marginLeft:50  }}
              src={require('../img/bozen.png')} />

            <ListItemText style={{ textAlign: 'center', marginTop: 10 }}  />
          </ListItem>
        </div>

        <List>

          <ListItem button key={"Home"}  onClick={goHome}>
            <ListItemIcon>{ <Icon name='home' size="big" style={{ color: 'black' }} />
            }</ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>
          

          <ListItem button key={"Public Transport"} >
            <ListItemIcon>{<Icon name='bus' size="big" style={{ color: 'black' }} />
            }</ListItemIcon>

            <ListItemText primary={"Public Transport"} />
          </ListItem>



          <ListItem button key={"Air Quality"} >
            <ListItemIcon>{<Icon name='leaf' size="big" style={{ color: 'black' }} />
            }</ListItemIcon>

            <ListItemText primary={"Air Quality"} />
          </ListItem>



          <ListItem button key={"Weather"}   onClick={goWeather}>
            <ListItemIcon>{<Icon name='umbrella' size="big" style={{ color: 'black' }} />
            }</ListItemIcon>

            <ListItemText primary={"Weather"} />
          </ListItem>

          <ListItem button key={"Parking"} >
            <ListItemIcon>{<Icon name='car' size="big" style={{ color: 'black' }} />
            }</ListItemIcon>

            <ListItemText primary={"Parking"} />
          </ListItem>
          
          <ListItem button key={"Bike rent"} >
            <ListItemIcon>{<Icon name='bicycle' size="big" style={{ color: 'black' }} />
            }</ListItemIcon>

            <ListItemText primary={"Bike rent"} />
          </ListItem>
          





        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      
      </main>
    </div>
  );
}