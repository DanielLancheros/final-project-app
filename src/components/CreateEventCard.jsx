import { useEffect, useState } from "react";
// post to web to show in DB
export default function HeroCard ({events, setEvents, setCardInfo}) {
  const [showEventLocation, setShowEventLocation] = useState(false);
  const handleEventNameChange = (e) => {
    const inputValue = e.target.value;
    setShowEventLocation(inputValue.length > 0); 
  };
  
  const AddEvent=(e) => {
    e.preventDefault() 
    const eventName = e.target.event_name.value
    const eventDate = e.target.event_date.value
    const eventLocation = e.target.event_location.value
    const eventStartTime = e.target.event_location.value
    const eventAddress = e.target.event_address.value
    const eventEnd = e.target.event_end.value
    const eventParticipants = e.target.number_participants.value
    const eventLink = e.target.link_url.value

    const newEvent = {
      name: eventName,
      date: eventDate,
      time: eventStartTime,
      location: eventLocation
    }

    fetch(`https://final-project-api-lancheros.web.app/events`,{
      method:"POST",
      headers: {
        "Content-Type": "application/json", 
      }, 
      body: JSON.stringify(newEvent),
    })
    .then (res => res.json())
    .then (setCardInfo)
    .catch (err => alert(err))  
  } 
  
  return (
    <section className= "flex flex-row flex-wrap w-[90%] mx-auto justify-end">
<div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Create your next event for FREE</h5>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Just fill out the information below and click submit. Within seconds, your event will be up for everyone to see.</p>

<form onSubmit={AddEvent}>
  <div class="relative z-0 w-full mb-6 group">
      <input type="text" name="event_name" id="event_name" list="event_name_suggestions" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="event_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Event Name</label>
  </div>
  

{showEventLocation && (
  <div className="relative z-0 w-full mb-6 group">
      <input type="text" name="event_location" id="event_location" list="event_location_suggestions" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="event_location" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Location</label>
        <datalist id="event_location_suggestions">
          <option value="Firefighters Park" />
          <option value="America's Got Soccer" />
          <option value="Betti Stradling Park" />
          <option value="Mullens Park" />
          <option value="Cypress Park" />
        </datalist>
  </div>
        )}
  <div class="relative z-0 w-full mb-6 group">
      <input type="text" name="event_location" id="event_location" list="event_location_suggestions" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="event_location" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Location</label>
      <datalist id="event_location_suggestions">
        <option value="Firefighters Park" />
        <option value="America's Got Soccer" />
        <option value="Betti Stradling Park" />
        <option value="Mullens Park" />
        <option value="Cypress Park" />
      </datalist>
  </div>
  
  <div class="relative z-0 w-full mb-6 group">
      <input type="text" name="event_address" id="event_address" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="event_address" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-6 group">
        <input type="date" name="event_date" id="event_date" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="event_date" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date</label>
    </div>
    <div class="relative z-0 w-full mb-6 group">
        <input type="datetime-local" name="event_end" id="event_end" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="event_end" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Event End / Date, Time</label>
    </div>
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-6 group">
        <input type="number" name="number_participants" id="number_participants" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="number_participants" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Number of participants</label>
    </div>
    <div class="relative z-0 w-full mb-6 group">
        <input type="url" name="link_url" id="link_url" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label for="link_url" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Link / URL (optional)</label>
    </div>
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-50% sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
  <button type="reset" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-50% sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Reset</button>
</form>
</div>
</section>

  )
}


/* TRYING TO ADD DELETE BUTTON
const handleDeleteEvent = async (eventId) => {
  try {
    const response = await fetch(`https://final-project-api-lancheros.web.app/events/${eventId}`, {
      method:"Delete",
    })

    if (!response.ok) {
      throw new Error ("Failed to delete the event")
    }
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== eventId))
  } catch (error) {
    console.error('Error deleting event:', error)
  }
}

const deleteButton = (
  <button
    className="text-red-500 hover:text-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-2.5 text-center"
    onClick={() => handleDeleteEvent(events)}
  >
    Delete
  </button>
);

eventElement.appendChild(deleteButton);
*/