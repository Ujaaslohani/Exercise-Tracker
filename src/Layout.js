import { useLocation } from 'react-router-dom';
import Navbar from './components/navbar.component';

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className='container'>
      {location.pathname !== '/login' && location.pathname !== '/register' && <Navbar/>}
      <br/>
      {children}
    </div>
  );
};

export default Layout;