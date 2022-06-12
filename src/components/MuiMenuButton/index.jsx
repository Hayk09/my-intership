import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, IconButton, Button, Stack } from "@mui/material";
import { COLOR, BORDRADIUS } from "../../constant/index";
import { useHistory } from "react-router-dom";

const MuiMenuButton = ({ open, handleClick, handleClose }) => {
  const history = useHistory();
  return (
    <Box display={{ sm: "hidden", md: "none" }}>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={!open ? "long-menu" : undefined}
        aria-expanded={!open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={open}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            // maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        <MenuItem>
          <Stack flexDirection="column">
            <Button
              sx={{
                color: COLOR.black,
              }}
            >
              Launch
            </Button>

            <Button
              sx={{
                color: COLOR.black,
              }}
            >
              News
            </Button>
            <Button
              sx={{
                color: COLOR.black,
              }}
            >
              Pricing
            </Button>
            <Button
              sx={{
                color: COLOR.amber,
                bgcolor: COLOR.yellow3,
              }}
              variant="text"
              onClick={() => history.push("/login")}
            >
              LOG IN
            </Button>
          </Stack>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default MuiMenuButton;
