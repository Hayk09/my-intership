import React from "react";
import {Grid,Box} from '@mui/material'

export const Tools = () => {
  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Box>1</Box>
        </Grid>
        <Grid item xs={6}>
          <Box>2</Box>
        </Grid>
        <Grid item xs={6}>
          <Box>3</Box>
        </Grid>
        <Grid item xs={6}>
          <Box>4</Box>
        </Grid>
      </Grid>
    </>
  );
};
