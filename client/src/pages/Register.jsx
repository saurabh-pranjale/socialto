import { useState } from "react";
import API from "../api/axios";
import { Form, Button, Container, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ name:"", email:"", username: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/auth/register", form);
    navigate("/login");
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card style={{ width: "400px" }} className="p-4 shadow">
        <h3 className="text-center">Register</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Control className="mb-2" placeholder="Name"
            onChange={(e)=>setForm({...form,name:e.target.value})} />
          <Form.Control className="mb-2" placeholder="Email"
            onChange={(e)=>setForm({...form,email:e.target.value})} />
          <Form.Control className="mb-2" placeholder="Username"
            onChange={(e)=>setForm({...form,username:e.target.value})} />
          <Form.Control className="mb-2" type="password" placeholder="Password"
            onChange={(e)=>setForm({...form,password:e.target.value})} />
          <Button type="submit" className="w-100">Register</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Register;
