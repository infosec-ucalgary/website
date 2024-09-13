import SpeakerIcon from "/images/icons/speaker.svg";
import WorkshopIcon from "/images/icons/workshop.svg";
import OtherIcon from "/images/icons/other.svg";

type Event = {
  id: number;
  title: string;
  type: string;
  date: string;
  time: string;
  location: string;
};

interface EventCard {
  event: Event;
}

function EventCard({ event }: EventCard) {
  const getEventColour = (event: Event) => {
    switch (event.type) {
      case "Workshop":
        return "bg-orange";
      case "Speaker":
        return "bg-dystopian-blue";
      default:
        return "bg-matrix-green";
    }
  };

  const getEventIcon = (event: Event) => {
    switch (event.type) {
      case "Workshop":
        return WorkshopIcon;
      case "Speaker":
        return SpeakerIcon;
      default:
        return OtherIcon;
    }
  };

  return (
    <div className="rounded-lg p-4 m-2 bg-like-lavendar bg-opacity-30">
      <div className="flex justify-between items-center">
        <div className="flex flex-1">
          <img
            src={getEventIcon(event)}
            className={`${getEventColour(event)} w-10 h-10 mr-2 p-2 bg-opacity-50 rounded-full`}
          />
          <div className="flex flex-col">
            <div className="text-xl font-semibold text-lavendar">
              {event.title}
            </div>
            <div className="text-xs opacity-70 text-neutral-gray">
              {new Date(event.date + "T00:00:00").toLocaleDateString("en-us", {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
              , {event.time}
            </div>
          </div>
        </div>
        <div className="text-lavendar font-medium">{event.location}</div>
      </div>
    </div>
  );
}

export default EventCard;
