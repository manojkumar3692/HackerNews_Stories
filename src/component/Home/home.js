// Used Functional Based Approach Here 

import React,{useEffect, useState} from "react";
import { Link, withRouter, useHistory  } from "react-router-dom"; 
import './home.scss'

function HackerNewsPosts({ data }) {
    let history = useHistory();
  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home">
      <h1>HackerNews Top 10 Posts</h1>
      <div className="home__container">
      {
      data.map(story => (
          <div onClick={() => history.push({
            pathname: '/comments',
            state: { comment_list: [...story.kids] }
             })} key={story.id} className="home__box">  
             <h2>Story Name: </h2>
            <h1>{story.title}</h1>
          </div>
        ))
        }
      </div>
    </div>
  );
}

function HomeComponent() {
  const [story, setStories] = useState([]);

  useEffect(() => {
    async function getTopStories() {
      const url = "https://hacker-news.firebaseio.com/v0/topstories.json";
      try {
        const response = await fetch(url);
        if (response.ok === false) {
          throw new Error("Response Error:" + response.text);
        }
        const json = await response.json();
        const stories = json
          .slice(0, 10)
          .map(id =>
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
              response => response.json()
            )
          );
        const result = await Promise.all(stories);
        console.log('asd', result)
        setStories(result);
      } catch (err) {
        console.error(err);
      }
    }
    getTopStories();
  }, []);

  return (
    <div className="App">
      <HackerNewsPosts data={story} />
    </div>
  );
}

export default withRouter(HomeComponent)
