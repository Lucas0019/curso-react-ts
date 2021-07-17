import GlobalSyles from "./styles/global"
import theme from "./styles/theme"
import SignIn from './pages/SignIn'
import { ThemeProvider } from "styled-components"  

function App() {
  return (
    <ThemeProvider theme={theme.default}>
      <GlobalSyles/>
      <SignIn/>
    </ThemeProvider>
  );
}

export default App;
