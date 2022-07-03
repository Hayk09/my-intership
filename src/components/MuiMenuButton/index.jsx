import React from "react";
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import Menu from "@mui/material/Menu";
import { Box, IconButton, Button, Stack, MenuList } from "@mui/material";
import { COLOR, MARGINS, BORDRADIUS } from "../../constant/index";
import { useHistory } from "react-router-dom";
import LaunchIcon from '@mui/icons-material/Launch';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const MuiMenuButton = ({ open, handleClick, handleClose }) => {
  const history = useHistory();
  return (
    <Box display={{ sm: "hidden", md: "none" }} sx={{
      ml:MARGINS.ml,
    }}>
      <IconButton
        aria-label="more"
        id="long-button"
        // aria-controls={!open ? "long-menu" : undefined}
        // aria-expanded={!open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <LinearScaleIcon />
      </IconButton>
      <Menu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={open}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: "130px",
            borderRadius:BORDRADIUS.xxl
          },
        }}
      >
       <MenuList sx={{
         bgcolor:"white"
       }}>
          <Stack flexDirection="column">
            <Button
              sx={{
                color: COLOR.black,
                borderRadius:BORDRADIUS.xxl
              }}
            >
              Tools
              <LaunchIcon sx={{
                display:"flex",
                alignItems:"center",
                width:"17px",
                ml:MARGINS.ml2,
                mt:MARGINS.mt4
              }}/>
            </Button>
            <Button
              sx={{
                color: COLOR.black,
                borderRadius:BORDRADIUS.xxl
              }}
            >
              News
              <NewspaperIcon sx={{
                  display:"flex",
                  alignItems:"center",
                  width:"17px",
                  ml:MARGINS.ml2,
                  mt:MARGINS.mt4
              }}/>
            </Button>
            <Button
              sx={{
                color: COLOR.black,
                borderRadius:BORDRADIUS.xxl
              }}
              onClick={() => (
                  history.push("/pricing")
              )}
            >
              Pricing
              <MonetizationOnIcon sx={{
                display:"flex",
                alignItems:"center",
                width:"17px",
                ml:MARGINS.ml2,
                mt:MARGINS.mt4,
                color:COLOR.green3
              }}/>
            </Button>
            <Box sx={{
              display:"flex",
              justifyContent:"center"
            }}>
            <Button
              sx={{
                color: COLOR.amber,
                bgcolor: COLOR.yellow3,
                borderRadius:BORDRADIUS.xxl,
                width:"100px",
                transition:"0.8s",
                "&:hover":{
                  bgcolor:COLOR.yellow,
                  color:COLOR.white,
                  mt:MARGINS.mt6,
                  boxShadow:6
                }
              }}
              variant="text"
              onClick={() => history.push("/login")}
            >
              LOG IN
            </Button>
            </Box>
          </Stack>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default MuiMenuButton;
