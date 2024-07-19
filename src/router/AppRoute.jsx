import { lazy, Suspense } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Layout from '../components/Layout/Layout';

const Home = lazy(() => import('../pages/Home/Home'));
const Profile = lazy(() => import('../pages/Profile/Profile'));
const Employes = lazy(() => import('../pages/Employes/Employes'));
const PunchIn = lazy(() => import('../pages/PunchIn/PunchIn'));
const LogIn = lazy(() => import('../pages/LogIn/LogIn'));

const Spinner = lazy(() => import('../components/Spinner/Spinner'));

export default function AppRoute() {
  const user = useSelector(state => state.user.info);
  const token = useSelector(state => state.user.token);

  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <Routes>
          <Route path='/login' element={<LogIn />} />

          <Route element={<Layout />}>
            <Route path='/' element={<Home user={user} />} />
            <Route path='/perfil' element={<Profile />} />
            <Route path='/empleados' element={<Employes />} />
            <Route path='/fichero' element={<PunchIn />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
}
