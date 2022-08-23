import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { useDispatch, useSelector } from "react-redux";
import { reqUser } from "../Redux/Authentication/Action";
import { useNavigate } from "react-router-dom";
import AddPost from "../Components/AddPost";
import { Button } from "@mui/material";
import { getallpost, newpost } from "../Redux/Post/Action";

const HomePage = () => {
  const dispatch = useDispatch();
  const userid = localStorage.getItem("userid");
  const navigate = useNavigate();
  const store = useSelector((store) => store);
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState(null);
  const [isVisible, setIsVisible] = useState();

  console.log("store home", posts);

  useEffect(() => {
    if (userid) dispatch(reqUser(userid));
    else navigate("/signup");
    console.log(store);
  }, [userid]);

  useEffect(() => {
    dispatch(getallpost());
  }, [store.post.post]);

  useEffect(() => {
    setPosts(store.post.posts);
  }, [store.post]);

  const handleSubmit = () => {
    console.log(content);
    dispatch(newpost(content));
  };
  return (
    <div className="main">
      {store.auth.reqUser && (
        <div className="navbar">
          <div>
            <p>MasaiBook</p>
          </div>
          <div className="userDetail">
            <img
              src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652__340.png"
              alt=""
            />
            <p>{store.auth.reqUser.name}</p>
          </div>
        </div>
      )}

      <div className="content">
        <div className="addPost">
          <div>
            <p onClick={() => setIsVisible(true)} className="gifButton">
              GIF
            </p>
          </div>

          <div className="inputDiv">
            <input
              className="postinput"
              onChange={(e) => setContent(e.target.value)}
              type="text"
              placeholder="write your message..."
            />
            <div className="gifBox"></div>
          </div>

          <div>
            <Button onClick={handleSubmit} variant="contained">
              Post
            </Button>
          </div>
        </div>

        <hr />

        <div className="allpost">
          {posts &&
            posts.map((item) => (
              <div className="postCard">
                <p>{item.content}</p>
                <img
                  src="https://cdn.pixabay.com/photo/2017/07/10/23/45/cubes-2492010__340.jpg"
                  width={400}
                  height={250}
                  alt=""
                />
              </div>
            ))}
        </div>

        <div className={`${isVisible ? "gifvisible" : "gifnone"} gifDiv`}>
          <input type="text" placeholder="search" onChange={() => {}} />

      <div>
       
            <img
              src="https://cdn.pixabay.com/photo/2020/02/03/00/12/fiber-4814456__340.jpg"
              alt=""
              width={400}
              height={250}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

//https://api.giphy.com/v1/gifs/search?api_key=kvsah4vEScW2FikzeethaaCr7T5imVVW&q=angry
