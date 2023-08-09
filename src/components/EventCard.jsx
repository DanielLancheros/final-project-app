
export default function EventCard({ cardInfo }) {
  return (
    
    <section className="flex flex-row flex-wrap  w-[90%] mx-auto justify-center">
      {cardInfo.map((cardInfo) => (
        <div className=" p-6 mb-10 mx-7 md:w-[40%] w-50% w-[100%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {cardInfo.name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Date: {cardInfo.date}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Time: {cardInfo.time}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Location: {cardInfo.location}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Address: {cardInfo.address}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Participants: {cardInfo.participants}
          </p>
        
        </div>
      ))}
    </section>
  );
}
