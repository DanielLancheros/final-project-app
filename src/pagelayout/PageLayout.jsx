import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroCard from "../components/CreateEventCard";
import EventCard from "../components/EventCard";

export default function PageLayout ({ children }) {

  return(
    <main>
      <Header />
     
      {children}
      <Footer />
    </main>
  )
}