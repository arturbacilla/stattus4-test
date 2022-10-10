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
      hover: '#6eff9b',
      hoverOpacity: 0.8,
      disabledOpacity: 0.48,
    },
  },
});

export default themeOptions;
