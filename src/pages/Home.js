// src/pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';

const Home = () => {
    // Replace this with fetched data (videos)
    const videos = [
        // dynamically fill and then display on homepage
      
    ];
  
    return (
      <div>
        <h1>Home Page</h1>
        <h2>Community Videos</h2>
        <VideoPlayer />

        {/* horizontal list of videos, 4x2 */}

        
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