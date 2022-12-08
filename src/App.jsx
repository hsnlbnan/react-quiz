import Welcome from "./Pages/Welcome";
import QuestionPages from "./Pages/QuestionPages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./Styles/Global/Global";
import { ThemeProvider } from "styled-components";
import theme from "./constants/theme";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route path="/question" element={<QuestionPages />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
