import { TextField, Box, Stack, Typography, Button } from "@mui/material";
import React from "react";
import {
  COLOR,
  FONTS,
  FONTFAMILY,
  MARGINS,
  BORDRADIUS,
} from "../../constant/index";

const Add = () => {
  return (
    <Box>
      <Typography
        sx={{
          ml: "50px",
          fontSize: "30px",
          fontFamily: FONTFAMILY.montserrat,
        }}
      >
        You can add Tools
      </Typography>
      <Box
        sx={{
          width: "300px",
          ml: "100px",
          mt: "50px",
        }}
      >
        <Stack spacing={2}>
          <TextField label="URL" />
          <TextField label="Cost" />
          <TextField label="Name" />
        </Stack>
      </Box>
      <Button
        sx={{
          color:COLOR.yellow,
          width:"100px",
          mt: "50px",
          ml: "200px",
          transition: "0.6s",
          borderRadius: BORDRADIUS.sm,
          boxShadow: 1,
          "&:hover": {
            boxShadow: 10,
          },
        }}
      >
        Add
      </Button>
    </Box>
  );
};

export default Add;
