import { useState, useEffect } from "react";
import PageLayout from './pagelayout/PageLayout';
import EventCard from "./components/EventCard";
import CreateEventCard from "./components/CreateEventCard";
import './styles/App.css';

function App() {
  const [cardInfo, setCardInfo] =  useState()

  useEffect(() => {
    fetch(`https://final-project-api-lancheros.web.app/events`)
      .then((res) => res.json())
      .then((data) => {
        setCardInfo(data);
        console.log("name:", data);
      })
      .catch(alert);
  }, [])
  return (
    <>
    <PageLayout >
    <CreateEventCard setCardInfo={setCardInfo}/>
    <div className="text-slate-800 text-4xl flex justify-center font-light">Upcoming Events</div>
    <br></br>
    {!cardInfo
    ? <p className="text-slate-800 text-3xl">Loading</p>
    : <EventCard cardInfo={cardInfo} />
    }
    </PageLayout >
    </>
  )
}

export default App;
