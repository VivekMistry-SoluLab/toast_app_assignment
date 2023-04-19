import { Footer, Navbar } from '../../components';

const Layout = props => {
  const { children } = props;
  const pathname = window.location.pathname.split('/')[1];

  return (
    <div className="main-container">
      <Navbar hideNavItems={pathname === 'cart'} />
      {children}
      {pathname !== 'cart' && <Footer />}
    </div>
  );
};

export default Layout;
