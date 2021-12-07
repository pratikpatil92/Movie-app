import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
// import ListItem from '@material-ui/core/ListItem';
import MuiListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import StopRoundedIcon from "@material-ui/icons/StopRounded";
import { Typography, Collapse } from "@material-ui/core";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
// import Logo from "./../../../assets/nimap-logo.png";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    height: "100%",
    "&$selected": {
      color: "blue",
    },
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },

    backgroundColor: "#f4f5fd",
    boxShadow: "none",
    color: "black",
  },
  active: {
    backgroundColor: theme.palette.action.selected,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    borderRadius: "1px 25px 25px 1px",
  },
  content: {
    // flexGrow: 1,
    padding: theme.spacing(3),
    width: "100%",
    height: "100%",
  },
  listicon: {
    minWidth: 40,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  ListItem: {
    paddingBottom: "4px",
    paddingLeft: "20px",
  },
}));

const ListItem = withStyles({
  root: {
    "&$selected": {
      backgroundColor: "white",
      color: "#33AFFF",
      "& .MuiSvgIcon-root": {
        color: "#33AFFF",
      },
    },
    fontSize: "0.7em", //Insert your required size
  },

  selected: {},
})(MuiListItem);

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [openMaster, setOpenMaster] = React.useState(true);

  const onMaster = () => {
    setOpenMaster(!openMaster);
  };

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <List>
          <ListItem>
            <img src="Movie-app\public\logo192.png"></img>
          </ListItem>
        </List>
      </div>
      <List>
        <ListItem
          width="10%"
          className={classes.ListItem}
          button
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
          component={Link}
          exact
          to="/Dashboard"
        >
          <ListItemIcon className={classes.listicon}>
            <StopRoundedIcon fontSize="large"></StopRoundedIcon>
          </ListItemIcon>
          <ListItemText disableTypography>
            <Typography variant="subtitle2">Dashboard</Typography>
          </ListItemText>
        </ListItem>
        <ListItem
          width="10%"
          className={classes.ListItem}
          button
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
          component={Link}
          exact
          to="/User"
        >
          <ListItemIcon className={classes.listicon}>
            <StopRoundedIcon fontSize="large"></StopRoundedIcon>
          </ListItemIcon>
          <ListItemText disableTypography>
            <Typography variant="subtitle2">Users</Typography>
          </ListItemText>
        </ListItem>
        <ListItem
          width="10%"
          className={classes.ListItem}
          button
          onClick={onMaster}
        >
          <ListItemIcon className={classes.listicon}>
            <StopRoundedIcon fontSize="large"></StopRoundedIcon>
          </ListItemIcon>
          <ListItemText disableTypography>
            <Typography variant="subtitle2">Master</Typography>
          </ListItemText>
          {openMaster ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openMaster} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              width="10%"
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
              component={Link}
              exact
              to="/TechnologyMaster"
            >
              <ListItemIcon className={classes.listicon}>
                <StopRoundedIcon fontSize="large"></StopRoundedIcon>
              </ListItemIcon>

              <ListItemText>
                <Typography variant="subtitle2">Technology</Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              button
              className={classes.nested}
              width="10%"
              selected={selectedIndex === 4}
              onClick={(event) => handleListItemClick(event, 4)}
              component={Link}
              exact
              to="/UserTechnology"
            >
              <ListItemIcon className={classes.listicon}>
                <StopRoundedIcon fontSize="large"></StopRoundedIcon>
              </ListItemIcon>

              <ListItemText>
                <Typography variant="subtitle2">User Technology</Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              button
              className={classes.nested}
              width="10%"
              selected={selectedIndex === 5}
              onClick={(event) => handleListItemClick(event, 5)}
              component={Link}
              exact
              to="/TopicMaster"
            >
              <ListItemIcon className={classes.listicon}>
                <StopRoundedIcon fontSize="large"></StopRoundedIcon>
              </ListItemIcon>

              <ListItemText>
                <Typography variant="subtitle2">Topic</Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              button
              className={classes.nested}
              width="10%"
              selected={selectedIndex === 6}
              onClick={(event) => handleListItemClick(event, 6)}
              component={Link}
              exact
              to="/SubTopicMaster"
            >
              <ListItemIcon className={classes.listicon}>
                <StopRoundedIcon fontSize="large"></StopRoundedIcon>
              </ListItemIcon>

              <ListItemText>
                <Typography variant="subtitle2">Sub-Topic</Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              button
              className={classes.nested}
              width="10%"
              selected={selectedIndex === 7}
              onClick={(event) => handleListItemClick(event, 7)}
              component={Link}
              exact
              to="/ContentMaster"
            >
              <ListItemIcon className={classes.listicon}>
                <StopRoundedIcon fontSize="large"></StopRoundedIcon>
              </ListItemIcon>

              <ListItemText>
                <Typography variant="subtitle2">Content</Typography>
              </ListItemText>
            </ListItem>
          </List>
        </Collapse>
        <ListItem
          width="10%"
          className={classes.ListItem}
          button
          selected={selectedIndex === 8}
          onClick={(event) => handleListItemClick(event, 8)}
          component={Link}
          exact
          to="/ResourseMentor"
        >
          <ListItemIcon className={classes.listicon}>
            <StopRoundedIcon fontSize="large"></StopRoundedIcon>
          </ListItemIcon>
          <ListItemText disableTypography>
            <Typography variant="subtitle2">Resource Mentor</Typography>
          </ListItemText>
        </ListItem>
        <ListItem
          width="10%"
          className={classes.ListItem}
          button
          selected={selectedIndex === 9}
          onClick={(event) => handleListItemClick(event, 9)}
          component={Link}
          exact
          to="/Taskevolution"
        >
          <ListItemIcon className={classes.listicon}>
            <StopRoundedIcon fontSize="large"></StopRoundedIcon>
          </ListItemIcon>
          <ListItemText disableTypography>
            <Typography variant="subtitle2">Task Evaluation </Typography>
          </ListItemText>
        </ListItem>
        <ListItem
          width="10%"
          className={classes.ListItem}
          button
          selected={selectedIndex === 10}
          onClick={(event) => handleListItemClick(event, 11)}
          component={Link}
          exact
          to="/RolesPermissions"
        >
          <ListItemIcon className={classes.listicon}>
            <StopRoundedIcon fontSize="large"></StopRoundedIcon>
          </ListItemIcon>
          <ListItemText disableTypography>
            <Typography variant="subtitle2">Roles and Permissions</Typography>
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />

      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
