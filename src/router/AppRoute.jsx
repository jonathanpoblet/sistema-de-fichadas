import { lazy, Suspense } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from 'react-redux';
import Layout from "../components/Layout/Layout";

const Home = lazy(() => import("../pages/Home/Home"));
const Profile = lazy(() => import("../pages/Profile/Profile"));
const Spinner = lazy(() => import("../components/Spinner/Spinner"));

export default function AppRoute() {
  
  const token = useSelector(state => state.auth.token);

  console.log(token)

  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Layout>
      </Router>
    </Suspense>
  );
}