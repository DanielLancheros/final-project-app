import Header from "../components/Header";
import Footer from "../components/Footer";
import EventCard from "../components/EventCard";

export default function PageLayout ({ children }) {

  return(
    <main>
      <Header />
      <EventCard />
      
      <Footer />
    </main>
  )
}