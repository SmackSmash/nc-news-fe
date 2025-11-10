import { useState, useEffect } from 'react';
import Button from '../Button/Button';
import './SideBar.css';

const SideBar = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('https://northcoders-news-be-f4oe.onrender.com/api/topics');
        const data = await response.json();
        setTopics(data.topics);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <aside id='sideBar'>
      {topics.map(topic => (
        <div key={topic.slug}>{topic.slug}</div>
      ))}
      <Button>+ Add Topic</Button>
    </aside>
  );
};

export default SideBar;
