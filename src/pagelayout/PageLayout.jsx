import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroCard from "../components/HeroCard";
import AddEvent from "../components/AddEvent";
import EventCard from "../components/EventCard";

export default function PageLayout ({ children }) {

  return(
    <main>
      <Header />
      <AddEvent />
      <HeroCard />
      {children}
      <Footer />
    </main>
  )
}