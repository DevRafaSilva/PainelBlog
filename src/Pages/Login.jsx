import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [error, setError] = React.useState('');
  const navigate = useNavigate();
  async function login() {
    const response = await fetch(
      'https://joebio.xyz/wp-json/jwt-auth/v1/token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: email,
          password: senha,
        }),
      },
    );
    const dados = await response.json();
    if (dados.token) {
      navigate('postar');
    } else {
      setError(dados.code);
    }
    window.localStorage.setItem('token', dados.token);
    console.log(dados);
    validarToken();
  }

  async function validarToken() {
    const response = await fetch(
      'https://joebio.xyz/wp-json/jwt-auth/v1/token/validate',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + window.localStorage.getItem('token'),
        },
      },
    );
    const dados = await response.json();
    console.log(dados);
  }

  return (
    <>
      <Box
        sx={{
          gridColumn: '1 / -1',
          maxWidth: '400px',
          mx: 'auto',
          p: '10px 20px',
          height: '90vh',
          width: '100%',
          display: 'grid',
          alignItems: 'center',
        }}
        component="form"
      >
        <div>
          <Box sx={{ position: 'relative', mb: 4 }} component="div">
            <TextField
              fullWidth
              required
              value={email}
              id="outlined-required"
              label="Email"
              placeholder="Email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <div style={{ position: 'absolute', right: '20px', top: '15px' }}>
              <EmailIcon />
            </div>
          </Box>
          <Box sx={{ position: 'relative' }} component="div">
            <TextField
              fullWidth
              required
              value={senha}
              onChange={(event) => {
                setSenha(event.target.value);
              }}
              id="outlined-required"
              label="Senha"
              placeholder="Senha"
            />
            <div style={{ position: 'absolute', right: '20px', top: '15px' }}>
              <PasswordIcon />
            </div>
          </Box>
          {error && <p style={{ marginTop: '20px', color: 'red' }}>{error}</p>}
          <Button
            onClick={login}
            sx={{ mt: 3, display: 'block', ml: 'auto', bgcolor: '#ffa000' }}
            variant="contained"
          >
            ENTRAR
          </Button>
        </div>
      </Box>
    </>
  );
};

export default Login;
