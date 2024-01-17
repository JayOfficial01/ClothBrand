import { ThemeProvider } from "styled-components";

import { Footer, Navbar } from "./components";
import { Home } from "./pages";

import THEME from "./styles/theme";
import { GlobalStyle } from "./styles/globalStyles";

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyle />
      <Navbar />
      <Home />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
