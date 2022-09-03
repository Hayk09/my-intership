import React from "react";
import { Box, Button, ImageListItem, Stack, Grid } from "@mui/material";
import {
  COLOR,
  FONTS,
  FONTFAMILY,
  MARGINS,
  BORDRADIUS,
} from "../../constant/index";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";


export const ListItem = ({
  id,
  image,
  cost,
  buyIcon,
  deleteicon,
  DeleteOneItem,
  text,
}) => {
  return (
    <Box>
      <Box
        sx={{
          diplay: "flex",
          borderRadius: BORDRADIUS.lg,
          fontFamily: FONTFAMILY.montserrat,
          boxShadow: "5",
          width: "300px",
          height: "350px",
          mt: "50px",
          "&:hover": {
            boxShadow: 15,
          },
        }}
      >
        <ImageListItem
          sx={{
            width: "200px",
            mt: "50px",
            ml: "50px",
          }}
        >
          <img src={image} />
        </ImageListItem>

        <Button
          sx={{
            color: "red",
            ml: "110px",
            transition: "0.6s",
            borderRadius: BORDRADIUS.xl,
            boxShadow: 1,
            "&:hover": {
              boxShadow: 10,
            },
          }}
          onClick={() => DeleteOneItem(id)}
        >
          <DeleteIcon sx={{ color: "red" }} />
          {deleteicon}
        </Button>
        <Button
          sx={{
            color: "green",
            ml: "210px",
            mt: "-64px",
            transition: "0.6s",
            borderRadius: BORDRADIUS.xl,
            boxShadow: 1,
            "&:hover": {
              boxShadow: 10,
            },
          }}
          onClick={() => (alert("You want buy this?"))}
        >
          <AddShoppingCartIcon sx={{ color: "green" }} />
          {buyIcon}
        </Button>

        <Box
          sx={{
            fontSize: FONTS.body2,
            ml: "30px",
            mt: "-57px",
          }}
        >
          {cost}
        </Box>
        <Box
          sx={{
            ml: "50px",
            mt: "6px",
            color: COLOR.yellow,
            width: "100px",
          }}
        >
          {text}
          
        </Box>
      
        {/* <Stack direction="row">
          <Box
            sx={{
              display: "flex",
              fontFamily: FONTFAMILY.montserrat,
              fontSize: FONTS.body2,
              mt: "10px",
              ml: "50px",
            }}
          >
            Great
          </Box>
          <Box
            sx={{
              fontFamily: FONTFAMILY.montserrat,
              fontSize: FONTS.body2,
              color: COLOR.yellow,
              mt: "10px",
            }}
          >
            STAR
          </Box>
          <Box
            sx={{
              fontFamily: FONTFAMILY.lobster,
              fontSize: FONTS.smoll,
              mt: MARGINS.mt,
              mt: "20px",
            }}
          >
            GS
          </Box>
        </Stack> */}
      </Box>
    </Box>
  );
};
