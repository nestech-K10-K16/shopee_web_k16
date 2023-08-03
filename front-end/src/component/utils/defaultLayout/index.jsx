import Header from "./header";
import Footer from "./footer";
import ShoppingBag from "./shoppingBag";

const DefaultLayout = ({ children }) => {
  return (
    <div className="position-relative">
      <Header />
      {children}
      <ShoppingBag />
      <Footer />
    </div>
  );
};

export default DefaultLayout;
