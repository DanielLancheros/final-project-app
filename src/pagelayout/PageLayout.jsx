import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PageLayout ({ children }) {

  return(
    <main>
      <Header />
     
      {children}
      <Footer />
    </main>
  )
}