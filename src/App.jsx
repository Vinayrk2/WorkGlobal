// Modernized UI for WorkGlobal - Managing International Clients

import { Container, Row, Col } from "react-bootstrap";
import { Provider } from "react-redux";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import HolidayInfo from "./components/HolidayInfo";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Container fluid className="p-4 app-container bg-light">
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8} className="shadow-lg rounded p-4 bg-white">
            <div className="app-header text-center mb-4">
              <h1 className="fw-bold text-primary">WorkGlobal</h1>
              <p className="text-muted">Seamlessly manage international clients & tasks.</p>
            </div>

            <Row>
              <Col xs={12} lg={6} className="mb-4">
                <TaskInput />
                <HolidayInfo />
              </Col>
              <Col xs={12} lg={6}>
                <TaskList />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Provider>
  );
};

export default App;
