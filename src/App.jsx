import { ThemeProvider } from "styled-components";

import { Footer, Navbar } from "./components";
import { Home } from "./pages";

import THEME from "./styles/theme";
import { GlobalStyle } from "./styles/globalStyles";
import WomenSection from "../src/pages/WomenSection/WomenSection"

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyle />
      <Navbar />
      {/* <Home /> */}
      <WomenSection/>
      {/* <Footer /> */}
    </ThemeProvider>
  );
}

export default App;
