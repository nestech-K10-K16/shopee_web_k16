import { Footer } from "components";
import Navbar from "components/navbar/Navbar";

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
