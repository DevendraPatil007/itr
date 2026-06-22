import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
         <Route path="/about" element={<About/>} />
         <Route path="/project" element={<Project/>}/>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;


