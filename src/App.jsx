import { useEffect, useState } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard';
import Labs from './pages/labs/Labs';
import Technicals from './pages/technicals/Technicals';
import Population from './pages/population/Population';
import BarChart from './pages/barChart/BarChart';
import PieChart from './pages/pieChart/PieChart';
import LineChart from './pages/lineChart/LineChart';
import Geography from './pages/geography/Geography';
import AddLab from './pages/editLab/AddLab';
import UpdateLab from './pages/editLab/updateLab';
import AddTech from './pages/editTechnicals/addTech';
import UpdateTech from './pages/editTechnicals/updateTech';
import UpdataPopulation from './pages/editPopulaation/updataPopulation';
import Login from './components/login';
import MiniDrawer from "./components/mainLayout";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return !!token;
};

function App() {
  const navigate = useNavigate();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    // Check if user is authenticated when the component mounts
    const checkAuth = async () => {
      setIsCheckingAuth(true);
      if (!isAuthenticated()) {
        navigate('/');
      }
      setIsCheckingAuth(false);
    };
    checkAuth();
  }, [navigate]);

  // Render loading state while checking authentication
  if (isCheckingAuth) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/home"
        element={isAuthenticated() ? <MiniDrawer /> : <Navigate to="/" />}
      >
        <Route
          index
          element={isAuthenticated() ? <Dashboard /> : <Navigate to="/" />}
        />
        <Route
          path="labs"
          element={isAuthenticated() ? <Labs /> : <Navigate to="/" />}
        />
        <Route
          path="tech"
          element={isAuthenticated() ? <Technicals /> : <Navigate to="/" />}
        />
        <Route
          path="pop"
          element={isAuthenticated() ? <Population /> : <Navigate to="/" />}
        />
        <Route
          path="bar"
          element={isAuthenticated() ? <BarChart /> : <Navigate to="/" />}
        />
        <Route
          path="pie"
          element={isAuthenticated() ? <PieChart /> : <Navigate to="/" />}
        />
        <Route
          path="line"
          element={isAuthenticated() ? <LineChart /> : <Navigate to="/" />}
        />
        <Route
          path="geo"
          element={isAuthenticated() ? <Geography /> : <Navigate to="/" />}
        />
        <Route
          path="addlab"
          element={isAuthenticated() ? <AddLab /> : <Navigate to="/" />}
        />
        <Route
          path="updatelab/:id"
          element={isAuthenticated() ? <UpdateLab /> : <Navigate to="/" />}
        />
        <Route
          path="addtech"
          element={isAuthenticated() ? <AddTech /> : <Navigate to="/" />}
        />
        <Route
          path="updatetech/:id"
          element={isAuthenticated() ? <UpdateTech /> : <Navigate to="/" />}
        />
        <Route
          path="updatepopulation/:id"
          element={isAuthenticated() ? <UpdataPopulation /> : <Navigate to="/" />}
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    <ToastContainer />
    </>
  );
}

export default App;
