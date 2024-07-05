import { Row, Button, Col, Card, CardBody } from "react-bootstrap";
import { FaCheck, FaTimes } from "react-icons/fa";

const List = ({ todoList, deleteTodo, finishTodo }) => {
  return todoList.map((value, index) => {
    return (
      <Card className="mt-3" key={index}>
        <CardBody>
          <Row>
            <Col>
              <h3>{value.todoName}</h3>
            </Col>
            <Col xl="1">
              <Button onClick={() => finishTodo(index)} variant={value.status ? "secondary" : "primary"}>
                {value.status ? <FaTimes /> : <FaCheck />}
              </Button>
            </Col>
          </Row>
          <Button variant="danger" onClick={() => deleteTodo(index)}>
            Hapus
          </Button>
        </CardBody>
      </Card>
    );
  });
};

export default List;
