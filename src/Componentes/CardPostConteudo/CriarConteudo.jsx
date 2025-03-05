import React from 'react';
import ImageIcon from '@mui/icons-material/Image';
import { Box } from '@mui/material';
import ButtonComponent from '../Button/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ModalPost from '../ModalPost/ModalPost';

const CriarConteudo = () => {
  const [index, setIndex] = React.useState(0);
  const [modal, setModal] = React.useState(false);
  const [conteudo, setConteudo] = React.useState([]);
  const [titulo, setTitulo] = React.useState([]);

  const handleConteudoChange = (index, value) => {
    const novoConteudo = [...conteudo];
    novoConteudo[index] = value;
    setConteudo(novoConteudo);
  };

  const handleTituloChange = (index, value) => {
    const novoTitulo = [...titulo];
    novoTitulo[index] = value;
    setTitulo(novoTitulo);
  };

  function adicionar() {
    setIndex(index + 1);
    setConteudo([...conteudo, '']);
    setTitulo([...titulo, '']);
  }

  return (
    <>
      {modal && (
        <ModalPost setModal={setModal} dadosPost={{ titulo, conteudo }} />
      )}
      <div style={{ display: 'flex', flexDirection: 'column-reverse' }}>
        <Box
          sx={{
            px: 7,
            py: 4,
            mt: 4,
            maxWidth: '900px',
            width: '100%',
            mx: 'auto',
            bgcolor: '#e3f2fd',
            border: '2px dashed #1565c0',
            height: '200px',
            borderRadius: '10px !important',
          }}
        >
          <Box
            component="div"
            sx={{
              display: 'flex',
              alignItem: 'center',
              gap: 3,
              p: 2,
              justifyContent: 'center',
              placeItems: 'center',
              height: '130px',
              mb: 10,
            }}
          >
            <Box
              component="div"
              sx={{
                cursor: 'pointer',
                p: 2,
                height: 'fit-content',
                border: '1px solid #1976D2',
                color: '#1976D2',
                borderRadius: '10px !important',
              }}
            >
              <AddBoxIcon onClick={adicionar} />
            </Box>
          </Box>
        </Box>
      </div>

      {titulo.map((tituloItem, index) => (
        <div key={index}>
          <input
            style={{ marginTop: '20px' }}
            type="text"
            value={tituloItem}
            onChange={(e) => handleTituloChange(index, e.target.value)}
            placeholder="Título"
          />
          <textarea
            value={conteudo[index] || ''}
            onChange={(e) => handleConteudoChange(index, e.target.value)}
            placeholder="Conteúdo"
          />
        </div>
      ))}
      <ButtonComponent setModal={setModal} modal={modal} />
    </>
  );
};

export default CriarConteudo;
