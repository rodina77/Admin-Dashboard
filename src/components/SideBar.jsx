import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Avatar, Tooltip, Typography, styled, useTheme } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import HomeOutLinedIcon from "@mui/icons-material/HomeOutLined";
import BiotechOutlinedIcon from "@mui/icons-material/BiotechOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimeLineOutlinedIcon from "@mui/icons-material/TimeLineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { useLocation } from "react-router-dom";
import { grey } from "@mui/material/colors";
import { LogoutOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(
  // @ts-ignore
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Array1 = [
  {
    text: "DashBoard",
    icon: <HomeOutLinedIcon />,
    path: "/home",
  },
];

const Array2 = [
  { text: "Laboratories", icon: <BiotechOutlinedIcon />, path: "/home/labs" },
  { text: "Lab Technicals", icon: <PeopleOutlinedIcon />, path: "/home/tech" },
  { text: "Population", icon: <Diversity3OutlinedIcon />, path: "/home/pop" },
];

const Array3 = [
  { text: "Bar Chart", icon: <BarChartOutlinedIcon />, path: "/home/bar" },
  { text: "Pie Chart", icon: <PieChartOutlinedIcon />, path: "/home/pie" },
  { text: "Line Chart", icon: <TimeLineOutlinedIcon />, path: "/home/line" },
  { text: "Geography Chart", icon: <MapOutlinedIcon />, path: "/home/geo" },
];

const Array4 = [
  {
    text: "Log Out",
    icon: <LogoutOutlined />,
    handleLogout: () => {
      localStorage.removeItem('token');
    },
    path: "/",
  },
];
// eslint-disable-next-line react/prop-types
const SideBar = ({ open, handleDrawerClose }) => {
  let location = useLocation();

  const navigate = useNavigate();

  const theme = useTheme();

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader sx={{ backgroundColor: theme.palette.info.dark }}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>

      <Divider />

      <Avatar
        sx={{
          mx: "auto",
          width: open ? 90 : 50,
          height: open ? 90 : 50,
          my: 1,
          border: "2px solid gray",
          transition: " 0.25s",
        }}
        alt="Remy Sharp"
        src="data:image/png;base64,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"
      />
      <Typography
        align="center"
        sx={{
          fontSize: open ? 25 : 0,
          mb: 1,
          transition: " 0.25s",
          color: theme.palette.info.dark,
        }}
      >
        Admin
      </Typography>

      <Divider />

      <List>
        {Array1.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <Tooltip title={open ? null : item.text} placement="left">
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  bgcolor:
                    location.pathname === item.path
                      ? theme.palette.mode === "dark"
                        ? grey[800]
                        : grey[300]
                      : null,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {Array2.map((item) => (
          <ListItem key={item.path}  disablePadding sx={{ display: "block" }}>
            <Tooltip title={open ? null : item.text} placement="left">
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  bgcolor:
                    location.pathname === item.path
                      ? theme.palette.mode === "dark"
                        ? grey[800]
                        : grey[300]
                      : null,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {Array3.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <Tooltip title={open ? null : item.text} placement="left">
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  bgcolor:
                    location.pathname === item.path
                      ? theme.palette.mode === "dark"
                        ? grey[800]
                        : grey[300]
                      : null,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
  {Array4.map((item) => (
    <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
      <Tooltip title={open ? null : item.text} placement="left">
        <ListItemButton
          onClick={() => {
            item.handleLogout(); // Call the handleLogout function
            navigate(item.path);
          }}
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
            bgcolor:
              location.pathname === item.path
                ? theme.palette.mode === "dark"
                  ? grey[800]
                  : grey[300]
                : null,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : "auto",
              justifyContent: "center",
              color: theme.palette.error.dark,
            }}
          >
            {item.icon}
          </ListItemIcon>
          <ListItemText
            primary={item.text}
            sx={{ opacity: open ? 1 : 0 }}
          />
        </ListItemButton>
      </Tooltip>
    </ListItem>
  ))}
</List>

    </Drawer>
  );
};

export default SideBar;
