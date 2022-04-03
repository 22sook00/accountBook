import React from "react";
import "./App.css";
import DefaultLayout from "./components/Layout/DefaultLayout";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <DefaultLayout>
      <MainPage />
    </DefaultLayout>
  );
}

export default App;
