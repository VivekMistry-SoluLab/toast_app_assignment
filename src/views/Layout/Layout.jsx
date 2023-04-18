import { Footer, Navbar } from '../../components';

const Layout = props => {
  const { children } = props;

  return (
    <div className="main-container">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
