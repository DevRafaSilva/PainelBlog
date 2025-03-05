import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

export default function MediaCard() {
  const [dadosBlog, setDadosBlog] = React.useState([]);
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
  if (blog) {
    return <div></div>;
  }
}
