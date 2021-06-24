import Nav from "./nav";
import Footer from "./footer";

const Layout = ({ children, categories, seo }) => (
  <>
    <Nav categories={categories} />
    <hr className="mb-5" />
    {children}
    <Footer />
  </>
);

export default Layout;
