import { Form, Button, Stack, Card, CardBody } from "react-bootstrap";
import { FaCirclePlus } from "react-icons/fa6";

const Add = ({ handleChangeTodoName, todoName, addTodo }) => {
  return (
    <Card className="mt-5">
      <CardBody>
        <Stack direction="horizontal" gap={3}>
          <Form.Control type="text" placeholder="Masukan todo ..." onChange={handleChangeTodoName} value={todoName} />
          <Button onClick={addTodo}>
            <FaCirclePlus />
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Add;
