import React from "react";
import { Box, Link, Tooltip, Button } from "@mui/material";
import {
  COLOR,
  FONTS,
  FONTFAMILY,
  MARGINS,
  BORDRADIUS,
} from "../../constant/index";
import UndoIcon from "@mui/icons-material/Undo";

const About = () => {
  return (
    <Box>
      <Box>
        <Link href="/">
          <Tooltip title="Go to the Homepage">
            <Button
              sx={{
                width: "30px",
                color: COLOR.orange,
                ml: "750px",
                mt: "50px",
              }}
            >
              <UndoIcon />
            </Button>
          </Tooltip>
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          padding: "10px",
          mt: "100px",
          alignItems: "center",
          mt: "0px",
        }}
      >
        <Box
          sx={{
            fontFamily: FONTFAMILY.montserrat,
            fontSize: FONTS.body3,
            mt: "-140px",
            ml: "700px",
          }}
        >
          Great
        </Box>
        <Box
          sx={{
            fontFamily: FONTFAMILY.montserrat,
            fontSize: FONTS.body3,
            color: COLOR.yellow,
            mt: "-140px",
          }}
        >
          STAR
        </Box>
        <Box
          sx={{
            fontFamily: FONTFAMILY.lobster,
            fontSize: FONTS.smoll,
            mt: MARGINS.mt,
            mt: "-140px",
          }}
        >
          GS
        </Box>
      </Box>
      <Box
        sx={{
          fontFamily: FONTFAMILY.montserrat,
          ml: "100px",
          mt: "50px",
        }}
      >
        You can find in GOOGLE MAP
      </Box>
    
    </Box>
  );
};

export default About;
