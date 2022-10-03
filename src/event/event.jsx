import { useLocation } from 'react-router-dom';
import LocationIcon from '../assets/Location.svg';
import CalendarIcon from '../assets/Calendar.svg';
import Arrow from '../assets/arrow.svg';
import './event.css';
const Event = () => {
  const location = useLocation();

  const { eventName, HostName, startDate, endDate, Location, photo } =
    location.state;
  return (
    <div className="event">
      <div>
        <img src={photo} alt="cake" />
      </div>
      <div className="event-content">
        <h2 className="main-color">{eventName}</h2>
        <small>
          Hosted by <b>{HostName}</b>
        </small>
        <div className="event-raw">
          <div className="event-raw-details">
            <div className="event-raw-icon">
              <img src={CalendarIcon} alt="Calendar" />
            </div>
            <div className="event-raw-data">
              <h4 className="main-color">{startDate} 6:00PM</h4>
              <span>
                to <b>{endDate} 1:00PM</b> UTC +10
              </span>
            </div>
          </div>
          <div>
            <img src={Arrow} alt="arrow" />
          </div>
        </div>
        <div className="event-raw">
          <div className="event-raw-details">
            <div className="event-raw-icon">
              <img src={LocationIcon} alt="location" />
            </div>
            <div className="event-raw-data">
              <h4 className="main-color">Street name</h4>
              <span>{Location}</span>
            </div>
          </div>
          <div>
            <img src={Arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
