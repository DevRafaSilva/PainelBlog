import React from 'react';
import { Box } from '@mui/material';
import Chips from '../../Componentes/Chips/Chips';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
const Topicos = () => {
  const [blog, setBlog] = React.useState([]);
  const [paginaAtual, setPaginaAtual] = React.useState(1);
  const itemPorPagina = 2;

  React.useEffect(() => {
    async function getPosts() {
      const response = await fetch('https://joebio.xyz/wp-json/api/blog', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const dados = await response.json();
      const dadosArray = Array.from(dados);
      setBlog(dadosArray);
    }
    getPosts();
    //   async function getPost() {
    //     const response = await fetch(
    //       'https://joebio.xyz/wp-json/api/blog/jegue',
    //       {
    //         method: 'GET',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //       },
    //     );
    //     const dados = await response.json();
    //     console.log(dados);
    //   }
    //   getPost();
  }, []);
  console.log(blog);
  const indexAtual = (paginaAtual - 1) * itemPorPagina;
  const indexFinal = indexAtual + itemPorPagina;
  const dadosBlog = blog.slice(indexAtual, indexFinal);

  if (dadosBlog) {
    return (
      <>
        <Box sx={{ px: 7, py: 4 }} component="main">
          <Chips text="Passáros" />
          <Chips text="Selva" />
          <Chips text="Savana" />
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px',
            }}
          >
            {dadosBlog &&
              dadosBlog.map((item, index) => (
                <Card
                  key={index}
                  sx={{
                    maxWidth: 345,
                    mb: 4,
                  }}
                >
                  <CardMedia
                    sx={{ height: 140 }}
                    image={item.images[0].src}
                    title={item.images[0].titulo}
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
          <Button
            sx={{ p: '8px 14px', backgroundColor: '#455a64', color: '#f5f5f5' }}
            onClick={() => setPaginaAtual((prev) => prev - 1, 1)}
            disabled={paginaAtual == 1}
          >
            ANTERIOR
          </Button>
          <span style={{ margin: '0px 12px' }}>
            {paginaAtual} de {Math.ceil(blog.length / itemPorPagina)}
          </span>
          <Button
            sx={{
              p: '8px 14px',
              backgroundColor: '#455a64',
              color: '#f5f5f5',
            }}
            onClick={() =>
              setPaginaAtual((prev) =>
                prev * itemPorPagina < blog.length ? prev + 1 : prev,
              )
            }
            disabled={indexFinal >= blog.length}
          >
            PRÓXIMA
          </Button>
        </Box>
      </>
    );
  } else return null;
};

export default Topicos;
