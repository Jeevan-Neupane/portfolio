import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import SkillPage from "./pages/SkillsPage/SkillPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./styles/Theme";
import ContactPage from "./pages/ContactPage/ContactPage";
import Layout from "./layout/Layout";
import Cursor from "./components/cursor/Cursor";
import { useEffect, useState } from "react";
import MainLoader from "./components/mainloader/MainLoader";
import { MainDiv } from "./styles/Container";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <MainDiv>
        <MainLoader />
        <GlobalStyle />
      </MainDiv>
    );
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route
          path='/'
          element={<Layout />}
        >
          <Route
            index
            element={<HomePage />}
          />
          <Route
            path='/about'
            element={<AboutPage />}
          />
          <Route
            path='/skills'
            element={<SkillPage />}
          />

          <Route
            path='/contact'
            element={<ContactPage />}
          />
        </Route>
        <Route
          path='/projects'
          element={<ProjectPage />}
        />
      </Route>
    )
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <Cursor />
      <RouterProvider router={router} />

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
