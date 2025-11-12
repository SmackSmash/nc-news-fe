import { Routes, Route } from 'react-router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SideBar from './components/SideBar/SideBar';
import ArticleList from './components/ArticleList/ArticleList';
import Article from './components/Article/Article';
import UserList from './components/UserList/UserList';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main className='container'>
        <Routes>
          <Route path='/' element={<ArticleList />} />
          <Route path='/article/:articleId' element={<Article />} />
          <Route path='/users' element={<UserList />} />
        </Routes>
        <SideBar />
      </main>
      <Footer />
    </>
  );
}

export default App;
