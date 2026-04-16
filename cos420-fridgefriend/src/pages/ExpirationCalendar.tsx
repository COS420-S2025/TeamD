import React, { useState} from 'react'
import { Calendar, dateFnsLocalizer, Views, View, ToolbarProps } from 'react-big-calendar';
import { Link } from 'react-router-dom';
import { House, ArrowBigLeft, ArrowBigRight } from "lucide-react";
import "./ExpirationCalendar.css";
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { enUS } from 'date-fns/locale/en-US';

//Source of Library for react-big-calendar component
//Quense, J., Blades, S., Chadkin, B., & Andersen, T. Big Calendar [Computer software]. https://github.com/jquense/react-big-calendar

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

//Test item to make sure items will show up on the calendar
const testItems = [
  {
    title: "Eggs",
    start: new Date(2026, 3, 15, 18, 0),
    end: new Date(2026, 3, 15, 20, 0),
  }
];

interface Events {
  title: string;
  start: Date;
  end: Date;
}

//Custom dropdown and navigation buttons
const CustomToolbar = (toolbar: ToolbarProps<Events>) => {
  const goToBack = () => { toolbar.onNavigate('PREV');};
  const goToNext = () => { toolbar.onNavigate('NEXT');};

  const handleViewChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    toolbar.onView(e.target.value as View);
  };

  return (
  <div className="rbc-toolbar">
    <div className="toolbar-left">
      <span className="rbc-btn-group">
        <button id="left" type="button" aria-label="PREV" onClick={goToBack}>
          <ArrowBigLeft size={18} color="black" strokeWidth={1.5} />
        </button>
        <button id="right" type="button" aria-label="NEXT" onClick={goToNext}>
          <ArrowBigRight size={18} color="black" strokeWidth={1.5} />
        </button>
      </span>
    </div>

    <div className="toolbar-center">
     <span className="rbr-toolbar-label">{toolbar.label}</span>
    </div>

    <div className="toolbar-right">
      <select
        value={toolbar.view}
        onChange={handleViewChange}
        >
          <option value={Views.MONTH}>Month</option>
          <option value={Views.WEEK}>Week</option>
          <option value={Views.DAY}>Day</option>
        </select>
    </div>
  </div>
  );
};

const ExpirationCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState<View>(Views.MONTH);

  const onNavigate = (newDate: Date) => {
    setDate(newDate);
  }

  const onView = (newView: View) => {
    setView(newView);
  }

  return (
    <>
    <div className="header">
        <h1>FridgeFriend</h1>
        <Link to="/home" className="homescreen-link">
            <House size={32} color="#333" strokeWidth={1.5}/>
        </Link>
    </div>
    <div>
      <h2 className="header-bar">Expiration Calendar</h2>
       <div style={{ height: '80vh', padding: '20px'}}>
        <Calendar
          localizer={localizer}
          events={testItems}
          date={date}
          view={view}
          onNavigate={onNavigate}
          onView={onView}
          startAccessor="start"
          endAccessor="end"
          style={{ height: '100%' }}
          views={['month', 'week', 'day']}
          components={{ toolbar: CustomToolbar }}
          />
       </div>
    </div>
    </>
  )
}

export default ExpirationCalendar;