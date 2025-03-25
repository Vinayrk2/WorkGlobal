import { useState } from "react";
import { Card, Form, Button, Spinner, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchHolidays } from "../redux/actions/holidayActions";
import { FaCalendarAlt, FaGlobe } from "react-icons/fa";
const countries = [
  { code: "US", name: "United States" },
  { code: "CA", name: "Canada" },
  { code: "GB", name: "United Kingdom" },
  { code: "FR", name: "France" },
  { code: "DE", name: "Germany" },
  { code: "IT", name: "Italy" },
  { code: "ES", name: "Spain" },
  { code: "AU", name: "Australia" },
  { code: "JP", name: "Japan" },
  { code: "CN", name: "China" },
  { code: "IN", name: "India" },
  { code: "BR", name: "Brazil" },
  { code: "RU", name: "Russia" },
  { code: "MX", name: "Mexico" },
  { code: "ZA", name: "South Africa" },
  { code: "KR", name: "South Korea" },
  { code: "TR", name: "Turkey" },
  { code: "NL", name: "Netherlands" },
  { code: "SE", name: "Sweden" },
  { code: "CH", name: "Switzerland" },
  { code: "AR", name: "Argentina" },
  { code: "SA", name: "Saudi Arabia" },
  { code: "AE", name: "United Arab Emirates" },
  { code: "ID", name: "Indonesia" },
  { code: "TH", name: "Thailand" },
  { code: "SG", name: "Singapore" },
  { code: "MY", name: "Malaysia" },
  { code: "EG", name: "Egypt" },
  { code: "GR", name: "Greece" },
  { code: "PT", name: "Portugal" }
];

const getFormattedDate = (date) => {
  const localDate = new Date(date);
  localDate.setMinutes(localDate.getMinutes() - localDate.getTimezoneOffset()); // Adjust for timezone
  return localDate.toISOString().split("T")[0]; // Extract YYYY-MM-DD
};

const HolidayInfo = () => {
  const [country, setCountry] = useState("DE");
  const [date, setDate] = useState(getFormattedDate(new Date()));
  const dispatch = useDispatch();
  const { holidays, loading, error } = useSelector((state) => state.holidays);
  const minDate = getFormattedDate(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchHolidays(getFormattedDate(date), country));
  };

  return (
    <Card className="p-4 shadow-lg rounded border-0 bg-white">
      <Card.Body>
        <Card.Title className="fw-bold text-primary d-flex align-items-center">
          <FaCalendarAlt className="me-2" /> Check Holiday
        </Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold d-flex align-items-center">
              <FaGlobe className="me-2" /> Country
            </Form.Label>
            <Form.Select value={country} onChange={(e) => setCountry(e.target.value)}>
              {countries.map((c) => (
                <option key={c.code} value={c.code}>{c.name}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Date</Form.Label>
            <Form.Control
              type="date"
              value={date}
              min={minDate}
              onChange={(e) => setDate(getFormattedDate(e.target.value))}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100 fw-bold">Check Holiday</Button>
        </Form>
        {loading && (
          <div className="text-center my-3">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
        {error && (
          <Alert variant="danger" className="mt-3">{error}</Alert>
        )}
        {holidays.length > 0 && (
          <div className="holiday-info mt-3">
            <h5 className="fw-bold">Holidays on {new Date(date).toLocaleDateString()}</h5>
            <ul className="list-unstyled">
              {holidays.map((holiday, index) => (
                <li key={index} className="mb-2">
                  <strong>{holiday.name?.text || holiday.name}</strong>
                  {holiday.type && <div><small>Type: {holiday.type?.text || holiday.type}</small></div>}
                  {holiday.description && <div><small>Description: {holiday.description}</small></div>}
                </li>
              ))}
            </ul>
          </div>
        )}
        {!loading && !error && holidays.length === 0 && date && (
          <Alert variant="info" className="mt-3">No holidays found for the selected date and country.</Alert>
        )}
      </Card.Body>
    </Card>
  );
};

export default HolidayInfo;