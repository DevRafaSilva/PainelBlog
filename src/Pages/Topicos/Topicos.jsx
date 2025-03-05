import React from 'react';
import { Box } from '@mui/material';
import CardPost from '../../Componentes/CardPostagens/CardPost';
import Chips from '../../Componentes/Chips/Chips';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
const Topicos = () => {
  const [blog, setBlog] = React.useState([]);
  React.useEffect(() => {
    async function getPosts() {
      const response = await fetch('api/wp-json/api/blog', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const dados = await response.json();
      setBlog(dados);
    }
    getPosts();
  }, []);
  return (
    <>
      <Box sx={{ px: 7, py: 4 }} component="main">
        <Chips text="Passáros" />
        <Chips text="Selva" />
        <Chips text="Savana" />
        <Box
          sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}
        >
          {blog &&
            blog.map((item) => (
              <Card
                sx={{
                  maxWidth: 345,
                  mb: 4,
                }}
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image="/leao.jpg"
                  title="Imagem do post"
                />
                <CardContent>
                  <h3>{item.post_title}</h3>
                  <p style={{ margin: '20px 0' }}>{item.post_content}</p>
                </CardContent>
                <CardActions>
                  <Button size="small">VER PUBLICAÇÃO</Button>
                </CardActions>
              </Card>
            ))}
        </Box>
      </Box>
    </>
  );
};

export default Topicos;
