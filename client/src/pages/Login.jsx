import { useState } from "react";
import API from "../api/axios";
import { Form, Button, Container, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error,setError] = useState(null)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);
      
      navigate("/");
 
    } catch (error) {
      setError(error.response.data.message,"!@!")
    }

  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card style={{ width: "400px" }} className="p-4 shadow">
        <h3 className="text-center">Login</h3>
        <p style={{background:'red'}}>{error}</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              placeholder="Username"
              onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </Form.Group>
          <Button type="submit" className="w-100">Login</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;
