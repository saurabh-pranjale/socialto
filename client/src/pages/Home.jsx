import { useEffect, useState } from "react";
import API from "../api/axios";
import { Container, Card, Button } from "react-bootstrap";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await API.get("/post/posts");
    setPosts(res.data);
  };

  const handleLike = async (id) => {
    await API.post(`/post/${id}/like`);
    fetchPosts();
  };

  return (
    <Container className="mt-4">
      {posts.map((post) => (
        <Card key={post._id} className="mb-4 shadow">
          <Card.Img variant="top" src={post.image} />
          <Card.Body>
            <Card.Title>{post.author?.username}</Card.Title>
            <Card.Text>{post.caption}</Card.Text>
            <Button onClick={() => handleLike(post._id)}>
              Like ({post.likes.length})
            </Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default Home;
