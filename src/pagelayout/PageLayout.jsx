import Header from "./Header";
import Footer from "./Footer";

export default function PageLayout ({ children }) {

  return(
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  )
}