// Modernized Task Input Component

import { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions/taskActions";

const TaskInput = () => {
  const [taskText, setTaskText] = useState("");
  const [priority, setPriority] = useState("medium");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      const newTask = {
        id: Date.now(),
        text: taskText,
        priority,
        createdAt: new Date().toISOString(),
      };
      dispatch(addTask(newTask));
      setTaskText("");
      setPriority("medium");
    }
  };

  return (
    <Card className="p-4 shadow-lg rounded border-0">
      <Card.Body>
        <Card.Title className="fw-bold text-primary text-center">Add New Task</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Task Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter task description"
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
              required
              className="shadow-sm"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Priority</Form.Label>
            <Form.Select value={priority} onChange={(e) => setPriority(e.target.value)} className="shadow-sm">
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100 shadow-sm">
            Add Task
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default TaskInput;