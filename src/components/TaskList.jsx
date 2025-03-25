import { useEffect } from "react";
import { Card, Badge, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, loadTasks } from "../redux/actions/taskActions";
import { FaTrash } from "react-icons/fa";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasks());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "high":
        return <Badge bg="danger">High</Badge>;
      case "medium":
        return <Badge bg="warning" text="dark">Medium</Badge>;
      case "low":
        return <Badge bg="success">Low</Badge>;
      default:
        return <Badge bg="secondary">Unknown</Badge>;
    }
  };

  const sortedTasks = [...tasks].sort((a, b) => {
    const priorityOrder = { high: 1, medium: 2, low: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  return (
    <Card className="p-3 shadow-sm rounded border-0">
      <Card.Body>
        <Card.Title className="fw-bold text-primary">Your Tasks</Card.Title>
        {sortedTasks.length === 0 ? (
          <p className="text-muted text-center my-4">No tasks yet. Add some tasks to get started!</p>
        ) : (
          sortedTasks.map((task) => (
            <Card key={task.id} className="mb-2 p-2 shadow-sm border-0">
              <Card.Body className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="fw-semibold">{task.text}</div>
                  <div>{getPriorityBadge(task.priority)} <small className="text-muted ms-2">{new Date(task.createdAt).toLocaleString()}</small></div>
                </div>
                <Button variant="outline-danger" size="sm" className="delete-btn" onClick={() => handleDelete(task.id)}>
                  <FaTrash />
                </Button>
              </Card.Body>
            </Card>
          ))
        )}
      </Card.Body>
    </Card>
  );
};

export default TaskList;
