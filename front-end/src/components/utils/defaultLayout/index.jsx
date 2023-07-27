import { Footer } from "components";
import Navbar from "components/utils/navbar/Navbar";

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
