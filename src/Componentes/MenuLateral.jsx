import { Box } from '@mui/material';
import React from 'react';
import TimelineIcon from '@mui/icons-material/Timeline';
import PublicIcon from '@mui/icons-material/Public';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink, useNavigate } from 'react-router-dom';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
const MenuLateral = () => {
  const navigate = useNavigate();
  const windowStorgae = window.localStorage.getItem('token');
  React.useEffect(() => {
    if (
      window.localStorage.getItem('token') == 'null' ||
      (window.localStorage.getItem('token') == null &&
        window.location.pathname !== '/')
    ) {
      navigate('/');
    }
  }, [navigate, windowStorgae]);

  function logout() {
    window.localStorage.removeItem('token');
    navigate('/');
  }

  return (
    <>
      {window.location.pathname !== '/' && (
        <Box
          sx={{
            bgcolor: '#fff',
            boxShadow: '1px 1px 4px 1px #33333319',
            height: window.innerHeight / 16 + 'rem',
            width: '250px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
          component="header"
        >
          <Box>
            <Box component="h1" sx={{ px: 2, py: 3 }}>
              Logo
            </Box>
            <nav style={{ marginTop: '26px', padding: '0px 12px' }}>
              <ul>
                <Box component="li">
                  <NavLink to="post" end>
                    <TimelineIcon />
                    GRÁFICOS
                  </NavLink>
                </Box>
                <Box component="li">
                  <NavLink to="topicos">
                    <PublicIcon />
                    POSTAGENS
                  </NavLink>
                </Box>
                <Box component="li">
                  <NavLink to="postar">
                    <LibraryAddIcon />
                    POSTAR NO BLOG
                  </NavLink>
                </Box>
              </ul>
            </nav>
          </Box>
          <Box
            onClick={logout}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              p: 2,
              cursor: 'pointer',
            }}
          >
            <LogoutIcon />
            SAIR
          </Box>
        </Box>
      )}
    </>
  );
};

export default MenuLateral;
