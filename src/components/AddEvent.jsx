import { useState, useEffect } from "react";
import { Modal, Button } from "react";

export default function AddEvent ({ setShowEvent }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [link, setLink] = useState("");
  const [participants, setParticipants] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [timeStart, setTimeStart] = useState("");
  const [timeEnd, setTimeEnd] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Fetch the events
  useEffect(() => {
    fetch(`https://final-project-api-lancheros.web.app/events`)
      .then((res) => res.json())
      .then((data) => {
        setName(data);
        console.log("name:", data);
      })
      .catch(alert);
  }, [])


};


