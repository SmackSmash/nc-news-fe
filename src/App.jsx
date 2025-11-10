import { Routes, Route } from 'react-router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ArticleList from './components/ArticleList/ArticleList';
import SideBar from './components/SideBar/SideBar';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main className='container'>
        <Routes>
          <Route path='/' element={<ArticleList />} />
        </Routes>
        <SideBar />
      </main>
      <Footer />
    </>
  );
}

export default App;
