import {
  TextField,
  Box,
  Stack,
  Typography,
  Button,
  Link,
  Tooltip,
  Switch
} from "@mui/material";
import React from "react";
import {
  COLOR,
  FONTS,
  FONTFAMILY,
  MARGINS,
  BORDRADIUS,
} from "../../constant/index";
import UndoIcon from "@mui/icons-material/Undo";

const Add = () => {
  return (
    <Box>
      <Link href="/">
        <Tooltip title="Go to the Homepage">
          <Button
            sx={{
              width: "30px",
              color: COLOR.orange,
              ml: "180px",
              mt: "40px",
            }}
          >
            <UndoIcon />
          </Button>
        </Tooltip>
      </Link>
      <Typography
        sx={{
          ml: "250px",
          mt: "-45px",
          fontSize: "30px",
          fontFamily: FONTFAMILY.montserrat,
        }}
      >
        You can add Tools
      </Typography>
      <Box
        sx={{
          width: "1200px",
          height: "500px",
          boxShadow: 5,
          ml: "150px",
          mt: "40px",
          borderRadius: BORDRADIUS.xl,
        }}
      >
        <TextField
          sx={{
            width: "500px",
            ml: "40px",
            mt: "50px",
          }}
          variant="filled"
          label="?????"
        />
        <TextField
          sx={{
            width: "500px",
            ml: "120px",
            mt: "50px",
          }}
          variant="filled"
          label="?????"
        />
         <TextField
          sx={{
            width: "900px",
            ml: "40px",
            mt: "50px",
          }}
          variant="filled"
          label="URL"
          
        />
        {/* <Switch  defaultChecked /> */}
      </Box>
    </Box>
  );
};

export default Add;

{
  /* <Box
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
      </Box> */
}
{
  /* <Button
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
      </Button> */
}
