import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
