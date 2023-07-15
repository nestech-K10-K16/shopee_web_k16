import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Home from "../../pages/home/index";

export default function DefaultLayout() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
