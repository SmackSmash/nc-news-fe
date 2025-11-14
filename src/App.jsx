import { Routes, Route } from 'react-router';
import useQuery from './hooks/useQuery';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SideBar from './components/SideBar/SideBar';
import ArticleList from './components/ArticleList/ArticleList';
import TopicList from './components/TopicList/TopicList';
import Article from './components/Article/Article';
import UserList from './components/UserList/UserList';
import './App.css';

function App() {
  const { error, isLoading, data: topicData } = useQuery('https://northcoders-news-be-f4oe.onrender.com/api/topics');

  return (
    <>
      <Header topicData={topicData} />
      <main className='container'>
        <Routes>
          <Route path='/' element={<ArticleList />} />
          <Route path='/article/:articleId' element={<Article />} />
          <Route path='/topic/:topicSlug' element={<TopicList />} />
          <Route path='/users' element={<UserList />} />
        </Routes>
        <SideBar error={error} isLoading={isLoading} data={topicData} />
      </main>
      <Footer />
    </>
  );
}

export default App;
