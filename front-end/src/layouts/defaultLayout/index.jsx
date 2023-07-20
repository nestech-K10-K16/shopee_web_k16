import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
