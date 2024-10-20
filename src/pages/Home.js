// src/pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    // Replace this with fetched data (videos)
    const videos = [
      
    ];
  
    return (
      <div>
        <h1>Home Page</h1>
        <div>
          {videos.map(video => (
            <Link key={video.id} to={`/video/${video.id}`}>
              <div>{video.title}</div>
            </Link>
          ))}
        </div>
      </div>
    );
  };
  
  export default Home;