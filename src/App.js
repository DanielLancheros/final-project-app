import { useState, useEffect } from "react";
import './styles/App.css';
import PageLayout from './pagelayout/PageLayout';
import EventCard from "./components/EventCard";

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
    <PageLayout>
    <h1>Final Project</h1>
    {!cardInfo
    ? <p className="text-slate-800 text-3xl">Loading</p>
    : <EventCard cardInfo={cardInfo} />
    }
    
    </PageLayout>
    </>
  )
}

export default App;
