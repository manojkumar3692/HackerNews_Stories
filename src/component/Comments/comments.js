// Used Functional Based Approach Here 

import React,{useEffect, useState} from "react";
import { Link, withRouter, useHistory  } from "react-router-dom"; 


function Comments(props) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function getTopComments() {
        const { comment_list } = await props.history.location.state
        const stories = comment_list &&  comment_list
          .map(id =>
              fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
              response => response.json()
            )
          );
        const result = await Promise.all(stories);
        setComments(result);
    }
    getTopComments();
  }, []);

  return (
    <div className="home">
    <h1> Top Comments</h1>
    <div className="home__container">
     {
       comments.length === 0 && <div>Loading. ....</div>
     } 
    {
    comments.length !==0  && comments.map(story => (
        <div key={story.id} className="home__box">  
          <h1>{story.text}</h1>
        </div>
      ))
      }
    </div>
  </div>
  );
}

export default withRouter(Comments)
