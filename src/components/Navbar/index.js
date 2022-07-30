import React from "react";
import { Box, Button, TextField,Link} from "@mui/material";
import {
  COLOR,
  FONTS,
  FONTFAMILY,
  MARGINS,
  BORDRADIUS,
} from "../../constant/index";
import { CssBaseline } from "@mui/material";
import {  useHistory } from "react-router-dom";
import MuiMenuButton from "../MuiMenuButton";
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import InputAdornment from '@mui/material/InputAdornment';

const Navbar = () => {
  const history = useHistory();
  const [open, setOpen] = React.useState(null);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(null);
  };

  return (
    <Box>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "10px",
          boxShadow: "3",
          height: "90px",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            fontFamily: FONTFAMILY.montserrat,
            fontSize: FONTS.body3,
            cursor:"pointer"
          }}
          onClick={() => (
            history.push("/")
          )}
        >
          Great
        </Box>
        <Box
          sx={{
            fontFamily: FONTFAMILY.montserrat,
            fontSize: FONTS.body3,
            color: COLOR.yellow,
            cursor:"pointer"
          }}
          onClick={() => (
            history.push("/")
          )}
        >
          STAR
        </Box>
        <Box
          sx={{
            fontFamily: FONTFAMILY.lobster,
            fontSize: FONTS.smoll,
            mt: MARGINS.mt,
          }}
        >
          GS
        </Box>
        <MuiMenuButton
          handleClose={handleClose}
          handleClick={handleClick}
          open={open}
        />
        <Box display={{ xs: "none", md: "hidden" }}>
          <Button
            sx={{
              color: COLOR.black,
              width: "130px",
              ml:MARGINS.ml
            }}
          >
            Tools
          </Button>

          <Button
            sx={{
              color: COLOR.black,
              width: "130px",
            }}
          >
            News
          </Button>
          <Link underline="none" href="/pricing">
          <Button
            sx={{
              color: COLOR.black,
              width: "130px",
            }}
          >
            Pricing
          </Button>
          </Link>
          <Link underline="none" href="/login">
          <Button
            sx={{
              color: COLOR.amber,
              bgcolor: COLOR.yellow3,
              borderRadius: BORDRADIUS.xxl,
              ml:MARGINS.ml,
              transition:"0.6s",
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
          </Link>
        </Box>
        <Box >
            <TextField sx={{
              ml:MARGINS.ml3,
              transition:"1s",
              borderColor:COLOR.white,
              borderRadius:BORDRADIUS.lg,
              width:"43px",
              paddingLeft:"12px",
              "&:hover":{
                  boxShadow:"5",
                  width:"200px",
                  ml:MARGINS.ml8,
                  bgcolor:COLOR.white
              },
              boxShadow:"inherit"
            }}  variant="standard" placeholder="Search here..." 
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ManageSearchIcon  sx={{
                    color:COLOR.amber,
                    cursor:"pointer"
                  }}/>
                </InputAdornment>
              ),
            }}>
            </TextField>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;

