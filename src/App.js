import { useState } from "react";
import "./App.css";
import { Container, Form, Button, Stack, Card, CardBody, Row, Col } from "react-bootstrap";

function App() {
  const [todoName, setTodoName] = useState("");
  const [todoList, setTodoList] = useState([]);
  const addTodo = () => {
    const dataTodo = { todoName, status: false };
    setTodoList([dataTodo, ...todoList]);
    todoName("");
  };
  const handleChangeTodoName = (e) => {
    const data = e.target.value;
    setTodoName(data);
  };
  console.log(todoList);
  return (
    <Container>
      <h1 className="text-center mt-5">Todo Web App</h1>
      {/* Input Todo */}
      <Card className="mt-5">
        <CardBody>
          <Stack direction="horizontal" gap={3}>
            <Form.Control type="text" placeholder="Masukan todo ..." onChange={handleChangeTodoName} value={todoName} />
            <Button onClick={addTodo}>Tambah</Button>
          </Stack>
        </CardBody>
      </Card>
      {/* List Todo */}
      <Card className="mt-5">
        <CardBody>
          <Row>
            <Col>
              <h3>Nama Todo</h3>
            </Col>
            <Col xl="1">
              <Button>Selesai</Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
}

export default App;
