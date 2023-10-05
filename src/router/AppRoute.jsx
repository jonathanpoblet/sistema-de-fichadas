import { lazy, Suspense } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from 'react-redux';
import Layout from "../components/Layout/Layout";

const Home = lazy(() => import("../pages/Home/Home"));
const Profile = lazy(() => import("../pages/Profile/Profile"));
const Inventory = lazy(() => import("../pages/Inventory/Inventory"));
const Spinner = lazy(() => import("../components/Spinner/Spinner"));

export default function AppRoute() {
  
  const user = useSelector(state => state.auth.user)
  const token = useSelector(state => state.auth.token);

  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home user={ user } />} />
            <Route path="/perfil" element={<Profile />} />
            <Route path="/inventario" element={<Inventory />} />
          </Routes>
        </Layout>
      </Router>
    </Suspense>
  );
}