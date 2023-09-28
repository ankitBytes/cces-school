import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../contexts/authContext";

const DashboardNav = (props) => {
  const { set_currentView } = props;

  const navigate = useNavigate();
  const { logOut } = UserAuth();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavBtn = (view) => {
    set_currentView(view);
    navigate({ pathname: "/admin/dashboard", hash: view });
  };

  const styles = {
    btn: {
      textTransform: "capitalize",
      color: "#222",
      fontWeight: "bold",
    },
  };

  return (
    <Box sx={{ background: "#00aeef" }}>
      <Container maxWidth="lg">
        <Stack
          direction="row"
          spacing={2}
          justifyContent={"space-between"}
          sx={{ padding: ".5rem" }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", color:"#000" }}>
            Admin Dashboard
          </Typography>

          <Stack
            direction={"row"}
            spacing={2}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Button
              variant="text"
              size="small"
              onClick={() => handleNavBtn("schools")}
              sx={styles.btn}
            >
              School Data
            </Button>
            <Button
              variant="text"
              size="small"
              onClick={() => handleNavBtn("charts")}
              sx={styles.btn}
            >
              Charts
            </Button>
            <Button
              variant="text"
              size="small"
              onClick={() => logOut()}
              sx={{ ...styles.btn, color: "red" }}
            >
              Logout
            </Button>
          </Stack>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              size="small"
              variant="text"
            >
              <MenuIcon />
            </Button>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={() => handleNavBtn("schools")}>
                School Data
              </MenuItem>
              <MenuItem onClick={() => handleNavBtn("charts")}>Charts</MenuItem>
              <MenuItem onClick={() => logOut()} sx={{ color: "red" }}>
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
export default DashboardNav;

DashboardNav.propTypes = {
  set_currentView: PropTypes.func.isRequired,
};
