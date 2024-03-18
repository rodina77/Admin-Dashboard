import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/dashboard/Dashboard";
import Labs from "./pages/labs/Labs";
import Technicals from "./pages/technicals/Technicals";
import Population from "./pages/population/Population";
import BarChart from "./pages/barChart/BarChart";
import PieChart from "./pages/pieChart/PieChart";
import LineChart from "./pages/lineChart/LineChart";
import Geography from "./pages/geography/Geography";
import NotFound from "./pages/notFound/NotFound";
import AddLab from "./pages/editLab/AddLab";
import UpdateLab from "./pages/editLab/updateLab";
import AddTech from "./pages/editTechnicals/addTech";
import UpdateTech from "./pages/editTechnicals/updateTech";
import UpdataPopulation from "./pages/editPopulaation/updataPopulation";
import Login from "./components/login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>

    <Route path="/" element={<Login />} />

    <Route path="/home" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="labs" element={<Labs />} />
      <Route path="tech" element={<Technicals />} />
      <Route path="pop" element={<Population />} />

      <Route path="bar" element={<BarChart />} />
      <Route path="pie" element={<PieChart />} />
      <Route path="line" element={<LineChart />} />
      <Route path="geo" element={<Geography />} />

      <Route path="*" element={<NotFound />} />

      <Route path="addlab" element={<AddLab />} />
      {/* <Route path="updatelab" element={<UpdateLab />} /> */}

      <Route path="addtech" element={<AddTech />} />
      {/* <Route path="updatetech" element={<UpdateTech />} /> */}

      {/* <Route path="updatepopulation" element={<UpdataPopulation />} /> */}

      <Route path="updatelab/:id" element={<UpdateLab/>}/>
      <Route path="updatetech/:id" element={<UpdateTech/>}/>
      <Route path="updatepopulation/:id" element={<UpdataPopulation/>}/>



    </Route>
    
    </>
  
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);
