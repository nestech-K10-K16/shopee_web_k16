import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
}
