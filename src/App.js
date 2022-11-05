import { ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Foorter from "./components/footer";
import Hotel from "./components/hotel/Hotel";
import ListProperties from "./components/listProperties";
import ListSearch from "./components/search/ListSearch";
import HomePage from "./Pages/HomePage";
import ListPropertiesPage from "./Pages/ListPropertiesPage";
import NotFound from "./Pages/NotFound";
import theme from "./Theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<HomePage />} />
          <Route path="listProperies" element={<ListPropertiesPage />}>
            <Route index element={<ListProperties />} />
            <Route path="search" element={<ListSearch />} />
            <Route path=":hotelId" element={<Hotel />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
