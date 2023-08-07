import { useState } from "react";
// post to web to show in DB
export default function HeroCard({ setCardInfo }) {
 // const [showEventLocation, setShowEventLocation] = useState(false);


  const [eventData, setEventData] = useState({}); //useState hook, sets up piece of state 'eventData', 'setEventData' will update this state

  const updateForm = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  }; // updates the property that matches the name of the form field

  const AddEvent = (e) => {
    e.preventDefault(); // this prevents form info from going into URL
    const {
      event_name,
      event_date,
      event_location,
      event_time,
      event_address,
      number_participants,
      link_url,
    } = eventData;

    const newEvent = {
      name: event_name,
      date: event_date,
      time: event_time,
      location: event_location,
      address: event_address,
      participants: number_participants,
      url: link_url,
    };

    fetch(`https://final-project-api-lancheros.web.app/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEvent),
    })
      .then((res) => res.json())
      .then((data) => {
        setCardInfo(data);
      })
      .finally(() => { 
        setEventData();
        e.target.event_name.value = "";
        e.target.event_date.value = "";
        e.target.event_time.value = "";
        e.target.event_location.value = "";
        e.target.event_address.value = "";
        e.target.number_participants.value = "";
        e.target.link_url.value = "";
        alert("Your event has been added below");
      })

      .catch((err) => alert(err));
  };

  return (
    <section className="flex flex-row flex-wrap w-[90%] mx-auto justify-end">
      <div className="bg-[url('../../public/sunset_soccer2.jpg')] bg-bottom bg-cover w-full p-20 my-6 bg-no-repeat rounded-xl"> 
      <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Create your next event for FREE
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Just fill out the information below and click submit. Within seconds,
          your event will be up for everyone to see.
        </p>

        <form onSubmit={AddEvent}>
          <div class="relative z-0 w-full mb-6 group">
            <input
              onChange={updateForm}
              type="text"
              name="event_name"
              id="event_name"
              list="event_name_suggestions"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="event_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Event Name
            </label>
          </div>

          <div class="relative z-0 w-full mb-6 group">
            <input
              onChange={updateForm}
              type="date"
              name="event_date"
              id="event_date"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="event_date"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Date
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              onChange={updateForm}
              type="time"
              name="event_time"
              id="event_time"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="event_time"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Time
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              onChange={updateForm}
              type="text"
              name="event_location"
              id="event_location"
              list="event_location_suggestions"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="event_location"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Location
            </label>
            <datalist id="event_location_suggestions">
              <option value="Firefighters Park" />
              <option value="America's Got Soccer" />
              <option value="Betti Stradling Park" />
              <option value="Mullens Park" />
              <option value="Cypress Park" />
            </datalist>
          </div>

          <div class="relative z-0 w-full mb-6 group">
            <input
              onChange={updateForm}
              type="text"
              name="event_address"
              id="event_address"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="event_address"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Address
            </label>
          </div>
          <div class="grid md:grid-cols-2 md:gap-6"></div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
              <input
                onChange={updateForm}
                type="number"
                name="number_participants"
                id="number_participants"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="number_participants"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Number of participants
              </label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input
                onChange={updateForm}
                type="url"
                name="link_url"
                id="link_url"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="link_url"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Link / URL (optional)
              </label>
            </div>
          </div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-50% sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
      </div>
    </section>
  );
}
