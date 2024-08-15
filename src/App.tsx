import './App.css';
import { ToastContainer } from 'react-toastify';

import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Home from './pages/Home/Home';
import { AuthProvider } from './contexts/AuthContext';
import ListaTemas from './components/Temas/ListaTemas/ListaTemas';
import FormularioTema from './components/Temas/FormularioTema/FormularioTema';
import DeletarTema from './components/Temas/DeletarTema/DeletarTema';
import ListaPostagens from './components/Postagens/ListaPostagens/ListaPostagens';
import FormularioPostagem from './components/Postagens/FormularioPostagem/FormularioPostagem'
import DeletarPostagem from './components/Postagens/DeletarPostagem/DeletarPostagem';
import Perfil from './pages/Perfil/Perfil';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
    <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
              <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
    </>
  );
}
export default App;