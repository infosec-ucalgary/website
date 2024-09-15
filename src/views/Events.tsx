import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import axios from "axios";

interface Event {
  id: number;
  name: string;
  description: string;
  date: string;
  location: string;
  start_time: string;
  end_time: string;
  type: string;
}

function Events() {
  const [data, setData] = useState<Event[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/events");
        setData(res.data);
      } catch (e) {}
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center text-lavendar">
          Upcoming Events
        </h1>
      </div>
      {data ? (
        <div className="flex flex-col items-center">
          {data.map((event) => (
            <div key={event.id} className="w-full sm:w-[460px]">
              <EventCard event={event} />
            </div>
          ))}
        </div>
      ) : (
        <div className="spinner"></div>
      )}
    </div>
  );
}

export default Events;
