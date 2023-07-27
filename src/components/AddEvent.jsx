import { useState, useEffect } from "react";
import { Modal, Button } from "react";

export default function AddEvent ({ setEvent }) {
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

  const handleAddEvent = (e) => {
    e.preventDefault();

    fetch("https://final-project-api-lancheros.web.app", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, type, link, participants, location, address, dateStart, dateEnd, timeStart, timeEnd }) ,
    })
    .then((resp) => resp.json())
    .then((data) => {
      if (data.message) {
        alert(data.message);
        return;
      }
      setEvent(data);
      setShowModal(false);
      setName("");
      setType("");
      setLink("");
      setParticipants("");
      setLocation("");
      setAddress("");
      setDateStart("");
      setDateEnd("");
      setTimeStart("");
      setTimeEnd("");
    })
    .catch(alert);
  };

  const handleClose = () => setShowModal (false);
  const handleOpen = () => setShowModal (true);
}


  <>
  <button className="add-event d-flex"
    /*onClick={handleShow}>Create A New Event*/ />
  </>
