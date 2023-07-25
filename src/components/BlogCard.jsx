import React, { useState } from 'react';
import ig from '../assets/images/insta.png';

// import ThumbUpIcon from '@mui/icons-material/ThumbUp';
// import ThumbDownIcon from '@mui/icons-material/ThumbDown';
// import ThumbUpIcon2 from '@mui/icons-material/ThumbUpAltOutlined';
// import ThumbDownIcon2 from '@mui/icons-material/ThumbDownOutlined';



import '../assets/css/BlogCard.css';

const BlogCard = ({ title, date, instagramLink, content }) => {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [clicked_l, setClicked_l] = useState(false);
    const [clicked_d, setClicked_d] = useState(false);

    const handleLike = () => {
      setLikes(likes + 1);
      setClicked_l(true);
    };
  
    const handleDislike = () => {
      setDislikes(dislikes + 1);
      setClicked_d(true);
    };
  
    return (
      <div className="blog">

        <div className="blog-topLeft">
        <h2 className="blog-heading">{title}</h2>
        <p className="blog-date"><span className="blog-bold">Posted:</span> {date}</p>
        </div>

        <div className="blog-topRight">
        <a href={instagramLink} target="_blank" rel="noopener noreferrer">
            <img className="blog-insta" src={ig} alt="Instagram" />
        </a>
        </div>
      
        <div className="blog-card">
          <div className="blog-content">
            <p className="blog-para">{content}</p>
          </div>
        </div>

        <div className="blog-like-dislike">

          <div className="blog-bottom">
            <button className="blog-button" onClick={handleLike} disabled={clicked_l}>
              {clicked_l ? <ThumbUpIcon className="blog-l" /> : <ThumbUpIcon2 />}
            </button>
            <span>{likes}</span>
          </div>

          <div className="blog-bottom">
            <button className="blog-button" onClick={handleDislike} disabled={clicked_d}>
              {clicked_d ? <ThumbDownIcon className="blog-d" /> : <ThumbDownIcon2 />}
            </button>
            <span>{dislikes}</span>
          </div>
          
          </div>
      </div>
    );
  };


export default BlogCard;

// Blog Card