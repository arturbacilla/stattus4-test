import { createTheme } from '@mui/material/styles';

const themeOptions = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#6eff9b',
    },
    secondary: {
      main: '#f50057',
    },
    action: {
    //   active: GREY[600],
      hover: '#6eff9b',
      //   selected: GREY[500_16],
      //   disabled: GREY[500_80],
      //   disabledBackground: GREY[500_24],
      //   focus: GREY[500_24],
      hoverOpacity: 0.8,
      disabledOpacity: 0.48,
    },
  },
});

export default themeOptions;
