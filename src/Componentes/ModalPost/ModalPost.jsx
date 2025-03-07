import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import ButtonEnviar from './ButtonEnviar';
import Loading from '../LoadingCard/Loading';
const ModalPost = ({ setModal, dadosPost }) => {
  const modalRef = React.useRef();
  const [titulo, setTitulo] = React.useState('');
  const [descricao, setDescricao] = React.useState('');
  const [error, setError] = React.useState(null);
  const [enviado, setEnviado] = React.useState(false);
  const [img, setImg] = React.useState();
  React.useEffect(() => {
    function fecharModal(event) {
      if (modalRef.current && !modalRef.current.contains(event.target))
        setModal(false);
    }

    console.log(dadosPost);

    document.addEventListener('mousedown', fecharModal);

    return () => {
      document.removeEventListener('mousedown', fecharModal);
    };
  }, []);

  async function postarBlog() {
    console.log(img.target.files[0]);
    const fileForm = new FormData();
    const arrayConteudo = [dadosPost.titulo, dadosPost.conteudo];
    fileForm.append('titulo', titulo);
    fileForm.append('descricao', descricao);
    fileForm.append('conteudo', arrayConteudo);
    fileForm.append('categoria', 'animais');
    fileForm.append('img', img.target.files[0]);
    const response = await fetch('https://joebio.xyz/wp-json/api/blog', {
      method: 'POST',
      body: fileForm,
    });
    console.log(img);
    const dados = await response.json();
    console.log(dados);
    if (dados.message) {
      setEnviado(true);
    }
    dados.code ? setError(dados.message) : null;
  }

  React.useEffect(() => {
    const intervalo = setInterval(() => {
      setError(null);
      clearInterval(intervalo);
    }, 4000);
  }, []);

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          zIndex: 10,
          left: '0',
          top: '0',
          bgcolor: '#cccccc99',
          width: '110%',
          height: '100vh',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            display: 'grid',
            placeItems: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <Box
            ref={modalRef}
            sx={{
              borderRadius: '12px',
              bgcolor: '#ffff',
              width: '400px',
              height: '400px',
              p: 5,
            }}
          >
            <TextField
              fullWidth
              required
              id="Titulo"
              onChange={(event) => setTitulo(event.target.value)}
              label="Titulo"
              placeholder="adicine um titulo"
            />

            <TextField
              onChange={(event) => setDescricao(event.target.value)}
              sx={{ my: 4 }}
              fullWidth
              required
              id="Descricao"
              label="Descrição"
              placeholder="Descrição"
            />
            <TextField
              type="file"
              onChange={(event) => setImg(event)}
              fullWidth
              required
            />
            <ButtonEnviar error={error} postarBlog={postarBlog} />
          </Box>
          {(error || enviado) && <Loading error={error} enviado={enviado} />}
        </Box>
      </Box>
    </>
  );
};

export default ModalPost;
