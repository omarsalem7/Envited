import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import Button from '../common/Button';
import './create.css';

const Create = () => {
  const formik = useFormik({
    initialValues: {
      eventName: '',
      HostName: '',
      startDate: '',
      endDate: '',
      Location: '',
      photo: '',
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h3 id="logo">Event</h3>

        <label htmlFor="eventName">event Name</label>
        <input
          type="text"
          placeholder="Event Name"
          name="eventName"
          value={formik.values.eventName}
          onChange={formik.handleChange}
        />

        <label htmlFor="name">Host Name</label>
        <input
          type="text"
          placeholder="Host Name"
          name="HostName"
          value={formik.values.HostName}
          onChange={formik.handleChange}
          autoComplete="off"
        />
        <label htmlFor="startDate">start date</label>
        <input
          type="date"
          placeholder="start Date"
          name="startDate"
          value={formik.values.startDate}
          onChange={formik.handleChange}
          autoComplete="off"
          required
        />
        <label htmlFor="endDate">End Date</label>
        <input
          type="date"
          placeholder="End Date"
          name="endDate"
          value={formik.values.endDate}
          onChange={formik.handleChange}
          autoComplete="off"
          required
        />

        <label htmlFor="Location">Location</label>
        <input
          type="text"
          placeholder="Location"
          name="Location"
          value={formik.values.Location}
          onChange={formik.handleChange}
        />
        <label htmlFor="photo">photo</label>
        <input
          type="text"
          placeholder="photo"
          name="photo"
          value={formik.values.photo}
          onChange={formik.handleChange}
        />

        <Button type="submit" style={{ width: '100%' }}>
          <Link to="/event" state={formik.values}>
            next
          </Link>
        </Button>
      </form>
    </div>
  );
};

export default Create;
