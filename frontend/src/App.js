import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import "./index.css";
import { darkTheme, lightTheme } from "./utils/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Signin from "./pages/Signin";
import Search from "./pages/Search";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
  padding: 22px 96px;
`;

function App() {
  const [darkMode, setdarkMode] = useState(true);
  const { currUser } = useSelector((state) => state.userdata);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu darkMode={darkMode} setdarkMode={setdarkMode} />
          <Main>
            <Navbar></Navbar>
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home type={"random"} />} />
                  <Route path="trends" element={<Home type={"trends"} />} />
                  <Route path="subs" element={<Home type={"subs"} />} />
                  <Route
                    path="signin"
                    element={currUser ? <Home /> : <Signin />}
                  />
                  <Route path="search" element={<Search />} />
                  <Route path="videos">
                    <Route path=":id" element={<Video />}></Route>
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
