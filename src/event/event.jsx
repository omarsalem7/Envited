import LocationIcon from '../assets/Location.svg';
import CalendarIcon from '../assets/Calendar.svg';
import Arrow from '../assets/arrow.svg';
import './event.css';
const Event = () => {
  return (
    <div className="event">
      <div>
        <img
          src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221003%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221003T082410Z&X-Amz-Expires=86400&X-Amz-Signature=519e82a11556b5d49e5cc528e05ea0848a738aa02e4643e4c2bb21f23b0d5e58&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject"
          alt="cake"
        />
      </div>
      <div className="event-content">
        <h2 className="main-color">Birthday Bash</h2>
        <small>
          Hosted by <b>Elysia</b>
        </small>
        <div className="event-raw">
          <div className="event-raw-details">
            <div className="event-raw-icon">
              <img src={CalendarIcon} alt="Calendar" />
            </div>
            <div className="event-raw-data">
              <h4 className="main-color">18 August 6:00PM</h4>
              <span>
                to <b>19 August 1:00PM</b> UTC +10
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
              <span>Suburb, State, Postcode</span>
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
