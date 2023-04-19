import { Footer, Navbar } from '../../components';

const Layout = props => {
  const { children, isCartScreen } = props;

  return (
    <div className="main-container">
      <Navbar hideNavItems={isCartScreen} />
      {children}
      {!isCartScreen && <Footer />}
    </div>
  );
};

export default Layout;
