import { createTheme} from '@mui/material/styles';


const theme = createTheme({
  // components: {
  //   // Name of the component
  //   MuiButtonBase: {
  //     defaultProps: {
  //       // The props to change the default for.
  //       disableRipple: true, // No more ripple, on the whole application 💣!
  //     },
  //   },
  // },
    fontSize: {
      body: '12px',
      body1: '16px',
      body2: '18px',
      body3: '30px',
    },
    colors: {
      grey: '#839192',
      grey1: '#D5DBDB',
      blue: '#3498DB',
      black: '#000'
    },
    fontWeight: {
      bold: 400,
      bold1: 700
    },
    fontFamily: {
      lobster: 'Lobster',
      montserrat: 'Montserrat',
    }, 
   

});

export default theme