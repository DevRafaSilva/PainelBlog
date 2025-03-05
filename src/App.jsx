import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './Global.css';
import Post from './Pages/PostagensCMS/Post';
import MenuLateral from './Componentes/MenuLateral';
import Topicos from './Pages/Topicos/Topicos';
import PostarConteudo from './Pages/PostarConteudo/PostarConteudo';
import Login from './Pages/Login';
import GraficoBarra from './Componentes/Graficos/GraficoBarra';

function App() {
  return (
    <>
      <BrowserRouter>
        <MenuLateral />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/post" element={<Post />} />
          <Route path="/topicos" element={<Topicos />} />
          <Route path="/postar" element={<PostarConteudo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
