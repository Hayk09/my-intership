import React from "react";
import { RouterProvider } from "./provider";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme";


const App = () => {
  return (
    <div >
      <ThemeProvider theme={theme}>
         <RouterProvider/>
      </ThemeProvider>
    </div>
  );
}

export default App;
