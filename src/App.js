import { createTheme, ThemeProvider} from "@mui/material";
import Navigation from "./Containers/Navagation";

function App() {
 const theme = createTheme({
    palette: {
      primary: {
        main: '#2D282D',
        light: '#323233',
        dark: '#1F1E1E'
      },
      text: {
        primary: '#97BFDC',
        secondary: '#88BE96',
      },
    },
    },
  );



  return (

    <ThemeProvider theme={theme}>
      <Navigation/>
    </ThemeProvider>
  );
}

export default App;
