import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import { useDispatch, useSelector } from "react-redux";

import { TextareaAutosize } from "@mui/material";
import "./AddPost.css"
const AddPost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
 const store = useSelector((store) => store);


  const [post, setPost] = useState({
    content: "",
  });

  //redirect home page if login
  useEffect(() => {}, []);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setPost((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("data", post);
  };
  return (
    <div className="post">
      <div className="addPost">
       
          <div className="">
            <TextareaAutosize
              aria-label="minimum height"
              minRows={3}
              placeholder="Minimum 3 rows"
              style={{ width: 200 }}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <input className="submitButton" type="submit" value={"Post"} />
          </div>
      
      </div>
    </div>
  );
};

export default AddPost;
