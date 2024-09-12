interface Event {
  id: number;
  title: string;
  type: string;
  date: string;
  time: string;
}

interface Day {
  date: Date;
  dayNumber: number;
  events: Event[];
}

interface CalendarCardProps {
  day: Day;
  isToday: boolean;
}

function CalendarCard({ day, isToday }: CalendarCardProps) {
  const getEventColour = (event: any) => {
    switch (event.type) {
      case "Workshop":
        return "bg-orange";
      case "Speaker":
        return "bg-dystopian-blue";
      default:
        return "bg-matrix-green";
    }
  };

  return (
    <div
      className={`rounded-lg p-2 bg-like-lavendar bg-opacity-30 h-32 flex flex-col ${isToday ? "border-2 border-like-lavendar" : ""}`}
    >
      <div
        className={`text-lg ml-auto text-lavendar ${isToday ? "font-bold" : "font-semibold"}`}
      >
        {day.dayNumber}
      </div>
      {day.events.length > 0 && (
        <div>
          {day.events.map((event) => (
            <div key={event.id} className="flex items-center text-lavendar">
              <div className={`w-1 h-4 ${getEventColour(event)} mr-2`}></div>
              <div className="flex-1 flex justify-between">
                <p className="text-sm font-semibold">{event.title}</p>
                <p className="text-sm opacity-70">{event.time}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CalendarCard;
