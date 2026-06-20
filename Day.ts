import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import dayjs from 'dayjs'
import 'react-big-calendar/lib/css/react-big-calendar.css'; 

const localizer = dayjsLocalizer(dayjs)

const myEventsList: Event[] = [
  {
    title: 'Meeting',
    // sets default date at time the code is run and then automatically makes the event 1 hour. Can be modified by the user later
    start: new Date(),
    end: dayjs().add(1, 'hour').toDate(),
  },
];

const MyCalendar = (props) => (
  <div>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
)
