import { events } from "../data/events";
import EventCard from "../components/EventCard";

function Events() {
  const parseDateTime = (event: any) => {
    const dateTimeString = `${event.date}T${event.time}`;
    return new Date(dateTimeString).getTime();
  };

  const sortedEvents = [...events].sort(
    (a, b) => parseDateTime(a) - parseDateTime(b),
  );
  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center text-lavendar">
          Upcoming Events
        </h1>
      </div>
      <div className="flex flex-col items-center">
        {sortedEvents.map((event) => (
          <div key={event.id} className="w-full sm:w-[460px]">
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
